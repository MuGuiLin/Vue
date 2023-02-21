<script setup lang="ts" name="departmentEdit">
import { ref, onMounted } from 'vue';
const designer = ref();

const getJson = () => {
  console.log(designer, designer.value);
  designer.value.getJson();
};

onMounted(() => {
  console.log(designer.value);
});
</script>

<template>
  <el-main class="department-edit">
    <el-card>
      <template #header>
        <el-row class="top-setup">
          <!-- <el-button>Default</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button> -->
          <el-button type="danger"
            ><el-icon><Delete /></el-icon> 清 空</el-button
          >
          <el-button type="success" @click="designer.preview()"
            ><el-icon><View /></el-icon> 预 览</el-button
          >
          <el-button type="primary" @click="getJson"
            ><el-icon><Promotion /></el-icon> 发 布</el-button
          >
        </el-row>
      </template>
      <fc-designer ref="designer" height="800px" />
    </el-card>
  </el-main>
</template>

<style scoped lang="less">
.department-edit {
  .el-card {
    .top-setup {
      display: flex;
      justify-content: center;
      padding: 10px;
      .el-button {
        .el-icon {
          margin-right: 2px;
        }
      }
    }

    .el-card__body {
      padding-top: 0 !important;
    }

    ::v-deep {
      ._fc-m-drag {
        // background: url(@/assets/img/iphone-box.png) no-repeat center top;
        // background-size: contain;
      }
      ._fc-m-tools {
        display: none;
      }
    }
  }
}
</style>