const { execSync, spawn } = require('child_process')
const { join } = require('path')
const { removeSync } = require('fs-extra')
const cwd = process.cwd()

const app = 'test-app'

console.log('> linking cli tools...')
execSync('npm link packages/create-bizzell-app', { shell: true })

console.log('> creating a test-app...')
execSync(`create-bizzell-app --path=${app}`, { shell: true })

console.log('> linking app dependencies...')
// execSync('npm link ../packages/wizard', {
//   shell: true,
//   cwd: join(cwd, app),
// })
execSync('npm link ../packages/tempest', {
  shell: true,
  cwd: join(cwd, app),
})

console.log('> installing app dependencies...')
execSync('npm install', { shell: true, cwd: join(cwd, app) })

console.log('> running the application!')
const server = spawn('npm', ['run', 'edit'], {
  shell: true,
  cwd: join(cwd, app),
  stdio: 'inherit',
})

process.on('SIGINT', () => {
  console.log('> shutting down...')
  server.kill()
  server.on('exit', () => {
    console.log('> cleaning up...')
    execSync('npm unlink @bizzell/tempest', {
      shell: true,
      cwd: join(cwd, app),
    })
    removeSync(join(cwd, app))
    console.log('> finished!')
    process.exit(0)
  })
})
