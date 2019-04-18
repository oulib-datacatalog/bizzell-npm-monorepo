#!/usr/bin/env node

//Import these files for creating the project
const { copySync } = require('fs-extra')
const { join } = require('path')
const webpack = require('webpack')
const Server = require('webpack-dev-server')
const fs = require('fs')

//Gets the arguments and checks to see which one to use
const argv = require('yargs')
  //Edit the project
  .alias('edit', 'e')
  .nargs('e', 0)
  .describe('e', 'Edit the projects editor panel content')

  //Build the project
  .alias('buid', 'b')
  .nargs('b', 0)
  .describe('b', 'Build project static assets in production mode')

  //Develop the project
  .alias('dev', 'd')
  .nargs('d', 0)
  .describe('d', 'Run a development server in dev mode')

  //Path chosen
  .alias('path', 'p')
  .nargs('p', 1)
  .describe('p', 'Path to run create-bizzell-app from').argv

//Variables to send
let mode = ''
let path = ''

//Check which one is selected.
switch (true) {
  case argv.e: {
    mode = 'edit'
    break
  }
  case argv.b: {
    mode = 'build'
    break
  }
  case argv.d: {
    mode = 'dev'
    break
  }
  default: {
    mode = 'create'
  }
}

//If the path is not specified, then it will be set the the folders root folder
if (argv.p == null) {
  path = '.'
} else {
  path = argv.p
}

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
