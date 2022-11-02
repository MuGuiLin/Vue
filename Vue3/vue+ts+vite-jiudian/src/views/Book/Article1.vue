<script lang="ts" setup>
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from "vue";
import Recharge from "@coms/Recharge.vue";
import { useGo, usePar, back } from "@hooks/usePage";
import { getChaptersApi, getContentsApi } from "@api/book";
import { zoomImage, clientHeight, scrollIntoView } from "@/utils";

import home from "@/assets/icon/home.webp";
import info from "@/assets/icon/info.webp";
import item from "@/assets/icon/item.webp";
import time from "@/assets/icon/time.webp";
import { log } from "console";

let out: any = null;
const go = useGo();
const { query } = usePar();
const navul: any = ref(null);
const content: any = ref([]);

interface IStateProps {
  ["key"]: any;
}

interface IResProps extends IStateProps {
  data: any;
}

const state: IStateProps | any = reactive({
  id: "",
  sort: true,
  show: false,
  plus: false,
  ispush: true,
  vsible: false,
  locked: false,
  chapter: {
    chapters: [],
    comic_item: {
      current_read_chapter: 1,
    },
  },
  chapter_number: 1,
  naturalHeight: 286,
  containerHeight: clientHeight * 10,
});

const title = () => {
  if (state.chapter.chapters.length) {
    const chapter = state.chapter.chapters[state.chapter_number - 1];
    document.title = `第${chapter.chapter_number || 1}话 - ${
      chapter.title || "九点漫画"
    }`;
  }
};

const getContents = async (): Promise<void> => {
  state.ispush = false;
  const { data }: any = await getContentsApi(
    `${state.id}/${state.chapter_number || 1}`
  );
  if (data.content?.length) {
    state.ispush = true;
    state.plus = data.locked;
    // state.plus = true;
    state.naturalHeight = parseInt(zoomImage(data.content[0])?.height || 286);
    state.chapter.chapters[data.chapter_number - 1].locked = data.locked;
    // content.value = [...content.value, ...data.content];
    content.value.push(...[data.content]);
  }
};

const code = (o: number) => {
  return o ? (1 === o ? "已完结" : "已停更") : "连载中";
};

const show = () => {
  state.show = !state.show;
};

const plus = (is: boolean = true) => {
  state.plus = !is ? is : !state.plus;
};

const sort = () => {
  state.sort = !state.sort;
  state.chapter.chapters = state.chapter.chapters.reverse();
  scrollIntoView(
    navul.value.children[0] ||
      <HTMLLIElement>document.querySelectorAll("#nav-box li")[0]
  );
};

const anchor = () => {
  scrollIntoView(
    <HTMLLIElement>document.querySelector(`#anchor-${state.chapter_number}`)
  );
};

const scrollBottom = () => {
  if (state.ispush) {
    clearTimeout(out);
    out = setTimeout(() => {
      state.chapter_number++;
      getContents();
    }, 60);
  }
};

const scroll = (o: any) => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  const windowHeight =
    document.documentElement.clientHeight || document.body.clientHeight;

  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;

  // if (
  //   scrollTop + windowHeight + clientHeight * 10 > scrollHeight &&
  //   content.length !== 0
  // ) {
  if ((scrollTop + windowHeight) * 2 > scrollHeight && content.length !== 0) {
    scrollBottom();
  }

  // if (o && 10 < o?.length) {
  //   state.naturalHeight = parseInt(zoomImage(o[0])?.height) || 286;
  //   state.chapter_number = o[0]?.chapter_number;
  //   title();
  // }
  if (state.show) {
    state.show = false;
  }
};

const toggle = () => {
  state.vsible = !state.vsible;
  setTimeout(() => {
    state.vsible && anchor();
  }, 60);
};

const select = (number: number) => {
  content.value.length = 0;
  state.chapter_number = number;
  getContents();
  toggle();
  title();
  show();
};

onMounted(async () => {
  const { id, chapter_number } = query;
  if (id) {
    state.id = id;
    chapter_number && (state.chapter_number = chapter_number);
    const { data }: IResProps = await getChaptersApi(state.id);
    state.chapter = data;
    if (data.comic_item?.current_read_chapter) {
      state.chapter_number = data.comic_item?.current_read_chapter;
    }
    getContents();
    title();
  }

  window.addEventListener("scroll", scroll, true);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scroll);
});
</script>

