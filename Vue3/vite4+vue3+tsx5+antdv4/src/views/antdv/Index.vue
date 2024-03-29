<script setup lang="ts">
import { ref, onMounted, onActivated } from 'vue'

onMounted(() => {
  console.log('mounted')
})

onActivated(() => {
  console.warn(
    '注：Vue 钩子函数中的activated()和deactivated()只有在<keep-alive></keep-alive>包裹的时候才会触发！！'
  )
})
</script>

<template>
  <section class="antdv">
    <h1>AntdV</h1>
    <hr />
    <router-link to="/antdv/muinput">二次封装UI组件</router-link>
  </section>
</template>

<style scoped lang="less">
</style>