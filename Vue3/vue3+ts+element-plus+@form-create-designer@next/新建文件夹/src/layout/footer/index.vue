<script setup lang="ts" name="layout">
import { RouterView } from "vue-router";
</script>

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <RouterView />
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
</style>