<template>
  <section class="article">
    <header class="article-header" v-show="state.show">
      <a class="back" @click="back()"></a>
    </header>

    <main class="article-main" @click="show">
      <div
        class="comics"
        v-for="(c, i) in content"
        :key="i"
        :id="'comics-' + Number(i + 1)"
      >
        <div class="pict" v-for="(p, j) in c" :key="j">
          <img :src="p.url" :alt="p.sort" />
        </div>
      </div>
    </main>

    <!-- <nut-cell>
      <nut-list
        :height="state.naturalHeight"
        :listData="content"
        :container-height="state.containerHeight"
        @click="show"
        @scroll-bottom="scrollBottom"
        @scroll="scroll"
      >
        <template v-slot="{ item }">
          <img :src="item.url" :alt="item.sort" />
        </template>
      </nut-list>
    </nut-cell> -->

    <nut-tabbar
      :bottom="true"
      v-show="state.show"
      :safeAreaInsetBottom="true"
      unactive-color="#333"
      active-color="#333"
    >
      <nut-tabbar-item
        tab-title="首页"
        :img="home"
        :activeImg="home"
        @click="go('/')"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="漫画详情"
        :img="info"
        :activeImg="info"
        :to="`/details?id=${state.id}`"
      ></nut-tabbar-item>
      <nut-tabbar-item
        class="vip"
        tab-title="目录"
        :img="item"
        :activeImg="item"
        @click="toggle"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="最近看漫"
        :img="time"
        :activeImg="time"
        to="/recent"
      ></nut-tabbar-item>
    </nut-tabbar>

    <nut-popup
      round
      position="bottom"
      :safe-area-inset-bottom="false"
      style="background: #20243c"
      v-model:visible="state.vsible"
    >
      <div class="nav-top">
        <h3>{{ state.chapter.comic_item.title }}</h3>
        <div class="sort">
          <span
            >已更 {{ state.chapter.comic_item.total_chapter_number }} 话<i>{{
              code(state.chapter.comic_item.update_status_code)
            }}</i></span
          >
          <button type="button" v-if="state.sort" @click="sort">正序</button>
          <button type="button" v-else class="fall" @click="sort">倒序</button>
        </div>
        <p class="point">漫画每话定价200鸡腿！</p>
      </div>
      <ul class="nav-box" id="nav-box" ref="navul">
        <li
          :class="`nav-item ${
            o.chapter_number == state.chapter_number && 'active'
          }`"
          v-for="o in state.chapter.chapters"
          :key="o.chapter_number"
          :id="'anchor-' + o.chapter_number"
          @click="select(o.chapter_number)"
        >
          <div :class="`cover ${o.locked && 'lock'} ${o.is_free && 'free'}`">
            <img :src="o.cover" :alt="o.title" />
          </div>
          <dl class="info">
            <dt>
              <h4>第{{ o.chapter_number }}话 - {{ o.title }}</h4>
            </dt>
            <dd>
              <time>{{ o.date }}</time>
            </dd>
          </dl>
        </li>
      </ul>
      <a class="nav-btn" @click="anchor">位置</a>
    </nut-popup>

    <nut-popup
      position="bottom"
      v-model:visible="state.plus"
      :style="{
        '-webkit-backdrop-filter': 'blur(2px)',
        'backdrop-filter': 'blur(2px)',
        background: 'none',
      }"
      :safe-area-inset-bottom="true"
    >
      <Recharge :show="true" @plus="plus" />
    </nut-popup>
  </section>
</template>

<style lang="scss" scoped>
.article {
  opacity: 0;
  animation: opacity 1s forwards;
  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
  &-header {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 888;
    > a.back {
      margin: 16px;
      display: block;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: url(@/assets/icon/back.webp) no-repeat;
      background-size: cover;
      z-index: 1;
    }
  }

  &-main {
    width: 100vw;
    .comics {
      .pict {
        img {
          display: block;
          width: 100%;
          object-fit: cover;
          object-position: center top;
        }
      }
    }
  }

  .nut-cell {
    box-sizing: border-box;
    position: static;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
    background: wheat;
  }

  &-mainre {
    position: fixed;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 6666666;
    transition: top 0.5s ease-out;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    &.plus-show {
      top: 0;
    }
  }
}
.nut-popup {
  .nav-top {
    color: white;
    h3 {
      height: 40px;
      line-height: 60px;
      font-size: 18px;
      font-weight: 500;
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
        font-size: 15px;
        color: white;
        > i {
          position: absolute;
          top: 2px;
          right: -45px;
          display: inline-block;
          width: 38px;
          height: 18px;
          font-size: 8px;
          font-weight: bold;
          line-height: 19px;
          font-style: normal;
          color: #000;
          text-align: center;
          letter-spacing: 1px;
          background: url(@/assets/icon/even.webp) no-repeat;
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
          background: url(@/assets/icon/rise.webp) no-repeat;
          background-size: cover;
        }
      }
      > button.fall {
        &::before {
          background: url(@/assets/icon/fall.webp) no-repeat;
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
    height: 386px;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

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
          background: rgba(0, 0, 0, 0.6) url(@/assets/icon/lock.webp) center
            center no-repeat;
          background-size: 20%;
        }
      }
      div.free {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 24px;
          background: rgba(0, 0, 0, 0.6) url(@/assets/icon/free.webp) center
            center no-repeat;
          background-size: 20%;
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
            font-size: 14px;
            font-weight: 600;
            color: white;
          }
        }
        dd {
          font-size: 11px;
          font-weight: 400;
          color: #c6c6c6;
        }
      }
      &:first-child {
        margin: 2px 0;
      }
    }
    li.active {
      .info {
        dt {
          h4 {
            font-size: 15px;
            color: #faac5d;
          }
          &::after {
            content: "";
            position: absolute;
            top: 3px;
            right: 0;
            width: 16px;
            height: 16px;
            background: url(@/assets/icon/mark.webp) no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
  .nav-btn {
    position: fixed;
    right: 30px;
    bottom: 50px;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 60px;
    text-align: center;
    color: white;
    font-size: 10px;
    background: rgba(210, 184, 252, 0.5) url(@/assets/icon/site.webp) center 5px
      no-repeat;
    background-size: 50%;
    border-radius: 50%;
    border: 1px solid #d2b8fc;
  }
}

.nut-tabbar {
  background: rgba(255, 255, 255, 0.8);
  .vip {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: -7px;
      right: 16px;
      width: 24px;
      height: 16px;
      background: url(@/assets/svg/vip.svg) no-repeat;
      background-size: cover;
    }
  }
}
::v-deep {
  .nut-tabbar-item {
    margin-bottom: 5px;
  }
  .nut-list-item {
    margin: 0;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
  }
}
</style>
