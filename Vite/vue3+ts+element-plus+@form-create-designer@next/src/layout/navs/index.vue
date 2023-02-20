<script setup lang="ts">
import { ref } from "vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-menu
    default-active="/department"
    router
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>部门管理</span>
      </template>
      <el-menu-item index="/department">部门列表</el-menu-item>
      <el-menu-item index="/departmentEdit">新增部门</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Avatar /></el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item index="/user">用户列表</el-menu-item>
      <el-menu-item index="/userEdit">新增用户</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><Histogram /></el-icon>
        <span>数据分析</span>
      </template>
      <el-menu-item index="/analysis">数据列表</el-menu-item>
      <el-menu-item index="/analysisEdit">数据图表</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped lang="less">
.el-menu {
  min-height: calc(100vh - 60px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>