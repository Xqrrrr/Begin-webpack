const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: "9000"
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}
module.exports = merge(commonConfig, devConfig);