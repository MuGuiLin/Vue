<script setup lang="ts" name="user">
import { reactive, ref, onMounted } from "vue";

import { useRouter, usrGetDoApi } from "@/apis/user";

const router = useRouter();

const formRef = ref();
const ruleForm = reactive({
  keyword: "",
});

const state = reactive({
  tableData: [],
  page: 1,
  total: 100,
  pageSize: 30,
});

const getData = async () => {
  const { list = [], total }: any = await usrGetDoApi({
    loading: true,
    keyword: ruleForm.keyword,
    page: state.page,
    pageSize: state.pageSize,
  });
  if (list.length) {
    state.tableData = list;
    state.total = total;
  }
};

const reset = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};

const submit = (formEl) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      state.page = 1;
      getData();
    }
  });
};

const formatter = (row: any, column: any) => {
  return "0" == row.state ? "冻结" : "1" == row.state ? "正常" : "未知";
};

const edit = () => {
  router.push("/userEdit");
};

const page = (i) => {
  state.page = i;
  getData();
};

onMounted(() => {
  getData();
});
</script>

<template>
  <el-main class="user">
    <el-form ref="formRef" :model="ruleForm" status-icon label-width="68px">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="员工姓名" prop="keyword">
            <el-input
              v-model="ruleForm.keyword"
              placeholder="请输入员工姓名、手机号关键字查询！"
              autocomplete="off"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item style="text-align: right">
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
    <el-table
      :data="state.tableData"
      :default-sort="{ prop: 'usrPhone', order: 'descending' }"
      border
      stripe
      height="680"
      max-height="680"
      style="width: 100%"
    >
      <el-table-column type="index" label="序号" align="center" width="60" />
      <el-table-column prop="usrName" label="姓名" width="120" />
      <el-table-column prop="usrPhone" label="手机号" width="180" />
      <el-table-column prop="usrMail" label="邮箱" width="180" />
      <el-table-column prop="depID" label="部门ID" width="160" />
      <el-table-column prop="usrDepartment" label="部门名称" width="180" />
      <el-table-column
        prop="state"
        label="状态"
        :formatter="formatter"
        width="100"
      />
      <el-table-column prop="updateDate" label="修改时间" min-width="180" />
      <el-table-column prop="createDate" label="创建时间" min-width="180" />
      <el-table-column fixed="right" label="操作" align="center" width="160">
        <template #default>
          <el-button type="primary" size="small" @click="edit"
            ><el-icon><Edit /></el-icon>编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :total="state.total"
      @current-change="page"
      :page-sizes="[30, 50, 100, 200]"
      v-model:current-page="state.page"
      layout="prev, pager, next, sizes, jumper, total"
    />
  </el-main>
</template>

<style scoped lang="less">
.user {
}
</style>