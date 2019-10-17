// tslint:disable
// this is an auto generated file. This will be overwritten

export const getHerdSpec = `query GetHerdSpec($id: ID!) {
  getHerdSpec(id: $id) {
    key
    image
    imagetag
    description
  }
}
`;
export const listHerdSpecs = `query ListHerdSpecs(
  $filter: ModelHerdSpecFilterInput
  $limit: Int
  $nextToken: String
) {
  listHerdSpecs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      key
      image
      imagetag
      description
    }
    nextToken
  }
}
`;
export const getShepherdMetadata = `query GetShepherdMetadata(
  $id: String!
  $lastDeploymentTimestamp: AWSDateTime!
) {
  getShepherdMetadata(
    id: $id
    lastDeploymentTimestamp: $lastDeploymentTimestamp
  ) {
    id
    displayName
    deploymentType
    dbMigrationImage
    lastCommits
    gitUrl
    gitHash
    buildDate
    gitCommit
    dockerImageTag
    buildHostName
    hyperlinks {
      items {
        title
        url
      }
      nextToken
    }
    herdSpec {
      key
      image
      imagetag
      description
    }
    lastDeploymentTimestamp
    deploymentStates {
      items {
        new
        key
        modified
        operation
        version
        lastVersion
        timestamp
        signature
        env
      }
      nextToken
    }
  }
}
`;
export const listShepherdMetadatas = `query ListShepherdMetadatas(
  $id: String
  $lastDeploymentTimestamp: ModelStringKeyConditionInput
  $filter: ModelShepherdMetadataFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listShepherdMetadatas(
    id: $id
    lastDeploymentTimestamp: $lastDeploymentTimestamp
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      displayName
      deploymentType
      dbMigrationImage
      lastCommits
      gitUrl
      gitHash
      buildDate
      gitCommit
      dockerImageTag
      buildHostName
      hyperlinks {
        nextToken
      }
      herdSpec {
        key
        image
        imagetag
        description
      }
      lastDeploymentTimestamp
      deploymentStates {
        nextToken
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
      dbMigrationImage
      lastCommits
      gitUrl
      gitHash
      buildDate
      gitCommit
      dockerImageTag
      buildHostName
      hyperlinks {
        nextToken
      }
      herdSpec {
        key
        image
        imagetag
        description
      }
      lastDeploymentTimestamp
      deploymentStates {
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
        dbMigrationImage
        lastCommits
        gitUrl
        gitHash
        buildDate
        gitCommit
        dockerImageTag
        buildHostName
        lastDeploymentTimestamp
      }
    }
    nextToken
  }
}
`;
export const getDeploymentState = `query GetDeploymentState($id: ID!) {
  getDeploymentState(id: $id) {
    deployment {
      id
      displayName
      deploymentType
      dbMigrationImage
      lastCommits
      gitUrl
      gitHash
      buildDate
      gitCommit
      dockerImageTag
      buildHostName
      hyperlinks {
        nextToken
      }
      herdSpec {
        key
        image
        imagetag
        description
      }
      lastDeploymentTimestamp
      deploymentStates {
        nextToken
      }
    }
    new
    key
    modified
    operation
    version
    lastVersion
    timestamp
    signature
    env
  }
}
`;
export const listDeploymentStates = `query ListDeploymentStates(
  $filter: ModelDeploymentStateFilterInput
  $limit: Int
  $nextToken: String
) {
  listDeploymentStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      deployment {
        id
        displayName
        deploymentType
        dbMigrationImage
        lastCommits
        gitUrl
        gitHash
        buildDate
        gitCommit
        dockerImageTag
        buildHostName
        lastDeploymentTimestamp
      }
      new
      key
      modified
      operation
      version
      lastVersion
      timestamp
      signature
      env
    }
    nextToken
  }
}
`;
