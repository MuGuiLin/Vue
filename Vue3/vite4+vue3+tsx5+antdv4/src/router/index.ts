import {
  createRouter, createWebHistory, createWebHashHistory,
  type RouteRecordRaw
} from 'vue-router';

// 引入 nprogress 相关方法
import { start, close, } from '@/utils/nprogress';

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

// 路由前置守卫
router.beforeEach((to, _from, next): any => {
  // 开启进度条
  start();
  // const { token, login } = pinia();
  document.title = <string>to.meta.title as 'title';
  // if (!token) {
  //     return login(() => {
  //         next('/');
  //     }, query('code') || "");
  // }
  next();
});


// 路由后置守卫
router.afterEach(() => {
  // 关闭进度条
  close();
});

export function setupRouter(app: any) {
  app.use(router);
}

export default router;
