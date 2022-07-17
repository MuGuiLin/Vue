<script lang="ts" setup>
import { reactive, ref, getCurrentInstance } from "vue";
import Navbar from "@coms/Navbar.vue";
import { IFeedbackParams, feedbackApi } from "@api/mine";
import { is } from "@/utils";

const can: any = ref<boolean>(false);
const loading = ref<boolean>(false);
const { proxy }: any = getCurrentInstance();
const state: IFeedbackParams = reactive({
  content: "",
  phone: "",
});

const change = () => {
  can.value = state.phone && state.content;
};

const submit = async () => {
  if (!is.isPhone(state.phone)) {
    return proxy.$notify.warn("对不起：请正确输入您的联系方式！");
  }
  loading.value = true;
  const { message }: any = await feedbackApi(state);
  if (message) {
    proxy.$toast.success(message, {
      duration: 8000,
      textAlignCenter: false,
    });
    can.value = false;
    state.content = "";
    state.phone = "";
    loading.value = false;
  }
};
</script>

<template>
  <section class="feedback">
    <Navbar title="" />
    <form class="form">
      <nut-textarea
        placeholder="亲，清在此输入反馈内容～"
        v-model="state.content"
        rows="8"
        autosize
        @change="change"
      />
      <nut-input
        update:model-value="change"
        v-model="state.phone"
        type="number"
        @change="change"
        placeholder="请输入您的联系方式"
      />
      <nut-button
        v-if="can"
        block
        :loading="loading"
        type="primary"
        @click="submit"
        >提 交</nut-button
      >
      <nut-button v-else block disabled type="primary" @click="submit"
        >提 交</nut-button
      >
    </form>
  </section>
</template>

<style lang="scss" scoped>
.feedback {
  height: 100vh;
  background: #f5f6f8;
  .form {
    padding: 30px 16px;
    font-size: 14px;
    .nut-textarea {
      margin-bottom: 30px;
      border-radius: 8px;
    }
    .nut-input {
      margin-bottom: 30px;
      border-radius: 8px;
    }
  }
}
</style>