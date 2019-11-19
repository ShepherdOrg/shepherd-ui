import { FaDocker } from './icons/fa-docker'
import { FaKubernetes } from './icons/kubernetes'

interface Props {
  deploymentType: string
  size?: number
}

export const DeploymentTypeIcon = function({
  deploymentType,
  size = 16,
}: Props) {
  if (deploymentType === 'Deployer') {
    return <FaDocker size={size} />
  }
  if (deploymentType === 'Kubernetes') {
    return <FaKubernetes size={size} />
  }

  return null
}
