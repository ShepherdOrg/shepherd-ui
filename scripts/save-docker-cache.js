#!/usr/bin/env node
const projects = require('./utils/get-docker-projects')
const { spawn } = require('child_process')

const images = projects.map(x => `${x.dockerImageName}:latest`)

const proc = spawn('docker', ['save', ...images])

proc.stderr.pipe(process.stdout)
proc.stdout.pipe(process.stdout)
