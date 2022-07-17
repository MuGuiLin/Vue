<script lang="ts" setup name="Navbar">
import { back } from "@hooks/usePage";
defineProps<{ title?: string }>();
</script>

<template>
  <nut-navbar @on-click-back="back()" :title="title">
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
