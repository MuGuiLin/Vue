import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../views/Vuex.vue'),
    beforeEnter:(to, from, next) => {
      // 路由钩子
      console.log('to：', to)
      console.log('from', from)
      next()
    }
  },
  {
    path: '/move',
    name: 'Move',
    component: () => import('../views/Move.vue'),
    beforeEnter: (to, from, next) => {
      console.log('进入路由之前！');
      next() // 注：next()一定要加上，不然不会向后执行
    },
    beforeLeave: (to, from, next) => {
      console.log('进入路由之后！');
      next()
    }
  },
  {
    path: '/nativedom',
    name: 'NativeDom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NativeDom.vue')
  },
  {
    path: '/virtualdom',
    name: 'VirtualDom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VirtualDom.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
