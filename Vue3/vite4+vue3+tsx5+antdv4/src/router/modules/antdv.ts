import { type AppRouteRecordRaw } from '../types'

import RouteView from '@/views/antdv/RouteView.vue'

export default [
    {
        path: '/antdv',
        name: 'Antdv',
        redirect: '/antdv/index',
        component: RouteView,
        meta: {
            order: 3,
            title: 'Ant Design Vue UI',
            icon: {
                init: 'icon/tab-download.webp',
                active: 'icon/tab-download-a.webp'
            },
            roles: []
        },
        children: [
            {
                path: '/antdv/index',
                name: 'AntdvIndex',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/antdv/Index.vue'),
                meta: {
                    title: 'Ant Design Vue UI',
                    hideBreadcrumb: true,
                    hideMenu: true
                }
            },
        ]
    },
];
