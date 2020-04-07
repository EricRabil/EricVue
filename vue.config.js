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
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        route.html = route.html
          .replace('id="app"', 'id="app" class="from-ssr"');

        return route;
      }
    }
  }
}
