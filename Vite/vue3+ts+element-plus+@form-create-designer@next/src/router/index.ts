import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/modules/user';
import routers from './modules';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL as string),
  routes: routers,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from, next): any => {
  document.title = <string>to.meta.title || '工时统计-后台管理系统';
  if ('/' === to.path) {
    next();
  } else {
    const { token } = useUserStore();
    if (!token) {
      return next({ path: '/' });
    }
  }
  next();
});

export default router;
