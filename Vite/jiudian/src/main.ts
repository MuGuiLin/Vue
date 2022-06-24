import { createApp } from 'vue'
import App from './App.vue'
import Route from './routers'
import Store from './stores'

import * as Nutui from '@nutui/nutui'


import "@nutui/nutui/dist/style.css"

createApp(App).use(Route).use(Store).use(Nutui).mount('#app')
