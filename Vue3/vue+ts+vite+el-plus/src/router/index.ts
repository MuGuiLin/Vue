import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './modules'



// const files = import.meta.globEager('./modules/*.ts');

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach((to, _from, next): any => {
    // const { token, login } = pinia();
    // document.title = <string>to.meta.title as 'title';
    // if (!token) {
    //     return login(() => {
    //         next('/');
    //     }, query('code') || "");
    // }
    next();
});

export default router;