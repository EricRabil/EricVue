const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  lintOnSave: true,
  parallel: true,
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
}
