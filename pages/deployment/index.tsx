import { useRouter } from 'next/router'
import { useState, useMemo, useEffect } from 'react'
import { DeploymentDetails } from '../../components/deploymentDetails'
import { Sidebar } from '../../components/sidebar'
import { useDeployment } from '../../src/subscriptions/useDeployment'
import { useDeploymentVersion } from '../../src/subscriptions/useDeploymentVersion'

export default function DeploymentPage() {
  const router = useRouter()
  const deploymentId = String(router.query.id || '')
  const versionId = String(router.query.version || '')

  const deployment = useDeployment(deploymentId)

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
      router.push({
        pathname: router.pathname,
        query: { ...router.query, version: version.versionId },
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
    <>
      <Sidebar />
      <main>
        <DeploymentDetails
          deployment={deployment.data.getDeployment}
          deploymentVersion={deploymentVersion.data.getDeploymentVersion}
        />
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
