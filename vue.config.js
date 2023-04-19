'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Element Admin' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 8080 npm run dev OR npm run dev --port = 8080
const port = process.env.port || process.env.npm_config_port || 8080 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    host: 'localhost',
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    proxy: {
      '/maxkey-mgt-api': {
        target: 'http://mgt.maxkey.top:8018', // 开发
        changeOrigin: true, // 表示是否跨域
      },
      '/uoc': {
        target: 'http://10.221.19.226',
        changeOrigin: true, // 表示是否跨域
      },
      '/ucc': {
        target: 'http://10.221.19.221:80', // 开发
        changeOrigin: true, // 表示是否跨域
      },
      '/appstore': {
        target: 'http://117.73.3.245:8083', // 开发
        changeOrigin: true, // 表示是否跨域
      }
    },
    // before: require('./mock/mock-server.js')

    // onBeforeSetupMiddleware: function (devServer) {
    //   devServer.app.use('/', require('./mock/mock-server.js'));
    // }
    devMiddleware: {
      // 使用 devMiddleware 来实现类似于 before 的功能
      index: true,
      writeToDisk: true,
      publicPath: '/',
      stats: 'minimal',
      serverSideRender: true,
    },
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new PreloadWebpackPlugin({
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/]
      })
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  chainWebpack(config) {
    // config.plugin('prefetch').delete('prefetch')

    config.module.rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              inline: /runtime\..*\.js$/
            }])
            .end()
        }
      )
  }
}

