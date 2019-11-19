import { FaDownload } from './icons/fa-download'
import { FaDatabase } from './icons/fa-database'
import { FaArchway } from './icons/fa-archway'

interface Props {
  deployerRole: string
  size?: number
}

export const DeployerRoleIcon = function({ deployerRole, size = 16 }: Props) {
  if (deployerRole === 'Install') {
    return <FaDownload size={size} />
  }
  if (deployerRole === 'Migration') {
    return <FaDatabase size={size} />
  }

  if (deployerRole === 'Infrastructure') {
    return <FaArchway size={size} />
  }

  return null
}
