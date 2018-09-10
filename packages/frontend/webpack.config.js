const path = require('path');

const { CheckerPlugin } = require('awesome-typescript-loader');
const webpack = require('webpack');
const dotEnv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || '5000';

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './'),
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    pathinfo: false,
  },
  devServer: {
    contentBase: path.join(__dirname, './build'),
    compress: false,
    port: PORT,
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    watchOptions: {
      aggregateTimeout: 800,
      ignored: ['data', 'node_modules'],
    },
    stats: {
      // reasons: true,
      source: true,
      timings: true,
      warnings: true,
    },
    hotOnly: true,
  },
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.ts|\.tsx|\.js|\.jsx$/,
        exclude: path.resolve(__dirname, './node_modules'),
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
    ],
  },
  plugins: [
    new dotEnv({
      path: './.env',
    }),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      chunksSortMode: 'none',
    }),
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
