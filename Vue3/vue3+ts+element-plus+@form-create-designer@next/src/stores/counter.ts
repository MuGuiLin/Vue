import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

export const store = createPinia();

store.use(piniaPluginPersist);

export default store;
