<script setup lang="ts" name="user">
import { reactive } from 'vue';

import { useRouter, usrGetDoApi } from '@/apis/user';
import { useTable } from '@/hooks/useTable';

const router = useRouter();

const ruleForm = reactive({
  keyword: '',
});

const { data, page, total, loading, pageSize, formRef, reset, submit } = useTable(
  usrGetDoApi,
  ruleForm,
);

const stateFormatter = (row: any, column: any) => {
  return '0' == row.state ? '冻结' : '1' == row.state ? '正常' : '未知';
};

const edit = (row: any) => {
  router.push(`/userEdit?id=${row.id}`);
};
</script>

<template>
  <el-main class="user">
    <el-card class="card-table">
      <template #header>
        <el-form ref="formRef" :model="ruleForm" status-icon label-width="68px">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item label="员工姓名" prop="keyword">
                <el-input v-model="ruleForm.keyword" placeholder="请输入员工姓名、手机号关键字查询！" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
            <el-col :span="18">
              <el-form-item>
                <el-button type="primary" @click="submit(formRef)"><el-icon>
                    <Search />
                  </el-icon>搜索</el-button>
                <el-button type="warning" @click="reset(formRef)"><el-icon>
                    <Refresh />
                  </el-icon>重置</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
      <el-table :data="data" border v-loading:loading="loading" stripe highlight-current-row height="680" max-height="680"
        style="width: 100%">
        <el-table-column fixed="left" type="index" label="序号" align="center" width="60" />
        <el-table-column prop="usrName" label="姓名" width="120">
          <template #default="scope">
            {{ scope.row.usrName || '未填写' }}
          </template>
        </el-table-column>
        <el-table-column prop="usrPhone" label="手机号" width="180" />
        <el-table-column prop="usrMail" label="邮箱" width="180" />
        <el-table-column prop="depID" label="部门ID" width="160" />
        <el-table-column prop="usrDepartment" label="部门名称" width="180" />
        <el-table-column prop="state" label="状态" :formatter="stateFormatter" width="100">
          <template #default="scope">
            <el-tag :type="
              '0' == scope.row.state ? 'error' : '1' == scope.row.state ? 'success' : 'default'
            " disable-transitions>{{ stateFormatter(scope.row, scope) }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="updateDate" label="修改时间" sortable min-width="180" />
        <el-table-column prop="createDate" label="创建时间" sortable min-width="180" />
        <el-table-column fixed="right" label="操作" align="center" width="160">
          <template #default="scope">
            <el-button type="primary" size="small" @click="edit(scope.row)"><el-icon>
                <Edit />
              </el-icon>编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background :total="total" :page-sizes="[10, 30, 50, 100, 200]" v-model:current-page="page"
        v-model:page-size="pageSize" layout="prev, pager, next, sizes, jumper, total" />
    </el-card>
  </el-main>
</template>

<style scoped lang="less"></style>