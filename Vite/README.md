# Vite 

> 下一代前端开发与构建工具！
>
> Vite（法语意为 "快速的"，发音 `/vit/`![img](https://cn.vitejs.dev/voice.svg)，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：
>
> - 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://cn.vitejs.dev/guide/features.html)，如速度快到惊人的 [模块热更新（HMR）](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)。
> - 一套构建指令，它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
>
> Vite 意在提供开箱即用的配置，同时它的 [插件 API](https://cn.vitejs.dev/guide/api-plugin.html) 和 [JavaScript API](https://cn.vitejs.dev/guide/api-javascript.html) 带来了高度的可扩展性，并有完整的类型支持。

[Vite 官方中文文档](https://cn.vitejs.dev)

## 搭建第一个 Vite 项目

**兼容性注意** ：Vite 需要 [Node.js](https://nodejs.org/en/) 版本 >= 12.0.0。

使用 NPM:

```
$ npm init vite@latest
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

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:

```
# npm 6.x
npm init vite@latest my-vue-app --template vue

# npm 7+, 需要额外的双横线：
npm init vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue
```

查看 [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 以获取每个模板的更多细节：`vanilla`，`vanilla-ts`，`vue`，`vue-ts`，`react`，`react-ts`，`preact`，`preact-ts`，`lit`，`lit-ts`，`svelte`，`svelte-ts`。

