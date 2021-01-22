const chalk = require('chalk')
const isCI = require('is-ci')
const readline = require('readline')

const {
  executeDeploy,
  planDeploy,
  prepareToDeploy,
  showPlan,
} = require('../deploy.js')
const { generateLockInstanceId, lock, unlock } = require('../lock.js')

async function exec(config, args) {
  const options = {
    verbose: args.verbose,
  }

  console.log(chalk.bold('Preparing to deploy...'))
  await prepareToDeploy(options)

  console.log()
  console.log(chalk.bold('Locking environment...'))

  const lockInstanceId = generateLockInstanceId()
  if (!(await lock(config, lockInstanceId, options.verbose))) {
    return {
      isError: true,
      message: 'Failed to lock environment',
    }
  }

  const unlockEnvironment = async () => {
    console.log()
    console.log(chalk.bold('Unlocking environment...'))
    if (!(await unlock(config, lockInstanceId, options.verbose))) {
      console.error(chalk.red('Failed to unlock environment'))
    }
  }

  try {
    console.log()
    console.log(chalk.bold('Planning deployment...'))
    const plan = await planDeploy(config, options)

    console.log()
    console.log(chalk.bold('Deploy plan'))
    showPlan(plan)

    if (isCI) {
      console.log(
        'CI environment detected, executing deployment without confirmation'
      )
    } else {
      const confirmed = await new Promise((resolve) => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        })
        rl.question(chalk`{bold Deploy?} (y/N) > `, (answer) => {
          resolve(answer === 'y' || answer === 'Y')
          rl.close()
        })
      })

      if (!confirmed) {
        return {
          isError: true,
          message: 'Deployment was not confirmed',
        }
      }
    }

    console.log()
    console.log(chalk.bold('Executing deployment...'))
    await executeDeploy(plan)
  } finally {
    await unlockEnvironment()
  }

  return {
    isError: false,
    message: 'Deployment finished',
  }
}

module.exports = {
  exec,
}
