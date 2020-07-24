const express = require('express');
const app = express();

// 创建渲染器
const { createRenderer } = require('vue-server-renderer');
const renderer = createRenderer();

const Vue = require('vue');

app.get('/', async (req, res) => {
    const vm = new Vue({
        data() {
            return {
                name: '沐枫',
                job: 'Web 全栈开发！ vue-server-renderer'
            }
        },
        template: `
            <div>
                <h1>{{name}}</h1>
                <p>{{job}}</p>
                <b>npm i vue vue-server-renderer -S</b>
            </div>
        `
    });

    // 用渲染器渲染vue实例，得到html字符串
    
    // const html = await renderer.renderToString(vm);
    // res.send(html);

    renderer.renderToString(vm).then(html => {
        res.send(html);
    }).catch(err => {
        res.status(500).send(err);
    });

});

app.listen(3002, () => {

    console.log('OK，监听3002端口！');
});