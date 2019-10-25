import { FaDocker } from './icons/fa-docker'
import { FaKubernetes } from './icons/kubernetes'

interface Props {
  deploymentType: string
}

export const DeploymentTypeIcon = function({ deploymentType }: Props) {
  if (deploymentType === 'Deployer') {
    return <FaDocker />
  }
  if (deploymentType === 'Kubernetes') {
    return <FaKubernetes />
  }

  return null
}
