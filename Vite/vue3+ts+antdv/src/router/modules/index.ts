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
        path: '/details',
        name: 'Details',
        component: () => import('@views/Book/Details.vue'),
        meta: {
            title: '漫画详情'
        }
    },
    {
        path: '/reserve',
        name: 'Reserve',
        component: () => import('@views/Book/Reserve.vue'),
        meta: {
            title: '漫画预约'
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
    {
        path: '/mission',
        name: 'Mission',
        component: () => import('@views/Mine/Mission.vue'),
        meta: {
            title: '任务中心'
        }
    },
    {
        path: '/recent',
        name: 'Recent',
        component: () => import('@views/Mine/Recent.vue'),
        meta: {
            title: '最近看漫'
        }
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('@views/Mine/Account.vue'),
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
    {
        path: "/:pathMatch(.*)",
        redirect: "/",
    },
];
