import { createClient, Deployment, DeploymentVersion } from './api'
import { validDeploymentWithVersion  } from './testdata/validData'

export type DeploymentWithVersion = {
  versionInfo: DeploymentVersion,
  deploymentInfo: Deployment
}


const api = createClient('http://localhost:8080/v1/graphql')


async function upsertTestData(deploymentWithVersion: any) {
  await api.upsertDeployment([deploymentWithVersion.deploymentInfo])
  await api.upsertDeploymentVersion([deploymentWithVersion.versionInfo])
}

function forEnv(validDeploymentWithVersion: DeploymentWithVersion, env: string, gitBranch: string, timeToLive=0, lastDeploymentDate: Date) {

  let timeStamp = lastDeploymentDate

  const forDevCopy: DeploymentWithVersion = JSON.parse(JSON.stringify(validDeploymentWithVersion))
  forDevCopy.deploymentInfo.env = env
  forDevCopy.deploymentInfo.id = env + forDevCopy.deploymentInfo.id

  forDevCopy.deploymentInfo.last_deployment_timestamp = timeStamp

  forDevCopy.versionInfo.deployment_id = forDevCopy.deploymentInfo.id
  forDevCopy.versionInfo.id = env + forDevCopy.versionInfo.id + timeStamp.toISOString()
  forDevCopy.versionInfo.git_branch = gitBranch
  forDevCopy.versionInfo.version += gitBranch
  forDevCopy.versionInfo.env = env
  forDevCopy.versionInfo.deployed_at = timeStamp
  forDevCopy.versionInfo.time_to_live = timeToLive || undefined

  return forDevCopy
}

async function main() {
  await upsertTestData(forEnv(validDeploymentWithVersion, 'dev', 'master', 0,  new Date()))
  await upsertTestData(forEnv(validDeploymentWithVersion, 'prod', 'master', 0,  new Date()))

  await upsertTestData(forEnv(validDeploymentWithVersion, 'dev', 'branch-one', 48,  new Date()))
  await upsertTestData(forEnv(validDeploymentWithVersion, 'dev', 'branch-old', 24,  new Date("2019-10-16T16:02:20.500Z")))
  // await upsertTestData(closeButNotQuite)
}

main()
