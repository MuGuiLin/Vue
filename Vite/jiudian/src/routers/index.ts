import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import { routes } from './modules'

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL as string),
    history: createWebHashHistory(import.meta.env.VITE_BASE_URL as string),
    routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = <string>to.meta.title as '九点漫画';
    }
    next();
})

export default router;
