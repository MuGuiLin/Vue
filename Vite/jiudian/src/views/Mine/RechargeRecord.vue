<script setup lang="ts">
import HelloWorld from "@comps/HelloWorld.vue";
import { Button } from "@nutui/nutui";
</script>

<template>
  <router-view />
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Button type="primary">主要按钮</Button>
</template>

<style lang="scss">
</style>
