const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

const {AngularWebpackPlugin} = require('@ngtools/webpack');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: './src/main.aot.ts'
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: '@ngtools/webpack',
        exclude: /node_modules/
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@angular/compiler-cli/linker/babel'],
            compact: false,
            cacheDirectory: true,
          }
        }
      }
    ]
  },
  plugins: [
    new AngularWebpackPlugin({
      tsconfig: './tsconfig.aot.json'
    })
  ],
  output: {
    filename: '[name].[fullhash].js'
  }
});