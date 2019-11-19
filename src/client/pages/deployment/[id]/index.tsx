import { useRouter } from 'next/router'
import { DeploymentDetails } from 'components/deploymentDetails'
import { useDeployment } from 'utils/subscriptions/useDeployment'

export default function DeploymentPage() {
  const router = useRouter()
  const deploymentId = String(router.query.id || '')

  return (
    <>
      <main>
        <DeploymentDetailsLoader deploymentId={deploymentId} />
      </main>

      <style jsx>{`
        main {
          max-width: 1000px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

function DeploymentDetailsLoader({ deploymentId }: { deploymentId: string }) {
  const deployment = useDeployment(deploymentId)

  return deployment
    .map(deployment => <DeploymentDetails deployment={deployment} />)
    .getOrElse(null)
}
