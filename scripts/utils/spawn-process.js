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

module.exports = spawnProcess
