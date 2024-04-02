import { RouteRecordRaw } from 'vue-router';

import index from '@/views/index.vue';

// const reqFiles = require.context('./', true, /\.ts$/);

export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "",
        component: index,
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("@/views/Home.vue"),
            },
            {
                path: "tsx",
                name: "Tsx",
                component: () => import("@/views/Tsx"),
            },
            {
                path: "slot",
                name: "Slot",
                component: () => import("@/views/Slot/index.vue"),
            },
            {
                path: "/instruct",
                name: "Instruct",
                component: () => import("@/views/Instruct/index.vue"),
                redirect: "/instruct/part",
                children: [
                    {
                        path: "part",
                        name: "Part",
                        component: () => import("@/views/Instruct/Part.vue"),
                    },
                    {
                        path: "global",
                        name: "Global",
                        component: () => import("@/views/Instruct/Global.vue"),
                    },
                ],
            },
            {
                // path: '/user/:id',
                path: "svg:",
                name: "Svg",
                component: () => import("@/views/Svg/index.vue"),
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
        ]
    },
    {
        path: "/svgEdit",
        name: "SvgEdit",
        component: () => import("@/views/svgEdit/index.vue"),
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