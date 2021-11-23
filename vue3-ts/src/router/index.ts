import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vue3',
    name: 'Vue3',
    component: () => import('../views/Vue3/index.vue'),
    children: [
      {
        path: '/vue3/setup',
        name: 'Setup',
        meta: {
          title: 'setup()和ref()和reactive()',
        },
        component: () => import('@/views/Vue3/Setup.vue'),
      },
      {
        path: '/vue3/hook',
        name: 'Hook',
        meta: {
          title: '生命周期函数(钩子)',
        },
        component: () => import('@/views/Vue3/Hook.vue'),
      },
      {
        path: '/vue3/watch',
        name: 'Watch',
        meta: {
          title: 'Watch函数',
        },
        component: () => import('@/views/Vue3/Watch.vue'),
      },
      {
        path: '/vue3/module',
        name: 'Module',
        meta: {
          title: 'Module模块化',
        },
        component: () => import('@/views/Vue3/Module.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
