import { FaDownload } from './icons/fa-download'
import { FaDatabase } from './icons/fa-database'
import { FaArchway } from './icons/fa-archway'

interface Props {
  deployerRole: string
  size?: number
}

export const DeployerRoleIcon = function({ deployerRole, size = 16 }: Props) {
  if (deployerRole === 'Install') {
    return <span title="Install"> <FaDownload size={size} /></span>
  }
  if (deployerRole === 'Migration') {
    return <span title="DB Migration"><FaDatabase size={size} /></span>
  }

  if (deployerRole === 'Infrastructure') {
    return <span title="Infrastructure"><FaArchway size={size} /></span>
  }

  return null
}
