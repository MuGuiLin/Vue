<script setup lang="ts">
const vFocus = (el) => {
  el.focus();
  console.log("v-focus", el);
};
</script>

<template>
  <h3>局部指令</h3>
  <br />
  <input v-focus placeholder="自定义 局部指令v-focus" />
  <br />
  <pre>
    1、在&lt;script setup>定义组件内的指令，任何以v开头的驼峰式命名的变量都可以被用作一个自定义局部指令！
    <code>
      &lt;script setup lang="ts">
      // v开头的驼峰式命名的变量、函数都可以被用作一个自定义指令！ 
      const vFocus = (el) => {
        // 处理DOM的逻辑
        el.focus();
        console.log("v-focus", el);
      };
      &lt;/script>
    </code>

    2、在options api 自定义局部指令需要在directives钩子选项中注册
    <code>
      &lt;template>
        &lt;input v-focus placeholder="自定义 局部指令v-focus" />
      &lt;/template>
      &lt;script lang="ts">
      export default{
        setup() {

        },
        directives: {
          // 指令名
          focus: {
            // 生命周期
            mounted(el) {
              // 处理DOM的逻辑
              el.focus()
            },
          }
        }
      }
      &lt;/script>
    </code>
  </pre>
</template>


<style scoped lang="less">
input{
  padding: 10px;
  width: 500px;
  font-size: 22px;
}
pre {
  margin: 0 auto;
  width: 60%;
  text-align: left;
}
</style>