<script setup lang="ts">
import { ref } from 'vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const switchChecked = ref(false);
const theme = ref('');
const switchChange = (v: boolean) => {
  theme.value = v ? 'dark' : '';
};
</script>

<template>
  <!-- <nut-config-provider :theme="theme">
    <nut-cell title="切换暗黑">
      <template v-slot:link>
        <nut-switch v-model="switchChecked" @change="switchChange" />
      </template>
    </nut-cell> -->
    <router-view />
  <!-- </nut-config-provider> -->
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
