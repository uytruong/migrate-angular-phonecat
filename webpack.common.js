'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Google Phone Gallery',
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/phones", to: "phones" },
        { from: "./src/img/phones", to: "img/phones" }
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
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        type: 'asset/source',
        exclude: /index\.html/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};