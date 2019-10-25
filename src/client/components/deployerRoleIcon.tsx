import { FaDownload } from './icons/fa-download'
import { FaDatabase } from './icons/fa-database'
import { FaArchway } from './icons/fa-archway'

interface Props {
  deployerRole: string
}

export const DeployerRoleIcon = function({ deployerRole }: Props) {
  if (deployerRole === 'Install') {
    return <FaDownload />
  }
  if (deployerRole === 'Migration') {
    return <FaDatabase />
  }

  if (deployerRole === 'Infrastructure') {
    return <FaArchway />
  }

  return null
}
