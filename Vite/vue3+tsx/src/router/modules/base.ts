import { RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';

// const reqFiles = require.context('./', true, /\.ts$/);

export const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "Home", component: Home },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/About.vue"),
    },
    {
        path: "/tsx",
        name: "Tsx",
        component: () => import("@/views/Tsx"),
    },
    {
        path: "/slot",
        name: "Slot",
        component: () => import("@/views/Slot"),
    },
    {
        // path: '/user/:id',
        path: "/svg:",
        name: "Svg",
        component: () => import("@/views/Svg"),
        children: [
            {
                path: "",
                name: "SvgDemo",
                component: () => import("@/views/Svg/Demo"),
            },
            {
                path: "tsx",
                name: "SvgTsx",
                component: () => import("@/views/Svg/Tsx"),
            },
            {
                path: "defaule",
                name: "SvgDefaule",
                component: () => import("@/views/Svg/Defaule.vue"),
            },
        ],

    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        // redirect: "/",
        component: () => import("@/views/NotFound"),
        meta: {
            title: "TSX",
            noCache: true
        }
    },
];

export default routes;