const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: { // 入口
    main: './index'
  },
  output: { //出口
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'main.js'
  },

  module: {//加载器
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',//优先进行css-loader解析，再将解析好的交给vue-style-loader处理
              fallback: 'vue-style-loader'
            })
          }
        }
      }, {
        test: '/\.js$/',
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }, {
        test: /\.css$/,//使用extract-text-webpack-plugin,会将css打包成一个main.css，要在index.html页面引入
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [//插件
    new ExtractTextPlugin("main.css"),
    new VueLoaderPlugin()
  ]
}