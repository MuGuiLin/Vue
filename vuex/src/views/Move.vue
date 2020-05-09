<template>
  <section class="move">
    <h1>进入/离开 & 列表过渡：<a href="https://cn.vuejs.org/v2/guide/transitions.html" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/v2/guide/transitions.html</a></h1>
    <pre>
      <b>Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具：</b>
      * 在 CSS 过渡和动画中自动应用 class
      * 可以配合使用第三方 CSS 动画库，如 Animate.css
      * 在过渡钩子函数中使用 JavaScript 直接操作 DOM
      * 可以配合使用第三方 JavaScript 动画库，如 Velocity.js

      <b>#单元素/组件的过渡</b>
      Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡
      * 条件渲染 (使用 v-if)
      * 条件展示 (使用 v-show)
      * 动态组件
      * 组件根节点

      <b>#过渡的类名</b> 
      在进入/离开的过渡中，会有 6 个 class 切换。

      v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
      v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
      v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
      v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
      v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
      v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

<img src="https://cn.vuejs.org/images/transition.png" alt="" width="60%" srcset=""/>
      <b>对于这些在过渡中切换的类名来说</b>
      * 如果你使用一个没有名字的 &lt;transition>，则 v- 是这些类名的默认前缀。
      * 如果你使用了 &lt;transition name="my-transition">，那么 v-enter 会替换为 my-transition-enter。

      v-enter-active 和 v-leave-active 可以控制进入/离开过渡的不同的缓和曲线，在下面章节会有个示例说明。 
      
      <b>#CSS 动画</b> 
      CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。
      <code>
        .bounce-enter-active {
          animation: bounce-in .5s;
        }
        .bounce-leave-active {
          animation: bounce-in .5s reverse;
        }
        @keyframes bounce-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.5); }
          100% { transform: scale(1); }
        }
      </code>
    </pre>

   
  </section>
</template>

<script>
export default {
  name: "Move",
  data() {
    return {};
  },

};
</script>

<style lang="scss">
.move {
  text-align: left;
  pre {
    padding: 50px;
    line-height: 32px;
    border: 1px solid gray;
    border-radius: 8px;
    font-size: 16px;
    code{
      display: block;
      font-size: 18px;
      border-radius: 8px;
      color: cornsilk;
      background: #2b2b2b;
    }
  }
}
</style>