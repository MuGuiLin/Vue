<script setup lang="ts" name="login">
  import type { FormInstance } from 'element-plus';
  import { reactive, ref, onBeforeMount } from 'vue';
  import { useRouter, useUserStore } from '@/stores/modules/user';
  import { yzmSendApi } from '@/apis/user';

  const router = useRouter();
  const { token, login } = useUserStore();
  const formRef = ref<FormInstance>();
  const loading = ref(false);

  const form = reactive({
    usrPhone: '18717791650',
    yzm: '1234',
  });

  const rule = reactive({
    usrPhone: [{ required: true, message: '请输入账号！', trigger: 'blur' }],
    yzm: [{ required: true, message: '请输入密码！', trigger: 'blur' }],
  });

  const goMain = (): void => {
    router.push('/main');
  };

  const yzmSend = async () => {
    try {
      loading.value = true;
      await yzmSendApi({ usrPhone: form.usrPhone });
    } catch (err) {
      throw new Error(`API请求出错：${err}`);
    } finally {
      loading.value = false;
    }
  };

  const submit = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        loading.value = true;
        login({
          usrPhone: form.usrPhone,
          yzm: form.yzm,
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
      <el-form-item label="" prop="usrPhone">
        <el-input v-model="form.usrPhone" clearable placeholder="手机号" autocomplete="off" />
      </el-form-item>
      <el-form-item label="" prop="yzm" class="yzm">
        <el-input
          type="number"
          v-model="form.yzm"
          clearable
          placeholder="验证码"
          autocomplete="off"
        />
        <el-button type="success" @click="yzmSend">
          <el-icon><ChatDotSquare /></el-icon>获取验证码
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="submit(formRef)">
          <el-icon><Position /></el-icon>登 录
        </el-button>
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

    .el-title {
      position: relative;
      padding: 20px 0 30px 80px;
      text-align: center;
      font-size: 28px;
      color: var(--el-color-primary);
      img {
        position: absolute;
        top: -5px;
        left: 30px;
        width: 80px;
      }
    }
    ::v-deep {
      .yzm {
        .el-form-item__content {
          justify-content: space-between;
          .el-input {
            width: 48%;
          }
          .el-button {
            width: 48%;
          }
        }
      }
    }

    .el-form-item--large {
      margin-bottom: 30px;
    }
    .el-button {
      width: 100%;
    }
  }
</style>
