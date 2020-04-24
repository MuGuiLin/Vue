import Vue from 'vue'

import formCreate from "@form-create/iview4";
import ViewUI from "view-design"
import 'view-design/dist/styles/iview.css';

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ViewUI, {
  transfer: true,
  size: 'large',
  capture: false,
  select: {
    arrow: 'md-arrow-dropdown',
    arrowSize: 20
  }
})

import myInput from "./components/myInput.vue";

// formCreate.component('myInput', () => import("./components/myInput.vue"))
formCreate.component('myInput', myInput)

Vue.use(formCreate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
