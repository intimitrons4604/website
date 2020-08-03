const { generateLockInstanceId, lock } = require('../lock.js')

async function exec(config, args) {
  const instanceId = generateLockInstanceId()

  const locked = await lock(config, instanceId, args.verbose, args.message)

  if (locked) {
    console.log(`Acquired lock. instanceId: '${instanceId}'`)
    return {
      isError: false,
      message: 'Environment locked',
    }
  } else {
    return {
      isError: true,
      message: 'Environment is already locked',
    }
  }
}

module.exports = {
  exec,
}
