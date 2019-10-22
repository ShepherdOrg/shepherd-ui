/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateDeploymentInput = {
  id: string,
  displayName: string,
  description?: string | null,
  deploymentType: DeploymentType,
  deployerRole: DeployerRole,
  dbMigrationImage?: string | null,
  hyperlinks: Array< ShepherdHrefInput >,
  lastDeploymentTimestamp: string,
  env: string,
};

export enum DeploymentType {
  Kubernetes = "Kubernetes",
  Deployer = "Deployer",
}


export enum DeployerRole {
  Infrastructure = "Infrastructure",
  Migration = "Migration",
  Install = "Install",
}


export type ShepherdHrefInput = {
  title: string,
  url: string,
};

export type UpdateDeploymentInput = {
  id: string,
  displayName?: string | null,
  description?: string | null,
  deploymentType?: DeploymentType | null,
  deployerRole?: DeployerRole | null,
  dbMigrationImage?: string | null,
  hyperlinks?: Array< ShepherdHrefInput > | null,
  lastDeploymentTimestamp?: string | null,
  env?: string | null,
};

export type DeleteDeploymentInput = {
  id: string,
};

export type CreateDeploymentVersionInput = {
  versionId: string,
  version: string,
  env: string,
  deployedAt: string,
  builtAt: string,
  kubernetesDeploymentFiles: Array< KubernetesDeploymentFileInput >,
  lastCommits: string,
  gitUrl: string,
  gitBranch: string,
  gitHash: string,
  gitCommit: string,
  dockerImage: string,
  dockerImageTag: string,
  buildHostName: string,
  configuration?: Array< ConfigurationItemInput > | null,
  deploymentVersionDeploymentId: string,
};

export type KubernetesDeploymentFileInput = {
  path: string,
  content: string,
};

export type ConfigurationItemInput = {
  key: string,
  value: string,
  isSecret: boolean,
};

export type UpdateDeploymentVersionInput = {
  versionId: string,
  version?: string | null,
  env?: string | null,
  deployedAt?: string | null,
  builtAt?: string | null,
  kubernetesDeploymentFiles?: Array< KubernetesDeploymentFileInput > | null,
  lastCommits?: string | null,
  gitUrl?: string | null,
  gitBranch?: string | null,
  gitHash?: string | null,
  gitCommit?: string | null,
  dockerImage?: string | null,
  dockerImageTag?: string | null,
  buildHostName?: string | null,
  configuration?: Array< ConfigurationItemInput > | null,
  deploymentVersionDeploymentId?: string | null,
};

export type DeleteDeploymentVersionInput = {
  versionId: string,
};

