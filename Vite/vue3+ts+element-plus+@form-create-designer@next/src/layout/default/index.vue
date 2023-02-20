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
      <router-view/>
      <RouterView />
      <router-view/>
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
.el-header {
  border-bottom: 1px solid var(--el-menu-border-color);
}
.el-main {
  min-height: calc(100vh - 60px);
}
</style>