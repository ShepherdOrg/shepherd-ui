import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Sidebar } from 'components/sidebar'
import { useDeployment } from 'utils/subscriptions/useDeployment'
import { useDeploymentVersion } from 'utils/subscriptions/useDeploymentVersion'
import omit from 'ramda/src/omit'
import { fromNullable, Right } from 'data.either'
import { colors } from 'utils/colors'
import Head from 'next/head'
import { DeploymentVersionDetails } from 'components/deploymentVersionDetails'
import { Deployment, DeploymentVersion } from 'gql/customTypes'

export default function DeploymentPage() {
  const router = useRouter()
  const deploymentId = String(router.query.id || '')
  const versionId = String(router.query.versionId || '')
  const deployment = useDeployment(deploymentId)
  const version = useDeploymentVersion(versionId)

  const detailsVdom = Right(
    (deployment: Deployment) => (version: DeploymentVersion) => (
      <DeploymentVersionDetails
        deployment={deployment}
        deploymentVersion={version}
      />
    )
  )
    .ap(deployment)
    .ap(version)
    .getOrElse(null)

  return (
    <>
      <Sidebar />
      <main>
        <div className="container">{detailsVdom}</div>
      </main>

      <style jsx>{`
        main {
          margin-left: 256px;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
