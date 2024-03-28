
import { type AppRouteRecordRaw } from './types'

import HomeLayout from '@/layout/default/HomeLayout.vue'
import HomeView from '@/views/HomeView.vue'
export const component = () => import('@/views/basic/error/index.vue')

export default [
  {
    path: '/',
    name: 'HomeLayout',
    redirect: '/home',
    component: HomeLayout,
    meta: {
      title: '首页',
      roles: []
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/AboutView.vue')
      },
    ],

  },
  {
    path: '/:pathMatch(.*)',
    name: 'Not Found Page',
    component,
    meta: {
      title: 'ErrorPage',
      hideBreadcrumb: true,
      hideMenu: true
    }
  }];
