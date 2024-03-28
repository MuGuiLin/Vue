import 'ant-design-vue/dist/reset.css';
import '@/theme/main.less';

import Antdv from 'ant-design-vue';
import { createApp } from 'vue';

import App from '@/App.vue';
import { setupLang } from "@/lang";
import { setupStore } from '@/store';
import { setupRouter } from '@/router';

(async () => {
    const app = createApp(App);

    setupStore(app);

    setupLang(app);

    setupRouter(app);

    app.use(Antdv).mount('#app');
})();
