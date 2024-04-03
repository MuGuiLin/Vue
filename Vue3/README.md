# Vite 

> Web前端开发与构建工具！
>
> Vite（法语意为 "快速的"，发音 `/vit/`![img](https://cn.vitejs.dev/voice.svg)，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：
>
> - 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://cn.vitejs.dev/guide/features.html)，如速度快到惊人的 [模块热更新（HMR）](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)。
> - 一套构建指令，它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
>
> Vite 意在提供开箱即用的配置，同时它的 [插件 API](https://cn.vitejs.dev/guide/api-plugin.html) 和 [JavaScript API](https://cn.vitejs.dev/guide/api-javascript.html) 带来了高度的可扩展性，并有完整的类型支持。

[Vite 官方中文文档](https://cn.vitejs.dev)



## Vue3全家桶项目搭建

vite4+vue3+TypeScript5+TXS+Vue Router+Pinia+ESLint+Prettier

```shell
npm create vue@latest
```

```shell
Need to install the following packages:
  create-vue@3.10.2
Ok to proceed? (y)

Vue.js - The Progressive JavaScript Framework

√ 请输入项目名称： ... vite4+vue3+tsx5+antdv4
√ 请输入包名称： ... vite4-vue3-tsx5-antdv4
√ 是否使用 TypeScript 语法？ ... 否 / 是
√ 是否启用 JSX 支持？ ... 否 / 是
√ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
√ 是否引入 Pinia 用于状态管理？ ... 否 / 是
√ 是否引入 Vitest 用于单元测试？ ... 否 / 是
√ 是否要引入一款端到端（End to End）测试工具？ » Playwright
√ 是否引入 ESLint 用于代码质量检测？ ... 否 / 是
√ 是否引入 Prettier 用于代码格式化？ ... 否 / 是
√ 是否引入 Vue DevTools 7 扩展用于调试? (试验阶段) ... 否 / 是
```





## 搭建 Vite 项目

**兼容性注意** ：Vite 需要 [Node.js](https://nodejs.org/en/) 版本 >= 12.0.0。

使用 NPM:

```
$ npm init vite
```

使用 Yarn:

```
$ yarn create vite
```

使用 PNPM:

```
$ pnpm create vite
```

然后按照提示操作即可！
如：创建 vue3 + ts 项目
> √ Project name: myapp
> √ Select a framework: » vue
> √ Select a variant: » vue-ts 

或：
```
yarn create vite my-vue-app --template vue-ts
```

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:

```
# npm 6.x
npm init vite my-vue-app --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue
```

查看 [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 以获取每个模板的更多细节：`vanilla`，`vanilla-ts`，`vue`，`vue-ts`，`react`，`react-ts`，`preact`，`preact-ts`，`lit`，`lit-ts`，`svelte`，`svelte-ts`。



## Vue-Router安装与配置

[Vue-Route - Vue.js 的官方路由](https://next.router.vuejs.org/zh/index.html)。

使用 NPM:

```
$ npm i -S vue-router
```

使用 Yarn:

```
$  yarn add vue-router
```

使用 PNPM:

```
$ pnpm add vue-router
```



**配置router路由** ：

在项目src目录中：新增router/index.ts文件，配置如下：

```js
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
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
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = createRouter({
    // history: createWebHashHistory(), // #
    history: createWebHistory(),		// /
    routes,
});

export default router;
```

## Vuex安装与配置

[Vuex - Vue.js 的官方状态管理](https://next.vuex.vuejs.org/zh/index.html)。

使用 NPM:

```
$ npm i -S vuex@next
```

使用 Yarn:

```
$  yarn add vuex@next
```

使用 PNPM:

```
$ pnpm add vuex@next
```



**配置store状态管理** ：

在项目src目录中：新增store/index.ts文件，配置如下：

```js
import { createStore } from 'vuex'

export default createStore({
  state: {
    mupiao: 0,
  },
  mutations: {
    add(state) {
      state.mupiao++;
    }
  },
  actions: {
  },
  modules: {
  }
})

// 使用
<template>
    <button @click="$store.commit('add')">{{ $store.state.mupiao }}</button>
</template>
```



### main.ts

```js
import { createApp } from 'vue'
import Vant from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css'

createApp(App).use(store).use(router).use(Vant).mount('#app')
```



### vite.config.ts

```js
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],

  // 公共基础路径
  base: process.env.NODE_ENV === "production" ? "./" : "/",

  alias: {
    // 配置目录别名
    "@": resolve(__dirname, "src"),
    "views": resolve(__dirname, "src/views"),
    "utils": resolve(__dirname, "src/utils"),
  },

  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 全局less变量存储路径(配置less的全局变量)
          hack: `true; @import (reference) "${resolve('src/public/config.less')}";`,
        },
        javascriptEnabled: true,
        // charset: false,
        // additionalData: '@import "./src/public/config.less";', // 全局less变量存储路径
      }
    }
  },

  // 开发服务器配置
  server: {
    host: true,
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://www.xxx.com',
        changeOrigin: true,
        ws: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      }
    }
  },
})

```



## ESlint安装与配置



使用 NPM:

```
$ npm install --save-dev eslint eslint-plugin-vue
```

使用 Yarn:

```
$  yarn add -D eslint eslint-plugin-vue
```

使用 PNPM:

```
$ pnpm add -D eslint eslint-plugin-vue
```



**配置eslintrc** ：

在项目src目录中：新增.eslintrc.js文件，配置如下：

```js
module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        'no-console': 'off'
    }
};
```





## Vant 移动UI

**兼容性注意** ：Vant 3 支持现代浏览器以及 Chrome >= 51、iOS >= 10.0（与 Vue 3 一致）。

使用 NPM:

```
$ npm i vant@3.4
```

使用 Yarn:

```
$ yarn add vant@3.4
```

使用 PNPM:

```
$ pnpm add vant@3.4
```



**引入Vant组件** ：

在main.ts中配置如下：

```js
import { createApp } from 'vue'

import Vant from 'vant';
import App from './App.vue'

import 'vant/lib/index.css'

createApp(App).use(Vant).mount('#lincoln')

```


## 移动适配：Viewport 布局

Vant 默认使用 `px` 作为样式单位，如果需要使用 `viewport` 单位 (vw, vh, vmin, vmax)，推荐使用 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 进行转换。

[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。

使用 NPM:

```
$ npm i -D postcss-px-to-viewport
```

使用 Yarn:

```
$ yarn add -D postcss-px-to-viewport
```

使用 PNPM:

```
$ pnpm add postcss-px-to-viewport
```



**引入Vant组件** ：

在项目根目录中：新增postcss.config.js文件，配置如下：

```js
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: 'px', 		            // 要转化的单位
            viewportWidth: 375, 		            // 视窗的宽度，可根据自己的需求调整（这里是以PC端为例）
            // viewportHeight: 668, 		        // 视窗的高度，对应的是我们设计稿的高度. (也可以不配置)
            unitPrecision: 6, 			            // 转换后的精度，即小数点位数
            propList: ['*'], 			            // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', 		            // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', 	            // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['.ignore', 'van'],  // 指定不转换为视窗单位的 class类名
            minPixelValue: 1, 			            // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, 			            // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, 				            // 是否转换后直接更换属性值
            exclude: [/node_modules/], 	            // 设置忽略文件，用正则做目录名匹配
            landscape: false, 			            // 是否处理横屏情况
        },
    },
};
```



## 在Vite 中使用Less

**只需安装less即可，vite默认支持less-loader**

使用 NPM:

```
$ npm i -D less
```

使用 Yarn:

```
$ yarn add -D less
```

使用 PNPM:

```
$ pnpm add less
```



**配置Less** 

在项目根目录中的 vite.config.ts文件中，配置如下：

```js

import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 全局less变量存储路径
          hack: `true; @import (reference) "${resolve('src/public/config.less')}";`,
        },
        javascriptEnabled: true,
        // charset: false,
        // additionalData: '@import "./src/public/config.less";', // 全局less变量存储路径
      }
    }
  },
})


```

