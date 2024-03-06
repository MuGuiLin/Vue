<script setup lang="ts">
const vFocus = (el) => {
  el.focus();
  console.log("v-move", el);
};
</script>

<template>
  <h3>局部指令</h3>
  <input v-focus placeholder="自定义 局部指令v-focus" />
  <ul></ul>
</template>


<style scoped lang="less" >
</style>