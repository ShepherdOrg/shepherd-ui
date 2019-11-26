import { createClient, Deployment, DeploymentVersion } from './api'
import { validDevDeploymentWithVersion, validProdDeploymentWithVersion } from './testdata/validData'
// import { closeButNotQuite } from './testdata/invalidData'

export type DeploymentWithVersion = {
  versionInfo: DeploymentVersion,
  deploymentInfo: Deployment
}


const api = createClient('http://localhost:8080/v1/graphql')


async function upsertTestData(deploymentWithVersion: any) {
  await api.upsertDeployment([deploymentWithVersion.deploymentInfo])
  await api.upsertDeploymentVersion([deploymentWithVersion.versionInfo])
}

async function main() {
  await upsertTestData(validDevDeploymentWithVersion)
  await upsertTestData(validProdDeploymentWithVersion)
  // await upsertTestData(closeButNotQuite)
}

main().then(console.log, console.error)
