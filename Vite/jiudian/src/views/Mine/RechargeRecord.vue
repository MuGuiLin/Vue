<script lang="ts" setup>
import { ref, reactive, onMounted, toRefs } from "vue";
import Navbar from "@/components/Navbar.vue";
import { getRecordApi } from "@/api/mine";

interface IRecordProps {
  asPageData?: boolean;
  currentPage?: number;
  items?: Array<any>;
  total?: number;
}

const state: any = reactive({
  has: true,
  page: 1,
  pageSize: 20,
  items: [],
});

const init = async (cb?: Function) => {
  const { page, pageSize } = state;
  const { items = [], asPageData }: IRecordProps | any = await getRecordApi({
    page,
    pageSize,
  });
  state.items.push(...items);
  cb && cb(asPageData);
};

const refresh = (done: () => void) => {
  state.page = 1;
  init();
  done();
};

const load = (done: Function): void => {
  state.page++;
  init((asPageData: boolean = true) => {
    if (1 < state.page && !asPageData) {
      state.has = false;
    }
    done();
  });
};

onMounted(() => {
  init();
});
</script>

<template>
  <section class="record">
    <Navbar title="" />
    <ul class="record-list" id="recordScroll">
      <nut-infiniteloading
        pull-icon="loading1"
        load-icon="loading"
        load-more-txt="已经到底啦～"
        container-id="recordScroll"
        :use-window="false"
        :is-open-refresh="true"
        :has-more="state.has"
        @load-more="load"
        @refresh="refresh"
      >
        <li class="record-item" v-for="(o, i) in state.items" :key="i">
          <div class="left">
            <h4>{{ o.desc }}</h4>
            <time>{{ o.date }}</time>
          </div>
          <div class="right">
            <span>+{{ o.money }}漫币</span>
          </div>
        </li>
      </nut-infiniteloading>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.record {
  .record-list {
    box-sizing: border-box;
    margin: 0;
    padding: 0 20px 20px;
    width: 100%;
    height: calc(100vh - 52px);
    overflow-y: auto;
    overflow-x: hidden;
    background: white;
    li.record-item {
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
  }
}
</style>