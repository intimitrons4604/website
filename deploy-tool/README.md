# Deploy Tool

The deploy tool is used to deploy the site and manipulate deployment locks for environments.

## Configuration

Every environment the deploy tool works worth requires a configuration file. Configuration files are named after the environment, for example the configuration file for the environment `env` should be placed at `deploy-tool/config/env.json`.

AWS credentials are loaded automatically by the Node.js SDK. See https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html for more information.

## Execution

The deploy tool is executed using `npm` as a script in `package.json`. Use `npm run deploy-tool` to execute it. To provide arguments, place the arguments after `--`, for example `npm run deploy-tool -- --help`.

## Commands

Use the deploy tool help for further information on supported commands and their arguments. The `--help` argument works both without a command and with a command to see command-specific arguments.

The deploy tool supports several commands

- `deploy` - Deploy the website. The website should be built before deploying.
- `lock` - Lock an environment. This could be used to prevent deployments to an environment.
- `unlock` - Unlock an environment. This could be used to unlock an environment if a deploy fails to unlock it or remove a manually acquired lock. Make sure the lock you are removing is not still in use.
- `inspectLock` - Check the current state of an environment's lock and get metadata about what acquired the lock.

## Limitations

- The deploy tool assumes all AWS resources are in the US West (Oregon) (`us-west-2`) region
