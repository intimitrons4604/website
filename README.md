# Website

The website is built using [Gatsby](https://www.gatsbyjs.org/) - a framework based on [React](https://reactjs.org/).

## Development

### Prerequisites

- Install [Node.js 12 LTS](https://nodejs.org/en/download/)
- Install dependencies (Run `npm install` in this directory)

Although not required, Visual Studio Code is the recommended editor.

### Running Locally

Run `npm run develop` in this directory. Once Gatsby is ready (watch the terminal output), navigate to http://localhost:8000/ in a web browser. Press `Ctrl + C` in the terminal to stop the development server. Any changes you make to the site will automatically be picked up and reflected in the browser through Hot Module Replacement. You do however need to remember to save the file.

You can access GraphiQL to aid in working with the Gatsby data layer at http://localhost:8000/\_\_\_graphql.

### Other Scripts

- `npm run clean` will remove the `.cache/` and `public/` directories ([Gatsby CLI - clean](https://www.gatsbyjs.org/docs/gatsby-cli/#clean))
- `npm run build` will create the production build of the site in the `public/` directory ([Gatsby CLI - build](https://www.gatsbyjs.org/docs/gatsby-cli/#build))
- `npm run serve` will serve the (previously built) production build of the site at http://localhost:9000/ ([Gatsby CLI - serve](https://www.gatsbyjs.org/docs/gatsby-cli/#serve))
- `npm run lint` will check formatting and perform linting. There are other scripts named `lint:*:check` and `lint:*:fix` to allow execution of everything that makes up the `lint` script separately, as well as applying automatic fixes for any issues.

## Dependencies

The website has no dependencies on other services.

The website will use the production Legacy API (https://legacy-api.intimitrons.ca/) in all environments (even locally) for the contact forms _when the static contact form feature flag is disabled_. The flag is currently enabled so the API is not used.

## Environments

The website is continuously available in two different environments: `staging` and `production`. All environments are deployed to AWS (see https://github.com/intimitrons4604/terraform-website). The Canonical URL is an alias to a CloudFront distribution. The Redirect URL is an alias to an S3 bucket (no HTTPS for S3 static web hosting) which redirects to the canonical URL. The Version file provides information on the currently deployed version of the website.

| Environment  | Canonical URL                      | Redirect URL                  | Version                                         |
| ------------ | ---------------------------------- | ----------------------------- | ----------------------------------------------- |
| `staging`    | https://www.staging.intimitrons.ca | http://staging.intimitrons.ca | https://www.staging.intimitrons.ca/version.json |
| `production` | https://www.intimitrons.ca         | http://intimitrons.ca         | https://www.intimitrons.ca/version.json         |

## Deployment

Deployments are performed using the deploy tool. The deploy tool can be executed locally, but it is primarily used by various deploy workflows in GitHub Actions. See the [deploy tool README](./deploy-tool/README.md) for more information on using the deploy tool.

### Staging

Pushing to `master` automatically triggers a deployment to the `staging` environment. Deployments to the `staging` environment can also be [triggered manually](#manual-deployment-with-github-actions) with the [Deploy to Staging workflow](https://github.com/intimitrons4604/website/actions?query=workflow%3A%22Deploy+to+Staging%22).

### Production

Deployments to the `production` environment are [triggered manually](#manual-deployment-with-github-actions) with the [Deploy to Production workflow](https://github.com/intimitrons4604/website/actions?query=workflow%3A%22Deploy+to+Production%22).

### Manual Deployment with GitHub Actions

1. Identify the commit from the `master` branch that you wish to deploy, for example using `git log` or browsing commits on GitHub
2. Execute the deployment workflow by clicking "Run workflow" on the "This workflow has a `workflow_dispatch` event trigger." banner.
3. Enter the commit SHA1 as the input for the "Ref to Deploy" and click "Run Workflow"

The workflows do not currently restrict the provided ref. As a result it is possible to specify a tag or branch name, or deploy a commit which is not on `master`. You should always use a commit SHA1 when deploying because someone else may modify a tag or branch before the deployment executes, resulting in an undesired commit being deployed. Only commits on `master` should be deployed, because the `master` branch is where you will find completed code.

### Limitations

Only one deployment can execute at once, per environment. You are protected against concurrent deployments interfering with each other through environment locking, but **there is no ordering guarantee for which deployment wins when multiple deployments to an environment execute concurrently**. As a result, try to abide by the following guidelines:

- Do not push commits directly to `master`. Work on a branch and merge all the changes at once so they only result in a single deploy.
- Do not make multiple merges to `master` in quick succession. If there are multiple changes to merge, coordinate and wait until the previous change is deployed before merging the next one.
- Do not trigger multiple manual deployments in quick succession. Wait until the previous deployment is finished before triggering the next one.
