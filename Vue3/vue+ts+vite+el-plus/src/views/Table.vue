<script setup lang="ts" name="Store">
import MuTable from "@/components/MuTable";

const change = () => {
  // 修改方式1
};

const addAge = () => {};

const reset = () => {
  // 重置到 store中默认初始设置的state
};

interface User {
  date: string;
  name: string;
  address: string;
}
const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
   {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
   {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const column = [
  {
    prop: "date",
    label: "日期",
    width: "180",
  },
  {
    prop: "name",
    label: "姓名",
    width: "180",
  },
  {
    prop: "address",
    label: "地址",
  },
  {
    prop: "operation",
    label: "操作",
    fixed: "right",
    width: 200,
    align: "center",
  },
];
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};

const tableData2 = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<template>
  <div class="table">
    <MuTable :data="tableData" :column="column">
      <template #name="scope">
        <b style="color: blue"> {{ scope.row.name }}</b>
      </template>
      <template #operation="scope">
        <el-button
          text
          type="primary"
          size="small"
          @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <i class="line"></i>
        <el-button
          text
          type="danger"
          size="small"
          @click="handleEdit(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </MuTable>

    <el-table :data="tableData2" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<style scoped lang="less">
.table {
  padding: 50px;

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
