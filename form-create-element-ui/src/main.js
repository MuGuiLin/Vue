import Vue from 'vue'
import Axios from 'axios'

// 引入element-ui UI框架
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
// 全局注入(挂载)element-ui
Vue.use(ElementUI)


// 引入form-create 表单生成器
import formCreate from "@form-create/element-ui"
// 全局注入(挂载)form-create
Vue.use(formCreate);

// 引入vue-route-transition 路由动画
import RouteTransition from 'vue-route-transition'
Vue.use(RouteTransition)


import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$ = {
  Axios,
  Appid: "53767848",
  Appsecret: "gaLdkW1o"
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
