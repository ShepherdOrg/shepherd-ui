# Sheperd UI

This project aims to be a UI for [shepherd](https://github.com/shepherdOrg/shepherd).

# Getting started

```sh
git clone git@github.com:shepherdOrg/shepherd-ui
cd shepherd-ui
yarn install # install lerna in the root scope
yarn run lerna bootstrap # installs dependencies and links the packages together
./scripts/dev.sh # sets up a local hasura and postgres
```


TODO: 

Add last_deployment_version to DeploymentList
Add deployment_key (herd key). Use to group env deployments together.
