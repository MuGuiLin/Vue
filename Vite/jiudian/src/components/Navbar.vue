<script setup lang="ts" name="Navbar">
import { ref } from "vue";
import { useGo } from "@hooks/usePage";
const go = useGo();
console.log(go);
defineProps<{ title: string }>();

const back = () => {
  window.history.back();
};
</script>

<template>
  <nut-navbar @on-click-back="back" :title="title">
    <!-- <template #left>
      <div>返回</div>
    </template>
    <template #right>
      <nut-icon class="right" name="share-n"></nut-icon>
    </template> -->
  </nut-navbar>
</template>

<style lang="scss" scoped>
.nut-navbar {
  margin: 0;
}
</style>
