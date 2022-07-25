import { createPinia } from 'pinia';
import { PiniaStore } from './modules/user';

import piniaPluginPersist from 'pinia-plugin-persist';

export const pinia = PiniaStore;

export const store = createPinia();

store.use(piniaPluginPersist);

export default store;
