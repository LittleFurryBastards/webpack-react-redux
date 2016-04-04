const path = require('path');
const webpack = require('webpack');

const SRC_FOLDER = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.js',
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
      {
        test: /\.js$/,
        include: SRC_FOLDER,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: SRC_FOLDER,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        include: SRC_FOLDER,
        loader: 'file?name=[name].html'
      },
      {
        test: /\.less$/,
        include: SRC_FOLDER,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
