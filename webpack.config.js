const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    libraryTarget: 'system',
  },
  mode: 'development',
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        parser: {
          system: false,
        },
      },
    ],
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}