<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="about">About</router-link> |
    <router-link to="tsx">Tsx</router-link> |
    <router-link to="404">404</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped lang="less">
nav {
  a {
    padding: 10px;
    font-size: 18px;
  }

  a.router-link-active {
    color: green;
  }
}
</style>
