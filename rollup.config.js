import css from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript'
import replace from 'rollup-plugin-replace'
import html from 'rollup-plugin-fill-html'
import serve from 'rollup-plugin-serve'
import visualizer from 'rollup-plugin-visualizer'
import gzip from 'rollup-plugin-gzip'

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
    typescript(),
    resolve({ browser: true }), // tells Rollup how to find date-fns in node_modules
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    production && terser(),
    production && visualizer({ filename: './build/bundle.stats.html' }),
    production ||
      serve({
        open: true,
        contentBase: ['build'],
      }),
    css({
      modules: true,
      extract: true,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        production ? 'production' : 'development',
      ),
    }),
    production && gzip(),
    html({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
  experimentalCodeSplitting: true,
  inlineDynamicImports: true,
}
