import { createApp } from 'vue'
import App from './App.vue'
import Route from './routers'
import Nutui from '@nutui/nutui'

import "@nutui/nutui/dist/style.css"

createApp(App).use(Route).use(Nutui).mount('#jiujui')
