#!/bin/bash

readonly USER="intimitr"
# We use this host because it should always point to StableHost even if we move some environments elsewhere
readonly SSH_HOST="cpanel.intimitrons.ca"

readonly DEPLOY_SOURCE_DIRECTORY="${GITHUB_WORKSPACE}/www"

readonly DEPLOY_WORKSPACE="/deploy-stablehost"
readonly SSH_IDENTITY_PATH="${DEPLOY_WORKSPACE}/key"

readonly REMOTE_WWW_ROOT="/home/${USER}/www_root"
readonly REMOTE_ACTIVE_WWW_ROOT_DIR="${REMOTE_WWW_ROOT}/active"
readonly REMOTE_DEPLOY_DATA_DIR="${REMOTE_WWW_ROOT}/deploy/data"
readonly REMOTE_DEPLOY_LOCK_DIR="${REMOTE_WWW_ROOT}/deploy/lock"

readonly SSH_OPTS="-T -o StrictHostKeyChecking=no -o ServerAliveInterval=60 -i ${SSH_IDENTITY_PATH}"

validate_environment () {
  case ${ENVIRONMENT} in
    staging|production)
      ;;
    *)
      echo "::error ::Invalid environment: ${ENVIRONMENT}"
      exit 1
      ;;
  esac
}

write_and_validate_ssh_private_key () {
  echo "${1}" > ${SSH_IDENTITY_PATH}
  chmod 400 ${SSH_IDENTITY_PATH}

  openssl rsa -inform PEM -in ${SSH_IDENTITY_PATH} -check -noout > /dev/null
  if [ $? -ne 0 ]; then
    echo "::error ::Invalid SSH key"
    exit 1
  fi
}

get_build_identifier () {
  pushd ${GITHUB_WORKSPACE} > /dev/null
  
  local sha
  sha=$(git rev-parse HEAD)
    if [ $? -ne 0 ]; then
    echo "::error ::Failed to get Build ID"
    exit 1
  fi

  popd > /dev/null
  echo "${sha}-${ENVIRONMENT}"
}

remote_command () {
  ssh ${SSH_OPTS} ${USER}@${SSH_HOST} "${1}"
}

acquire_deployment_lock () {
  echo "Acquiring deployment lock for environment ${ENVIRONMENT}"

  local cmd
  cmd=" \
    flock -xn ${REMOTE_DEPLOY_LOCK_DIR}/${ENVIRONMENT} -c \" \
      if [ -s ${REMOTE_DEPLOY_LOCK_DIR}/${ENVIRONMENT} ]; then \
        echo -n \\\"${ENVIRONMENT} is locked by \\\"; \
        cat ${REMOTE_DEPLOY_LOCK_DIR}/${ENVIRONMENT}; \
        exit 1; \
      else \
        echo \\\"${BUILD_ID}\\\" > ${REMOTE_DEPLOY_LOCK_DIR}/${ENVIRONMENT}; \
      fi\" \
  "
  
  remote_command "${cmd}"
  if [ $? -ne 0 ]; then
    echo "::error ::Failed to acquire deployment lock for environment ${ENVIRONMENT}"
    exit 1
  fi

  echo "Successfully locked environment ${ENVIRONMENT}"
}

release_deployment_lock () {
  echo "Releasing deployment lock for environment ${ENVIRONMENT}"

  local cmd
  cmd="flock -x -w 30 ${REMOTE_DEPLOY_LOCK_DIR}/${ENVIRONMENT} -c \"rm ${REMOTE_DEPLOY_LOCK_DIR}/${ENVIRONMENT}\""
  
  remote_command "${cmd}"
  if [ $? -ne 0 ]; then
    echo "::error ::Failed to release deployment lock for environment ${ENVIRONMENT}"
    exit 1
  fi

  echo "Successfully unlocked environment ${ENVIRONMENT}"
}

