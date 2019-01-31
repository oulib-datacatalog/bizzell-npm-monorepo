const shell = require('shelljs')
const fs = require('fs-extra')
const path = require('path')

const templateDirectory = path.join(__dirname, '../template')

fs.ensureDirSync(templateDirectory)
fs.emptyDirSync(templateDirectory)
fs.rmdirSync(templateDirectory)

const cwd = path.join(__dirname, '../../template')

shell
  .exec('git ls-files --full-name', { cwd })
  .stdout.split('\n')
  .filter(file => file.startsWith('packages/template'))
  .forEach(file => {
    // not my favorite thing in the world- probably better to
    // upsearch for the git repo
    const filePath = path.join(__dirname, '../../..', file)
    const dirname = path.dirname(filePath)
    const destPath = path.join(
      __dirname,
      '../../create-bizzell-app',
      ...file.split('/').slice(1),
    )
    fs.ensureDirSync(dirname)
    fs.copySync(filePath, destPath)
  })
