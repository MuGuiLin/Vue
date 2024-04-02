<script setup lang="ts">
import { getCurrentInstance } from 'vue'

console.log('.meta配置文件内容：', import.meta);
console.log('.env配置文件内容：', import.meta.env);
console.log('.env配置文件中的后端API域名', import.meta.env.VITE_API_URL);

const {
  appContext: {
    config: {
      globalProperties: { $t }
    }
  }
} = getCurrentInstance()
</script>
<template>
  <main class="about">
    <h1>{{ $t('about.title') }}</h1>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
