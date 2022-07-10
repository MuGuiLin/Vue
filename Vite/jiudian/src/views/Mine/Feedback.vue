<script lang="ts" setup>
import { reactive } from "vue";
import Navbar from "@/components/Navbar.vue";
const state = reactive({
  feed: "",
  phone: "",
});

const change = (val: string) => {
  console.log(val);
};

const submit = () => {
  console.log(state);
};
</script>

<template>
  <section class="feedback">
    <Navbar title="" />
    <form class="form">
      <nut-textarea
        placeholder="亲，清在此输入反馈内容～"
        v-model="state.feed"
        rows="8"
        autosize
        :change="change"
      />
      <nut-input
        update:model-value="change"
        v-model="state.phone"
        placeholder="请输入您的联系方式"
      />
      <nut-button block type="primary" @click="submit">提 交</nut-button>
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