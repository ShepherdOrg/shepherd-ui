import { DeploymentVersion } from 'gql/customTypes'

export const getBranchesFromVersions = (versions: DeploymentVersion[]) =>
  versions.reduce((p, v) => {
    if (!p[v.git_branch || 'master']) {
      p[v.git_branch || 'master'] = []
    }
    p[v.git_branch || 'master'].push(v)
    return p
  }, {} as { [key: string]: DeploymentVersion[] })
