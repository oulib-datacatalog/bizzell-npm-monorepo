const webpack = require('webpack')
const path = require('path')

const production = process.argv.includes('-p')
const sourcePath = path.join(__dirname, './src')
const outPath = path.join(__dirname, './build')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

function clean(...entries) {
  return entries.filter(entry => !!entry && entry !== true)
}

module.exports = {
  mode: production ? 'production' : 'development',
  context: sourcePath,
  entry: {
    index: './index.tsx',
  },
  output: {
    path: outPath,
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: clean(
          {
            loader: 'babel-loader',
            options: {
              presets: clean(
                production || '@babel/preset-react',
                production || '@babel/preset-typescript',
                clean('@babel/preset-env', {
                  modules: false,
                  targets: 'last 1 version, not dead, > 1% in US',
                }),
              ),
              plugins: clean(
                '@babel/plugin-syntax-dynamic-import',
                production || require('react-hot-loader/babel'),
              ),
            },
          },
          production && 'ts-loader',
        ),
      },
      {
        test: /\.css$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: !production,
              importLoaders: 1,
              localIdentName: production
                ? '[hash:base64:5]'
                : '[local]-[hash:base64:3]',
            },
          },
        ],
      },
    ],
  },
  plugins: clean(
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
    }),
    new WebpackCleanupPlugin(),
    production &&
      new MiniCssExtractPlugin({
        filename: 'bundle.css',
        chunkFilename: '[id].chunk.css',
        disable: !production,
      }),
    production &&
      new CompressionPlugin({
        test: production ? /\.(js|css)$/ : '__disabled__',
      }),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'index.html'),
    }),
  ),
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: { disableDotRule: true },
    stats: 'minimal',
    clientLogLevel: 'warning',
  },
  devtool: production ? 'hidden-source-map' : 'cheap-module-eval-source-map',
}
