import {
  createRouter, createWebHistory, createWebHashHistory,
  type RouteRecordRaw
} from 'vue-router';

import basic from './basic';
import vue3 from './modules/vue3';
import store from './modules/store';
import antdv from './modules/antdv';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    ...basic,
    ...vue3,
    ...store,
    ...antdv,
  ],
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


export function setupRouter(app: any) {
  app.use(router);
}

export default router;
