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
                      <a className="deploymentCard">
                        <h3 className="name">{x.display_name || x.id}</h3>
                        <section className="types">
                          <DeploymentTypeIcon
                            deploymentType={x.deployment_type}
                          />
                          <DeployerRoleIcon deployerRole={x.deployer_role} />
                        </section>
                        <section className="stats">
                          <strong>Stats</strong> <br />
                          Versions: {x.countAggregate.aggregate.count} <br />
                          Branches: {x.branchAggregate.aggregate.count}
                        </section>
                        <section className="info">
                          <strong>Last deployed</strong>
                          <br />
                          {formatDistanceToNow(
                            new Date(x.last_deployment_timestamp)
                          )}{' '}
                          ago
                          <div className="env">to {x.env}</div>
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
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 16px;
        }

        .deploymentCard {
          text-decoration: none;
          color: ${colors.midnightBlue};
          display: flex;
          flex-flow: row wrap;
          width: 100%;
          height: 100%;
          padding: 16px;

          justify-content: space-between;

          transition: all 0.2s ease-out;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .deploymentCard:hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }

        .deploymentCard > .types {
          flex-basis: 100%;
          display: flex;
          justify-content: center;
          margin: 12px 0;
        }

        .name {
          margin: 0;
          text-align: center;
          width: 100%;
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

        .grow {
          flex-grow: 1;
        }
      `}</style>
    </>
  )
}
