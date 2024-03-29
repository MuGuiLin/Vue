<script setup lang="ts" name="Store">
import { storeToRefs, useUserStore } from '@/store/modules/user.ts'

const store = useUserStore()
console.log(store)

const { name, lang, age, changeAge } = storeToRefs(store)

// 修改store中默认初始设置的state
const change = () => {
  // 方式1：直接赋值修改 推荐！！
  age.value = 33
  name.value = '沐枫'
  lang.value = 'zh' === lang.value ? 'en' : 'zh'

  // 方式2：使用store.$patch()方法修改
  store.$patch((state) => {
    console.log(state)
    age.value = ++age.value
  })
}

const addAge = () => {
  store.addAge(1)
}

const reset = () => {
  // 重置到 store中默认初始设置的state
  store.$reset()
}
</script>

<template>
  <a-space class="page" direction="vertical">
    <h2>pinia + pinia-plugin-persist 使状态管理如此轻松！</h2>
    <h2>{{ name }}, {{ age }}</h2>
    <h2>{{ changeAge }}</h2>
    <a-input type="text" v-model:value="name" autofocus placeholder="Lazy usage" />
    <a-input type="text" v-model:value.lazy="name" autofocus placeholder="Lazy usage" />
    <a-button type="primary" @click="change">修改</a-button>
    <a-button type="dashed" @click="addAge">添加</a-button>
    <a-button type="text" danger @click="reset">重置</a-button>
    <a-button type="link" @click="reset">重置</a-button>
  </a-space>
</template>

<style scoped lang="less">
.page {
  padding: 1.5em;
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  button {
    margin: 20px;
  }
}
</style>
