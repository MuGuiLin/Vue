<script setup lang="ts" name="Store">
import { storeToRefs } from "pinia";
import { userStore } from "@/store/modules/user.ts";

const store = userStore();
console.log(store);

const { name, lang, age, changeAge } = storeToRefs(store);

const change = () => {
  // 修改方式1
  age.value = 18;
  name.value = "小穆";
  lang.value = "zh" === lang.value ? "en" : "zh";

  // 修改方式2
  store.$patch((state) => {
    console.log(state);
    age.value = ++age.value;
  });
};

const addAge = () => {
  store.addAge(1);
};

const reset = () => {
  // 重置到 store中默认初始设置的state
  store.$reset();
};
</script>

<template>
  <div class="store">
    <h2>{{ name }}, {{ age }}</h2>
    <h2>{{ changeAge }}</h2>
    <input type="text" v-model="name" />
    <el-button type="success" @click="change">修改</el-button>
    <el-button type="success" @click="addAge">添加</el-button>
    <el-button type="success" @click="reset">重置</el-button>
  </div>
</template>

<style scoped lang="less">
.store {
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
}
</style>
