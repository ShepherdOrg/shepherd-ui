import { useRouter } from 'next/router'
import { useSubscription } from '../../src/subscriptions/subscribe'
import gql from 'graphql-tag'
import { getDeployment, getDeploymentVersion } from '../../src/graphql/queries'
import {
  onUpdateDeployment,
  onUpdateDeploymentVersion,
} from '../../src/graphql/subscriptions'
import {
  GetDeploymentQuery,
  OnUpdateDeploymentSubscription,
  GetDeploymentVersionQuery,
  OnUpdateDeploymentVersionSubscription,
} from '../../src/API'
import format from 'date-fns/format'
import { useState, useMemo, useEffect } from 'react'

export default function DeploymentDetails() {
  const router = useRouter()
  const [version, setVersion] = useState<string>('')

  const deploymentId = router.query.id

  const deployment = useSubscription<
    GetDeploymentQuery,
    OnUpdateDeploymentSubscription
  >({
    query: useMemo(
      () => ({ query: gql(getDeployment), variables: { id: deploymentId } }),
      [deploymentId]
    ),
    subscription: useMemo(
      () => ({
        query: gql(onUpdateDeployment),
        variables: { id: deploymentId },
      }),
      [deploymentId]
    ),
    onSubscriptionMsg: (previous, next) => {
      if (previous.getDeployment) {
        previous.getDeployment = {
          ...previous.getDeployment,
          ...next.onUpdateDeployment,
        }
      }
      return previous
    },
  })

  useEffect(() => {
    if (
      !deployment.loading &&
      !('error' in deployment) &&
      deployment.data.getDeployment &&
      deployment.data.getDeployment.versions &&
      deployment.data.getDeployment.versions.items
    ) {
      const version = deployment.data.getDeployment.versions.items[0]
      if (version && version.versionId) setVersion(version.versionId)
    }
  }, [deployment])

  const deploymentVersion = useSubscription<
    GetDeploymentVersionQuery,
    OnUpdateDeploymentVersionSubscription
  >({
    query: useMemo(
      () => ({
        query: gql(getDeploymentVersion),
        variables: { versionId: version },
      }),
      [version]
    ),
    subscription: useMemo(
      () => ({
        query: gql(onUpdateDeploymentVersion),
        variables: { versionId: version },
      }),
      [version]
    ),
    onSubscriptionMsg: (prev, next) => {
      if (prev.getDeploymentVersion) {
        prev.getDeploymentVersion = {
          ...prev.getDeploymentVersion,
          ...next.onUpdateDeploymentVersion,
        }
      }
      return prev
    },
  })

  if (
    !deploymentId ||
    !version ||
    deployment.loading ||
    deploymentVersion.loading
  )
    return <h1>Loading...</h1>
  if ('error' in deployment || 'error' in deploymentVersion)
    return <h1>Error!</h1>
  if (!deployment.data.getDeployment) return <h1>Not Found!</h1>
  if (!deploymentVersion.data.getDeploymentVersion)
    return <h1>No deployment version found</h1>
  const latestVersion = deploymentVersion.data.getDeploymentVersion
  return (
    <>
      <h1>{deployment.data.getDeployment.displayName}</h1>
      <aside>
        <ul>
          <li>version: {latestVersion.version}</li>
          <li>docker tag: {latestVersion.dockerImageTag}</li>
          <li>
            Deployed at:{' '}
            {format(new Date(latestVersion.deployedAt), 'MMM d, yyyy h:mm a')}
          </li>
        </ul>
      </aside>
      <section>
        <h3>Deployment information</h3>
        <h4>Last 5 commits</h4>
        <code>{latestVersion.lastCommits}</code>
        <dl>
          <dt>Git commit:</dt>
          <dd>
            {latestVersion.gitUrl}/{latestVersion.gitHash}
          </dd>
        </dl>
      </section>
      <section>
        <h3>Configuration</h3>
        <ul>
          {(latestVersion.configuration || []).map(x => (
            <li className={x.isSecret ? 'secret' : ''} key={x.key}>
              {x.key}={JSON.stringify(x.value)}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Links</h3>
        <ul>
          {(
            (deployment.data.getDeployment.hyperlinks &&
              deployment.data.getDeployment.hyperlinks.items) ||
            []
          ).map(
            x =>
              x && (
                <li key={x.url}>
                  <a href={x.url} target="__blank">
                    {x.title}
                  </a>
                </li>
              )
          )}
        </ul>
      </section>
      <style jsx>{`
        code {
          white-space: pre;
        }
      `}</style>
    </>
  )
}
