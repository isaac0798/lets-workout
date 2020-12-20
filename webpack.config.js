const path = require('path');

module.exports = {
  entry: "./public/js/main.js",
  module: {
    rules: [
      {
        test: /\.(jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, './public/js/output'),
  },
};