export type ModelDeploymentFilterInput = {
  id?: ModelIDFilterInput | null,
  displayName?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  deploymentType?: ModelDeploymentTypeFilterInput | null,
  deployerRole?: ModelDeployerRoleFilterInput | null,
  dbMigrationImage?: ModelStringFilterInput | null,
  lastDeploymentTimestamp?: ModelStringFilterInput | null,
  env?: ModelStringFilterInput | null,
  and?: Array< ModelDeploymentFilterInput | null > | null,
  or?: Array< ModelDeploymentFilterInput | null > | null,
  not?: ModelDeploymentFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelDeploymentTypeFilterInput = {
  eq?: DeploymentType | null,
  ne?: DeploymentType | null,
};

export type ModelDeployerRoleFilterInput = {
  eq?: DeployerRole | null,
  ne?: DeployerRole | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDeploymentVersionFilterInput = {
  versionId?: ModelIDFilterInput | null,
  version?: ModelStringFilterInput | null,
  env?: ModelStringFilterInput | null,
  deployedAt?: ModelStringFilterInput | null,
  builtAt?: ModelStringFilterInput | null,
  lastCommits?: ModelStringFilterInput | null,
  gitUrl?: ModelStringFilterInput | null,
  gitBranch?: ModelStringFilterInput | null,
  gitHash?: ModelStringFilterInput | null,
  gitCommit?: ModelStringFilterInput | null,
  dockerImage?: ModelStringFilterInput | null,
  dockerImageTag?: ModelStringFilterInput | null,
  buildHostName?: ModelStringFilterInput | null,
  and?: Array< ModelDeploymentVersionFilterInput | null > | null,
  or?: Array< ModelDeploymentVersionFilterInput | null > | null,
  not?: ModelDeploymentVersionFilterInput | null,
};

export type CreateDeploymentMutationVariables = {
  input: CreateDeploymentInput,
};

export type CreateDeploymentMutation = {
  createDeployment:  {
    __typename: "Deployment",
    id: string,
    displayName: string,
    description: string | null,
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  Array< {
      __typename: "ShepherdHref",
      title: string,
      url: string,
    } >,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
        version: string,
        env: string,
        deployedAt: string,
        builtAt: string,
        lastCommits: string,
        gitUrl: string,
        gitBranch: string,
        gitHash: string,
        gitCommit: string,
        dockerImage: string,
        dockerImageTag: string,
        buildHostName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateDeploymentMutationVariables = {
  input: UpdateDeploymentInput,
};

export type UpdateDeploymentMutation = {
  updateDeployment:  {
    __typename: "Deployment",
    id: string,
    displayName: string,
    description: string | null,
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  Array< {
      __typename: "ShepherdHref",
      title: string,
      url: string,
    } >,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
        version: string,
        env: string,
        deployedAt: string,
        builtAt: string,
        lastCommits: string,
        gitUrl: string,
        gitBranch: string,
        gitHash: string,
        gitCommit: string,
        dockerImage: string,
        dockerImageTag: string,
        buildHostName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteDeploymentMutationVariables = {
  input: DeleteDeploymentInput,
};

export type DeleteDeploymentMutation = {
  deleteDeployment:  {
    __typename: "Deployment",
    id: string,
    displayName: string,
    description: string | null,
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  Array< {
      __typename: "ShepherdHref",
      title: string,
      url: string,
    } >,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
        version: string,
        env: string,
        deployedAt: string,
        builtAt: string,
        lastCommits: string,
        gitUrl: string,
        gitBranch: string,
        gitHash: string,
        gitCommit: string,
        dockerImage: string,
        dockerImageTag: string,
        buildHostName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateDeploymentVersionMutationVariables = {
  input: CreateDeploymentVersionInput,
};

export type CreateDeploymentVersionMutation = {
  createDeploymentVersion:  {
    __typename: "DeploymentVersion",
    versionId: string,
    version: string,
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      description: string | null,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } >,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
    env: string,
    deployedAt: string,
    builtAt: string,
    kubernetesDeploymentFiles:  Array< {
      __typename: "KubernetesDeploymentFile",
      path: string,
      content: string,
    } >,
    lastCommits: string,
    gitUrl: string,
    gitBranch: string,
    gitHash: string,
    gitCommit: string,
    dockerImage: string,
    dockerImageTag: string,
    buildHostName: string,
    configuration:  Array< {
      __typename: "ConfigurationItem",
      key: string,
      value: string,
      isSecret: boolean,
    } > | null,
  } | null,
};

export type UpdateDeploymentVersionMutationVariables = {
  input: UpdateDeploymentVersionInput,
};

export type UpdateDeploymentVersionMutation = {
  updateDeploymentVersion:  {
    __typename: "DeploymentVersion",
    versionId: string,
    version: string,
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      description: string | null,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } >,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
    env: string,
    deployedAt: string,
    builtAt: string,
    kubernetesDeploymentFiles:  Array< {
      __typename: "KubernetesDeploymentFile",
      path: string,
      content: string,
    } >,
    lastCommits: string,
    gitUrl: string,
    gitBranch: string,
    gitHash: string,
    gitCommit: string,
    dockerImage: string,
    dockerImageTag: string,
    buildHostName: string,
    configuration:  Array< {
      __typename: "ConfigurationItem",
      key: string,
      value: string,
      isSecret: boolean,
    } > | null,
  } | null,
};

export type DeleteDeploymentVersionMutationVariables = {
  input: DeleteDeploymentVersionInput,
};

export type DeleteDeploymentVersionMutation = {
  deleteDeploymentVersion:  {
    __typename: "DeploymentVersion",
    versionId: string,
    version: string,
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      description: string | null,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } >,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
    env: string,
    deployedAt: string,
    builtAt: string,
    kubernetesDeploymentFiles:  Array< {
      __typename: "KubernetesDeploymentFile",
      path: string,
      content: string,
    } >,
    lastCommits: string,
    gitUrl: string,
    gitBranch: string,
    gitHash: string,
    gitCommit: string,
    dockerImage: string,
    dockerImageTag: string,
    buildHostName: string,
    configuration:  Array< {
      __typename: "ConfigurationItem",
      key: string,
      value: string,
      isSecret: boolean,
    } > | null,
  } | null,
};

export type GetDeploymentQueryVariables = {
  id: string,
};

export type GetDeploymentQuery = {
  getDeployment:  {
    __typename: "Deployment",
    id: string,
    displayName: string,
    description: string | null,
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  Array< {
      __typename: "ShepherdHref",
      title: string,
      url: string,
    } >,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
        version: string,
        env: string,
        deployedAt: string,
        builtAt: string,
        lastCommits: string,
        gitUrl: string,
        gitBranch: string,
        gitHash: string,
        gitCommit: string,
        dockerImage: string,
        dockerImageTag: string,
        buildHostName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListDeploymentsQueryVariables = {
  id?: string | null,
  filter?: ModelDeploymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDeploymentsQuery = {
  listDeployments:  {
    __typename: "ModelDeploymentConnection",
    items:  Array< {
      __typename: "Deployment",
      id: string,
      displayName: string,
      description: string | null,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } >,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetDeploymentVersionQueryVariables = {
  versionId: string,
};

export type GetDeploymentVersionQuery = {
  getDeploymentVersion:  {
    __typename: "DeploymentVersion",
    versionId: string,
    version: string,
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      description: string | null,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } >,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
    env: string,
    deployedAt: string,
    builtAt: string,
    kubernetesDeploymentFiles:  Array< {
      __typename: "KubernetesDeploymentFile",
      path: string,
      content: string,
    } >,
    lastCommits: string,
    gitUrl: string,
    gitBranch: string,
    gitHash: string,
    gitCommit: string,
    dockerImage: string,
    dockerImageTag: string,
    buildHostName: string,
    configuration:  Array< {
      __typename: "ConfigurationItem",
      key: string,
      value: string,
      isSecret: boolean,
    } > | null,
  } | null,
};

export type ListDeploymentVersionsQueryVariables = {
  versionId?: string | null,
  filter?: ModelDeploymentVersionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDeploymentVersionsQuery = {
  listDeploymentVersions:  {
    __typename: "ModelDeploymentVersionConnection",
    items:  Array< {
      __typename: "DeploymentVersion",
      versionId: string,
      version: string,
      deployment:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        description: string | null,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
      env: string,
      deployedAt: string,
      builtAt: string,
      kubernetesDeploymentFiles:  Array< {
        __typename: "KubernetesDeploymentFile",
        path: string,
        content: string,
      } >,
      lastCommits: string,
      gitUrl: string,
      gitBranch: string,
      gitHash: string,
      gitCommit: string,
      dockerImage: string,
      dockerImageTag: string,
      buildHostName: string,
      configuration:  Array< {
        __typename: "ConfigurationItem",
        key: string,
        value: string,
        isSecret: boolean,
      } > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDeploymentSubscription = {
  onCreateDeployment:  {
    __typename: "Deployment",
    id: string,
    displayName: string,
    description: string | null,
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  Array< {
      __typename: "ShepherdHref",
      title: string,
      url: string,
    } >,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
        version: string,
        env: string,
        deployedAt: string,
        builtAt: string,
        lastCommits: string,
        gitUrl: string,
        gitBranch: string,
        gitHash: string,
        gitCommit: string,
        dockerImage: string,
        dockerImageTag: string,
        buildHostName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateDeploymentSubscription = {
  onUpdateDeployment:  {
    __typename: "Deployment",
    id: string,
    displayName: string,
    description: string | null,
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  Array< {
      __typename: "ShepherdHref",
      title: string,
      url: string,
    } >,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
        version: string,
        env: string,
        deployedAt: string,
        builtAt: string,
        lastCommits: string,
        gitUrl: string,
        gitBranch: string,
        gitHash: string,
        gitCommit: string,
        dockerImage: string,
        dockerImageTag: string,
        buildHostName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteDeploymentSubscription = {
  onDeleteDeployment:  {
    __typename: "Deployment",
    id: string,
    displayName: string,
    description: string | null,
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  Array< {
      __typename: "ShepherdHref",
      title: string,
      url: string,
    } >,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
        version: string,
        env: string,
        deployedAt: string,
        builtAt: string,
        lastCommits: string,
        gitUrl: string,
        gitBranch: string,
        gitHash: string,
        gitCommit: string,
        dockerImage: string,
        dockerImageTag: string,
        buildHostName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateDeploymentVersionSubscription = {
  onCreateDeploymentVersion:  {
    __typename: "DeploymentVersion",
    versionId: string,
    version: string,
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      description: string | null,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } >,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
    env: string,
    deployedAt: string,
    builtAt: string,
    kubernetesDeploymentFiles:  Array< {
      __typename: "KubernetesDeploymentFile",
      path: string,
      content: string,
    } >,
    lastCommits: string,
    gitUrl: string,
    gitBranch: string,
    gitHash: string,
    gitCommit: string,
    dockerImage: string,
    dockerImageTag: string,
    buildHostName: string,
    configuration:  Array< {
      __typename: "ConfigurationItem",
      key: string,
      value: string,
      isSecret: boolean,
    } > | null,
  } | null,
};

export type OnUpdateDeploymentVersionSubscription = {
  onUpdateDeploymentVersion:  {
    __typename: "DeploymentVersion",
    versionId: string,
    version: string,
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      description: string | null,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } >,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
    env: string,
    deployedAt: string,
    builtAt: string,
    kubernetesDeploymentFiles:  Array< {
      __typename: "KubernetesDeploymentFile",
      path: string,
      content: string,
    } >,
    lastCommits: string,
    gitUrl: string,
    gitBranch: string,
    gitHash: string,
    gitCommit: string,
    dockerImage: string,
    dockerImageTag: string,
    buildHostName: string,
    configuration:  Array< {
      __typename: "ConfigurationItem",
      key: string,
      value: string,
      isSecret: boolean,
    } > | null,
  } | null,
};

export type OnDeleteDeploymentVersionSubscription = {
  onDeleteDeploymentVersion:  {
    __typename: "DeploymentVersion",
    versionId: string,
    version: string,
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      description: string | null,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } >,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
    env: string,
    deployedAt: string,
    builtAt: string,
    kubernetesDeploymentFiles:  Array< {
      __typename: "KubernetesDeploymentFile",
      path: string,
      content: string,
    } >,
    lastCommits: string,
    gitUrl: string,
    gitBranch: string,
    gitHash: string,
    gitCommit: string,
    dockerImage: string,
    dockerImageTag: string,
    buildHostName: string,
    configuration:  Array< {
      __typename: "ConfigurationItem",
      key: string,
      value: string,
      isSecret: boolean,
    } > | null,
  } | null,
};
