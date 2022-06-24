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
            title: "九点漫画"
        }
    },
    {
        path: '/book',
        name: 'Book',
        component: () => import('@views/Book/Index.vue'),
        meta: {
            title: "九点漫画"
        },
        children: [
            {
                path: '/detail',
                name: 'Detail',
                component: () => import('@views/Book/Detail.vue'),
                meta: {
                    title: '九点漫画'
                },
            }
        ],
    },
    {
        path: '/mine',
        name: 'Mine',
        component: () => import('@views/Mine/Index.vue'),
        meta: {
            title: '我的'
        },
        children: [
            {
                path: '/recharge',
                name: 'RechargeRecord',
                component: () => import('@views/Mine/RechargeRecord.vue'),
                meta: {
                    title: '充值记录'
                },
            }
        ],
    },
];


