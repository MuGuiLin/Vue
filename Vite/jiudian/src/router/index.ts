import { createRouter, createWebHashHistory } from 'vue-router';
import { PiniaStore } from "@/stores/modules/user";
import { query } from "@/utils";
import { routes } from './modules'

// const files = import.meta.globEager('./modules/*.ts');

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_BASE_URL as string),
    routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach((to, _from, next): any => {
    const { token, login } = PiniaStore();
    document.title = <string>to.meta.title as '九点漫画';
    if (!token) {
        return login(() => {
            location.reload();
        }, query('code') || "");
    }
    next();
});

export default router;