get_remote_active_www_root () {
  local cmd
  cmd=" \
    if [ -h ${REMOTE_ACTIVE_WWW_ROOT_DIR}/${ENVIRONMENT} ]; then \
      readlink -e ${REMOTE_ACTIVE_WWW_ROOT_DIR}/${ENVIRONMENT} || echo \"ERR_INVALID_LINK_TARGET\"; \
    elif [ -e ${REMOTE_ACTIVE_WWW_ROOT_DIR}/${ENVIRONMENT} ]; then \
      echo \"ERR_NOT_LINK\"; \
    else \
      echo \"OK_NO_LINK_EXISTS\"; \
    fi"

  local active_root
  active_root=$(remote_command "${cmd}")
  if [ $? -ne 0 ]; then
    echo "::error ::Failed to determine active root for environment ${ENVIRONMENT}"
    exit 1
  fi

  echo "${active_root}"
}

ensure_not_already_deployed () {
  echo "Ensuring ${REMOTE_NEW_WWW_ROOT} does not already exist"

  remote_command "if [ -e ${REMOTE_NEW_WWW_ROOT} ]; then exit 1; fi"
  if [ $? -ne 0 ]; then
    echo "::error ::Unable to deploy. ${REMOTE_NEW_WWW_ROOT} already exists."
    exit 1
  fi
}

write_version_json () {
  echo "Writing version.json file"

  if [ -e ${DEPLOY_SOURCE_DIRECTORY}/version.json ]; then
    echo "::error ::Unable to write version.json because it already exists"
    exit 1
  fi

  echo "{\"build_id\":\"${BUILD_ID}\"}" > ${DEPLOY_SOURCE_DIRECTORY}/version.json
  if [ $? -ne 0 ]; then
    echo "::error ::Failed to write version.json"
    exit 1
  fi
}

upload_www () {
  echo "SCPing root to ${USER}@${SSH_HOST}:${REMOTE_NEW_WWW_ROOT}"

  scp ${SSH_OPTS} -r ${DEPLOY_SOURCE_DIRECTORY} ${USER}@${SSH_HOST}:${REMOTE_NEW_WWW_ROOT}
  if [ $? -ne 0 ]; then
    echo "::error ::Failed to SCP root files"
    exit 1
  fi

  echo "Setting file mode for uploaded files"
  remote_command "find ${REMOTE_NEW_WWW_ROOT} -type d -print0 | xargs -0 chmod 775 && find ${REMOTE_NEW_WWW_ROOT} -type f -print0 | xargs -0 chmod 664"
  if [ $? -ne 0 ]; then
    echo "::error ::Failed to set file mode for uploaded files"
    exit 1
  fi
}

cutover () {
  case ${REMOTE_OLD_WWW_ROOT} in
    ERR_NOT_LINK)
      echo "::error ::Expected ${REMOTE_ACTIVE_WWW_ROOT_DIR}/${ENVIRONMENT} to be a link. Will not cutover."
      # We do not want to delete data which we did not deploy after cutting over or disturb an active site by cutting away
      exit 1
      ;;
    OK_NO_LINK_EXISTS)
      echo "No active root for environment ${ENVIRONMENT} found, cutting over to ${REMOTE_NEW_WWW_ROOT}"
      ;;
    ERR_INVALID_LINK_TARGET)
      echo "::warning ::Active root for environment ${ENVIRONMENT} has invalid target, cutting over to ${REMOTE_NEW_WWW_ROOT}"
      ;;
    *)
      # On StableHost, there aren't trailing slashes on the directories but testing ls locally there was, so allow either but check
      # line start/end to make sure it's a full match (i.e. we can't rely on the trailing slash to mark the end of the directory name so must use end of line)
      echo ${REMOTE_OLD_WWW_ROOT} | grep -P "^${REMOTE_DEPLOY_DATA_DIR}/[a-f|\d]{40}-${ENVIRONMENT}/?$" > /dev/null
      if [ $? -ne 0 ]; then
        echo "::error ::Active root for environment ${ENVIRONMENT} has an unmanaged target ${REMOTE_OLD_WWW_ROOT}. Will not cutover."
        # We do not want to delete other data which we did not deploy after cutting over
        exit 1
      fi

      echo "Cutting over from ${REMOTE_OLD_WWW_ROOT} to ${REMOTE_NEW_WWW_ROOT}"
      ;;
  esac

  # for ln, -f and -T allow overwriting an old link in case of a failed deploy, or a non-link in case of other issues
  # for mv, -T treats the active link as a file rather than moving the deploy link into the old directory
  remote_command "ln -sfT ${REMOTE_NEW_WWW_ROOT} ${REMOTE_ACTIVE_WWW_ROOT_DIR}/${ENVIRONMENT}-deploy && mv -T ${REMOTE_ACTIVE_WWW_ROOT_DIR}/${ENVIRONMENT}-deploy ${REMOTE_ACTIVE_WWW_ROOT_DIR}/${ENVIRONMENT}"
  if [ $? -ne 0 ]; then
    echo "::error ::Failed to cutover"
    exit 1
  fi
}

