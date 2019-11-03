const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const ProvidePlugin = webpack.ProvidePlugin;
module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].[hash].js', //使用hash让你的文件如果改变之后更改hash
    // chunkFilename: '[name].[chunkhash].js'//让你的chunk内容，如果源码改变hash才会变，否则不变，下一次进入页面，而是使用本地缓存
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
    }),
    new ProvidePlugin({
      $: 'jquery',
      _: 'lodash'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: '[name].[contenthash].js'
        },
        jquery: {
          test: /[\\/]node_modules[\\/]jquery[\\/]/,
          priority: 0,
          filename: 'jquery.js'
        },
        default: false
      }
    }
  }

}