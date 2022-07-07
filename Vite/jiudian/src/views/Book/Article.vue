<script lang="ts" setup>
import { onMounted, ref, reactive } from "vue";

interface IState {
  ["key"]: any;
}

const state = reactive({
  count: new Array(55).fill(0),
  isVisible: false,
  val: "",
  sort: true,
  refreshList: Array(),
});

const handleScroll = () => {
  let arr = new Array(55).fill(0);
  const len = state.count.length;
  state.count = state.count.concat(
    arr.map((item: number, index: number) => len + index + 1)
  );
};

const tabSwitch = (item: any, index: number) => {
  console.log(item, index);
};

const switchActionSheet = (param: any) => {
  state.isVisible = !state.isVisible;
};
const chooseItem = (itemParams: { name: string }) => {
  state.val = itemParams.name;
};

const refreshHasMore = ref(true);

const refreshLoadMore = (done: () => void) => {
  setTimeout(() => {
    const curLen = state.refreshList.length;
    for (let i = curLen; i < curLen + 10; i++) {
      state.refreshList.push(`${i}`);
    }
    if (state.refreshList.length > 20) refreshHasMore.value = false;
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
    state.refreshList.push(`${i}`);
  }
};

const sort = () => {
  state.sort = !state.sort;
  state.refreshList = state.refreshList.reverse();
};

onMounted(() => {
  state.count = state.count.map((item: number, index: number) => index + 1);
  console.log(state.count);
  init();
});
</script>

<template>
  <section class="article">
    <mian class="vlist">
      <nut-list
        class=""
        :height="360"
        :listData="state.count"
        @scroll-bottom="handleScroll"
      >
        <template v-slot="{ item }">
          <div class="list-item">
            <img :src="`src/assets/hua/pic(${item + 1}).jpg`" :alt="item" />
          </div>
        </template>
      </nut-list>
    </mian>

    <nut-actionsheet v-model:visible="state.isVisible" @choose="chooseItem">
      <div class="infiniteTop">
        <h3>黑客漫画</h3>
        <div class="sort">
          <span>已更89话</span>
          <button v-if="state.sort" @click="sort">正序</button>
          <button v-else class="fall" @click="sort">倒序</button>
        </div>
        <p class="point">漫画单张定价250鸡腿！</p>
      </div>
      <ul class="nav-box" id="navScroll">
        <nut-infiniteloading
          pull-icon="loading1"
          load-icon="loading"
          load-more-txt="到底啦～"
          container-id="navScroll"
          :use-window="false"
          :is-open-refresh="true"
          :has-more="refreshHasMore"
          @load-more="refreshLoadMore"
          @refresh="refresh"
        >
          <li
            class="nav-item active"
            v-for="(item, index) in state.refreshList"
            :key="index"
          >
            <div class="cover lock">
              <img src="@/assets/imgs/cover.jpg" alt="" />
            </div>
            <dl class="info">
              <dt>
                <h4>第{{ Number(item) + 1 }}话 - 女主登场</h4>
              </dt>
              <dd>
                <time>2020-01-05</time>
              </dd>
            </dl>
          </li>
        </nut-infiniteloading>
      </ul>
    </nut-actionsheet>

    <nut-tabbar
      :bottom="true"
      :safeAreaInsetBottom="true"
      @tab-switch="tabSwitch"
      unactive-color="#333"
      active-color="#333"
    >
      <nut-tabbar-item
        tab-title="首页"
        img="src/assets/svg/home.svg"
        activeImg="src/assets/svg/home.svg"
        to="/"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="漫画详情"
        img="src/assets/svg/info.svg"
        activeImg="src/assets/svg/info.svg"
        to="/details"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="目录"
        img="src/assets/svg/item.svg"
        activeImg="src/assets/svg/item.svg"
        @click="switchActionSheet"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="最近看漫"
        img="src/assets/svg/time.svg"
        activeImg="src/assets/svg/time.svg"
        to="/recent"
      ></nut-tabbar-item>
    </nut-tabbar>
  </section>
</template>

<style lang="scss" scoped>
.article {
  opacity: 0;
  animation: opacity 1s forwards;
  .vlist {
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    .nut-list-item {
      box-sizing: border-box;
      padding: 0;
      .list-item {
        box-sizing: border-box;
        img {
          width: 100%;
          height: 326px;
        }
      }
    }
  }

  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
}
.nut-popup {
  background: #20243c;
  .nut-actionsheet-panel {
    .infiniteTop {
      color: white;
      background: #20243c;
      h3 {
        height: 40px;
        line-height: 60px;
        font-size: 18px;
        text-align: center;
      }
      .sort {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 10px;
        border-bottom: 1px solid rgba(238, 238, 238, 0.2);
        > span {
          position: relative;
          font-size: 16px;
          color: white;
          &::after {
            content: "";
            position: absolute;
            top: -8px;
            right: -45px;
            display: inline-block;
            width: 40px;
            height: 30px;
            background: url(@/assets/svg/even.svg) no-repeat;
            background-size: cover;
          }
        }
        > button {
          position: relative;
          padding-left: 18px;
          width: 68px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #d2b8fc;
          border-radius: 30px;
          background: #32395f;
          &::before {
            content: "";
            position: absolute;
            top: 8px;
            left: 10px;
            display: inline-block;
            width: 15px;
            height: 15px;
            background: url(@/assets/svg/rise.svg) no-repeat;
            background-size: cover;
          }
        }
        > button.fall {
          &::before {
            background: url(@/assets/svg/fall.svg) no-repeat;
            background-size: cover;
          }
        }
      }
      p {
        position: relative;
        padding: 10px 10px 10px 40px;
        font-size: 12px;

        &::before {
          content: "";
          position: absolute;
          top: 5px;
          left: 10px;
          display: inline-block;
          width: 25px;
          height: 25px;
          background: url(@/assets/icon/fowlleg.webp) no-repeat;
          background-size: cover;
        }
      }
    }
    .nav-box {
      box-sizing: border-box;
      padding: 0 10px 10px;
      height: 460px;
      color: white;
      overflow-y: auto;
      overflow-x: hidden;
      background: #20243c;
      &::-webkit-scrollbar {
        display: none;
      }
      .nav-item {
        margin: 20px 0;
        display: flex;
        div.cover {
          width: 100px;
          height: 60px;
          border-radius: 4px;
          box-shadow: 0px 0px 3px 0px rgba(255, 255, 255, 0.6);
          overflow: hidden;
          > img {
            width: 100%;
            height: 100%;
            -webkit-object-fit: cover;
            object-fit: cover;
          }
        }
        div.lock {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 24px;
            background: rgba(0, 0, 0, 0.6) url(@/assets/svg/lock.svg) center
              center no-repeat;
          }
        }
        dl.info {
          flex: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 20px;
          dt {
            position: relative;
            h4 {
              font-size: 16px;
              color: white;
            }
          }
          dd {
            font-size: 12px;
            color: #c6c6c6;
          }
        }
      }
      li.active {
        .info {
          dt {
            &::after {
              content: "";
              position: absolute;
              top: 3px;
              right: 0;
              width: 16px;
              height: 16px;
              background: url(@/assets/svg/mark.svg) no-repeat;
              background-size: cover;
            }
            h4 {
              font-size: 16px;
              color: #faac5d;
            }
          }
        }
      }
    }
  }
}

.nut-tabbar {
  padding: 8px 0;
  background: rgba(255, 255, 255, 0.8);
}
::v-deep {
  .nut-list-item {
    margin: 0;
  }
  .nut-popup {
    background: #20243c !important;
  }
}
</style>
