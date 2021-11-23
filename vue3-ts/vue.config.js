
module.exports = {
    // publicPath: "./",
    outputDir: "dist",
    assetsDir: "assets",
    // lintOnSave: process.env.NODE_ENV === 'development',
    // productionSourceMap: process.env.NODE_ENV !== 'production',
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
                // target: process.env.VUE_APP_BASEURL, // 接口域名
                target: 'http://www.muguilin.com', // 接口域名
                secure: true, // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                ws: true, //websocket支持
                pathRewrite: {
                    "^/api": "/", //需要rewrite的,
                },
            },
        },
    },

    lintOnServe: false // 关闭eslint
};
