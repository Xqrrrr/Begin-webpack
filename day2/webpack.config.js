const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: '8080',
    compress: true,
    open: true
  },
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    // publicPath: 'http://www.baidu.com' 可以更改打包之后引入的文件路径

  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|git|woff|eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              //modules: true // 提供css模块化，意思就是提供某个css模块仅在那一个模块有效
            }
          },
          {
            loader: "sass-loader"
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]

}