# Website - Next

This is the _next_ website, intended to replace our current website. The site is built using [Gatsby](https://www.gatsbyjs.org/) - a framework based on [React](https://reactjs.org/).

## Development

### Prerequisites

- Install [Node.js 12 LTS](https://nodejs.org/en/download/)
- Install dependencies (Run `npm install` in this directory)

Although not required, Visual Studio Code is the recommended editor. See the [setup instructions](#visual-studio-code-setup) below.

### Running Locally

Run `npm run develop` in this directory. Once Gatsby is ready (watch the terminal output), navigate to http://localhost:8000/ in a web browser. Press `Ctrl + C` in the terminal to stop the development server. Any changes you make to the site will automatically be picked up and reflected in the browser through Hot Module Replacement. You do however need to remember to save the file.

You can also access GraphiQL to aid in working with the Gatsby data layer at http://localhost:8000/___graphql.

### Other Scripts

- `npm run clean` will remove the `.cache/` and `public/` directories ([Gatsby CLI - clean](https://www.gatsbyjs.org/docs/gatsby-cli/#clean))
- `npm run build` will create the production build of the site in the `public/` directory ([Gatsby CLI - build](https://www.gatsbyjs.org/docs/gatsby-cli/#build))
- `npm run serve` will serve the (previously built) production build of the site at http://localhost:9000/ ([Gatsby CLI - serve](https://www.gatsbyjs.org/docs/gatsby-cli/#serve))
- `npm run lint` will check formatting and perform linting. There are other scripts named `lint:*:check` and `lint:*:fix` to allow execution of everything that makes up the `lint` script separately, as well as applying automatic fixes for any issues.

## Dependencies

The next site uses the Legacy API (https://legacy-api.intimitrons.ca/) in all environments (even locally) to back the contact forms.

## Environments and Deployment

Pushing to `master` automatically triggers a deployment to a development environment.

The site is currently available at https://www.next.intimitrons.ca. You can check which commit is deployed at https://www.next.intimitrons.ca/version.json.

See the deploy [README](./deploy-tool/README.md) for more information on using the deploy tool.

### Limitations

Only one deployment can execute at once, per environment. You are protected against concurrent deployments interfering with each other through environment locking, but **there is no ordering guarantee for which deployment wins when multiple deployments to an environment execute concurrently**. As a result, try to abide by the following guidelines:

- Do not push commits directly to `master`. Work on a branch and merge all the work at once so it only results in a single deploy.
- Do not make multiple merges to `master` in quick succession. If you have multiple changes to deploy or multiple people have changes to deploy, coordinate and wait until the previous change is deployed before pushing the next one.

## Visual Studio Code Setup

The following Visual Studio code extensions are recommended

- ESLint (`dbaeumer.vscode-eslint`)
- Prettier - Code formatter (`esbenp.prettier-vscode`)
- stylelint (`stylelint.vscode-stylelint`)
- vscode-styled-components (`jpoissonnier.vscode-styled-components`)
