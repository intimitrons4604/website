# Website - Legacy
The legacy website root is in the `www` directory. **The legacy website is no longer used.** All files required by the website must be in the `www` directory. Any files outside the `www` directory will not be available on the server.

The API root is in the `api` directory. All files required by the API must be in the `api` directory. Any files outside the `api` directory will not be available on the server. This contains only the contact API from the legacy site, so that the next site can use it during migration.

## Development

### Prerequisites
* Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Running Locally
To run the website and API locally to test changes, run `docker-compose -f ./dev/docker-compose.yml up` from this directory in the appropriate terminal for your platform. The website is available at http://localhost:8080/ and the API is available at http://localhost:8081/. Request logs will be output to the terminal. Press `Ctrl + C` in the terminal to stop the containers when finished.

Changes you make to files in the `www` or `api` directories will be automatically picked up - there is no need to restart. You do however need to save the file and refresh the page or make another API request in order to see your changes.

Instructions on other usage of Docker is outside the scope of this README.

### Limitations
* The contact form does not work locally

## Environments

The API is continuously available in two different environments: `staging` and `production`. Both are currently hosted on StableHost. While you can access the API using HTTP, HTTPS should be used.

| Environment  | URL                                       | Version                                                |
| ------------ | ----------------------------------------- | ------------------------------------------------------ |
| `staging`    | https://legacy-api-staging.intimitrons.ca | https://legacy-api-staging.intimitrons.ca/version.json |
| `production` | https://legacy-api.intimitrons.ca         | https://legacy-api.intimitrons.ca/version.json         |

## Deployment

### Monikers
Every service and environment has a moniker which is a combination of the service identifier and the environment name, for example `api-staging` or `www-staging`.

### Build IDs
Every deployment has a Build ID which is a combination of the deployed SHA1 and the moniker, for example `3719fdb5b34f699994456ac9c7f3d6828ce221a1-www-staging`.

### How can I tell which version is deployed?
Access the `version.json` file at the root. See the [Environments](#environments) section for a direct link.

### How do I deploy the API?
#### Staging
Pushing to `master` automatically triggers a deployment to the `staging` environment.

#### Production
1. Identify the commit from the `master` branch that you wish to deploy, for example using `git log` or browsing commits on GitHub
2. Navigate to the [Deploy Legacy API to Production](https://github.com/intimitrons4604/website/actions?query=workflow%3A%22Deploy+Legacy+API+to+Production%22) workflow
3. Execute the production deployment workflow by clicking "Run workflow" on the "This workflow has a `workflow_dispatch` event trigger." banner. See below for links to the workflows.
4. Enter the commit SHA1 as the input for the "Ref to Deploy" and click "Run Workflow"

The workflow does not currently restrict the provided ref. As a result it is possible to specify a tag or branch name, or deploy a commit which is not on `master`. You should always use a commit SHA1 when deploying because someone else may modify a tag or branch before the deployment executes, resulting in an undesired commit being deployed. Only commits on `master` should be deployed, because the `master` branch is where you will find production-ready code.

### Limitations
Only one deployment can execute at once, per moniker. **You are protected against concurrent deployments interfering with each other, but there is no ordering guarantee for which deployment wins when multiple deployments for a moniker execute concurrently**. As a result, try to abide by the following guidelines:
* Do not push commits directly to `master`. Work on a branch and merge all the work at once so it only results in a single deploy to the staging environment.
* Do not make multiple merges to `master` in quick succession. If you have multiple changes to deploy or multiple people have changes to deploy, coordinate and wait until the previous change is deployed before pushing the next one.

### Why didn't my deploy work?
Check the output for your deployment action. Warnings and errors should by yellow and red respectively, and you should be able to easily navigate to them in the GitHub Actions output.

#### Manually unlocking a moniker
If your deployment fails due to the moniker being locked, it is possible a previously failed deploy left behind a lock. The output may be able to identify the Build ID of the deployment which locked the moniker. Confirm there are no concurrent deploys running and that the lock was not manually created for some reason. Removing the lock manually while a deployment is in progress is dangerous and could result in interference between deployments, leading to unavailability of services.

If you are sure it is safe to remove the lock, remove the lock file using cPanel or SSH. The lock file is named after the moniker and is located at `/home/intimitr/www_root/deploy/lock/{moniker}`. cPanel credentials and the SSH key used for deployment are in the Bitwarden vault.

### Design Overview
Services are deployed to StableHost with the following directory structure.

```
 ┬ /home/intimitr/www_root
 ├─┬ active (Symlinks to the active deployment, one symlink per moniker)
 │ ├── api-production -> /home/intimitr/www_root/deploy/data/3719fdb5b34f699994456ac9c7f3d6828ce221a1-api-production
 │ └── api-staging -> /home/intimitr/www_root/deploy/data/b783928a9bb089fb98e3c24afcd6bb3b8c8b9a99-api-staging
 │ ├── www-production -> /home/intimitr/www_root/deploy/data/3719fdb5b34f699994456ac9c7f3d6828ce221a1-www-production
 │ └── www-staging -> /home/intimitr/www_root/deploy/data/b783928a9bb089fb98e3c24afcd6bb3b8c8b9a99-www-staging
 └─┬ deploy
   ├─┬ data (Root data, the api or www folder contents are uploaded here into folders named after the Build ID)
   │ ├── 3719fdb5b34f699994456ac9c7f3d6828ce221a1-api-production
   │ ├── 3719fdb5b34f699994456ac9c7f3d6828ce221a1-www-production
   │ ├── b783928a9bb089fb98e3c24afcd6bb3b8c8b9a99-api-staging
   │ └── b783928a9bb089fb98e3c24afcd6bb3b8c8b9a99-www-staging
   └─┬ lock (Deployment lock files. These typically only exist when locked.)
     ├── api-production
     ├── api-staging
     ├── www-production
     └── www-staging
```

All the directories above should have the following permissions if they need to be recreated. They are not created by the deployment process
(with the exception of the data directories for each deployment) and were originally set up manually.
* owner `intimitr`
* group `intimitr`
* mode `0775` / `drwxrwxr-x`

For the `api-production`, `api-staging`, and `www-staging` monikers, a subdomain is configured in cPanel that points the content root directly to the active symlink.

For the `www-production` environment, `/home/intimitr/public_html` has been replaced with a symlink to the active symlink. There is also an existing symlink from `/home/intimitr/www -> /home/intimitr/public_html` which we leave as-is.

The lock files are created and locked by `flock`, and the Build ID of the acquirer is written into the file while it is locked.
The lock is released by removing the file, after locking it. A non-existent or empty file is considered unlocked, and an existing
file which has some content is considered locked.

When a new version is deployed, the following steps occur for a typical deployment
1. Lock the moniker
2. Upload the `api` or `www` directory (after adding `version.json` to it)
3. Cutover by creating a new symlink in the `active` directory named `{moniker}-deploy` and then moving the new symlink over the existing one
4. Remove the data directory referred to by the original symlink
5. Remove any stale data directories for the moniker that may have been left behind for some reason
6. Unlock the moniker
