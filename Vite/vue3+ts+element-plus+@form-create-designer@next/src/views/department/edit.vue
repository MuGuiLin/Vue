<script setup lang="ts" name="departmentEdit">
import { ref, onMounted } from "vue";
const designer = ref();

const getJson = () => {
  console.log(designer, designer.value)
  designer.value.getJson();
};

onMounted(() => {
  console.log(designer.value);
});
</script>

<template>
  <el-main class="department-edit">
    <el-row align="center">
      <!-- <el-button>Default</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button> -->
      <el-button type="danger"><el-icon><Delete /></el-icon> 清 空</el-button>
      <el-button type="success" @click="designer.preview()" ><el-icon><View /></el-icon> 预 览</el-button>
      <el-button type="primary" @click="getJson" ><el-icon><Promotion /></el-icon> 发 布</el-button>
    </el-row>
    <fc-designer ref="designer" />
  </el-main>
</template>

<style scoped lang="less">
.department-edit {
  ::v-deep {
    ._fc-m-tools {
      // display: none;
    }
  }
}
</style>