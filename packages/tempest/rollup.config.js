const typescript = require('rollup-plugin-typescript2')
const postcss = require('rollup-plugin-postcss')
const babel = require('rollup-plugin-babel')
// const resolve = require('rollup-plugin-node-resolve')
// const commonjs = require('rollup-plugin-commonjs')

function clean(...entries) {
  return entries.filter(e => e)
}

function createConfig(mode) {
  const { umd } = mode
  return {
    input: './src/index.ts',
    output: {
      file: `./lib/index.${umd ? 'js' : 'es.js'}`,
      format: umd ? 'umd' : 'es',
      name: '@bizzell/tempest',
    },
    external(moduleName) {
      return !moduleName.includes('.')
    },
    plugins: clean(
      // commonjs(),
      // resolve({
      //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'],
      // }),
      postcss({ modules: true, minimize: true }),
      typescript(/*{ check: false }*/),
      babel({
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/env',
            {
              targets: { browsers: ['ie >= 11'] },
              modules: !umd,
              loose: true,
            },
          ],
        ],
      }),
    ),
  }
}

if (process.argv.includes('-w')) {
  module.exports = [{ umd: false }, { umd: false }].map(createConfig)
} else {
  module.exports = [{ umd: true }, { umd: false }].map(createConfig)
}
