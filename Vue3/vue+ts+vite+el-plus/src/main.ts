import { createApp } from 'vue'

import { useI18n } from "vue-i18n";

import Store from './store'
import Router from './router'
import Lang from './lang'

import App from './App.vue'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'

import './style.css'


const app = createApp(App);

console.log(app);

app.config.globalProperties.useI18n = useI18n;

app.config.globalProperties.mupiaoVar = Math.PI;

app.config.globalProperties.mupiaoFn = () => {

};


app.use(Store).use(Router).use(Lang).use(ElementPlus, {
    locale: zhCn,
}).mount('#app')
