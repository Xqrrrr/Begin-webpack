const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const proConfig = {
  mode: 'production',
  devtool: 'cheap-inline-eval-source-map'//适用于开发环境的
}

module.exports = merge(commonConfig, proConfig);