# Website
The website root is in the `www` directory. All files required by the website must be in the `www` directory. Any files outside the `www` directory will not be available on the server.

## Development

### Prerequisites
* Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Running Locally
To run the website locally to test changes, run `docker-compose -f ./dev/docker-compose.yml up` from this directory in the appropriate terminal for your platform. Then, navigate to http://localhost:8080/ in a web browser. Request logs will be output to the terminal. Press `Ctrl + C` in the terminal to stop the web server when finished.

Changes you make to files in the `www` directory will automatically be picked up by the server - there is no need to restart it. You do however need to save the file and refresh the page in order to see your changes.

Instructions on other usage of Docker is outside the scope of this README.

### Limitations
* The contact form does not work locally

## Environments
The website is continuously available in two different environments: `staging` and `production`. Both are currently hosted on StableHost.

| Environment  | Primary URL                   | Secondary URL                     | Version                                    |
| ------------ | ----------------------------- | --------------------------------- | ------------------------------------------ |
| `staging`    | http://staging.intimitrons.ca | http://www.staging.intimitrons.ca | http://staging.intimitrons.ca/version.json |
| `production` | http://intimitrons.ca         | http://www.intimitrons.ca         | http://intimitrons.ca/version.json         |

## Deployment

### Build IDs
Every deployment has a Build ID which is a combination of the deployed SHA1 and the environment name, for example `3719fdb5b34f699994456ac9c7f3d6828ce221a1-staging`.

### How can I tell which version is deployed?
Access the `version.json` file at the root. See the [Environments](#environments) section for a direct link.

### How do I deploy the website?
#### Staging
Pushing to `master` automatically triggers a deployment to the `staging` environment.

#### Production
Pushing to `production` automatically triggers a deployment to the `production` environment. **You should never commit or merge to the `production` branch**. Instead, perform the following steps to deploy to production.

1. Checkout `master` and pull
    1. `git checkout master`
    1. `git pull`
1. Identify the commit from the `master` branch that you wish to deploy, for example using `git log` or browsing commits on GitHub
1. Update the `production` branch on GitHub to trigger the deployment
    1. `git push -f origin <sha1>:refs/heads/production` (e.g. `git push -f origin abcd123:refs/heads/production`)

Note that the `production` branch is simply being used as a marker for the current commit which is deployed to production. It should always point to a commit on `master`. The `-f` option is used to allow you to both deploy newer versions and rollback to older versions of the website. The branch name is qualified with `refs/heads` so that the command works even if the `production` branch does not exist on the remote.

### Limitations
Only one deployment can execute at once, per environment. **You are protected against concurrent deployments interfering with each other, but there is no ordering guarantee for which deployment wins when multiple deployments to an environment execute concurrently**. As a result, try to abide by the following guidelines:
* Do not push commits directly to `master`. Work on a branch and merge all the work at once so it only results in a single deploy to the staging environment.
* Do not make multiple merges to `master` in quick succession. If you have multiple changes to deploy or multiple people have changes to deploy, coordinate and wait until the previous change is deployed before pushing the next one.
* Do not make multiple pushes to the `production` branch in quick succession. If you have multiple changes to deploy or multiple people have changes to deploy, coordinate and wait until the previous change is deployed before pushing the next one.

### Why didn't my deploy work?

Check the output for your deployment action. Warnings and errors should by yellow and red respectively, and you should be able to easily navigate to them in the GitHub Actions output.

#### Manually unlocking an environment
If your deployment fails due to the environment being locked, it is possible a previously failed deploy left behind a lock. The output may be able to identify the Build ID of the deployment which locked the environment. Confirm there are no concurrent deploys running and that the lock was not manually created for some reason. Removing the lock manually while a deployment is in progress is dangerous and could result in interference between deployments, leading to unavailability of the website.

If you are sure it is safe to remove the lock, remove the lock file using cPanel or SSH. The lock file is named after the environment and is located at `/home/intimitr/www_root/deploy/lock/{environment}`. cPanel credentials and the SSH key used for deployment are in the Bitwarden vault.

### Design Overview
The website is deployed to StableHost with the following directory structure.

```
 ┬ /home/intimitr/www_root
 ├─┬ active (Symlinks to the active deployment, one symlink per environment)
 │ ├── production -> /home/intimitr/www_root/deploy/data/3719fdb5b34f699994456ac9c7f3d6828ce221a1-production
 │ └── staging -> /home/intimitr/www_root/deploy/data/b783928a9bb089fb98e3c24afcd6bb3b8c8b9a99-staging
 └─┬ deploy
   ├─┬ data (Site data, the www folder contents are uploaded here into folders named after the Build ID)
   │ ├── 3719fdb5b34f699994456ac9c7f3d6828ce221a1-production
   │ └── b783928a9bb089fb98e3c24afcd6bb3b8c8b9a99-staging
   └─┬ lock (Deployment lock files. These typically only exist when locked.)
     ├── production
     └── staging
```

All the directories above should have the following permissions if they need to be recreated. They are not created by the deployment process
(with the exception of the data directories for each deployment) and were originally set up manually.
* owner `intimitr`
* group `intimitr`
* mode `0775` / `drwxrwxr-x`

For the `staging` environment, a subdomain is configured in cPanel that points the content root directly to the active symlink.
For the `production` environment, `/home/intimitr/public_html` has been replaced with a symlink to the active symlink.
There is also an existing symlink from `/home/intimitr/www -> /home/intimitr/public_html` which we leave as-is.

The lock files are created and locked by `flock`, and the Build ID of the acquirer is written into the file while it is locked.
The lock is released by removing the file, after locking it. A non-existent or empty file is considered unlocked, and an existing
file which has some content is considered locked.

When a new version is deployed, the following steps occur for a typical deployment
1. Lock the environment
1. Upload the `www` directory (after adding `version.json` to it)
1. Cutover by creating a new symlink in the `active` directory named `{environment}-deploy` and then moving the new symlink over the existing one
1. Remove the data directory referred to by the original symlink
1. Remove any stale data directories for the environment that may have been left behind for some reason
1. Unlock the environment
