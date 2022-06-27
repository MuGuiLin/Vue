<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
// const add = require('http');
console.log(1111111,import.meta)
// const fg = require('fast-glob');
const logo = import('./assets/logo.png');
const logo2 = import.meta.glob('./assets/logo.png');
let js = import.meta.glob('./demo.ts');
console.log(logo, logo2, js.naem)
console.dir(import.meta)
// console.log(2222222,import.meta.globEager('vue'))
const logo3 = new URL('../assets/logo.png', import.meta.url).href

const getImageUrl = (name: string) => {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href
}
console.log(getImageUrl('logo'))
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <img alt="Vue logo" :src="getImageUrl('logo')" />
  <img alt="Vue logo" src="{{new URL(`/src/assets/${name}.png`, import.meta.url).href}}" />
  <img alt="Vue logo" :src="() => import('./assets/logo.png')" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
