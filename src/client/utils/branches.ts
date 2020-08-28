import { DeploymentBranch, DeploymentVersion } from 'gql/customTypes'
import { addHours } from "date-fns"

function isMaster(git_branch: string | undefined) {
  return git_branch === undefined || git_branch === 'master'
}

export const getBranchesFromVersions = (versions: DeploymentVersion[]) : DeploymentBranch[]  =>
  Object.values(versions.reduce((p, v) => {
    if (!p[v.git_branch || 'master']) {
      let timeToLive = v.time_to_live
      let newBranch: DeploymentBranch = {
        id: v.id,
        deploymentVersions: [],
        isTemporary: !isMaster(v.git_branch),
        isAlive: isMaster(v.git_branch) || addHours( new Date(v.deployed_at), timeToLive || 0) >= new Date(),
        lastDeploymentTimestamp: v.deployed_at,
        livesUntil: addHours( new Date(v.deployed_at), timeToLive || 0),
        name: v.git_branch || "master",
        isMaster: isMaster(v.git_branch)
      }
      p[v.git_branch || 'master'] = newBranch
    }
    p[v.git_branch || 'master'].deploymentVersions.push(v)
    return p
  }, {} as { [key: string]: DeploymentBranch }))
