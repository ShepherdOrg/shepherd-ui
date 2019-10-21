/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateDeploymentInput = {
  id: string,
  displayName: string,
  deploymentType: DeploymentType,
  deployerRole: DeployerRole,
  dbMigrationImage?: string | null,
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


export type UpdateDeploymentInput = {
  id: string,
  displayName?: string | null,
  deploymentType?: DeploymentType | null,
  deployerRole?: DeployerRole | null,
  dbMigrationImage?: string | null,
  lastDeploymentTimestamp: string,
  env: string,
};

export type DeleteDeploymentInput = {
  id: string,
  lastDeploymentTimestamp: string,
  env: string,
};

export type CreateKubernetesDeploymentFileInput = {
  path: string,
  content: string,
  kubernetesDeploymentFileVersionId: string,
};

export type UpdateKubernetesDeploymentFileInput = {
  path?: string | null,
  content?: string | null,
  kubernetesDeploymentFileVersionId?: string | null,
};

export type DeleteKubernetesDeploymentFileInput = {
  id?: string | null,
};

export type CreateShepherdHrefInput = {
  title: string,
  url: string,
  shepherdHrefMetadataId: string,
};

export type UpdateShepherdHrefInput = {
  title?: string | null,
  url?: string | null,
  shepherdHrefMetadataId?: string | null,
};

export type DeleteShepherdHrefInput = {
  id?: string | null,
};

export type CreateDeploymentVersionInput = {
  versionId: string,
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
  configuration?: Array< ConfigurationItemInput > | null,
  deploymentVersionDeploymentId: string,
};

export type ConfigurationItemInput = {
  key: string,
  value: string,
  isSecret: boolean,
};

export type UpdateDeploymentVersionInput = {
  versionId: string,
  env?: string | null,
  deployedAt?: string | null,
  builtAt?: string | null,
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

export type ModelDeploymentPrimaryCompositeKeyConditionInput = {
  eq?: ModelDeploymentPrimaryCompositeKeyInput | null,
  le?: ModelDeploymentPrimaryCompositeKeyInput | null,
  lt?: ModelDeploymentPrimaryCompositeKeyInput | null,
  ge?: ModelDeploymentPrimaryCompositeKeyInput | null,
  gt?: ModelDeploymentPrimaryCompositeKeyInput | null,
  between?: Array< ModelDeploymentPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelDeploymentPrimaryCompositeKeyInput | null,
};

export type ModelDeploymentPrimaryCompositeKeyInput = {
  lastDeploymentTimestamp?: string | null,
  env?: string | null,
};

export type ModelDeploymentFilterInput = {
  id?: ModelStringFilterInput | null,
  displayName?: ModelStringFilterInput | null,
  deploymentType?: ModelDeploymentTypeFilterInput | null,
  deployerRole?: ModelDeployerRoleFilterInput | null,
  dbMigrationImage?: ModelStringFilterInput | null,
  lastDeploymentTimestamp?: ModelStringFilterInput | null,
  env?: ModelStringFilterInput | null,
  and?: Array< ModelDeploymentFilterInput | null > | null,
  or?: Array< ModelDeploymentFilterInput | null > | null,
  not?: ModelDeploymentFilterInput | null,
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


export type ModelKubernetesDeploymentFileFilterInput = {
  path?: ModelStringFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelKubernetesDeploymentFileFilterInput | null > | null,
  or?: Array< ModelKubernetesDeploymentFileFilterInput | null > | null,
  not?: ModelKubernetesDeploymentFileFilterInput | null,
};

export type ModelShepherdHrefFilterInput = {
  title?: ModelStringFilterInput | null,
  url?: ModelStringFilterInput | null,
  and?: Array< ModelShepherdHrefFilterInput | null > | null,
  or?: Array< ModelShepherdHrefFilterInput | null > | null,
  not?: ModelShepherdHrefFilterInput | null,
};

export type ModelDeploymentVersionFilterInput = {
  versionId?: ModelIDFilterInput | null,
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

export type CreateDeploymentMutationVariables = {
  input: CreateDeploymentInput,
};

export type CreateDeploymentMutation = {
  createDeployment:  {
    __typename: "Deployment",
    id: string,
    displayName: string,
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
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
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
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
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
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

export type CreateKubernetesDeploymentFileMutationVariables = {
  input: CreateKubernetesDeploymentFileInput,
};

export type CreateKubernetesDeploymentFileMutation = {
  createKubernetesDeploymentFile:  {
    __typename: "KubernetesDeploymentFile",
    path: string,
    content: string,
    version:  {
      __typename: "DeploymentVersion",
      versionId: string,
      deployment:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
      env: string,
      deployedAt: string,
      builtAt: string,
      kubernetesDeploymentFiles:  {
        __typename: "ModelKubernetesDeploymentFileConnection",
        nextToken: string | null,
      } | null,
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
    },
  } | null,
};

export type UpdateKubernetesDeploymentFileMutationVariables = {
  input: UpdateKubernetesDeploymentFileInput,
};

export type UpdateKubernetesDeploymentFileMutation = {
  updateKubernetesDeploymentFile:  {
    __typename: "KubernetesDeploymentFile",
    path: string,
    content: string,
    version:  {
      __typename: "DeploymentVersion",
      versionId: string,
      deployment:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
      env: string,
      deployedAt: string,
      builtAt: string,
      kubernetesDeploymentFiles:  {
        __typename: "ModelKubernetesDeploymentFileConnection",
        nextToken: string | null,
      } | null,
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
    },
  } | null,
};

export type DeleteKubernetesDeploymentFileMutationVariables = {
  input: DeleteKubernetesDeploymentFileInput,
};

export type DeleteKubernetesDeploymentFileMutation = {
  deleteKubernetesDeploymentFile:  {
    __typename: "KubernetesDeploymentFile",
    path: string,
    content: string,
    version:  {
      __typename: "DeploymentVersion",
      versionId: string,
      deployment:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
      env: string,
      deployedAt: string,
      builtAt: string,
      kubernetesDeploymentFiles:  {
        __typename: "ModelKubernetesDeploymentFileConnection",
        nextToken: string | null,
      } | null,
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
    },
  } | null,
};

export type CreateShepherdHrefMutationVariables = {
  input: CreateShepherdHrefInput,
};

export type CreateShepherdHrefMutation = {
  createShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateShepherdHrefMutationVariables = {
  input: UpdateShepherdHrefInput,
};

export type UpdateShepherdHrefMutation = {
  updateShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteShepherdHrefMutationVariables = {
  input: DeleteShepherdHrefInput,
};

export type DeleteShepherdHrefMutation = {
  deleteShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateDeploymentVersionMutationVariables = {
  input: CreateDeploymentVersionInput,
};

export type CreateDeploymentVersionMutation = {
  createDeploymentVersion:  {
    __typename: "DeploymentVersion",
    versionId: string,
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
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
    kubernetesDeploymentFiles:  {
      __typename: "ModelKubernetesDeploymentFileConnection",
      items:  Array< {
        __typename: "KubernetesDeploymentFile",
        path: string,
        content: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
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
    kubernetesDeploymentFiles:  {
      __typename: "ModelKubernetesDeploymentFileConnection",
      items:  Array< {
        __typename: "KubernetesDeploymentFile",
        path: string,
        content: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
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
    kubernetesDeploymentFiles:  {
      __typename: "ModelKubernetesDeploymentFileConnection",
      items:  Array< {
        __typename: "KubernetesDeploymentFile",
        path: string,
        content: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
  lastDeploymentTimestamp: string,
  env: string,
};

export type GetDeploymentQuery = {
  getDeployment:  {
    __typename: "Deployment",
    id: string,
    displayName: string,
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
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
  lastDeploymentTimestampEnv?: ModelDeploymentPrimaryCompositeKeyConditionInput | null,
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
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
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

export type GetKubernetesDeploymentFileQueryVariables = {
  id: string,
};

export type GetKubernetesDeploymentFileQuery = {
  getKubernetesDeploymentFile:  {
    __typename: "KubernetesDeploymentFile",
    path: string,
    content: string,
    version:  {
      __typename: "DeploymentVersion",
      versionId: string,
      deployment:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
      env: string,
      deployedAt: string,
      builtAt: string,
      kubernetesDeploymentFiles:  {
        __typename: "ModelKubernetesDeploymentFileConnection",
        nextToken: string | null,
      } | null,
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
    },
  } | null,
};

export type ListKubernetesDeploymentFilesQueryVariables = {
  filter?: ModelKubernetesDeploymentFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKubernetesDeploymentFilesQuery = {
  listKubernetesDeploymentFiles:  {
    __typename: "ModelKubernetesDeploymentFileConnection",
    items:  Array< {
      __typename: "KubernetesDeploymentFile",
      path: string,
      content: string,
      version:  {
        __typename: "DeploymentVersion",
        versionId: string,
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
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetShepherdHrefQueryVariables = {
  id: string,
};

export type GetShepherdHrefQuery = {
  getShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListShepherdHrefsQueryVariables = {
  filter?: ModelShepherdHrefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShepherdHrefsQuery = {
  listShepherdHrefs:  {
    __typename: "ModelShepherdHrefConnection",
    items:  Array< {
      __typename: "ShepherdHref",
      title: string,
      url: string,
      metadata:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
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
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
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
    kubernetesDeploymentFiles:  {
      __typename: "ModelKubernetesDeploymentFileConnection",
      items:  Array< {
        __typename: "KubernetesDeploymentFile",
        path: string,
        content: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      deployment:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
      env: string,
      deployedAt: string,
      builtAt: string,
      kubernetesDeploymentFiles:  {
        __typename: "ModelKubernetesDeploymentFileConnection",
        nextToken: string | null,
      } | null,
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
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
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
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
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
    deploymentType: DeploymentType,
    deployerRole: DeployerRole,
    dbMigrationImage: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    lastDeploymentTimestamp: string,
    env: string,
    versions:  {
      __typename: "ModelDeploymentVersionConnection",
      items:  Array< {
        __typename: "DeploymentVersion",
        versionId: string,
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

export type OnCreateKubernetesDeploymentFileSubscription = {
  onCreateKubernetesDeploymentFile:  {
    __typename: "KubernetesDeploymentFile",
    path: string,
    content: string,
    version:  {
      __typename: "DeploymentVersion",
      versionId: string,
      deployment:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
      env: string,
      deployedAt: string,
      builtAt: string,
      kubernetesDeploymentFiles:  {
        __typename: "ModelKubernetesDeploymentFileConnection",
        nextToken: string | null,
      } | null,
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
    },
  } | null,
};

export type OnUpdateKubernetesDeploymentFileSubscription = {
  onUpdateKubernetesDeploymentFile:  {
    __typename: "KubernetesDeploymentFile",
    path: string,
    content: string,
    version:  {
      __typename: "DeploymentVersion",
      versionId: string,
      deployment:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
      env: string,
      deployedAt: string,
      builtAt: string,
      kubernetesDeploymentFiles:  {
        __typename: "ModelKubernetesDeploymentFileConnection",
        nextToken: string | null,
      } | null,
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
    },
  } | null,
};

export type OnDeleteKubernetesDeploymentFileSubscription = {
  onDeleteKubernetesDeploymentFile:  {
    __typename: "KubernetesDeploymentFile",
    path: string,
    content: string,
    version:  {
      __typename: "DeploymentVersion",
      versionId: string,
      deployment:  {
        __typename: "Deployment",
        id: string,
        displayName: string,
        deploymentType: DeploymentType,
        deployerRole: DeployerRole,
        dbMigrationImage: string | null,
        lastDeploymentTimestamp: string,
        env: string,
      },
      env: string,
      deployedAt: string,
      builtAt: string,
      kubernetesDeploymentFiles:  {
        __typename: "ModelKubernetesDeploymentFileConnection",
        nextToken: string | null,
      } | null,
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
    },
  } | null,
};

export type OnCreateShepherdHrefSubscription = {
  onCreateShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateShepherdHrefSubscription = {
  onUpdateShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteShepherdHrefSubscription = {
  onDeleteShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      lastDeploymentTimestamp: string,
      env: string,
      versions:  {
        __typename: "ModelDeploymentVersionConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateDeploymentVersionSubscription = {
  onCreateDeploymentVersion:  {
    __typename: "DeploymentVersion",
    versionId: string,
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
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
    kubernetesDeploymentFiles:  {
      __typename: "ModelKubernetesDeploymentFileConnection",
      items:  Array< {
        __typename: "KubernetesDeploymentFile",
        path: string,
        content: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
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
    kubernetesDeploymentFiles:  {
      __typename: "ModelKubernetesDeploymentFileConnection",
      items:  Array< {
        __typename: "KubernetesDeploymentFile",
        path: string,
        content: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    deployment:  {
      __typename: "Deployment",
      id: string,
      displayName: string,
      deploymentType: DeploymentType,
      deployerRole: DeployerRole,
      dbMigrationImage: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
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
    kubernetesDeploymentFiles:  {
      __typename: "ModelKubernetesDeploymentFileConnection",
      items:  Array< {
        __typename: "KubernetesDeploymentFile",
        path: string,
        content: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
