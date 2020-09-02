import { darkTheme } from 'utils/colors'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getBranchesFromVersions } from 'utils/branches'
import { Branch } from './icons/branch'
import { Deployment, DeploymentBranch } from 'gql/customTypes'
import { formatDistanceStrict, isPast } from 'date-fns'

/* Prototype for readme support
const ReactMarkdown = require('react-markdown')

const input = '# Tjon api readme\n\nLots of interesting information about Tjon Service api'
*/

interface Props {
  deployment: Deployment
}

function renderBranches(branches: DeploymentBranch[], deployment: Deployment, theme: typeof darkTheme) {
  return <section className="branches">
    {branches.map((deploymentBranch) => {
      return (
        <Link
          key={deploymentBranch.name}
          href={{
            pathname: `/deployment/[id]/version/[versionId]`,
            query: { id: deployment.id, versionId: deploymentBranch.id },
          }}
          as={`/deployment/${deployment.id}/version/${encodeURIComponent(
            deploymentBranch.id,
          )}`}
        >
          <a className="branch">
            <h3>{deploymentBranch.name}</h3>
            <section>
              <strong>Last deployed</strong>
              <br/>
              {new Date(deploymentBranch.lastDeploymentTimestamp).toLocaleString()}
              <br/>

              {(deploymentBranch.isTemporary && <>
                <strong>{isPast(deploymentBranch.livesUntil)?'Removed':'Lives until' }</strong>
                <br/>
                {deploymentBranch.livesUntil.toLocaleString()} ( {formatDistanceStrict(deploymentBranch.livesUntil, new Date())} {isPast(deploymentBranch.livesUntil)?'ago':''} )
              </>)}
            </section>
          </a>
        </Link>
      )
    })}
    <style jsx>{`
        h1 {
          font-size: 48px;
        }
        h3 {
          width: 100%;
          text-align: center;
          margin: 0;
        }

        .branches {
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 16px;
        }

        .branch {
          text-decoration: none;
          color: ${theme.code.color};
          display: flex;
          flex-flow: row wrap;
          width: 100%;
          height: 100%;
          padding: 16px;

          justify-content: space-between;

          transition: all 0.2s ease-out;
          box-shadow: 0px 2px 5px ${theme.shadow};
        }

        .branch:hover {
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
        }

      `}</style>

  </section>
}

export const DeploymentDetails = function({ deployment }: Props) {
  const [hidden, setHidden] = useState(true)
  const versions = deployment.deployment_versions || []

  useEffect(() => {
    setHidden(false)
  }, [])

  const branches = getBranchesFromVersions(versions)
  const theme = darkTheme
  return (
    <section className={`deploymentDetails ${hidden ? 'hide-opacity' : ''}`}>
      <h1>{deployment.env}: {deployment.display_name}</h1>

      {renderBranches(branches.filter((b)=>{return b.isMaster}), deployment, theme)}

      {/* Prototype for readme

      <h2>Readme</h2>
      <div className="readmeContainer">
        <ReactMarkdown source={input} />
      </div>
*/}
      <h2>Links</h2>
      <ul>
        {deployment.hyperlinks.map(link => (
          <li key={link.url}>
            <a href={link.url} rel="noopener noreferrer" target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <h2>
        <Branch size={20}/> Deployed branches
      </h2>
      {renderBranches(branches.filter((b)=>{return b.isTemporary && b.isAlive}), deployment, theme)}
      <h2>
        <Branch size={20}/> Removed branches
      </h2>
      {renderBranches(branches.filter((b)=>{return  b.isTemporary && !b.isAlive}), deployment, theme)}
      {/* Dev support code
      <div className="codeContainer">
        <code>{JSON.stringify(deployment, null, 2)}</code>
      </div>
*/}
      <style jsx>{`
        h1 {
          font-size: 48px;
        }
        h3 {
          width: 100%;
          text-align: center;
          margin: 0;
        }

      `}</style>
    </section>
  )
}
