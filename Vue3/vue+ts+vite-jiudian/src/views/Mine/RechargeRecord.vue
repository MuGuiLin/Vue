<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import Navbar from "@coms/Navbar.vue";
import { getRecordApi } from "@api/mine";

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
  const {
    data: { items = [], asPageData },
  }: IRecordProps | any = await getRecordApi({
    page,
    pageSize,
  });
  state.items.push(...items);
  cb && cb(asPageData);
};

const refresh = (done: () => void) => {
  state.page = 1;
  state.items = [];
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
    <ul class="record-list" id="record-scroll">
      <nut-infiniteloading
        pull-icon="loading1"
        load-icon="loading"
        load-more-txt="已经到底啦～"
        container-id="record-scroll"
        :use-window="false"
        :is-open-refresh="true"
        :has-more="state.has"
        @load-more="load"
        @refresh="refresh"
      >
        <template v-if="state.items.length">
          <li class="item" v-for="(o, i) in state.items" :key="i">
            <div class="left">
              <h4>{{ o.desc }}</h4>
              <time>{{ o.date }}</time>
            </div>
            <div class="right">
              <span>+{{ o.money }}漫币</span>
            </div>
          </li>
        </template>
        <template v-else>
          <li class="void">
            <b>充值记录是空的哦～</b>
          </li>
        </template>
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
    li.item {
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
          font-size: 14px;
          font-weight: 400;
          color: #333;
        }
        time {
          line-height: 16px;
          font-size: 11px;
          font-weight: 400;
          color: #666;
        }
      }
      > .right {
        span {
          line-height: 20px;
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }
      }
    }
    li.void {
      box-sizing: border-box;
      margin-top: 50%;
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      background: url(@/assets/imgs/void.webp) center top no-repeat;
      background-size: 50%;
      > b {
        font-size: 15px;
        font-weight: 400;
        color: #888;
      }
    }
  }
}
</style>