// tslint:disable
// this is an auto generated file. This will be overwritten

export const getDeployment = `query GetDeployment($id: ID!) {
  getDeployment(id: $id) {
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
export const listDeployments = `query ListDeployments(
  $id: ID
  $filter: ModelDeploymentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDeployments(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
  }
}
`;
export const getDeploymentVersion = `query GetDeploymentVersion($versionId: ID!) {
  getDeploymentVersion(versionId: $versionId) {
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
export const listDeploymentVersions = `query ListDeploymentVersions(
  $versionId: ID
  $filter: ModelDeploymentVersionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDeploymentVersions(
    versionId: $versionId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
  }
}
`;
