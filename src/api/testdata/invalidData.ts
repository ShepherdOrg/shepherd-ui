import { Deployment, DeploymentVersion } from '../api'
import { DeploymentWithVersion } from '../api.test'


export const closeButNotQuite:DeploymentWithVersion = {
  'versionInfo':
    {
      'build_host_name':
        'db704622a3b2',
      'built_at':
        '2019-10-29T14:53:42.000Z',
      'deployed_at':
        '2019-11-01T10:28:03.543Z',
      'deployment_id':
        'devshepherd-ui-api',
      'docker_image':
        'shepherdorg/shepherd-ui-api:latest',
      'docker_image_tag':
        'shepherdorg/shepherd-ui-api:latest',
      'env':
        'dev',
      'git_branch':
        'dev',
      'git_commit':
        'c481249b51283043604aecdd2534e11ba7259946',
      'git_hash':
        'c481249',
      'git_url':
        'git@github.com:ShepherdOrg/shepherd-ui.git',
      'kubernetes_deployment_files':
        [],
      'last_commits':
        ' Tue, 29 Oct 2019 14:50:13 +0000 by Einar Nordfjord. --- fix port in hasura \n\n Tue, 29 Oct 2019 13:13:08 +0000 by Einar Nordfjord. --- fix prettier \n\n Tue, 29 Oct 2019 13:05:32 +0000 by Einar Nordfjord. --- pretteir format yml \n\n Tue, 29 Oct 2019 12:38:17 +0000 by Einar Nordfjord. --- fix kube yaml \n\n Tue, 29 Oct 2019 11:39:50 +0000 by Einar Nordfjord. --- upgrade shepherd \n',
      'version':
        '3.0.3',
      'id':
        'devshepherd-ui-api3.0.3-c4812492019-11-01T10:28:03.543Z',
    }
  ,
  'deploymentInfo':
    {
      'id':
        'devshepherd-ui-api', 'display_name':
        'Shepherd web UI API', 'description':
        'Shepherd web UI API', 'deployment_type':
        'Kubernetes', 'hyperlinks':
        [{ 'title': 'Git repository', 'url': 'https://github.com/shepherdorg/shepherd-ui/' }, {
          'title': 'Build',
          'url': 'https://circleci.com/gh/ShepherdOrg/shepherd-ui/',
        }], 'last_deployment_timestamp':
        '2019-11-01T10:28:03.543Z', 'env':
        'dev',
    },
}
