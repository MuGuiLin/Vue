<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";

interface IState {
  ["key"]: any;
}

const state = reactive({
  count: new Array(1000).fill(0),
  isVisible: false,
  val: "",
  refreshList: Array(),
});

const handleScroll = () => {
  let arr = new Array(1000).fill(0);
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
    for (let i = curLen; i < curLen + 100; i++) {
      state.refreshList.push(`${i}`);
    }
    if (state.refreshList.length > 1000) refreshHasMore.value = false;
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
  for (let i = 0; i < 100; i++) {
    state.refreshList.push(`${i}`);
  }
};

onMounted(() => {
  state.count = state.count.map((item: number, index: number) => index + 1);
  console.log(state.count);
  init();
});
</script>

<template>
  <section>
    <div class="article">
      <nut-list
        class=""
        :height="360"
        :listData="state.count"
        @scroll-bottom="handleScroll"
      >
        <template v-slot="{ item }">
          <div class="list-item">
            <img src="../../assets/hua/pic(35).jpg" :alt="item" />
          </div>
        </template>
      </nut-list>
    </div>
    <nut-actionsheet v-model:visible="state.isVisible" @choose="chooseItem">
      <div class="infiniteTop">
        <h3>黑客漫画</h3>
        <div class="sort">
          <span>已更89话</span>
          <nut-button
            size="small"
            color="linear-gradient(to right, #FFBBA0, #C371ED)"
            >正序</nut-button
          >
        </div>
        <p class="point">漫画单张定价250鸡腿！</p>
      </div>
      <ul class="infiniteUl" id="refreshScroll">
        <nut-infiniteloading
          pull-icon="JD"
          container-id="refreshScroll"
          :use-window="false"
          :is-open-refresh="true"
          :has-more="refreshHasMore"
          @load-more="refreshLoadMore"
          @refresh="refresh"
        >
          <li
            class="infiniteLi active"
            v-for="(item, index) in state.refreshList"
            :key="index"
          >
            <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
            <dl class="info">
              <dt>
                <h4>第{{ item }}话 - 女主登场</h4>
              </dt>
              <dd>
                <time>2020-01-05</time>
              </dd>
            </dl>
          </li>
        </nut-infiniteloading>
      </ul>
    </nut-actionsheet>
    <footer class="footer">
      <nut-tabbar
        class=""
        :bottom="true"
        :safeAreaInsetBottom="true"
        @tab-switch="tabSwitch"
      >
        <nut-tabbar-item tab-title="首页" icon="home" to="/"></nut-tabbar-item>
        <nut-tabbar-item tab-title="漫画详情" icon="order"></nut-tabbar-item>
        <nut-tabbar-item
          tab-title="目录"
          icon="horizontal"
          @click="switchActionSheet"
        ></nut-tabbar-item>
        <nut-tabbar-item
          tab-title="最近看漫"
          icon="clock"
          to="/recent"
        ></nut-tabbar-item>
      </nut-tabbar>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.article {
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
        height: 360px;
      }
    }
  }
}
.footer {
  // position: fixed;
  // left: 0;
  // bottom: 0;
  // width: 100%;
}

.nut-popup {
  .nut-actionsheet-panel {
    background: #20243c;
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
          font-size: 16px;
          color: white;
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
          background: url(@/assets/icon/fowlleg.png) no-repeat;
          background-size: cover;
        }
      }
    }
    .infiniteUl {
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
      .infiniteLi {
        margin: 20px 0;

        display: flex;

        .cover {
          width: 110px;
          height: 60px;
          border-radius: 8px;
          border: 1px solid #c6c6c6;
          -webkit-object-fit: cover;
          object-fit: cover;
        }
        .info {
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
::v-deep {
  .nut-list-item {
    margin: 0;
  }
}
</style>
