const { cosmiconfig } = require('cosmiconfig')
const Joi = require('joi')
const path = require('path')

/**
 * The region for all AWS resources.
 *
 * Currently all resources in all environments are assumed to be in this region.
 */
const awsRegion = 'us-west-2'

const schema = Joi.object({
  bucketName: Joi.string().required(),
  lockTableName: Joi.string().required(),
}).required()

/**
 * Load the deploy configuration for an environment
 *
 * @param {string} envName Name of the environment. Should match the name of a configuration file.
 * For example when called with `env`, the file `deploy-tool/config/env.json` is loaded.
 * @returns {Promise<object>} Deploy configuration
 */
async function loadConfig(envName) {
  const explorer = cosmiconfig('')

  const result = await explorer.load(
    path.join('deploy-tool', 'config', `${envName}.json`)
  )

  return schema.validateAsync(result.config)
}

module.exports = {
  awsRegion,
  loadConfig,
}
