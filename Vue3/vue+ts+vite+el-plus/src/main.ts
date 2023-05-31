import { createApp } from 'vue'

import Router from './router'
import Store from './store'


import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'

import './style.css'
import App from './App.vue'

const app = createApp(App);

app.use(Store).use(Router).use(ElementPlus, {
    locale: zhCn,
}).mount('#app')
