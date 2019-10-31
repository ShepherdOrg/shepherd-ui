import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { colors } from 'utils/colors'
import { useDeploymentList } from 'utils/subscriptions/useDeploymentList'
import { usePageTransition } from 'utils/usePageTransition'
import { Curtain } from './curtain'
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
  const deploymentList = useDeploymentList()
  const { startExit, leaving } = usePageTransition()
  const router = useRouter()
  const navigateToDeployment = useCallback(
    async (deploymentId: string) => {
      await startExit(async () => {
        await router.push(
          `/deployment?id=${encodeURIComponent(deploymentId)}&reveal=true`,
          `/deployment?id=${encodeURIComponent(deploymentId)}`
        )
        window.scrollTo(0, 0)
      })
    },
    [startExit]
  )

  return (
    <>
      <Curtain visible={leaving} />
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
                    <Link href={`/deployment?id=${x.id}`}>
                      <a
                        onClick={ev => (
                          ev.preventDefault(), navigateToDeployment(x.id)
                        )}
                      >
                        <section className="center">
                          <DeploymentTypeIcon
                            deploymentType={x.deployment_type}
                          />
                          <DeployerRoleIcon deployerRole={x.deployer_role} />
                        </section>
                        <section className="grow">
                          <div className="name">{x.display_name || x.id}</div>
                        </section>
                        <section className="info">
                          <div className="time">
                            {formatDistanceToNow(
                              new Date(x.last_deployment_timestamp)
                            )}{' '}
                            ago
                          </div>
                          <div className="env">{x.env}</div>
                        </section>
                      </a>
                    </Link>
                  </li>
                )
            )
        )}
      </ul>
      <style jsx>{`
        .header {
          font-weight: 600;
        }

        .deploymentType > img {
          height: 48px;
          max-height: 48px;
          width: auto;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        li {
          margin-top: 16px;
        }
        li.item > a {
          background: ${colors.clouds};
          text-decoration: none;
          color: ${colors.midnightBlue};
          display: flex;
          flex-flow: row wrap;
          width: 100%;

          justify-content: space-between;

          box-shadow: 0;
          transition: all 0.2s ease-out;
          border-radius: 12px;
        }

        li.item > a:hover {
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        }

        li.item > a > section {
          padding: 16px;
          border-right: 1px solid ${colors.concrete};
        }

        li.item > a > section:last-child {
          border-right: 0;
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
