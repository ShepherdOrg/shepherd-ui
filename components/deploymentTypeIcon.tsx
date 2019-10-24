import { DeploymentType } from '../src/API'
import { FaDocker } from './icons/fa-docker'
import { FaKubernetes } from './icons/kubernetes'

interface Props {
  deploymentType: DeploymentType
}

export const DeploymentTypeIcon = function({ deploymentType }: Props) {
  if (deploymentType === DeploymentType.Deployer) {
    return <FaDocker />
  }
  if (deploymentType === DeploymentType.Kubernetes) {
    return <FaKubernetes />
  }

  return null
}
