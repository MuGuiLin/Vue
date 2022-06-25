<script setup lang="ts">
import Vue from 'vue';
import { onMounted, reactive } from 'vue';

import { List, Button } from '@nutui/nutui';

const state = reactive({
  count: new Array(10000).fill(0)
});

const handleScroll = () => {
  let arr = new Array(10000).fill(0);
  const len = state.count.length;
  state.count = state.count.concat(
    arr.map((item: number, index: number) => len + index + 1)
  );
};

onMounted(() => {
  state.count = state.count.map((item: number, index: number) => index + 1);
  console.log(state.count);
});
</script>

<template>
  <article>
    <nut-cell class="article">
      <nut-list
        class=""
        :height="300"
        :width="100"
        :listData="state.count"
        @scroll-bottom="handleScroll"
      >
        <template v-slot="{ item }">
          <div class="list-item">
            {{ item }}
            <img src="@/assets/imgs/manhua.jpg" alt="" />
          </div>
        </template>
      </nut-list>
    </nut-cell>
  </article>
</template>

<style lang="scss">
.article {
  width: 100%;
  height: 100vh;
  .nut-list-item {
    box-sizing: border-box;
    margin: 20px 0;
    .list-item {
      box-sizing: border-box;
      border: 1px solid gray;
      img{
        width: 100%;
      }
    }
  }
}
</style>
