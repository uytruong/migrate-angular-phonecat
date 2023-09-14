'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: './app/app.module.ts'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Google Phone Gallery',
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./app/phones", to: "phones" },
        { from: "./app/img/phones", to: "img/phones" }
      ],
    }),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery', // for angularjs
      $: 'jquery',
      _: 'lodash'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};