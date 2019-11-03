const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["@babel/preset-env", {
              corejs: 3
            }]]
          }
        },
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }, {
        test: /\.(jpg|png|gif|eot)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images/',
            limit: 2040
          }
        }
      }

    ]
  }, plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]

}