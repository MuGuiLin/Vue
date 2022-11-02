
module.exports = {
    // publicPath: "./",    // 基本路径

    outputDir: "dist",      // 输出文件目录
    assetsDir: "assets",    // 静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    indexPath: 'index.html',// html入口文件

    filenameHashing: true,  // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存

    lintOnSave: 'warning',  // 关闭eslint: false | 'warning', 生产环境禁用eslint: process.env.NODE_ENV === 'development',

    productionSourceMap: process.env.NODE_ENV !== 'production', // 是否生代码错误调试 .map 映射文件; 默认true

    devServer: {
        port: 8080,
        open: true,
        disableHostCheck: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        proxy: {
            "/api": {
                // target: process.env.VUE_APP_BASEURL, 
                target: 'http://www.muguilin.com',      // 接口域名
                secure: true,                           // 如果是https接口，需要配置这个参数
                changeOrigin: true,                     // 是否跨域请求
                ws: true,                               // 是否支持websocket
                pathRewrite: {
                    "^/api": "/",                       // 需要rewrite的,
                },
            },
        },
    },


};
