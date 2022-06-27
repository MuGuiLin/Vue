import { RouteRecordRaw } from 'vue-router';

import Home from '../../views/Home.vue';

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
            title: "首页"
        }
    },
    {
        path: '/book',
        name: 'Book',
        component: () => import('@views/Book/Index.vue'),
        meta: {
            title: "九点漫画"
        }
    },
    {
        path: '/article',
        name: 'Article',
        component: () => import('@views/Book/Article.vue'),
        meta: {
            title: '九点漫画'
        }
    },
    {
        path: '/mine',
        name: 'Mine',
        component: () => import('@views/Mine/Index.vue'),
        meta: {
            title: '我的'
        },
        // children: [
        //     {
        //         path: '/record',
        //         name: 'RechargeRecord',
        //         component: () => import('@views/Mine/RechargeRecord.vue'),
        //         meta: {
        //             title: '充值记录'
        //         },
        //     }
        // ],
    },
    /*{
        path: '/recent',
        name: 'Recent',
        component: () => import('@views/Mine/Recent.vue'),
        meta: {
            title: '最近看漫'
        }
    },
    {
        path: '/recharge',
        name: 'Recharge',
        component: () => import('@views/Mine/Recharge.vue'),
        meta: {
            title: '充值中心'
        }
    },
    {
        path: '/record',
        name: 'RechargeRecord',
        component: () => import('@views/Mine/RechargeRecord.vue'),
        meta: {
            title: '充值记录'
        },
    },
    {
        path: '/spend',
        name: 'SpendRecord',
        component: () => import('@views/Mine/SpendRecord.vue'),
        meta: {
            title: '消费记录'
        },
    },
    {
        path: '/feedback',
        name: 'Feedback',
        component: () => import('@views/Mine/Feedback.vue'),
        meta: {
            title: '意见反馈'
        }
    },
    {
        path: '/setting',
        name: 'Setting',
        component: () => import('@views/Mine/Setting.vue'),
        meta: {
            title: '设置'
        }
    },
    */
    {
        path: "/:pathMatch(.*)",
        redirect: "/",
    },
];
