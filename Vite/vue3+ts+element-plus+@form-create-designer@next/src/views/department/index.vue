<script setup lang="ts" name="department">
import { reactive, ref, onMounted } from "vue";

import { useRouter, getDepartmentApi } from "@/apis/department";

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
  const data = await getDepartmentApi({
    loading: true,
    keyword: ruleForm.keyword,
    page: state.page,
    pageSize: state.pageSize,
  });

  if (1 || data.length) {
    state.tableData = [
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2023-02-20",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
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

const copy = () => {
  router.push("/departmentEdit");
};

const edit = () => {
  router.push("/departmentEdit");
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
  <el-main class="department">
    <el-form ref="formRef" :model="ruleForm" status-icon label-width="68px">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="部门名称" prop="keyword">
            <el-input
              v-model="ruleForm.keyword"
              placeholder="请输入部门名称关键字查询！"
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
      border
      stripe
      height="680"
      max-height="680"
      style="width: 100%"
    >
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="操作" align="center" width="168">
        <template #default>
          <el-button type="success" size="small" @click="copy"
            ><el-icon><DocumentCopy /></el-icon>复制</el-button
          >
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
.department {
  
}
</style>