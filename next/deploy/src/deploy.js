const chalk = require('chalk')
const path = require('path')

const local = require('./local.js')
const s3 = require('./s3.js')

const DeployActionType = Object.freeze({
  Delete: 'delete',
  Upload: 'upload',
})

function filePathToS3ObjectKey(filePath) {
  if (path.sep === path.win32.sep) {
    return path.posix.join(...filePath.split(path.win32.sep))
  }

  return filePath
}

function s3ObjectKeyToFilePath(objectKey) {
  if (path.sep === path.win32.sep) {
    return path.win32.join(...objectKey.split(path.posix.sep))
  }

  return objectKey
}

function isDeployableFilePath(filePath) {
  const p = path.parse(filePath)

  if (p.base.endsWith('.js.map')) {
    return false
  }
  if (p.dir === '' && p.base === 'chunk-map.json') {
    return false
  }
  if (p.dir === '' && p.base === 'webpack.stats.json') {
    return false
  }

  return true
}

function isObjectKeyForVersionJSON(key) {
  return key === filePathToS3ObjectKey(local.versionJSONPath)
}

function isObjectKeyForStaticAsset(key) {
  if (path.posix.extname(key) === '.html') {
    return false
  }
  if (key.startsWith(`page-data${path.posix.sep}`)) {
    return false
  }

  return true
}

/**
 * Perform pre-deployment tasks
 *
 * @param {object} options Deployment options
 */
async function prepareToDeploy(options) {
  if (options.verbose) {
    console.log('Writing version.json...')
  }

  const sha1 = await local.getGitHeadSHA1()
  await local.writeVersionJSON({ sha1 })
}

/**
 * Plan a deployment
 *
 * @param {object} options Deployment options
 * @returns {Promise<object>} Deployment plan
 */
async function planDeploy(options) {
  const s3ObjectKeys = await s3.listObjects(options.bucketName)

  const buildFilePaths = await local.listBuildOutputFilePaths()
  const deployableFilePaths = buildFilePaths.filter(isDeployableFilePath)
  const buildObjectKeys = deployableFilePaths.map(filePathToS3ObjectKey)

  // We always upload every file to ensure objects are never missing from the bucket.
  // It's possible an object was deleted but is still returned when listing objects.
  // https://docs.aws.amazon.com/AmazonS3/latest/dev/Introduction.html#ConsistencyModel
  const uploadStaticAssetsAction = {
    type: DeployActionType.Upload,
    description: 'Upload static assets',
    data: {
      keys: buildObjectKeys.filter(
        (key) =>
          !isObjectKeyForVersionJSON(key) && isObjectKeyForStaticAsset(key)
      ),
      cachePolicy: s3.CachingPolicy.CacheForever,
    },
  }

  const uploadPagesAndDataAction = {
    type: DeployActionType.Upload,
    description: 'Upload HTML and data files',
    data: {
      keys: buildObjectKeys.filter(
        (key) =>
          !(isObjectKeyForVersionJSON(key) || isObjectKeyForStaticAsset(key))
      ),
      cachePolicy: s3.CachingPolicy.CacheAndRequireValidation,
    },
  }

  const uploadVersionJSONAction = {
    type: DeployActionType.Upload,
    description: 'Upload version.json',
    data: {
      keys: buildObjectKeys.filter((key) => isObjectKeyForVersionJSON(key)),
      cachePolicy: s3.CachingPolicy.CacheAndRequireValidation,
    },
  }

  const deleteAction = {
    type: DeployActionType.Delete,
    description: 'Delete old files',
    data: {
      keys: s3ObjectKeys.filter((p) => !buildObjectKeys.includes(p)),
    },
  }

  return {
    options,
    actions: [
      uploadStaticAssetsAction,
      uploadPagesAndDataAction,
      uploadVersionJSONAction,
      deleteAction,
    ].filter((action) => action.data.keys.length !== 0),
  }
}

/**
 * Show a deployment plan
 *
 * @param {object} plan Deployment plan
 */
function showPlan(plan) {
  const verbose = plan.options.verbose

  if (verbose) {
    console.group(chalk.bold('Options'))
    for (const [k, v] of Object.entries(plan.options)) {
      console.log(`${k}: ${v}`)
    }
    console.groupEnd()
    console.log()
  }

  console.log(chalk.bold('Actions'))
  plan.actions.forEach((action, idx) => {
    console.group(`${idx + 1}. ${action.description}`)

    if (verbose) {
      action.data.keys.forEach((key) =>
        console.log(chalk.dim(`${action.type} ${key}`))
      )
    } else {
      console.log(
        chalk.dim(`${action.type} ${action.data.keys.length} file(s)`)
      )
    }

    console.groupEnd()
    console.log()
  })
}

async function executeDeleteAction(options, action) {
  await s3.deleteObjects(options.bucketName, action.data.keys)

  if (options.verbose) {
    action.data.keys.forEach((key) => console.log(chalk.dim(`Deleted ${key}`)))
  }
}

async function executeUploadAction(options, action) {
  await Promise.all(
    action.data.keys.map(async (key) => {
      await s3.uploadObject(
        options.bucketName,
        key,
        action.data.cachePolicy,
        local.readBuildOutputFile(s3ObjectKeyToFilePath(key))
      )

      if (options.verbose) {
        console.log(chalk.dim(`Uploaded ${key}`))
      }
    })
  )
}

async function executeAction(options, action, idx) {
  let fn
  switch (action.type) {
    case DeployActionType.Delete:
      fn = executeDeleteAction
      break
    case DeployActionType.Upload:
      fn = executeUploadAction
      break
    default:
      throw new Error(`Unhandled action type ${action.type}`)
  }

  console.log()
  console.log(chalk.bold(`${idx + 1}. ${action.description}`))

  await fn(options, action)

  if (options.verbose) {
    console.log(`Finished action - ${action.description}`)
  } else {
    console.log('Finished')
  }
}

/**
 * Execute a deployment
 *
 * @param {object} plan Deployment plan
 */
async function executeDeploy(plan) {
  await plan.actions.reduce((prevAction, action, idx) => {
    return prevAction.then(() => executeAction(plan.options, action, idx))
  }, Promise.resolve())
}

module.exports = {
  executeDeploy,
  planDeploy,
  prepareToDeploy,
  showPlan,
}
