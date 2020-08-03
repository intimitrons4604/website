const chalk = require('chalk')
const isCI = require('is-ci')
const os = require('os')
const { v4: uuidv4 } = require('uuid')

const { deleteLock, getLock, putLock } = require('./dynamo-db.js')

const deployLockId = 'deploy'

/**
 * Generate a lock instance ID.
 *
 * The ID must be used to acquire and release a lock.
 *
 * @returns {string} Lock Instance ID
 */
function generateLockInstanceId() {
  return uuidv4()
}

function generateLockInfo() {
  const hostname = os.hostname()
  const hostTime = new Date().toISOString()

  let username = null
  try {
    ;({ username } = os.userInfo())
  } catch (e) {
    // Throws a SystemError if a user has no username or homedir
    // Non-critical because the lock info is only for human diagnostics
  }

  const gitHubInfo = {}
  if (process.env.GITHUB_ACTIONS) {
    gitHubInfo.gitHubAction = {
      workflowName: process.env.GITHUB_WORKFLOW,
      actionId: process.env.GITHUB_ACTION,
      runId: process.env.GITHUB_RUN_ID,
      runNumber: process.env.GITHUB_RUN_NUMBER,
    }
  }

  return {
    isCI,
    username,
    hostname,
    hostTime,
    ...gitHubInfo,
  }
}

/**
 * Lock an environment for deployment
 *
 * @param {object} options Deployment options
 * @param {string} instanceId ID unique to this lock acquisition. The same ID must be used to release the lock if it is acquired.
 * @returns {Promise<boolean>} True if the lock was acquired, false if the lock is already held
 */
function lock(options, instanceId) {
  if (options.verbose) {
    console.log(
      chalk.dim(
        `Acquiring lock... id: '${deployLockId}' instanceId: '${instanceId}'`
      )
    )
  }

  return putLock(
    options.lockTableName,
    deployLockId,
    instanceId,
    generateLockInfo()
  )
}

/**
 * Unlock an environment after deployment
 *
 * @param {object} options Deployment options
 * @param {string} instanceId Unique ID used when acquiring the lock
 * @returns {Promise<void>}
 */
function unlock(options, instanceId) {
  if (options.verbose) {
    console.log(
      chalk.dim(
        `Releasing lock... id: '${deployLockId}' instanceId: '${instanceId}'`
      )
    )
  }

  return deleteLock(options.lockTableName, deployLockId, instanceId)
}

/**
 * Get information on the state of an environment's deploy lock
 *
 * @param {object} options Deployment options
 * @returns {Promise<object | null>} Lock information or null if the lock is not currently held
 */
function inspectLock(options) {
  return getLock(options.lockTableName, deployLockId)
}

module.exports = {
  generateLockInstanceId,
  inspectLock,
  lock,
  unlock,
}
