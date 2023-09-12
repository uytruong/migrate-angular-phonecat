module.exports = {
  mode: 'development',
  entry: './app/app.module.ts',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: './',
    },
    watchFiles: ['app/**/*.ts'],
    port: 9000
  }
};