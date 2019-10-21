// tslint:disable
// this is an auto generated file. This will be overwritten

export const getDeployment = `query GetDeployment($id: ID!) {
  getDeployment(id: $id) {
    id
    displayName
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
    nextToken
  }
}
`;
export const getKubernetesDeploymentFile = `query GetKubernetesDeploymentFile($id: ID!) {
  getKubernetesDeploymentFile(id: $id) {
    path
    content
    version {
      versionId
      version
      deployment {
        id
        displayName
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
export const listKubernetesDeploymentFiles = `query ListKubernetesDeploymentFiles(
  $filter: ModelKubernetesDeploymentFileFilterInput
  $limit: Int
  $nextToken: String
) {
  listKubernetesDeploymentFiles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      path
      content
      version {
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
    }
    nextToken
  }
}
`;
export const getShepherdHref = `query GetShepherdHref($id: ID!) {
  getShepherdHref(id: $id) {
    title
    url
    metadata {
      id
      displayName
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
export const listShepherdHrefs = `query ListShepherdHrefs(
  $filter: ModelShepherdHrefFilterInput
  $limit: Int
  $nextToken: String
) {
  listShepherdHrefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      title
      url
      metadata {
        id
        displayName
        deploymentType
        deployerRole
        dbMigrationImage
        lastDeploymentTimestamp
        env
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
    nextToken
  }
}
`;
