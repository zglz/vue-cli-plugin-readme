const ReadmeWebpackPlugin = require('readme-webpack-plugin')
const ReadmeCacheWebpackPlugin = require('readme-cache-webpack-plugin')

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
      
    // readme-original-loader
    webpackConfig.module
    .rule('readme-original')
    .enforce('pre')
    .exclude
    .add(/node_modules/).end()
    .test(/\.(js|vue)$/)
    .use('readme-original-loader')
      .loader('readme-original-loader')
      .end()

    webpackConfig
      .plugin('readme-cache-webpack-plugin')
      .use(ReadmeCacheWebpackPlugin)

    if (process.env.NODE_ENV === 'production') {
      // dev
      webpackConfig
      .plugin('readme-webpack-plugin')
      .use(ReadmeWebpackPlugin, [{
          base:'BASE-README',
          mode:'static',
          output:{
            filename:'README.md'
          }
      }])

    } else {
      // prod
      webpackConfig
      .plugin('readme-webpack-plugin')
      .use(ReadmeWebpackPlugin, [{
          base:'BASE-README',
          mode:'server',
          server:{
            host:'127.0.0.1',
            port: 8080,
          },
          open:false,
          output:{
            filename:''
          },
      }])
    }
  })
}