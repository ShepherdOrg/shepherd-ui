# Shepherd UI API

This project hosts a utility for interacting with the shepherd-ui API

# Example Usage

```js
const client = createClient('http://localhost:8080/graphql')

client.upsertDeployment([
  {
    id: 'dev-images-fluentd2',
    display_name: 'Fluentd aws appender 2',
    last_deployment_timestamp: '2019-10-17T16:02:20.500Z',
    last_deployment_version: '1.0.1',
    herd_key: 'images-fluentd2',
    env: 'dev',
    description: '',
    deployer_role: 'Install',
    deployment_type: 'Kubernetes',
    hyperlinks: [
      {
        url: 'http://jenkins.org.is:8082/job/dockerimages/',
        title: 'Builds',
      },
      {
        url: 'https://gitlab.org.is/tmdev/dockerimages',
        title: 'Git source',
      },
    ],
  },
])
```
