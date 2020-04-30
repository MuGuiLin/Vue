import Vue from 'vue'

// 引入element-ui UI框架
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

// 引入form-create 表单生成器
import formCreate from "@form-create/element-ui"

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局注入(挂载)element-ui和form-create
Vue.use(ElementUI)
Vue.use(formCreate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
