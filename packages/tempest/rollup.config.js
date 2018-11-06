const path = require('path')
const typescript = require('rollup-plugin-typescript')
const postcss = require('rollup-plugin-postcss')

module.exports = {
  input: './src/index.ts',
  output: {
    file: './lib/index.bundle.js',
    format: 'umd',
    name: 'combobulate',
  },
  plugins: [typescript(), postcss({ module: true })],
}
