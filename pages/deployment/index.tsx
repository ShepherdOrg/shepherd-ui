import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { DeploymentDetails } from 'components/deploymentDetails'
import { Sidebar } from 'components/sidebar'
import { useDeployment } from 'utils/subscriptions/useDeployment'
import { useDeploymentVersion } from 'utils/subscriptions/useDeploymentVersion'
import { usePageTransition } from 'utils/usePageTransition'
import { Curtain } from 'components/curtain'
import omit from 'ramda/src/omit'
import { fromNullable, Right } from 'data.either'
import { colors } from 'utils/colors'
import { GQLdeployment_versions, GQLdeployments } from 'gql/apiTypes'

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
  const deploymentVersion = useDeploymentVersion(versionId)
  const [hasVersion, setHasVersion] = useState(true)

  useEffect(() => {
    setHasVersion(true)
  }, [deploymentId])
  useEffect(() => {
    if (!versionId) {
      deployment
        .chain(x => fromNullable(x.deployment_versions))
        .chain(x => fromNullable(x[0]))
        .fold(
          () => {
            setHasVersion(false)
          },
          version => {
            setHasVersion(true)
            router.replace({
              pathname: router.pathname,
              query: omit(['reveal'], {
                ...router.query,
                version: version.id,
              }),
            })
          }
        )
    }
  }, [deployment, versionId])

  if (!hasVersion) {
    return (
      <section className="error">
        <h1>This deployment has never been deployed</h1>
        <style jsx>{`
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            color ${colors.clouds};
          }
        `}</style>
      </section>
    )
  }
  return Right(
    (deploymentVersion: GQLdeployment_versions) => (
      deployment: GQLdeployments
    ) => (
      <DeploymentDetails
        deployment={deployment}
        deploymentVersion={deploymentVersion}
      />
    )
  )
    .ap(deploymentVersion)
    .ap(deployment)
    .fold(
      x =>
        x === 'loading' ? (
          <h1>Loading...</h1>
        ) : x === 'Not found' ? (
          <h1>Not found</h1>
        ) : (
          <h1>Error!</h1>
        ),
      x => x
    )
}
