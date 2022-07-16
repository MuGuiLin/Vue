import { createRouter, createWebHistory } from 'vue-router';
import { PiniaStore } from "@/stores/modules/user";

import { routes } from './modules'

// const files = import.meta.globEager('./modules/*.ts');
// console.log(files)

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL as string),
    routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 })
});


router.beforeEach((to, _from, next): any => {
    const { token, login } = PiniaStore();

    if (to.meta.title) {
        document.title = <string>to.meta.title as '九点漫画';
    }

    if (!token) {
        return login(() => {
            location.reload();
        });
    }
    next();
});

export default router;
