#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const Future = require('fluture')
const { spawn } = require('child_process')
const chalk = require('chalk').default
const os = require('os')
const cpuCount = os.cpus().length

const spawnProcess = (name, command, spawnOptions) => {
  return Future((reject, resolve) => {
    const proc = spawn(command, spawnOptions)

    proc.stdout.on('data', data => {
      console.log(`${chalk.cyan(name)} | ${data}`)
    })

    proc.stderr.on('data', data => {
      console.log(`${chalk.red(name)} | ${data}`)
    })

    proc.on('close', code => {
      if (code === 0) {
        resolve(code)
      } else {
        reject(code)
      }
    })
  })
}

const baseDirectory = path.resolve(__dirname, '../')

const packageDirectory = path.resolve(baseDirectory, './src')

const packages = fs.readdirSync(packageDirectory)

const buildInfo = packages
  .filter(package => {
    try {
      fs.readFileSync(path.resolve(packageDirectory, package, 'Dockerfile'))
      return true
    } catch (err) {
      return false
    }
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

Future.parallel(
  cpuCount,
  buildInfo.map(info =>
    spawnProcess(info.dockerImageName, 'docker', [
      'build',
      info.path,
      '--tag',
      `${info.dockerImageName}:${info.tag}`,
    ])
  )
).fork(console.error, console.log)
