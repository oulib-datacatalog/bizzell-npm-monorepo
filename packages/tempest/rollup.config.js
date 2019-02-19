const typescript = require('rollup-plugin-typescript2')
const postcss = require('rollup-plugin-postcss')
const babel = require('rollup-plugin-babel')

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
      postcss({ modules: true, minimize: true }),
      typescript(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [
          [
            '@babel/env',
            {
              targets: { browsers: ['ie >= 11'] },
              modules: false,
              loose: true,
            },
          ],
        ],
        plugins: ['@babel/plugin-syntax-class-properties'],
      }),
    ),
  }
}

if (process.argv.includes('-w')) {
  module.exports = [{ umd: false }, { umd: false }].map(createConfig)
} else {
  module.exports = [{ umd: true }, { umd: false }].map(createConfig)
}
