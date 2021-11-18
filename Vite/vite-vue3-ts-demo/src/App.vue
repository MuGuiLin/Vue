<script setup lang="ts">

// 生命周期函数(钩子)
// import { setup, onBeforeMount, onMounted, onBeforeUpdate, onActivated, onUpdated, onBeforeUnmount, onUnmounted, onDeactivated } from 'vue'

/*1、与 2.x 版本生命周期相对应的组合式 API
    beforeCreate -> 使用 setup()
    created -> 使用 setup()
    beforeMount -> onBeforeMount
    mounted -> onMounted
    beforeUpdate -> onBeforeUpdate
    updated -> onUpdated
    beforeDestroy -> onBeforeUnmount
    destroyed -> onUnmounted
    errorCaptured -> onErrorCaptured

2、新增的钩子函数

    除了和 2.x 生命周期等效项之外，组合式 API 还提供了以下调试钩子函数：
    onRenderTracked
    onRenderTriggered

   两个钩子函数都接收一个 DebuggerEvent，与 watchEffect 参数选项中的 onTrack 和 onTrigger 类似：
*/

import { onMounted, ref, reactive } from 'vue'


// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue'

/**
 * Vite 注意点：
 * 1、在setup语法糖中导入的组件无需注册声明(components:{...})，直接在视图中使用即可。
 * 2、在导入vue组件时，需要加上文件后缀名.vue，（不然ts不能识别vue文件）
 * 3、vue文件结构发生改变：<script>在最上面，<template>在中间，<style>在最下面；
 */

// 定义单个值
let str = ref('');
let num = ref(0);
let demoRef = ref();

// 定义数组、对象
const arr = reactive([1, 2, { a: 1 }, 4, 5]);
const obj = reactive({ key: 'value', b: 2, user:{ name: '沐枫',age:30, job: 'Web开发'} });
// 修改 数组、对象
obj.b = 1024;
arr[3] = 4444;
console.log(obj, arr);


const parentFn = (par: string) => {
  // 修改 单个值
  str.value = par;
  console.log('这是从子组件传来的参数：' + par);
};

onMounted(() => {
  console.log(demoRef.value);
  // console.log(demoRef.value.name);

  // 调用子组件了方法
  demoRef.value.printJob(888);
});

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

  <b>{{ str }}</b>
  <Demo ref="demoRef" @mu-click="parentFn" />

  <p v-for="(o, i) in arr" :key="i">{{ i }}</p>
  <p v-for="(o, i) in obj" :key="i">{{ o }}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
