<script setup lang="ts">
// 在 Vue.js 中，<keep-alive> 是一个抽象组件，用于缓存动态组件到内存中，以便在组件切换时保留它们的状态，而不是每次都重新渲染。
// 由于 <keep-alive> 也是一个组件，并不是普通的HTML标签，所以在其内部是不能直接写注释的。

// 在 Vue 模板中，Vue组件的内部是不支持直接写注释的，这也包括 <keep-alive> 组件。 如果需要在 <keep-alive> 组件内部添加注释，你可以将注释放在包裹的动态组件或其他元素外部。


// <!-- 默认会缓存 <keep-alive> 内包含的所有组件，当组件切换时，如果组件已经存在，则不会触发 beforeCreate 和 created 这两个钩子函数，但会触发 activated 和 deactivated 这两个钩子函数(只在 <keep-alive> 内包含时才会被触发！！)。 -->
// <keep-alive>
//     <component :is="currentView" />
// </keep-alive>

// <!-- 多个组件时，将组件的name 用英文逗号隔开 -->
// <keep-alive include="KeepAliveIndex, KeepAliveEdit" >
//   <component :is="currentView" />
// </keep-alive>
// <!-- 用数组（需要使用 v-bind()绑定） -->
// <keep-alive include="['KeepAliveIndex', 'KeepAliveEdit']" >
//   <component :is="currentView" />
// </keep-alive>
// <!-- 用正则（需要使用 v-bind()绑定） -->
// <keep-alive include="/KeepAliveIndex|KeepAliveEdit/" >
//   <component :is="currentView" />
// </keep-alive>

interface KeepAliveProps {
  /**
   * 最大缓存组件个数，以节省内存空间。
   */
  max?: number | string
  /**
   * 缓存的组件名称
   */
  include?: string[]
  /**
   * 不被缓存的组件名称 和 include 相反
   */
  exclude?: string[]
}

</script>

<template>
  <h1>哈希表 与 Vue3 keep-alive LRU算法(页面转换算法)</h1>
  <nav>
    <router-link :to="{ path: '/vue3/keepAlive/index' }">index</router-link>、
    <router-link :to="{ path: '/vue3/keepAlive/edit' }">edit</router-link>
  </nav>
  <keep-alive include="['KeepAliveIndex', 'KeepAliveEdit']" max="20">
    <RouterView />
  </keep-alive>
</template>

<style scoped lang="less" >
nav {
  line-height: 50px;
  border-bottom: 1px solid #eee;
  a {
    margin-right: 10px;
    font-size: 18px;
  }
}
</style>
