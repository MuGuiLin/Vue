<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const {path} = useRoute();

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-aside class="menu">
    <el-menu
      router
      :default-active="path"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Menu /></el-icon>
          <span>部门管理</span>
        </template>
        <el-menu-item index="/department"><el-icon><Document /></el-icon>部门列表</el-menu-item>
        <el-menu-item index="/departmentEdit"><el-icon><DocumentAdd /></el-icon>新增部门</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Avatar /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user"><el-icon><Document /></el-icon>用户列表</el-menu-item>
        <el-menu-item index="/userEdit"><el-icon><DocumentAdd /></el-icon>新增用户</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Histogram /></el-icon>
          <span>数据分析</span>
        </template>
        <el-menu-item index="/analysis"><el-icon><Document /></el-icon>数据列表</el-menu-item>
        <el-menu-item index="/analysisEdit"><el-icon><DataAnalysis /></el-icon>数据图表</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="less">
.menu {
  width: 220px;
  box-shadow: 2px 0 6px rgba(0, 22, 38, 0.12);
  .el-menu {
    min-height: calc(100vh - 60px);
    background: #eee;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 220px;
      min-height: 400px;
    }
  }
}
</style>