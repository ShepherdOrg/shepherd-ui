import API, { graphqlOperation } from '@aws-amplify/api'
import config from './src/aws-exports'
import {
  CreateDeploymentInput,
  DeployerRole,
  DeploymentType,
  CreateDeploymentVersionInput,
} from './src/API'
import {
  createDeployment,
  createDeploymentVersion,
} from './src/graphql/mutations'

API.configure(config)

const deployment: CreateDeploymentInput = {
  id: 'dev-images-fluentd',
  displayName: 'Fluentd aws appender',
  lastDeploymentTimestamp: '2019-10-17T16:02:20.500Z',
  env: 'dev',
  deployerRole: DeployerRole.Install,
  deploymentType: DeploymentType.Kubernetes,
}

const deploymentVersion: CreateDeploymentVersionInput = {
  versionId: 'dev-dev-images-fluentd-1.0.0-2019-10-17T16:02:20.500Z',
  version: '1.0.0',
  env: 'dev',

  builtAt: '2019-10-16T16:02:20.500Z',
  deployedAt: '2019-10-17T16:02:20.500Z',
  deploymentVersionDeploymentId: 'dev-images-fluentd',

  lastCommits: `Mon, 8 Jul 2019 15:09:16 +0000 by Guðlaugur S. Egilsson. --- Read from head is probably necessary to ensure reading of logs from start of container. 
  
Wed, 12 Dec 2018 16:38:52 +0000 by Guðlaugur S. Egilsson. --- No need to store original log entry in this case, only one source for controlling json format. Moving fields to root of json object for same reason.

Wed, 12 Dec 2018 15:53:26 +0000 by Guðlaugur S. Egilsson. --- Need json parser filter also in this setup.

Wed, 12 Dec 2018 14:42:18 +0000 by Guðlaugur S. Egilsson. --- Change log format for ingress-nginx. Change fluentd config to pick up ingress-nginx logs and route to elasticsearch.

Fri, 24 Aug 2018 10:08:54 +0000 by Guðlaugur S. Egilsson. --- Use docker image tag with git hash to ensure redeployment.
`,
  gitUrl: 'git@gitlab.tm.is:tmdev/tm-docker-images.git',
  gitBranch: 'HEAD',
  gitHash: '2b48d1cef5c101ebcf3cd64dc1dbe12b1af1bbc9',
  gitCommit: '2b48d1cef5c101ebcf3cd64dc1dbe12b1af1bbc9',
  dockerImage: 'isrvkbuild02:5000/fluentd',
  dockerImageTag: 'v1.1.2-g-2b48d1c',
  buildHostName: 'isrvkbuild02',
  configuration: [
    { key: 'LOG_FORMAT', value: '%s %s %s', isSecret: false },
    { key: 'SUPER_SECRET', value: '--REDACTED--', isSecret: true },
  ],
}

const compose = <A, B, C>(f: (a: B) => C, g: (b: A) => B) => (x: A) => f(g(x))
const id = <T>(x: T) => x

const populateData = () =>
  API.graphql(graphqlOperation(createDeployment, { input: deployment }))
    // @ts-ignore
    .then(() =>
      API.graphql(
        graphqlOperation(createDeploymentVersion, { input: deploymentVersion })
      )
    )

populateData()
  .catch(id)
  .then(
    compose(
      console.log,
      JSON.stringify
    )
  )
