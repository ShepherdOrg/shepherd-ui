import format from 'date-fns/format'
import { colors } from 'utils/colors'
import { useEffect, useState } from 'react'
import {
  Configuration,
  Href,
  KubernetesConfigurationFile,
  Deployment,
  DeploymentVersion,
} from 'gql/customTypes'

interface Props {
  deployment: Deployment
  deploymentVersion: DeploymentVersion
}

export const DeploymentVersionDetails = function({
  deployment,
  deploymentVersion,
}: Props) {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    setHidden(false)
  }, [])
  return (
    <section className={`deploymentDetails ${hidden ? 'hide-opacity' : ''}`}>
      <h1>{deployment.display_name}</h1>
      <aside>
        <ul className="pellets">
          <li>version: {deploymentVersion.version}</li>
          <li>docker tag: {deploymentVersion.docker_image_tag}</li>
          <li>
            Deployed at:{' '}
            {format(
              new Date(deploymentVersion.deployed_at),
              'MMM d, yyyy h:mm a'
            )}
          </li>
        </ul>
      </aside>
      <section>
        <h3>Deployment information</h3>
        <h4>Kubernetes deployment files</h4>
        <ul>
          {deploymentVersion.kubernetes_deployment_files.map(
            (x: KubernetesConfigurationFile) =>
              x && <li key={x.path}>{x.path}</li>
          )}
        </ul>
        <h4>Last 5 commits</h4>
        <div className="codeContainer">
          <code>{deploymentVersion.last_commits}</code>
        </div>
        <dl>
          <dt>Git commit:</dt>
          <dd>
            {deploymentVersion.git_url}/{deploymentVersion.git_hash}
          </dd>
        </dl>
      </section>
      <section>
        <h3>Configuration</h3>
        <ul>
          {(deploymentVersion.configuration || []).map((x: Configuration) => (
            <li className={x.isSecret ? 'secret' : ''} key={x.key}>
              {x.key}={JSON.stringify(x.value)}
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        aside {
          overflow-x: scroll;
        }
        .pellets {
          padding: 0;
          list-style-type: none;
          display: flex;
          flex-flow: row nowrap;
          white-space: nowrap;
        }

        .deploymentDetails {
          padding: 16px;
          margin-top: 48px;
          transition: opacity 0.2s ease-out;
          opacity: 1;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }

        .deploymentDetails.hide-opacity {
          opacity: 0;
        }

        .pellets > li {
          display: inline;
          margin-right: 16px;
          padding: 8px 16px;
          border-radius: 2em;
          background: ${colors.turquoise};
          color: ${colors.white};
        }
        .codeContainer {
          overflow-x: scroll;
          background: ${colors.clouds};
          padding: 16px;
          border-radius: 16px;
        }
        code {
          color: ${colors.midnightBlue};
          white-space: pre;
          overflow-x: scroll;
          max-width: 100%;
        }
      `}</style>
    </section>
  )
}
