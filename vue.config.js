module.exports = {
  baseUrl: './', // 配置打包时的相对路径
  devServer: {
    port: '8080', // 代理端口
    open: false, // 项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
    proxy: {
      '/api': {// 代理api
        target: "服务器地址",//服务器api地址   测试环境
        changeOrigin: true, // 是否跨域
        ws: true, // proxy websockets
        pathRewrite: {// 重写路径
          '^/api': ''
        }
      }
    }
  }
}
