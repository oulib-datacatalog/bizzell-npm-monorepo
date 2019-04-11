#!/usr/bin/env node
const args = require('yargs')
  .option('build', {
    default: false,
    describe: 'Compile a production build. Emits static assets.',
  })
  .option('dev', {
    default: false,
    describe:
      'Run a project dev server on localhost:3000. Good for developing new components.',
  })
  .option('edit', {
    default: false,
    describe:
      'Run a dev server with a persistance server for changes to html content within editor components.',
  }).argv

const { copySync } = require('fs-extra')
const { join } = require('path')
const webpack = require('webpack')
const Server = require('webpack-dev-server')
const fs = require('fs')

// const args = process.argv.slice(2)

const mode =
  ['edit', 'build', 'dev']
    .filter(mode => args[mode])
    .find((val, _, { length }) => {
      if (length > 1) {
        throw new Error(
          'create-bizzell-app can only be used in one mode at a time',
        )
        return false
      } else {
        return true
      }
    }) || 'create'

const path = args._[0] || './'

switch (mode) {
  case 'create': {
    // copy the template to the path
    copySync(join(__dirname, '../template'), path)
    break
  }
  case 'edit': {
    // use the webpack config on edit mode
    new Server(webpack(require('./webpack.config')(false, path, true)), {
      hot: true,
      // progress: true,
      // color: true,
      open: true,
    }).listen(3000, console.error)
    break
  }
  case 'dev': {
    // use the webpack config on dev mode
    new Server(webpack(require('./webpack.config')(false, path, false)), {
      hot: true,
      // progress: true,
      // color: true,
      open: true,
    }).listen(3000, console.error)
    break
  }
  case 'build': {
    // make a production build
    webpack(require('./webpack.config')(true, path, false), (err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(err)
        console.error(stats.errors)
        console.error(stats.toJson().errors)
      }
    })
    break
  }
  default: {
    throw new Error('create-bizzell-app did not recognize commands.')
  }
}
