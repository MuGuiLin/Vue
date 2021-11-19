<template>
  <Layout />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Layout from '@/components/Layout.vue';
@Options({
  components: {
    Layout,
  }
})
export default class App extends Vue { }
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
