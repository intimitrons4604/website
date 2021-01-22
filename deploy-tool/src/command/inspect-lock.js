const chalk = require('chalk')

const { inspectLock } = require('../lock.js')

async function exec(config) {
  const info = await inspectLock(config)

  if (info === null) {
    console.log(chalk.dim('No lock information available'))
    return {
      isError: false,
      message: 'Environment is not locked',
    }
  } else {
    console.log(chalk.bold('Lock Information'))
    console.log(info)

    return {
      isError: false,
      message: 'Environment is locked',
    }
  }
}

module.exports = {
  exec,
}
