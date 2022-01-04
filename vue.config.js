const path = require('path')
const name = '管理系统'

let CompressionPlugin = require('compression-webpack-plugin')
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: '',
  //       changeOrigin: true,
  //       secure: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   },
  // },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'development') {
      return {
        plugins: [
          // new BundleAnalyzerPlugin(),

          // 压缩代码
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // true 不删除源文件 false 删除源文件
          })
        ],
      }
    }
  },
  pwa: {
    name: name
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/layout.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    },

  },
  chainWebpack(config) {
    config.set('name', name)
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])
    config.plugins.delete('prefetch') //关闭预先加载模块
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
