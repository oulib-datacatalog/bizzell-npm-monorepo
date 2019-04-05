#!/usr/bin/env node

const { copySync } = require('fs-extra')
const { join } = require('path')
const webpack = require('webpack')
const Server = require('webpack-dev-server')
const fs = require('fs')

const args = process.argv.slice(2)

const mode =
  ['edit', 'build', 'dev']
    .filter(mode => args.includes(mode))
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

const pathPattern = /--path=([\-\.\/a-zA-Z0-9]*)/
const path =
  args
    .filter(arg => pathPattern.exec(arg))
    .map(arg => pathPattern.exec(arg)[1])
    .find(path => true) ||
  (() => {
    throw new Error(
      'No path specified for create-bizzell-app (--path=./path/to/target)',
    )
  })()

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
