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
    return <span title="Docker deployer"><FaDocker size={size}/></span>
  }
  if (deploymentType === 'Kubernetes') {
    return <span title="Kubernetes"><FaKubernetes size={size} /></span>
  }

  return null
}
