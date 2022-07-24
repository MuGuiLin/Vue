<script setup lang="ts">
import { ref, onMounted } from "vue";
const show = ref(true);
onMounted(() => {
  setTimeout(() => {
    show.value = false;
  }, 4000);
});
</script>

<template>
  <section v-if="show" class="start"></section>
</template>

<style lang="scss" scoped>
.start {
  @keyframes opacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white url(@/assets/imgs/start.gif) center center no-repeat;
  background-size: cover;
  animation: opacity 1s 3s 1 forwards;
  z-index: 666;
}
</style>
