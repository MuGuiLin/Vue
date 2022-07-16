import { createApp } from 'vue'

import { createPinia } from 'pinia'

import cachePinia from 'pinia-plugin-persist'

import Nutui from '@nutui/nutui'

import App from './App.vue'

import Router from './router'

import "@nutui/nutui/dist/style.css"

createApp(App).use(createPinia().use(cachePinia)).use(Router).use(Nutui).mount('#jiudian')
