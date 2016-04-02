const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    hot: true,
    port: 8080
  },
  module: {
    preLoaders: [
        { test: /\.js$/, include: path.resolve(__dirname, 'src'), loader: 'eslint' }
    ],
    loaders: [
      { test: /\.js$/, include: path.resolve(__dirname, 'src'), loaders: ['react-hot', 'babel-loader'] },
      { test: /\.html$/, include: path.resolve(__dirname, 'src'), loader: 'file?name=[name].html' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
