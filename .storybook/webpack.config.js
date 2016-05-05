const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.less$/,
        include: path.resolve(__dirname, '../src'),
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
};
