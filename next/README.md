# Website - Next
This is the _next_ website, intended to replace our current website. The site is built using [Gatsby](https://www.gatsbyjs.org/) - a framework based on [React](https://reactjs.org/).

## Development

### Prerequisites
* Install [Node.js 12 LTS](https://nodejs.org/en/download/)
* Install dependencies (Run `npm install` in this directory)

### Running Locally
Run `npm run develop` in this directory. Once Gatsby is ready (watch the terminal output), navigate to http://localhost:8000/ in a web browser. Press `Ctrl + C` in the terminal to stop the development server. Any changes you make to the site will automatically be picked up and reflected in the browser through Hot Module Replacement. You do however need to remember to save the file.

You can also access GraphiQL to aid in working with the Gatsby data layer at http://localhost:8000/___graphql.

### Other Scripts
* `npm run clean` will remove the `.cache/` and `public/` directories ([Gatsby CLI - clean](https://www.gatsbyjs.org/docs/gatsby-cli/#clean))
* `npm run build` will create the production build of the site in the `public/` directory ([Gatsby CLI - build](https://www.gatsbyjs.org/docs/gatsby-cli/#build))
* `npm run serve` will serve the (previously built) production build of the site at http://localhost:9000/ ([Gatsby CLI - serve](https://www.gatsbyjs.org/docs/gatsby-cli/#serve))

## Environments and Deployment
The next website is not currently hosted anywhere, but will be soon.
