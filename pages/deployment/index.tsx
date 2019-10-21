import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DeploymentDetails } from '../../components/deploymentDetails'
import { Sidebar } from '../../components/sidebar'
import { useDeployment } from '../../src/subscriptions/useDeployment'
import { useDeploymentVersion } from '../../src/subscriptions/useDeploymentVersion'
import { usePageTransition } from '../../utils/usePageTransition'
import { Curtain } from '../../components/curtain'

export default function DeploymentPage() {
  const router = useRouter()
  const deploymentId = String(router.query.id || '')

  const { entering, leaving } = usePageTransition()

  return (
    <>
      <Curtain visible={entering || leaving} />
      <Sidebar />
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
  const router = useRouter()
  const deployment = useDeployment(deploymentId)
  const versionId = String(router.query.version || '')

  useEffect(() => {
    if (
      !versionId &&
      !deployment.loading &&
      !('error' in deployment) &&
      deployment.data.getDeployment &&
      deployment.data.getDeployment.versions &&
      deployment.data.getDeployment.versions.items &&
      deployment.data.getDeployment.versions.items[0]
    ) {
      const version = deployment.data.getDeployment.versions.items[0]
      router.replace({
        pathname: router.pathname,
        query: {
          ...router.query,
          version: version.versionId,
          reveal: undefined,
        },
      })
    }
  }, [deployment, versionId])

  const deploymentVersion = useDeploymentVersion(versionId)

  if (
    !deploymentId ||
    !versionId ||
    deployment.loading ||
    deploymentVersion.loading
  )
    return <h1>Loading...</h1>
  if ('error' in deployment || 'error' in deploymentVersion)
    return <h1>Error!</h1>
  if (!deployment.data.getDeployment) return <h1>Not Found!</h1>
  if (!deploymentVersion.data.getDeploymentVersion)
    return <h1>No deployment version found</h1>

  return (
    <DeploymentDetails
      deployment={deployment.data.getDeployment}
      deploymentVersion={deploymentVersion.data.getDeploymentVersion}
    />
  )
}
