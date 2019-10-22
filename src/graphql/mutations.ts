// tslint:disable
// this is an auto generated file. This will be overwritten

export const createDeployment = `mutation CreateDeployment($input: CreateDeploymentInput!) {
  createDeployment(input: $input) {
    id
    displayName
    description
    deploymentType
    deployerRole
    dbMigrationImage
    hyperlinks {
      title
      url
    }
    lastDeploymentTimestamp
    env
    versions {
      items {
        versionId
        version
        env
        deployedAt
        builtAt
        lastCommits
        gitUrl
        gitBranch
        gitHash
        gitCommit
        dockerImage
        dockerImageTag
        buildHostName
      }
      nextToken
    }
  }
}
`;
export const updateDeployment = `mutation UpdateDeployment($input: UpdateDeploymentInput!) {
  updateDeployment(input: $input) {
    id
    displayName
    description
    deploymentType
    deployerRole
    dbMigrationImage
    hyperlinks {
      title
      url
    }
    lastDeploymentTimestamp
    env
    versions {
      items {
        versionId
        version
        env
        deployedAt
        builtAt
        lastCommits
        gitUrl
        gitBranch
        gitHash
        gitCommit
        dockerImage
        dockerImageTag
        buildHostName
      }
      nextToken
    }
  }
}
`;
export const deleteDeployment = `mutation DeleteDeployment($input: DeleteDeploymentInput!) {
  deleteDeployment(input: $input) {
    id
    displayName
    description
    deploymentType
    deployerRole
    dbMigrationImage
    hyperlinks {
      title
      url
    }
    lastDeploymentTimestamp
    env
    versions {
      items {
        versionId
        version
        env
        deployedAt
        builtAt
        lastCommits
        gitUrl
        gitBranch
        gitHash
        gitCommit
        dockerImage
        dockerImageTag
        buildHostName
      }
      nextToken
    }
  }
}
`;
export const createDeploymentVersion = `mutation CreateDeploymentVersion($input: CreateDeploymentVersionInput!) {
  createDeploymentVersion(input: $input) {
    versionId
    version
    deployment {
      id
      displayName
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        title
        url
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
    }
    env
    deployedAt
    builtAt
    kubernetesDeploymentFiles {
      path
      content
    }
    lastCommits
    gitUrl
    gitBranch
    gitHash
    gitCommit
    dockerImage
    dockerImageTag
    buildHostName
    configuration {
      key
      value
      isSecret
    }
  }
}
`;
export const updateDeploymentVersion = `mutation UpdateDeploymentVersion($input: UpdateDeploymentVersionInput!) {
  updateDeploymentVersion(input: $input) {
    versionId
    version
    deployment {
      id
      displayName
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        title
        url
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
    }
    env
    deployedAt
    builtAt
    kubernetesDeploymentFiles {
      path
      content
    }
    lastCommits
    gitUrl
    gitBranch
    gitHash
    gitCommit
    dockerImage
    dockerImageTag
    buildHostName
    configuration {
      key
      value
      isSecret
    }
  }
}
`;
export const deleteDeploymentVersion = `mutation DeleteDeploymentVersion($input: DeleteDeploymentVersionInput!) {
  deleteDeploymentVersion(input: $input) {
    versionId
    version
    deployment {
      id
      displayName
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        title
        url
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
    }
    env
    deployedAt
    builtAt
    kubernetesDeploymentFiles {
      path
      content
    }
    lastCommits
    gitUrl
    gitBranch
    gitHash
    gitCommit
    dockerImage
    dockerImageTag
    buildHostName
    configuration {
      key
      value
      isSecret
    }
  }
}
`;
