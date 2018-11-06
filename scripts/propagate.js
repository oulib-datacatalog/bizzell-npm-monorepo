const { readdirSync } = require('fs-extra')
const { spawnSync } = require('child_process')
const path = require('path')

const [command, ...args] = process.argv.slice(2)

readdirSync(path.join(__dirname, '../packages'))
  .filter(package => {
    return readdirSync(path.join(__dirname, '../packages', package)).includes(
      'package.json',
    )
  })
  .forEach(package => {
    spawnSync(command, args, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '../packages', package),
      shell: true,
    })
  })
