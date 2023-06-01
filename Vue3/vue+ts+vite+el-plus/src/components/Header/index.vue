<script setup lang="ts" name="Header">
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { locale } = useI18n();

import { storeToRefs } from "pinia";
import Lang from "@/store/modules/lang.ts";

const { lang = "zh" } = storeToRefs(Lang());
const change = () => {

  lang.value = "zh" === lang.value ? "en" : "zh";
  locale.value = lang.value;
  //   store.$patch((state) => {
  //     console.log(state);
  //     lang.value = "zh" === lang.value ? "en" : "zh";
  //   });

  //   location.reload();
};

// const { locale } = useI18n();
// const toggle = (languageKey: string): void => {
//   locale.value = languageKey;
// };

defineProps<{ msg: string }>();
</script>

<template>
  <header>
    <el-button type="success" round @click="change">{{ lang }}</el-button>
    <!-- <el-button round @click="toggle('zh')">点击切换中文</el-button>
    <el-button round @click="toggle('en')">点击切换英文</el-button> -->

    <p>{{ msg }}</p>
  </header>
</template>

<style scoped lang="less">
.header {
  color: #888;
}
</style>
