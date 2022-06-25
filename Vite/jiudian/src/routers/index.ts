import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import { routes } from './modules'
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    // history: createWebHistory(import.meta.env.VITE_BASE_PATH as string),
    history: createWebHashHistory(import.meta.env.VITE_BASE_PATH as string),
    routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach((to, from, next) => {
    document.title = '九点漫画';
    next();
})

export default router;