remove_previous_www () {
  case ${REMOTE_OLD_WWW_ROOT} in
    OK_NO_LINK_EXISTS|ERR_NOT_LINK|ERR_INVALID_LINK_TARGET)
      echo "No previous root to remove (${REMOTE_OLD_WWW_ROOT})"
      ;;
    *)
      echo "Removing old root ${REMOTE_OLD_WWW_ROOT}"
      remote_command "rm -rf ${REMOTE_OLD_WWW_ROOT}"
      if [ $? -ne 0 ]; then
        echo "::warning ::Failed to remove previous root"
      fi
      ;;
  esac
}

cleanup_stale_www () {
  echo "Checking for stale roots for environment ${ENVIRONMENT}"
  
  # On StableHost, there aren't trailing slashes on the directories but testing ls locally there was, so allow either but check
  # line start/end to make sure it's a full match (i.e. we can't rely on the trailing slash to mark the end of the directory name so must use end of line)
  #
  # echo is used here to identify no stale roots because when echoing into wc to count echo will add a newline and then the count is one when there
  # are zero stale roots. While echo has -n, this causes the count to be zero if there is one stale root because there is no newline for wc to count (and so on, off by one).
  local cmd
  cmd="ls -1 ${REMOTE_DEPLOY_DATA_DIR} | grep -P \"^[a-f|\d]{40}-${ENVIRONMENT}/?$\" | grep -v -P \"^${BUILD_ID}/?$\" || echo \"OK_NO_STALE_ROOTS\" | sort"
  local stale_roots
  stale_roots=$(remote_command "${cmd}")
  if [ $? -ne 0 ]; then
    echo "::warning ::Failed to check for stale root(s) for environment ${ENVIRONMENT}. Skipping cleanup of stale root(s)."
    return
  fi

  case ${stale_roots} in
    OK_NO_STALE_ROOTS)
      echo "No stale roots found."
      ;;
    *)
      local count
      count=$(echo "${stale_roots}" | wc -l)

      echo "Found ${count} stale root(s) for environment ${ENVIRONMENT}"
      if [ ${count} -gt 0 ]; then
        echo "${stale_roots}"

        echo "Removing stale root(s) for environment ${ENVIRONMENT}"
        local rm_args
        rm_args=$(echo "${stale_roots}" | tr "\n" " ")
        local rm_cmd
        rm_cmd="cd ${REMOTE_DEPLOY_DATA_DIR} && rm -rf ${rm_args}"

        remote_command "${rm_cmd}"
        if [ $? -ne 0 ]; then
          echo "::warning ::Failed to remove stale root(s)"
        fi
      fi 
      ;;
  esac 
}

if [[ $# -ne 2 ]]; then
    echo "Usage: deploy.sh environment ssh_private_key"
    echo
    echo "      environment: ['staging', 'production']"
    echo "  ssh_private_key: Content of RSA private key file"
    exit 1
fi

readonly ENVIRONMENT=$1
validate_environment
write_and_validate_ssh_private_key "${2}"

readonly BUILD_ID="$(get_build_identifier)"
echo "Deploying ${BUILD_ID} to ${ENVIRONMENT}"

acquire_deployment_lock

readonly REMOTE_NEW_WWW_ROOT="${REMOTE_DEPLOY_DATA_DIR}/${BUILD_ID}"
ensure_not_already_deployed
write_version_json
upload_www

readonly REMOTE_OLD_WWW_ROOT="$(get_remote_active_www_root)"
cutover
remove_previous_www
cleanup_stale_www

release_deployment_lock