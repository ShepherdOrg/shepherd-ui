#!/usr/bin/env node
const Future = require('fluture')
const os = require('os')
const cpuCount = os.cpus().length
const spawnProcess = require('./utils/spawn-process')
const packages = require('./utils/get-docker-projects')

const max = (a, b) => Math.max(a, b)
const nameLength = packages.map(x => x.dockerImageName.length).reduce(max, 0)

Future.parallel(
  cpuCount,
  packages.map(info =>
    spawnProcess(info.dockerImageName.padEnd(nameLength, ' '), 'docker', [
      'build',
      info.path,
      '--tag',
      `${info.dockerImageName}:${info.tag}`,
      '--tag',
      `${info.dockerImageName}:latest`,
      '--cache-from',
      `${info.dockerImageName}:latest`,
    ])
  )
).fork(
  code => {
    process.exit(code)
  },
  () => {
    process.exit(0)
  }
)
