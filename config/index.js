'use strict'

const path = require('path')

module.exports = {
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        baseUrl:'/api',
        proxyTable: {
            '/api': {
                target: "http://warning.zmaxfilm.net/WarningApi/",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        host: '192.168.10.161', 
        port: 8080, 
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, 
        useEslint: true,
        showEslintErrorsInOverlay: false,
        devtool: 'eval-source-map',
        cacheBusting: true,
        cssSourceMap: false,
    },

    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        baseUrl:'/api',
        productionSourceMap: false,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
  }
}
