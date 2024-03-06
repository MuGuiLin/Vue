<script setup lang="ts">
import { ref } from "vue";

const index = ref(1);
const add = () => {
  index.value++;
  console.log("2s触发一次");
  return void 0;
};
</script>

<template>
  <h3>全局指令</h3>
  <br />
  <textarea
    cols="100"
    rows="5"
    v-focus
    placeholder="自定义全局指令-focus 获取焦点"
  ></textarea>
  <br />

  <h1>{{ index }}</h1>
  <button @click="add">正常触发</button>
  <button v-debounce="add">
    自定义全局指令 debounce-防抖，多次点击在最后延迟1s才触发
  </button>
  <ul class="ul">
    <li v-smooth-in>1</li>
    <li v-smooth-in>2</li>
    <li v-smooth-in>3</li>
    <li v-smooth-in>4</li>
    <li v-smooth-in>5</li>
    <li v-smooth-in>6</li>
    <li v-smooth-in>7</li>
    <li v-smooth-in>8</li>
    <li v-smooth-in>9</li>
    <li v-smooth-in>10</li>
  </ul>
</template>


<style scoped lang="less" >
h1 {
  color: aqua;
  line-height: 100px;
  font-size: 100px;
}
textarea {
  padding: 10px;
  width: 500px;
  font-size: 22px;
}
button {
  padding: 10px;
  font-size: 16;
}
.ul {
  margin: auto;
  width: 500px;

  text-align: center;
  li {
    list-style: none;
    margin: 50px 0;
    height: 300px;
    font-size: 100px;
    line-height: 300px;
    border: 1px solid #ccc;
    background: greenyellow;
  }
}
</style>