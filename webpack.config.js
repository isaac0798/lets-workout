const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', "./public/js/main.js"],
  module: {
    rules: [
      {
        test: /\.(jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
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
