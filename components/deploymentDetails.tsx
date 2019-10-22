import { GetDeploymentQuery, GetDeploymentVersionQuery } from '../src/API'
import format from 'date-fns/format'
import { colors } from '../src/colors'

interface Props {
  deployment: NonNullable<GetDeploymentQuery['getDeployment']>
  deploymentVersion: NonNullable<
    GetDeploymentVersionQuery['getDeploymentVersion']
  >
}

export const DeploymentDetails = function({
  deployment,
  deploymentVersion,
}: Props) {
  return (
    <section className="deploymentDetails">
      <h1>{deployment.displayName}</h1>
      <aside>
        <ul className="pellets">
          <li>version: {deploymentVersion.version}</li>
          <li>docker tag: {deploymentVersion.dockerImageTag}</li>
          <li>
            Deployed at:{' '}
            {format(
              new Date(deploymentVersion.deployedAt),
              'MMM d, yyyy h:mm a'
            )}
          </li>
        </ul>
      </aside>
      <section>
        <h3>Deployment information</h3>
        <h4>Kubernetes deployment files</h4>
        <ul>
          {deploymentVersion.kubernetesDeploymentFiles &&
            deploymentVersion.kubernetesDeploymentFiles.items &&
            deploymentVersion.kubernetesDeploymentFiles.items.map(
              x => x && <li key={x.path}>{x.path}</li>
            )}
        </ul>
        <h4>Last 5 commits</h4>
        <div className="codeContainer">
          <code>{deploymentVersion.lastCommits}</code>
        </div>
        <dl>
          <dt>Git commit:</dt>
          <dd>
            {deploymentVersion.gitUrl}/{deploymentVersion.gitHash}
          </dd>
        </dl>
      </section>
      <section>
        <h3>Configuration</h3>
        <ul>
          {(deploymentVersion.configuration || []).map(x => (
            <li className={x.isSecret ? 'secret' : ''} key={x.key}>
              {x.key}={JSON.stringify(x.value)}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Links</h3>
        <ul>
          {((deployment.hyperlinks && deployment.hyperlinks.items) || []).map(
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
        h1 {
          text-align: center;
        }

        .pellets {
          padding: 0;
          list-style-type: none;
        }

        .deploymentDetails {
          background-color: ${colors.clouds};
          padding: 16px;
          border-radius: 12px;
          margin-top: 48px;
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
          background: ${colors.midnight_blue};
          padding: 16px;
          border-radius: 16px;
        }
        code {
          color: ${colors.clouds};
          white-space: pre;
          overflow-x: scroll;
          max-width: 100%;
        }
      `}</style>
    </section>
  )
}
