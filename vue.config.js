const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/bms', // 配置访问的服务器地址（需要跨域的地址）
        pathRewrite: { '^/api': '' },  // 用于将请求中的 /api 字符串替换为空, 然后访问地址就能正确访问，若不添加此行配置，那么访问地址就变成了： http://localhost:5000/api/request_url，这样的请求就会出现 404 操作
        ws: true, // 是否支持 webstocket, 默认是 true
        changeOrigin: true // 用于控制请求头中的 host 值, 默认是 ture
      },
      // '/api/user': {
      //   // target: 'http://jiojio.work/users', //生产环境下
      //   target: 'http://localhost:3000/users', // 配置访问的服务器地址（需要跨域的地址）
      //   pathRewrite: { '^/api': '' },  // 用于将请求中的 /api 字符串替换为空, 然后访问地址就能正确访问，若不添加此行配置，那么访问地址就变成了： http://localhost:5000/api/request_url，这样的请求就会出现 404 操作
      //   ws: true, // 是否支持 webstocket, 默认是 true
      //   changeOrigin: true // 用于控制请求头中的 host 值, 默认是 ture
      // },
    }
  },
  // devServer: {
  //   // 本地域名
  //   host: 'localhost',
  //   // 本地端口
  //   port: '8080',
  //   open: true,
  //   proxy: { //配置跨域
  //     // 当访问到 api 开头的接口时走下面的内容
  //     '/api': {
  //       // 最终想要访问的地址
  //       target: 'localhost',
  //       changeOrigin: true,//允许跨域
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
  // configureWebpack官网无
  // configureWebpack: {
  //   plugins: [
  //     AutoImport({
  //       resolvers: [ElementPlusResolver()],
  //     }),
  //     Components({
  //       resolvers: [ElementPlusResolver()],
  //     }),
  //   ],
  // }

})
