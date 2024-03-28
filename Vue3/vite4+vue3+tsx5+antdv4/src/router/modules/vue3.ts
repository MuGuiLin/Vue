import { type AppRouteRecordRaw } from '../types'

import RouteView from '@/views/vue3/RouteView.vue'

export default [
    {
        path: '/vue3',
        name: 'Vue3',
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
        ]
    },
];
