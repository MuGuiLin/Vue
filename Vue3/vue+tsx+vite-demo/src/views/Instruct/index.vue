<script setup lang="ts">
</script>

<template>
  <article>
    <h2>Vue3+Ts+Setup 自定义指令</h2>
    <br />
    <nav>
      <router-link to="/instruct/part">局部指令</router-link> |
      <router-link to="/instruct/global">全局指令</router-link>
    </nav>
    <br />
    <router-view></router-view>
    <pre>
二、Vue令钩
    1.1、指令
        在 vue 中提供了一些对于页面和数据更为方便的输出，这些操作就叫做指令，以 v-xxx 表示，比如 html 页面中的属性 &lt;div v-xxx&gt;&lt;/div>。自定义指令很大程度提高了开发效率，提高了工程化水平，一定要认真学习。

    1.2、内置指令
        Vue中，诸如v-if、v-for、v-on等等被称之为内置指令，它们都是以v-开头的，我们无需注册即可在全局使用它们，内置指令提供了极大的方便给我们，比如v-for指令可以让我们快速循环出很多dom元素。

    1.3、自定义指令
        顾名思义，自己定义自定义指令的方法，实现我们需要的指令功能。


二、自定义指令钩子
    2.1、vue2自定义指令钩子
        bind()：当指令绑定在 HTML 元素上时触发
        inserted()：当指令绑定的元素插入到父节点中的时候触发
        update()：当指令绑定的元素状态/样式、内容(这里指元素绑定的 vue 数据) 发生改变时触发
        componentUpdated()：当 update() 执行完毕之后触发
        unbind()：当指令绑定的元素从 dom 中删除时触发

    2.2、vue3自定义指令钩子
        created：在绑定元素的 attribute 或事件监听器被应用之前调用。在指令需要附加在普通的 v-on 事件监听器调用前的事件监听器中时，这很有用。
        beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用。
        mounted：在绑定元素的父组件被挂载后调用，大部分自定义指令都写在这里。
        beforeUpdate：在更新包含组件的 VNode 之前调用。
        updated：在包含组件的 VNode 及其子组件的 VNode 更新后调用。
        beforeUnmount：在卸载绑定元素的父组件之前调用
        unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次。

三、自定义指令参数
    created(el, binding, vnode, prevNode) {
        console.log(el, binding, vnode, prevNode)
    }
    参数说明：
        el：指令绑定到的元素。这可以用于直接操作 DOM。

        binding：是一个对象，包含以下属性：
            value：传递给指令的值。例如在 v-my-directive="1 + 1" 中，值是 2。
            oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。
            arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 "foo"。
            modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。
            dir：指令的定义对象。
            instance：使用该指令的组件实例。

        vnode：代表绑定元素的底层 VNode。
        prevNode：之前的渲染中代表指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。

  </pre
    >
  </article>
</template>


<style scoped lang="less" >
article pre {
  margin: 0 auto;
  width: 60%;
  text-align: left;
}
</style>