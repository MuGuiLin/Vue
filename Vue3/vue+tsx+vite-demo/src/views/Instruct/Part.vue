<script setup lang="ts">
const vMove = (el) => {
  console.log("v-move", el);
  el.addEventListener("transitionend", (e) => {
    console.log("transitionend", e);
  });
};
</script>

<template>
  <h3>局部指令</h3>
  <ul>
    <li v-move>1.自定义指令</li>
  </ul>

</template>


<style scoped lang="less" >
</style>