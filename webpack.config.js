const path = require('path');
const webpack = require('webpack');

const SRC_FOLDER = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.jsx',
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
        test: /\.(es6|jsx)$/,
        include: SRC_FOLDER,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.(es6|jsx)$/,
        include: SRC_FOLDER,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        include: SRC_FOLDER,
        loader: 'file?name=[name].html'
      },
      {
        test: /\.css$/,
        include: SRC_FOLDER,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
