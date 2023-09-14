const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './src/dist',
    watchFiles: ['app/**/*.ts', 'app/**/*.html'],
    port: 9000
  }
});