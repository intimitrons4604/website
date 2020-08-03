const chalk = require('chalk')
const yargs = require('yargs')

const deployCommand = require('./src/command/deploy.js')
const inspectLockCommand = require('./src/command/inspect-lock.js')
const lockCommand = require('./src/command/lock.js')
const unlockCommand = require('./src/command/unlock.js')
const { loadConfig } = require('./src/lib/config.js')

async function executeCommand(fn, args) {
  try {
    console.log(chalk.bold('Loading configuration...'))
    const config = await loadConfig(args.environment)

    console.log()
    const result = await fn(config, args)

    console.log()
    if (result.isError) {
      console.error(chalk.bold.red(result.message))
      process.exitCode = 1
    } else {
      console.log(chalk.bold.green(result.message))
    }
  } catch (err) {
    console.log()
    console.error(err)
    console.error(chalk.bold.red('Uncaught exception when exexuting command'))

    process.exitCode = 1
  }
}

yargs
  .strict()
  .version(false)
  .option('environment', {
    description:
      "Should match the name of a configuration file. For example the environment 'env' loads the configuration file 'deploy/config/env.json'.",
    alias: 'env',
    type: 'string',
    demandOption: true,
    requiresArg: true,
  })
  .option('verbose', {
    description: 'Enable verbose output',
    alias: 'v',
    type: 'boolean',
  })
  .demandCommand(1, 1)
  .command({
    command: 'deploy',
    describe:
      'Deploy the website. The website should be built before deploying.',
    handler: async (args) => {
      await executeCommand(deployCommand.exec, args)
    },
  })
  .command({
    command: 'lock',
    describe: 'Lock an environment',
    builder: (y) => {
      y.option('message', {
        description:
          'Message to include with lock info. Maximum 256 characters.',
        alias: 'msg',
        type: 'string',
        demandOption: true,
        requiresArg: true,
      }).check((argv) => {
        if (argv.message.length > 256) {
          throw new Error('Message is limited to 256 characters')
        }
        return true
      })
    },
    handler: async (args) => {
      await executeCommand(lockCommand.exec, args)
    },
  })
  .command({
    command: 'unlock',
    describe: 'Unlock an environment',
    builder: (y) => {
      y.option('instanceId', {
        description: 'The instanceId of the lock to release',
        type: 'string',
        demandOption: true,
        requiresArg: true,
      })
    },
    handler: async (args) => {
      await executeCommand(unlockCommand.exec, args)
    },
  })
  .command({
    command: 'inspectLock',
    describe: 'Check the current state of the lock for an environment',
    handler: async (args) => {
      await executeCommand(inspectLockCommand.exec, args)
    },
  }).argv
