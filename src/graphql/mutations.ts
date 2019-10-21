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
      items {
        title
        url
      }
      nextToken
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
      items {
        title
        url
      }
      nextToken
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
      items {
        title
        url
      }
      nextToken
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
export const createKubernetesDeploymentFile = `mutation CreateKubernetesDeploymentFile(
  $input: CreateKubernetesDeploymentFileInput!
) {
  createKubernetesDeploymentFile(input: $input) {
    path
    content
    version {
      versionId
      version
      deployment {
        id
        displayName
        description
        deploymentType
        deployerRole
        dbMigrationImage
        lastDeploymentTimestamp
        env
      }
      env
      deployedAt
      builtAt
      kubernetesDeploymentFiles {
        nextToken
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
}
`;
export const updateKubernetesDeploymentFile = `mutation UpdateKubernetesDeploymentFile(
  $input: UpdateKubernetesDeploymentFileInput!
) {
  updateKubernetesDeploymentFile(input: $input) {
    path
    content
    version {
      versionId
      version
      deployment {
        id
        displayName
        description
        deploymentType
        deployerRole
        dbMigrationImage
        lastDeploymentTimestamp
        env
      }
      env
      deployedAt
      builtAt
      kubernetesDeploymentFiles {
        nextToken
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
}
`;
export const deleteKubernetesDeploymentFile = `mutation DeleteKubernetesDeploymentFile(
  $input: DeleteKubernetesDeploymentFileInput!
) {
  deleteKubernetesDeploymentFile(input: $input) {
    path
    content
    version {
      versionId
      version
      deployment {
        id
        displayName
        description
        deploymentType
        deployerRole
        dbMigrationImage
        lastDeploymentTimestamp
        env
      }
      env
      deployedAt
      builtAt
      kubernetesDeploymentFiles {
        nextToken
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
}
`;
export const createShepherdHref = `mutation CreateShepherdHref($input: CreateShepherdHrefInput!) {
  createShepherdHref(input: $input) {
    title
    url
    metadata {
      id
      displayName
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        nextToken
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
    }
  }
}
`;
export const updateShepherdHref = `mutation UpdateShepherdHref($input: UpdateShepherdHrefInput!) {
  updateShepherdHref(input: $input) {
    title
    url
    metadata {
      id
      displayName
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        nextToken
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
    }
  }
}
`;
export const deleteShepherdHref = `mutation DeleteShepherdHref($input: DeleteShepherdHrefInput!) {
  deleteShepherdHref(input: $input) {
    title
    url
    metadata {
      id
      displayName
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        nextToken
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
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
        nextToken
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
      items {
        path
        content
      }
      nextToken
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
        nextToken
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
      items {
        path
        content
      }
      nextToken
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
        nextToken
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
      items {
        path
        content
      }
      nextToken
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
