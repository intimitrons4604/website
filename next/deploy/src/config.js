const { cosmiconfig } = require('cosmiconfig')
const path = require('path')

/**
 * Load the deploy configuration for an environment
 *
 * @param {string} envName Name of the environment. Should match the name of a configuration file.
 * For example when called with `env`, the file `deploy/config/env.json` is loaded.
 * @returns {Promise<object>} Deploy configuration
 */
async function loadConfig(envName) {
  const explorer = cosmiconfig('')

  const result = await explorer.load(
    path.join('deploy', 'config', `${envName}.json`)
  )

  if (isConfigValid(result.config)) {
    return result.config
  } else {
    throw new Error(`Configuration for environment ${envName} is invalid`)
  }
}

function isConfigValid(config) {
  return (
    Object.keys(config).length === 1 &&
    typeof config.bucketName === 'string' &&
    config.bucketName.length !== 0
  )
}

module.exports = {
  loadConfig,
}
