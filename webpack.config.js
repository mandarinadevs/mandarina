const path = require('path');

module.exports = {
  mode: 'development',
  // mode: 'production',
    entry: {
      mandarina: './src/mandarina.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};