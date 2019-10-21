import { useState, useCallback } from 'react'
import apiClient from '../src/apiClient'
import gql from 'graphql-tag'
import {
  CreateDeploymentInput,
  CreateDeploymentMutation,
  DeployerRole,
  DeploymentType,
} from '../src/API'
import { createDeployment } from '../src/graphql/mutations'

export const CreateDeployment = function() {
  const [input, setInput] = useState<CreateDeploymentInput>(() => ({
    id: '',
    displayName: '',
    deployerRole: DeployerRole.Install,
    deploymentType: DeploymentType.Kubernetes,
    dbMigrationImage: null,
    lastDeploymentTimestamp: new Date().toISOString(),
    env: 'dev',
  }))

  const createMetadata = useCallback(async () => {
    const result = await apiClient().mutate<CreateDeploymentMutation>({
      mutation: gql(createDeployment),
      variables: { input },
    })

    if (result.errors) {
      throw new Error(result.errors.map(x => x.message).join('\n'))
    }
    if (result.data) {
      return result.data
    }
  }, [input])

  return (
    <section>
      <input
        type="text"
        onChange={ev => setInput({ ...input, env: ev.currentTarget.value })}
        placeholder="env"
      />
      <br />
      <input
        type="text"
        onChange={ev => setInput({ ...input, id: ev.currentTarget.value })}
        placeholder="id"
      />
      <br />
      <input
        type="text"
        onChange={ev =>
          setInput({ ...input, displayName: ev.currentTarget.value })
        }
        placeholder="displayName"
      />
      <br />
      <select
        onChange={ev =>
          setInput({
            ...input,
            deployerRole: ev.currentTarget.value as DeployerRole,
          })
        }
      >
        {Object.keys(DeployerRole).map(x => (
          <option id={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      <br />
      <select
        onChange={ev =>
          setInput({
            ...input,
            deploymentType: ev.currentTarget.value as DeploymentType,
          })
        }
      >
        {Object.keys(DeploymentType).map(x => (
          <option id={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      <br />
      <input
        type="text"
        onChange={ev =>
          setInput({
            ...input,
            lastDeploymentTimestamp: ev.currentTarget.value,
          })
        }
        placeholder="lastDeploymentTimestamp"
      />
      <br />
      <button onClick={createMetadata}>Create!</button>
    </section>
  )
}
