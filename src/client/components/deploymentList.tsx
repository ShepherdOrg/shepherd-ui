import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import { useState } from 'react'
import { colors } from 'utils/colors'
import { useDeploymentList } from 'utils/subscriptions/useDeploymentList'
import { DeploymentTypeIcon } from './deploymentTypeIcon'
import { DeployerRoleIcon } from './deployerRoleIcon'
import { ApolloError } from 'apollo-client'

function renderErrorText(x: ApolloError | string) {
  if (x instanceof ApolloError) {
    return x.message
  } else {
    return x
  }
}

export const DeploymentList = function() {
  const [filter, setFilter] = useState<string>('')
  const deploymentList = useDeploymentList(filter)

  return (
    <>
      <input
        type="text"
        onChange={ev => setFilter(ev.currentTarget.value)}
        placeholder="Filter"
      />
      <ul className="deploymentList">
        {deploymentList.fold(
          x =>
            x === 'Not found' ? (
              <li className="item">
                <a>Not found</a>
              </li>
            ) : x === 'loading' ? (
              <li className="item">
                <a>
                  <section className="center">
                    <h1>Loading</h1>
                  </section>
                </a>
              </li>
            ) : (
              <li className="item">Error loading! {renderErrorText(x)}</li>
            ),
          items =>
            items.map(
              x =>
                x && (
                  <li key={x.id} className="item">
                    <Link
                      href={`/deployment/[id]?reveal=true&id=${x.id}`}
                      as={`/deployment/${x.id}`}
                      scroll
                    >
                      <a className="deploymentCardLink">
                        <section className="deploymentCardSection">
                          <div className="deploymentTitle"
                          >
                            <h3 className="name">{x.display_name || x.id}</h3>
                            <DeploymentTypeIcon
                              deploymentType={x.deployment_type}
                            />
                            <DeployerRoleIcon deployerRole={x.deployer_role} />
                          </div>
                          <div
                            style={{
                              display: 'inline-block',
                              overflow: 'clip',
                            }}
                          >
                            <div className="environment">
                              <div className="env">{x.env}</div>
                              <div className="info">
                                <strong>Latest version </strong>
                                {x.latest_version &&
                                x.latest_version.aggregate.max.version}
                                <br />
                                {formatDistanceToNow(
                                  new Date(x.last_deployment_timestamp)
                                )}{' '}
                                ago
                              </div>
                            </div>
                          </div>
                        </section>
                      </a>
                    </Link>
                  </li>
                )
            )
        )}
      </ul>
      <style jsx>{`
        input {
          height: 32px;
          font-size: 16px;
          outline: none;
          -webkit-appearance: none;
          border: 0;
          padding: 8px 16px;
          margin: 8px 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }
        .header {
          font-weight: 600;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: inline;
        }

        .deploymentTitle {
          display: inline-block;
          overflow: hidden;
        }

        .deploymentCardLink {
          text-decoration: none;
          color: ${colors.midnightBlue};
          display: flex;
          flex-flow: row wrap;
          width: 100%;
          height: 100%;
          padding: 16px;
          margin-bottom: 2px;

          justify-content: space-between;

          transition: all 0.2s ease-out;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .deploymentCardLink:hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }

        .deploymentCardLink > .types {
          flex-basis: 100%;
          display: flex;
          justify-content: left;
          margin: 12px 0;
        }

        .deploymentCardSection {
          width: 100%;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 3fr 1fr;
          grid-gap: 16px;
        }

        .environment {
          min-width: 150px
        }

        .name {
          margin: 0;
          text-align: left;
        }

        .info {
          text-align: right;
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        section.info {
          min-width: 128px;
        }

        .name {
          font-size: 20px;
        }
        .env {
          text-align: right;          
          text-transform: uppercase;
          font-size: 18px;
          font-weight: bold;
        }

        .grow {
          flex-grow: 1;
        }
      `}</style>
    </>
  )
}
