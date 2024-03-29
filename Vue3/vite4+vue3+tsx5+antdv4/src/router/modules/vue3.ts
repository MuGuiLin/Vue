import { type AppRouteRecordRaw } from '../types'
export { useRoute, useRouter } from 'vue-router'

import RouteView from '@/views/vue3/RouteView.vue'

export const vue3Route: AppRouteRecordRaw[] = [
    {
        path: '/vue3',
        name: 'vue3',
        redirect: '/vue3/index',
        component: RouteView,
        meta: {
            order: 3,
            title: 'Vue3语法',
            icon: {
                init: 'icon/tab-download.webp',
                active: 'icon/tab-download-a.webp'
            },
            roles: []
        },
        children: [
            {
                path: '/vue3/index',
                name: 'Vue3Index',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/vue3/Index.vue'),
                meta: {
                    title: 'Vue3语法',
                    hideBreadcrumb: true,
                    hideMenu: true
                }
            },
            {
                path: '/vue3/setup',
                name: 'Setup',
                meta: {
                    title: 'setup()和ref()和reactive()',
                },
                component: () => import('@/views/vue3/Setup.vue'),
            },
            {
                path: '/vue3/hook',
                name: 'Hook',
                meta: {
                    title: '生命周期函数(钩子)',
                },
                component: () => import('@/views/vue3/Hook.vue'),
            },
            {
                path: '/vue3/watch',
                name: 'Watch',
                meta: {
                    title: 'Watch函数',
                },
                component: () => import('@/views/vue3/Watch.vue'),
            },
            {
                path: '/vue3/module',
                name: 'Module',
                meta: {
                    title: 'Module模块化',
                },
                component: () => import('@/views/vue3/Module.vue'),
            },
            {
                path: '/vue3/letter',
                name: 'Letter',
                meta: {
                    title: '父子组件通信',
                },
                component: () => import('@/views/vue3/Letter.vue'),
            },
        ]
    },
];

export default vue3Route;
