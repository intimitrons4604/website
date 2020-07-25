const chalk = require('chalk')
const isCI = require('is-ci')
const readline = require('readline')
const yargs = require('yargs')

const { loadConfig } = require('./src/config.js')
const { executeDeploy, planDeploy, showPlan } = require('./src/deploy.js')

const args = yargs
  .strict()
  .version(false)
  .usage('Deploy the website. The website should be built before deploying.')
  .option('environment', {
    description:
      "Environment to deploy. Should match the name of a configuration file. For example the environment 'env' loads the configuration file 'deploy/config/env.json'.",
    alias: 'env',
    type: 'string',
    demandOption: true,
    requiresArg: true,
  })
  .option('verbose', {
    description: 'Enable verbose output',
    alias: 'v',
    type: 'boolean',
  }).argv

Promise.resolve()
  .then(async () => {
    console.log('Loading configuration...')
    const config = await loadConfig(args.environment)
    return { ...config, verbose: args.verbose }
  })
  .then((config) => {
    console.log('Planning deployment...')
    return planDeploy(config)
  })
  .then((plan) => {
    console.log()
    console.log(chalk.bold('Deploy plan'))
    showPlan(plan)
    return plan
  })
  .then(
    (plan) =>
      new Promise((resolve, reject) => {
        if (isCI) {
          console.log(
            'CI server detected, executing deployment without confirmation'
          )
          resolve(plan)
          return
        }

        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        })
        rl.question(chalk`{bold Deploy?} (y/N) > `, (answer) => {
          if (answer === 'y' || answer === 'Y') {
            resolve(plan)
          } else {
            reject('Deployment was not confirmed')
          }

          rl.close()
        })
      })
  )
  .then((plan) => {
    console.log('Executing deployment...')
    return executeDeploy(plan)
  })
  .then(() => {
    console.log()
    console.log(chalk.bold.green('Deployment finished'))
  })
  .catch((err) => {
    console.log()
    console.error(err)
    console.error(chalk.bold.red('Deployment failed'))

    process.exitCode = 1
  })
