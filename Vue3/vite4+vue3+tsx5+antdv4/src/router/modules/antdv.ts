import { type AppRouteRecordRaw } from '../types'

import RouteView from '@/views/antdv/RouteView.vue'

export const antdvRoute: AppRouteRecordRaw[] = [
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
                    title: 'Ant Design Vue UI keep-alive adn onActivated',
                    hideBreadcrumb: true,
                    hideMenu: true
                }
            },
            {
                path: '/antdv/muinput',
                name: 'AntdvMuInput',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/antdv/MuInput.vue'),
                meta: {
                    title: '二次封装UI组件',
                    hideBreadcrumb: true,
                    hideMenu: true
                }
            },
        ]
    },
];

export default antdvRoute;