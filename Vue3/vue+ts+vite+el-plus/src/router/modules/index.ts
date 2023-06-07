import { RouteRecordRaw } from 'vue-router';

import Home from '@views/Home.vue';

// const reqFiles = require.context('./', true, /\.ts$/);

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (mine.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home,
        meta: {
            title: "vue3+ts+el-plus"
        }
    },
    {
        path: '/upload',
        name: 'Upload',
        component: () => import('@views/Upload.vue'),
    },
    {
        path: '/store',
        name: 'Store',
        component: () => import('@views/Store.vue'),
    },
    {
        path: '/table',
        name: 'Table',
        component: () => import('@views/Table.vue'),
    },
    {
        path: "/:pathMatch(.*)",
        redirect: "/",
    },
];
