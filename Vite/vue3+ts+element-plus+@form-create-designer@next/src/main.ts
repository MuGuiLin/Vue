import { createApp } from "vue";
import { createPinia } from "pinia";
import cachePinia from "pinia-plugin-persist";

import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import formCreate from "@form-create/element-ui";
import FcDesigner from "@form-create/designer";

import App from "./App.vue";
import router from "./router";

import "element-plus/dist/index.css";
import "@/theme/main.less";

const app = createApp(App);

app.use(createPinia().use(cachePinia)).use(ElementPlus).use(formCreate).use(FcDesigner).use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
