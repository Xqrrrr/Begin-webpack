//热模块更新与babel
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;


const devConfig = {
  mode: 'development',
  devtool: 'cheap-inline-eval-source-map',
  devServer: {
    contentBase: './dist',
    port: "8080",
    hot: true
    //hotOnly: true //如果没有写module.hot的话，需要手动刷新浏览器，但是把这个配置去掉之后，他会帮助我们自动去刷新浏览器
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig)