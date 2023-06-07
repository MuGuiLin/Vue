<script setup lang="ts" name="MuTable">
import Vue from "vue";

interface ITableData {
  [propName: string]: any;
}

interface ITableColumn {
  prop: string;
  label: string;
  [propName: string]: any;
}

defineProps<{
  data: ITableData[];
  column: ITableColumn[];
}>();
</script>

<template>
  <section class="mu-table">
    <el-table v-bind="$attrs" :data="data">
      <el-table-column v-for="item in column" :key="item.prop" v-bind="item">
        <template #default="scope" v-if="$slots[item.prop]">
          <slot :name="item.prop" v-bind="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
    <footer>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </footer>
  </section>
</template>

<style scoped lang="less">
.mu-table {
  :deep(.el-table) {
    color: #333;
    font-size: 16px;
    .el-table__inner-wrapper {
      &::before {
        height: 2px;
      }
    }
    .el-table__header-wrapper {
      box-sizing: border-box;
      padding: 0 30px;
      border-bottom: 2px solid #ebeef5;

      table.el-table__header {
        height: 61px;
        th {
          color: #737373;
          border-width: 0px;
        }
      }
    }
    .el-table__body-wrapper {
      box-sizing: border-box;
      padding: 0 30px;
      table.el-table__body {
        tr {
          height: 84px;
          td {
            i.line {
              display: inline-block;
              width: 1px;
              height: 28px;
              background: #ebebe7;
              vertical-align: middle;
            }
            button.el-button {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96px;
  }
}
</style>
