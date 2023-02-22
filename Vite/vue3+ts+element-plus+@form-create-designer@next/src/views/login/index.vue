<script setup lang="ts" name="login">
  import type { FormInstance } from 'element-plus';
  import { reactive, ref, onBeforeMount } from 'vue';
  import { useRouter, useUserStore } from '@/stores/modules/user';

  const router = useRouter();
  const { token, login } = useUserStore();
  const formRef = ref<FormInstance>();
  const loading = ref(false);

  const form = reactive({
    account: '18717791650',
    password: '1234',
  });

  const rule = reactive({
    account: [{ required: true, message: '请输入账号！', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码！', trigger: 'blur' }],
  });

  const goMain = (): void => {
    router.push('/main');
  };

  const submit = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        loading.value = true;
        login({
          usrPhone: form.account,
          yzm: form.password,
        })
          .then(() => {
            // location.reload();
            goMain();
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            loading.value = false;
          });
      }
    });
  };

  onBeforeMount(() => {
    token && goMain();
  });
</script>

<template>
  <el-main class="login">
    <el-form ref="formRef" :model="form" status-icon size="large" :rule="rule" label-width="0px">
      <h1 class="el-title">
        <img src="@/assets/icon/logo.png" alt="logo" />
        后台管理系统
      </h1>
      <el-form-item label="" prop="account">
        <el-input v-model="form.account" clearable placeholder="账号" autocomplete="off" />
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          clearable
          placeholder="密码"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="submit(formRef)">登 录</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<style scoped lang="less">
  .login {
    height: 100vh;
    background: whitesmoke url(@/assets/svg/login-bg.svg) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: 'Copyright © 2023 思预云（工时统计）. All Rights Reserved.';
      position: fixed;
      bottom: 30px;
      color: #666;
    }
  }
  .el-form {
    padding: 6px 30px;
    width: 400px;
    background: #fff;
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
  }
  .el-title {
    position: relative;
    padding: 20px 0 30px 80px;
    text-align: center;
    font-size: 28px;
    color: var(--el-color-primary);
  }
  .el-title img {
    position: absolute;
    top: -5px;
    left: 30px;
    width: 80px;
  }
  .el-form-item--large {
    margin-bottom: 30px;
  }
  .el-button {
    width: 100%;
  }
</style>
