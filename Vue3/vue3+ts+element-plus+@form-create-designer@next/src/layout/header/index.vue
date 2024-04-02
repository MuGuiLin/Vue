<script setup lang="ts">
  import { ref } from 'vue';

  import { useUserStore } from '@/stores/modules/user';
  const { users, logout }: any = useUserStore();

  const visible = ref(false);
</script>

<template>
  <section class="header">
    <h1 class="title">
      <img src="@/assets/icon/logo.png" alt="logo" />
      工时统计 - 后台管理系统
    </h1>
    <div class="setup">
      <span>
        <el-icon>
          <Avatar />
        </el-icon>{{ users.usrPhone }}
      </span>
      <span @click="visible = true"> </span>
      <el-popover :visible="visible" placement="top" :width="160">
        <p style="line-height: 36px">是否确认退出系统？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="small" @click="visible = false">取消</el-button>
          <el-button size="small" type="primary" @click="logout()">确认</el-button>
        </div>
        <template #reference>
          <span @click="visible = true">
            <el-icon>
              <SwitchButton />
            </el-icon>退出系统
          </span>
        </template>
      </el-popover>
    </div>
  </section>
</template>

<style scoped lang="less">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      position: relative;
      padding-left: 60px;
      line-height: 60px;
      font-size: 18px;
      color: var(--el-color-primary);

      img {
        position: absolute;
        top: -3px;
        left: 0px;
        width: 60px;
      }
    }

    .setup {
      color: #333;

      span {
        margin: 0 10px;
        font-size: 15px;
        cursor: pointer;

        &:last-child i {
          color: red;
        }

        i {
          position: relative;
          top: 3px;
          margin-right: 3px;
          font-size: 17px;
          color: var(--el-color-primary);
        }
      }
    }
  }
</style>
