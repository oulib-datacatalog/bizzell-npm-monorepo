import css from '@modular-css/rollup'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript'
import replace from 'rollup-plugin-replace'
import html from 'rollup-plugin-fill-html'

// If running in watch mode, assume dev mode.
// otherwise, default to production builds.
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.tsx',
  output: {
    file: 'build/index.bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    html({
      template: 'src/index.html',
      filename: 'index.html',
      // externals: [
      //   { type: 'css', file: 'index.bundle.js' },
      //   { type: 'js', file: 'index.bundle.css' },
      // ],
    }),
    css(),
    typescript(),
    resolve({ browser: true }), // tells Rollup how to find date-fns in node_modules
    commonjs({
      include: ['node_modules/**'],
      // exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render'],
      },
    }), // converts date-fns to ES modules
    production ? uglify() : null, // minify, but only in production
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        production ? 'production' : 'development',
      ),
    }),
  ],
  experimentalCodeSplitting: true,
  inlineDynamicImports: true,
}
