<script setup lang="ts" name="StartPage">
</script>

<template>
  <div class="start-page"></div>
</template>

<style lang="scss" scoped>
.start-page {
  @keyframes opacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      z-index: -1;
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
  animation: opacity 0.3s 3.3s forwards;
  z-index: 666;
}
</style>
