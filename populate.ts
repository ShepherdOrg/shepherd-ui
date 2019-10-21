import API, { graphqlOperation } from '@aws-amplify/api'
import config from './src/aws-exports'
import {
  CreateDeploymentInput,
  DeployerRole,
  DeploymentType,
  CreateDeploymentVersionInput,
  CreateShepherdHrefInput,
  CreateKubernetesDeploymentFileInput,
} from './src/API'
import {
  createDeployment,
  createDeploymentVersion,
  createShepherdHref,
  createKubernetesDeploymentFile,
} from './src/graphql/mutations'

API.configure(config)

const deployment: CreateDeploymentInput = {
  id: 'dev-images-fluentd',
  displayName: 'Fluentd aws appender',
  lastDeploymentTimestamp: '2019-10-17T16:02:20.500Z',
  env: 'dev',
  deployerRole: DeployerRole.Install,
  deploymentType: DeploymentType.Kubernetes,
}

const deploymentVersion: CreateDeploymentVersionInput = {
  versionId: 'dev-dev-images-fluentd-1.0.0-2019-10-17T16:02:20.500Z',
  version: '1.0.0',
  env: 'dev',

  builtAt: '2019-10-16T16:02:20.500Z',
  deployedAt: '2019-10-17T16:02:20.500Z',
  deploymentVersionDeploymentId: 'dev-images-fluentd',

  lastCommits: `Mon, 8 Jul 2019 15:09:16 +0000 by Guðlaugur S. Egilsson. --- Read from head is probably necessary to ensure reading of logs from start of container. 
  
Wed, 12 Dec 2018 16:38:52 +0000 by Guðlaugur S. Egilsson. --- No need to store original log entry in this case, only one source for controlling json format. Moving fields to root of json object for same reason.

Wed, 12 Dec 2018 15:53:26 +0000 by Guðlaugur S. Egilsson. --- Need json parser filter also in this setup.

Wed, 12 Dec 2018 14:42:18 +0000 by Guðlaugur S. Egilsson. --- Change log format for ingress-nginx. Change fluentd config to pick up ingress-nginx logs and route to elasticsearch.

Fri, 24 Aug 2018 10:08:54 +0000 by Guðlaugur S. Egilsson. --- Use docker image tag with git hash to ensure redeployment.
`,
  gitUrl: 'git@gitlab.tm.is:tmdev/tm-docker-images.git',
  gitBranch: 'HEAD',
  gitHash: '2b48d1cef5c101ebcf3cd64dc1dbe12b1af1bbc9',
  gitCommit: '2b48d1cef5c101ebcf3cd64dc1dbe12b1af1bbc9',
  dockerImage: 'isrvkbuild02:5000/fluentd',
  dockerImageTag: 'v1.1.2-g-2b48d1c',
  buildHostName: 'isrvkbuild02',
  configuration: [
    { key: 'LOG_FORMAT', value: '%s %s %s', isSecret: false },
    { key: 'SUPER_SECRET', value: '--REDACTED--', isSecret: true },
  ],
}

const links: CreateShepherdHrefInput[] = [
  {
    url: 'http://jenkins.oryggi.tm.is:8082/job/tm-dockerimages/',
    title: 'Builds',
    shepherdHrefMetadataId: deployment.id,
  },
  {
    url: 'https://gitlab.tm.is/tmdev/tm-docker-images',
    title: 'Git source',
    shepherdHrefMetadataId: deployment.id,
  },
]

const k8sFiles: CreateKubernetesDeploymentFileInput[] = [
  {
    path: './deployment/fluentd.kube.yaml',
    content: `
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: fluentd
      namespace: kube-system
    ---
    apiVersion: rbac.authorization.k8s.io/v1beta1
    kind: ClusterRole
    metadata:
      name: fluentd
      namespace: kube-system
    rules:
    - apiGroups:
      - ""
      resources:
      - pods
      - namespaces
      verbs:
      - get
      - list
      - watch
    
    ---
    kind: ClusterRoleBinding
    apiVersion: rbac.authorization.k8s.io/v1beta1
    metadata:
      name: fluentd
    roleRef:
      kind: ClusterRole
      name: fluentd
      apiGroup: rbac.authorization.k8s.io
    subjects:
    - kind: ServiceAccount
      name: fluentd
      namespace: kube-system
    ---
    apiVersion: extensions/v1beta1
    kind: DaemonSet
    metadata:
      name: fluentd
      namespace: kube-system
      labels:
        k8s-app: fluentd-logging
        version: v1
        kubernetes.io/cluster-service: "true"
    spec:
      updateStrategy:
        type: RollingUpdate
      template:
        metadata:
          labels:
            k8s-app: fluentd-logging
            version: v1
            kubernetes.io/cluster-service: "true"
        spec:
          serviceAccount: fluentd
          serviceAccountName: fluentd
          tolerations:
          - key: node-role.kubernetes.io/master
            effect: NoSchedule
          containers:
          - name: fluentd
            image: isrvkbuild02:5000/fluentd:v1.1.2-g-2b48d1c
            env:
              - name: ASSUME_ROLE_ARN
                value: \${LOGWRITER_AWS_IAM_ROLE_ARN}
              - name: ES_ENDPOINT
                value: \${LOGWRITER_ES_ENDPOINT}
              - name: AWS_ACCESS_KEY_ID
                valueFrom:
                  secretKeyRef:
                    name: fluentd-logwriter-aws-credentials
                    key: accessKey
              - name: AWS_SECRET_ACCESS_KEY
                valueFrom:
                  secretKeyRef:
                    name: fluentd-logwriter-aws-credentials
                    key: secretKey
              - name: LOGIDX_PREFIX
                value: \${LOGWRITER_LOGIDX_PREFIX}
            resources:
              limits:
                memory: 200Mi
              requests:
                cpu: 100m
                memory: 200Mi
            volumeMounts:
            - name: varlog
              mountPath: /var/log
            - name: varlibdockercontainers
              mountPath: /var/lib/docker/containers
              readOnly: true
          terminationGracePeriodSeconds: 30
          volumes:
          - name: varlog
            hostPath:
              path: /var/log
          - name: varlibdockercontainers
            hostPath:
              path: /var/lib/docker/containers
    ---
    apiVersion: v1
    kind: Secret
    metadata:
      name: fluentd-logwriter-aws-credentials
      namespace: kube-system
    type: Opaque
    data:
      accessKey: \${Base64Encode:LOGWRITER_AWS_ACCESS_KEY_ID}
      secretKey: \${Base64Encode:LOGWRITER_AWS_SECRET_KEY}        
`,
    kubernetesDeploymentFileVersionId: deploymentVersion.versionId,
  },
]

const compose = <A, B, C>(f: (a: B) => C, g: (b: A) => B) => (x: A) => f(g(x))
const id = <T>(x: T) => x

const populateData = async () => {
  const deploy = API.graphql(
    graphqlOperation(createDeployment, { input: deployment })
  )
  const version = API.graphql(
    graphqlOperation(createDeploymentVersion, { input: deploymentVersion })
  )
  const link = links.map(l =>
    API.graphql(graphqlOperation(createShepherdHref, { input: l }))
  )

  const file = k8sFiles.map(f =>
    API.graphql(graphqlOperation(createKubernetesDeploymentFile, { input: f }))
  )

  // @ts-ignore
  return await Promise.all([deploy, version, ...link, ...file])
}

populateData()
  .catch(id)
  .then(
    compose(
      console.log,
      JSON.stringify
    )
  )
