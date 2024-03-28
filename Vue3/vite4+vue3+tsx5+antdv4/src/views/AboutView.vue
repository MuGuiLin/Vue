<script setup lang="ts">
import { getCurrentInstance } from 'vue'
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
