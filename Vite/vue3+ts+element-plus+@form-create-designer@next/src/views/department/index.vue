<script setup lang="ts" name="department">
import { reactive } from 'vue';

import { useRouter, depsGetDoApi } from '@/apis/department';
import { useTable } from '@/hooks/useTable';

const router = useRouter();

const ruleForm = reactive({
  keyword: '',
});

const { formRef, data, page, total, loading, pageSize, reset, submit } = useTable(
  depsGetDoApi,
  ruleForm,
);

const edit = (row: any, is: number) => {
  router.push(`/departmentEdit?id=${row.depID}&is=${is}`);
};
</script>

<template>
  <el-main class="department">
    <el-card class="card-table">
      <template #header>
        <el-form ref="formRef" :model="ruleForm" status-icon label-width="68px">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item label="部门名称" prop="keyword">
                <el-input
                  v-model="ruleForm.keyword"
                  placeholder="请输入部门ID、名称关键字查询！"
                  autocomplete="off"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :span="18">
              <el-form-item>
                <el-button type="primary" @click="submit(formRef)"
                  ><el-icon><Search /></el-icon>搜索</el-button
                >
                <el-button type="warning" @click="reset(formRef)"
                  ><el-icon><Refresh /></el-icon>重置</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
      <el-table
        :data="data"
        border
        v-loading:loading="loading"
        stripe
        highlight-current-row
        height="680"
        max-height="680"
        style="width: 100%"
      >
        <el-table-column type="index" label="序号" align="center" width="60" />
        <el-table-column prop="depID" label="部门ID" width="160" />
        <el-table-column prop="depName" label="部门名称" width="180" />
        <el-table-column prop="updateDate" label="修改时间" sortable min-width="180" />
        <el-table-column prop="createDate" label="创建时间" sortable min-width="180" />
        <el-table-column fixed="right" label="操作" align="center" width="160">
          <template #default="scope">
            <el-button type="success" size="small" @click="edit(scope.row, 2)"
              ><el-icon><DocumentCopy /></el-icon>复制</el-button
            >
            <el-button type="primary" size="small" @click="edit(scope.row, 1)"
              ><el-icon><Edit /></el-icon>编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :total="total"
        :page-sizes="[10, 30, 50, 100, 200]"
        v-model:current-page="page"
        v-model:page-size="pageSize"
        layout="prev, pager, next, sizes, jumper, total"
      />
    </el-card>
  </el-main>
</template>

<style scoped lang="less">

</style>