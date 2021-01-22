const { unlock } = require('../lock.js')

async function exec(config, args) {
  const unlocked = await unlock(config, args.instanceId, args.verbose)

  if (unlocked) {
    return {
      isError: false,
      message: 'Released environment lock',
    }
  } else {
    return {
      isError: true,
      message: 'Failed to release environment lock',
    }
  }
}

module.exports = {
  exec,
}
