<script lang="ts" setup>
import { ref, reactive, onMounted, toRefs } from "vue";
import Navbar from "@/components/Navbar.vue";
const customHasMore = ref(true);
const state = reactive({
  customList: [""],
});
const customLoadMore = (done: Function): void => {
  setTimeout(() => {
    const curLen = state.customList.length;
    for (let i = curLen; i < curLen + 20; i++) {
      state.customList.push(`${i}`);
    }
    if (state.customList.length > 30) customHasMore.value = false;
    done();
  }, 500);
};
const refresh = (done: () => void) => {
  setTimeout(() => {
    // Toast.success('刷新成功');
    done();
  }, 1000);
};
const init = () => {
  for (let i = 0; i < 20; i++) {
    state.customList.push(`${i}`);
  }
};
onMounted(() => {
  init();
});
</script>

<template>
  <section class="spend">
    <Navbar title="消费记录" />
    <ul class="spend-list" id="recordScroll">
      <nut-infiniteloading
        pull-icon="loading1"
        load-icon="loading"
        load-more-txt="已经到底啦～"
        container-id="recordScroll"
        :use-window="false"
        :is-open-refresh="true"
        :has-more="customHasMore"
        @load-more="customLoadMore"
        @refresh="refresh"
      >
        <li
          class="spend-item"
          v-for="(item, index) in state.customList"
          :key="index"
        >
          <div class="left">
            <h4>黑客漫画（第86话）</h4>
            <time>2022-06-26 10:30</time>
          </div>
          <div class="right">
            <span>250漫币</span>
          </div>
        </li>
      </nut-infiniteloading>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.spend {
  .spend-list {
    box-sizing: border-box;
    margin: 0;
    padding: 0 20px 20px;
    width: 100%;
    height: calc(100vh - 52px);
    overflow-y: auto;
    overflow-x: hidden;
    background: white;
    li.spend-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 12px 0;
      padding: 4px 0 12px;
      border-bottom: 1px solid #eef0f0;
      > .left {
        text-align: left;
        h4 {
          line-height: 28px;
          font-size: 15px;
          font-weight: 400;
          color: #333;
        }
        time {
          line-height: 16px;
          font-size: 12px;
          font-weight: 400;
          color: #666;
        }
      }
      > .right {
        span {
          line-height: 20px;
          font-size: 16px;
          font-weight: 500;
          color: #333;
        }
      }
    }
    // li:first-child {}
  }
}
</style>