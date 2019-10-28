#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const { spawnSync } = require('child_process')
const onlyChanged = process.argv.includes('--only-changed')

const baseDirectory = path.resolve(__dirname, '../../')

const packageDirectory = path.resolve(baseDirectory, './src')

let packages = []
if (onlyChanged) {
  const changed = spawnSync('lerna', ['changed', '--json', '--toposort', '-a'])
  packages = JSON.parse(changed.stdout.toString()).map(x => x.location)
} else {
  packages = fs.readdirSync(packageDirectory)
}

const buildInfo = packages
  .filter(package => {
    return fs.existsSync(path.resolve(packageDirectory, package, 'Dockerfile'))
  })
  .map(package => {
    const packageJson = JSON.parse(
      fs
        .readFileSync(path.resolve(packageDirectory, package, 'package.json'))
        .toString()
    )

    return {
      path: path.resolve(packageDirectory, package),
      dockerImageName: packageJson.name.replace(/^@/, '').toLowerCase(),
      version: packageJson.version,
      tag: `${packageJson.version}-${process.env.BUILD_NUMBER || 'localbuild'}`,
    }
  })

module.exports = buildInfo
