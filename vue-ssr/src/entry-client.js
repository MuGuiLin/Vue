import { createApp } from "./main"

const { app, router } = createApp(context)

router.onReady(() => {
    app.$mount('#app');
})