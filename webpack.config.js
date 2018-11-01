const webpack = require('webpack')
const path = require('path')

const production = process.argv.includes('-p')
const sourcePath = path.join(__dirname, './src')
const outPath = path.join(__dirname, './build')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

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
        use: [
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     plugins: [
          //       '@babel/plugin-syntax-dynamic-import',
          //       require('react-hot-loader/babel'),
          //     ],
          //   },
          // },
          'ts-loader',
        ],
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
                : '[local]__[hash:base64:5]',
            },
          },
        ],
      },
      { test: /\.html$/, use: 'html-loader' },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     name: true,
  //     cacheGroups: {
  //       commons: {
  //         chunks: 'initial',
  //         minChunks: 2,
  //       },
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         chunks: 'all',
  //         priority: -10,
  //       },
  //     },
  //   },
  //   runtimeChunk: true,
  // },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
    }),
    new WebpackCleanupPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: '[id].chunk.css',
      disable: !production,
    }),
    new CompressionPlugin({
      test: production ? /\.(js|css)$/ : '__disabled__',
    }),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'index.html'),
    }),
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: 'minimal',
    clientLogLevel: 'warning',
  },
  devtool: production ? 'hidden-source-map' : 'cheap-module-eval-source-map',
  node: {
    fs: 'empty',
    net: 'empty',
  },
}
