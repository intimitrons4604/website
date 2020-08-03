const chalk = require('chalk')
const isCI = require('is-ci')
const readline = require('readline')
const yargs = require('yargs')

const { loadConfig } = require('./src/config.js')
const {
  executeDeploy,
  planDeploy,
  prepareToDeploy,
  showPlan,
} = require('./src/deploy.js')
const { generateLockInstanceId, lock, unlock } = require('./src/lock.js')

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
    console.log(chalk.bold('Loading configuration...'))
    const config = await loadConfig(args.environment)
    return { ...config, verbose: args.verbose }
  })
  .then(async (options) => {
    console.log()
    console.log(chalk.bold('Preparing to deploy...'))
    await prepareToDeploy(options)

    return options
  })
  .then(async (options) => {
    console.log()
    console.log(chalk.bold('Locking environment...'))

    const lockInstanceId = generateLockInstanceId()
    if (!(await lock(options, lockInstanceId))) {
      throw new Error('Failed to lock environment')
    }

    const unlockEnvironment = async () => {
      try {
        console.log()
        console.log(chalk.bold('Unlocking environment...'))
        await unlock(options, lockInstanceId)
      } catch (err) {
        console.error(chalk.red('Failed to unlock environment'))
        console.log(err)
        console.log()
      }
    }

    return (
      Promise.resolve()
        .then(() => {
          console.log()
          console.log(chalk.bold('Planning deployment...'))
          return planDeploy(options)
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
                  'CI environment detected, executing deployment without confirmation'
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
                  reject(new Error('Deployment was not confirmed'))
                }

                rl.close()
              })
            })
        )
        .then((plan) => {
          console.log()
          console.log(chalk.bold('Executing deployment...'))
          return executeDeploy(plan)
        })
        // Since unlockEnvironment() catches there is no risk of an unlock error triggering a second unlock in the .catch()
        .then(unlockEnvironment)
        .then(() => {
          console.log()
          console.log(chalk.bold.green('Deployment finished'))
        })
        .catch(async (err) => {
          await unlockEnvironment()
          throw err
        })
    )
  })
  .catch((err) => {
    console.log()
    console.error(err)
    console.error(chalk.bold.red('Deployment failed'))

    process.exitCode = 1
  })
