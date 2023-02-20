<script setup lang="ts" name="layout">
import { RouterView } from "vue-router";
import Header from "../header/index.vue";
import Navs from "../navs/index.vue";
</script>

<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <Navs />
      <RouterView />
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
.el-header {
  border-bottom: 1px solid var(--el-border-color);
  box-shadow: 0 1px 4px rgba(0, 22, 38, 0.1);
}
.el-main {
  min-height: calc(100vh - 60px);
}
</style>