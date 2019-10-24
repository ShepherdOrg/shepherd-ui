import { DeployerRole } from '../src/API'
import { FaDownload } from './icons/fa-download'
import { FaDatabase } from './icons/fa-database'
import { FaArchway } from './icons/fa-archway'

interface Props {
  deployerRole: DeployerRole
}

export const DeployerRoleIcon = function({ deployerRole }: Props) {
  if (deployerRole === DeployerRole.Install) {
    return <FaDownload />
  }
  if (deployerRole === DeployerRole.Migration) {
    return <FaDatabase />
  }

  if (deployerRole === DeployerRole.Infrastructure) {
    return <FaArchway />
  }

  return null
}
