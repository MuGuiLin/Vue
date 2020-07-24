const express = require('express');
const app = express();


// 创建渲染器
const { createRenderer } = require('vue-server-renderer');
const renderer = createRenderer();

// 导入Vue 和 路由并注册
const Vue = require('vue');
const VueRouter = require('vue-router');
Vue.use(VueRouter);

// 监听所有路由入口
app.get('*', async (req, res) => {

    // 创建Vue路由实例
    const router = new VueRouter({
        routes: [
            {
                path: '/',
                name: 'Home',
                component: { template: '<div> <h1>This is an Home page！</h1></div>' }
            },
            {
                path: '/about',
                name: 'About',
                component: { template: '<div> <h1>This is an About page！</h1></div>' }
            },
            {
                path: '/news',
                name: 'News',
                component: { template: '<div> <h1 style="color:blue">This is an News page！</h1></div>' }
            }
        ]
    });

    // 创建Vue实例
    const vm = new Vue({
        data() {
            return {
                name: 'Vue SSR 服务器端渲染 '
            }
        },
        router,
        template: `
        <div style="text-align:center">
            <h1>{{name}}</h1>
            <router-link to="/">首页</router-link> | 
            <router-link to="/about">关于</router-link> | 
            <router-link to="/news">新闻</router-link>
            <hr />
            <router-view></router-view>
        </div>
        `
    });

    try {
        // 监管路由跳转
        router.push(req.url);


        // 用渲染器渲染vue实例，得到html字符串
        renderer.renderToString(vm).then((html) => {

            // 返回给前端渲染
            res.send(html);
        }).catch((err) => {

            res.status(500).send(err);
        });

    } catch (error) {

        res.status(500).send('服务器内部错误！');
    }

});


app.listen(3003, () => {

    console.log('OK，监听3003端口！');
});