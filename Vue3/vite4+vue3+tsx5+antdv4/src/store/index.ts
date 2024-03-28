import type { App } from 'vue'
import mitt, { type Emitter } from 'mitt'
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

export const store = createPinia().use(piniaPluginPersist);

export function setupStore(app: App<Element>) {
    app.config.globalProperties.$bus = <Emitter<any>>mitt();
    app.use(store)
}

export default store;