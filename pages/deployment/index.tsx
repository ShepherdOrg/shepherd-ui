import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { DeploymentDetails } from '../../components/deploymentDetails'
import { Sidebar } from '../../components/sidebar'
import {
  useDeployment,
  Deployment,
} from '../../src/subscriptions/useDeployment'
import {
  useDeploymentVersion,
  DeploymentVersion,
} from '../../src/subscriptions/useDeploymentVersion'
import { usePageTransition } from '../../utils/usePageTransition'
import { Curtain } from '../../components/curtain'
import omit from 'ramda/src/omit'
import apiClient from '../../src/apiClient'
import { fromNullable, Right } from 'data.either'

export default function DeploymentPage() {
  const router = useRouter()
  const deploymentId = String(router.query.id || '')
  const client = useMemo(() => apiClient(), [])

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
    if (!versionId) {
      deployment
        .chain(x => fromNullable(x.versions && x.versions.items))
        .chain(x => fromNullable(x[0]))
        .map(version => {
          router.replace({
            pathname: router.pathname,
            query: omit(['reveal'], {
              ...router.query,
              version: version.versionId,
            }),
          })
        })
    }
  }, [deployment, versionId])

  const deploymentVersion = useDeploymentVersion(versionId)

  return Right(
    (deployment: Deployment) => (deploymentVersion: DeploymentVersion) => (
      <DeploymentDetails
        deployment={deployment}
        deploymentVersion={deploymentVersion}
      />
    )
  )
    .ap(deployment)
    .ap(deploymentVersion)
    .fold(
      x =>
        x === 'loading' ? (
          <h1>Loading...</h1>
        ) : x === 'Not found' ? (
          <h1>Not found</h1>
        ) : (
          <h1>Error!</h1>
        ),
      id
    )
}

function id<T>(x: T) {
  return x
}
