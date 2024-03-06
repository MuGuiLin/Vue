import { createApp } from 'vue'
import router from './router'

import internal from './stream/instruct'
import App from './App.vue'

import './style.css'

const app = createApp(App);

// 全局自定义指令
internal(app)

app.use(router).mount('#app');
