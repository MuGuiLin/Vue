import { type AppRouteRecordRaw } from '../types'

import RouteView from '@/views/store/RouteView.vue'

export default [
    {
        path: '/store',
        name: 'Store',
        redirect: '/store/index',
        component: RouteView,
        meta: {
            order: 4,
            title: 'PiniaStore',
            icon: {
                init: 'icon/tab-download.webp',
                active: 'icon/tab-download-a.webp'
            },
            roles: []
        },
        children: [
            {
                path: '/store/index',
                name: 'StoreIndex',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/store/Index.vue'),
                meta: {
                    title: 'PiniaStore',
                    hideBreadcrumb: true,
                    hideMenu: true
                }
            },
        ]
    },
];
