

<script lang="ts" setup>
import { ref, reactive, nextTick, onMounted, getCurrentInstance } from "vue";
import { useGo, usePar, back } from "@hooks/usePage";
import {
  getDetailsApi,
  getPaginateApi,
  starAssistApi,
  setItemsApi,
  getItemsApi,
  starItemsApi,
} from "@api/book";

const go = useGo();
const input = ref();
const { query } = usePar();
interface IStateProps {
  ["key"]: any;
}

interface IResProps extends IStateProps {
  data: any;
}

const { proxy }: any = getCurrentInstance();

const state: IStateProps | any = reactive({
  id: "",
  fid: "",
  show: false,
  data: {
    desc: "...",
    tags: "",
    is_assist: false,
    has_star_assist: false,
  },
  chapter: {
    total: 0,
    items: [],
  },
  setItems: {
    content: "",
  },
  getItems: {
    has: true,
    page: 1,
    pageSize: 6,
    items: [],
  },
  placeholder: "说一说",
});

const focus = (o: any) => {
  state.fid = o.id;
  nextTick(() => {
    input.value.focus();
  });
};

const chapter = async () => {
  const { data }: IResProps = await getPaginateApi(state.id);
  state.chapter = data;
};

const getItems = async (cb?: Function) => {
  const { page, pageSize } = state.getItems;
  const {
    data: { items = [], asPageData },
  }: IResProps | any = await getItemsApi(state.id, {
    page,
    pageSize,
  });
  state.getItems.items.push(...items);
  cb && cb(asPageData);
};

const refresh = (done: () => void) => {
  state.getItems.page = 1;
  state.getItems.items = [];
  getItems();
  done();
};

const load = (done: Function): void => {
  state.getItems.page++;
  getItems((asPageData: boolean = true) => {
    if (1 < state.getItems.page && !asPageData) {
      state.getItems.has = false;
    }
    done();
  });
};

const getDetails = async () => {
  const { data }: IResProps | any = await getDetailsApi(state.id);
  if (data.is_assist) {
    state.placeholder = "发表下你的看法";
  } else {
    chapter();
  }
  state.getItems.page = 1;
  state.getItems.items = [];
  getItems();
  state.data = data;
  if (data.tags.length) {
    state.data.tags = data.tags.join("·");
  }
};

const setItems = async () => {
  if (state.setItems.content) {
    const data: any = {
      comicId: state.id,
      content: state.setItems.content,
    };
    if (state.fid) {
      data.parentId = state.fid;
    }
    const { success, message }: IResProps | any = await setItemsApi({
      ...data,
    });
    if (success) {
      getDetails();
      state.fid = "";
      state.setItems.content = "";
      proxy.$notify.success(message);
    }
  } else {
    proxy.$notify.warn("您还没输入评论内容哦！");
  }
};

const starItems = async (item: any) => {
  const { success, message }: IResProps | any = await starItemsApi({
    commentId: item.id,
  });
  if (success) {
    getDetails();
    proxy.$notify.success(message);
  }
};

const starAssist = async () => {
  const { success }: IResProps | any = await starAssistApi({
    comic_id: state.id,
  });
  if (success) {
    getDetails();
  }
};

onMounted(async () => {
  const { id } = query;
  if (id) {
    state.id = id;
    getDetails();
  }
});
</script>

<template>
  <section class="details">
    <header class="details-header">
      <img class="cover" :src="state.data.detail_cover" alt="" />
      <a class="back" @click="back()"></a>
      <div class="title">
        <h1>{{ state.data.title }}</h1>
        <b v-if="state.data.is_assist"
          >人气值：{{ state.data.popularity_value }}</b
        >
        <b v-else>点赞数：{{ state.data.star_number }}</b>
        <nut-animate type="jump" action="click">
          <button
            type="button"
            :class="state.data.has_star_assist && 'star'"
            @click="starAssist"
            v-if="state.data.is_assist"
          >
            {{ state.data.has_star_assist ? "已" : "" }}预约
          </button>
          <button
            type="button"
            :class="state.data.has_star_assist && 'start'"
            @click="starAssist"
            v-else
          >
            喜欢
          </button>
        </nut-animate>
      </div>
    </header>
    <div class="details-wantsee" v-if="state.data.is_assist">
      <div class="lover">
        <h3>{{ state.data.assist_info.assist_number }}<b>人想看</b></h3>
        <ul>
          <li v-for="(o, i) in state.data.assist_info.user_avatars" :key="i">
            <img class="cover" :src="o" alt="头像" />
          </li>
          <li>
            想看 <i>{{ state.data.assist_info.time }}</i>
          </li>
        </ul>
        <p>王炸热血内容，引爆期待！</p>
      </div>
    </div>
    <div class="details-summary" :class="state.show && 'show'">
      <h3>简介<a @click="state.show = !state.show">展开</a></h3>
      <article>
        <b>{{ state.data.tags }}</b>
        {{ state.data.desc }}
      </article>
    </div>
    <div class="details-summary show" v-if="state.data.content">
      <h3>剧情介绍</h3>
      <article v-html="state.data.content"></article>
    </div>
    <div class="details-serialize" v-if="!state.data.is_assist">
      <h3>
        连载中<a>更新{{ state.chapter.total }}话</a>
      </h3>
      <ul>
        <li v-for="o in state.chapter.items" :key="o.chapter_number">
          <dl
            @click="
              go({
                path: '/article',
                query: { id: state.id, chapter_number: o.chapter_number },
              })
            "
          >
            <dt>
              <img :src="o.cover" :alt="o.chapter_number" />
              <p>{{ o.date }}</p>
            </dt>
            <dd>第{{ o.chapter_number }}话-{{ o.title }}</dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="details-reviews">
      <h3>漫画点评</h3>
      <ul id="reviews-scroll">
        <nut-infiniteloading
          pull-icon="loading1"
          load-icon="loading"
          load-more-txt="已经到底啦～"
          container-id="reviews-scroll"
          :use-window="false"
          :is-open-refresh="false"
          :has-more="state.getItems.has"
          @load-more="load"
          @refresh="refresh"
        >
          <template v-if="state.getItems.items.length">
            <li v-for="(o, i) in state.getItems.items" :key="i">
              <dl>
                <dt>
                  <img :src="o.userInfo.avatar" alt="头像" />
                  <h4>{{ o.userInfo.name }}</h4>
                  <p>{{ o.date }}</p>
                </dt>
                <dd>
                  <h5 @click="focus(o)">
                    <b>{{
                      o.parent_comment_user && "@" + o.parent_comment_user.name
                    }}</b>
                    {{ o.content }}
                  </h5>
                </dd>
                <dd>
                  <a :class="o.is_user_star && 'laud'" @click="starItems(o)">{{
                    o.star_number
                  }}</a>
                  <a @click="focus(o)">{{ o.comment_number }}</a>
                </dd>
              </dl>
            </li>
          </template>
          <template v-else>
            <li class="void">
              <b>冲鸭 抢沙发～</b>
            </li>
          </template>
        </nut-infiniteloading>
      </ul>
    </div>
    <footer class="details-footer">
      <div
        class="input"
        :class="(state.setItems.content || state.data.is_assist) && 'input-set'"
      >
        <input
          type="text"
          ref="input"
          v-model="state.setItems.content"
          @focus="state.placeholder = '神评尽在眼前～'"
          @blur="
            state.placeholder = state.data.is_assist
              ? '发表下你的看法'
              : '说一说'
          "
          :placeholder="state.placeholder"
        />
      </div>
      <button
        type="button"
        v-if="state.setItems.content || state.data.is_assist"
        @click="setItems"
      >
        发 送
      </button>
      <button
        type="button"
        v-else
        @click="go({ path: '/article', query: { id: state.id } })"
      >
        开始阅读
      </button>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.details {
  background: #f9f9f8;
  min-height: 100vh;
  &-header {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px;
    width: 100;
    height: 218px;
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .back {
      display: inline-block;
      margin: -4px 0 0 -3px;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: url(@/assets/svg/back.svg) no-repeat;
      background-size: cover;
      z-index: 1;
    }
    .title {
      position: relative;

      > h1 {
        line-height: 40px;
        font-size: 20px;
        font-weight: 600;
        color: white;
      }
      > b {
        padding: 3px 6px;
        font-size: 10px;
        font-weight: normal;
        color: white;
        border-radius: 2px;
        background: rgba(0, 0, 0, 0.5);
      }
      .nut-animate {
        position: absolute;
        right: 0px;
        bottom: -3px;
        button {
          padding-left: 20px;
          width: 80px;
          height: 30px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 40px;
          color: white;
          letter-spacing: 1px;
          background: #a05bbd;
          &::before {
            content: "";
            position: absolute;
            top: 5px;
            left: 15px;
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url(@/assets/svg/like.svg) no-repeat;
            background-size: cover;
          }
        }
        button.star {
          padding-left: 0px;
          color: #a05bbd;
          background: white;
          &::before {
            content: "";
            width: 0;
          }
        }
        button.start {
          color: #a05bbd;
          background: white;
          &::before {
            background: url(@/assets/svg/like-h.svg) no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
  &-wantsee {
    padding: 13px 12px 12px;
    background: white;
    .lover {
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      padding: 12px;
      height: 132px;
      background: #f0e8fe;
      border-radius: 8px;
      border: 1px solid #5c3a93;
      &::before {
        content: "";
        position: absolute;
        top: 10px;
        left: 10px;
        display: inline-block;
        width: 82px;
        height: 25px;
        background: url(@/assets/icon/logo.webp) no-repeat;
        background-size: contain;
      }
      > h3 {
        position: relative;
        font-size: 24px;
        font-weight: 600;
        color: #5c3a93;
        > b {
          padding-left: 2px;
          font-size: 12px;
          font-weight: 400;
          color: #111;
        }
      }
      > ul {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        > li {
          margin-left: -8px;
          font-size: 12px;
          color: #111;

          > img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.5);
          }
          > i {
            font-weight: 300;
            font-size: 10px;
            color: #333;
          }
        }
        > li:last-child {
          margin: 0 6px 0;
        }
      }

      > p {
        box-sizing: border-box;
        position: relative;
        padding-left: 30px;
        width: 100%;
        line-height: 20px;
        font-size: 10px;
        font-weight: 400;
        color: white;
        background: #977ac4;
        border-radius: 4px;
        &::before {
          content: "";
          position: absolute;
          top: 0px;
          left: 6px;
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url(@/assets/icon/thumb.webp) no-repeat;
          background-size: contain;
        }
      }
    }
  }
  &-summary {
    margin-top: 8px;
    padding: 16px 12px;
    background: white;
    > h3 {
      position: relative;
      padding: 6px 0;
      font-size: 16px;
      color: #333;
      > a {
        position: absolute;
        top: 3px;
        right: 5px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
        &::after {
          content: "";
          position: relative;
          top: 3px;
          left: 2px;
          display: inline-block;
          width: 16px;
          height: 16px;
          background: url(@/assets/svg/arrow.svg) no-repeat;
          background-size: cover;
          transition: transform 0.6s;
        }
      }
    }
    > article {
      display: -webkit-box;
      height: 60px;
      line-height: 20px;
      font-size: 12px;
      color: #666;
      text-align: justify;
      white-space: break-spaces;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      transition: height 0.6s;

      > b {
        color: #a05bbd;
        padding-right: 3px;
      }
    }
    &.show {
      > h3 {
        a {
          &::after {
            transform: rotate(180deg);
          }
        }
      }
      > article {
        display: block;
        height: 500px;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  }
  &-serialize {
    margin: 9px 0;
    padding: 12px 0px;
    background: white;
    > h3 {
      position: relative;
      padding: 0px 12px;
      font-size: 16px;
      color: #333;
      > a {
        position: absolute;
        top: 3px;
        right: 12px;
        font-size: 12px;
        font-weight: 400;
        color: #4994fd;
      }
    }
    > ul {
      box-sizing: border-box;
      display: flex;
      padding: 12px;
      min-height: 125px;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      > li {
        flex-shrink: 0;
        -ms-flex-negative: 0;
        margin-right: 10px;
        width: 120px;
        > dl {
          > dt {
            position: relative;
            i.defaule {
              display: block;
              margin-bottom: 10px;
              width: 100%;
              height: 64px;
              line-height: 64px;
              font-size: 25px;
              text-align: center;
              border-radius: 6px;
              color: #ffbb9f;
              background: #fef8f2;
              border: 1px solid #f9cda1;
            }
            img {
              width: 100%;
              height: 70px;
              border-radius: 6px;
            }
            p {
              position: absolute;
              bottom: 5px;
              left: 5px;
              color: rgba(255, 255, 255, 0.8);
              font-size: 12px;
            }
          }
          > dd {
            line-height: 26px;
            font-size: 10px;
            color: #666;
          }
        }
      }
    }
  }
  &-reviews {
    margin: 9px 0 65px;
    padding: 12px 0px;
    background: white;
    > h3 {
      position: relative;
      padding: 0px 12px 5px;
      font-size: 16px;
      color: #333;
    }
    > ul {
      box-sizing: border-box;
      background: white;
      height: calc(100vh - 182px);
      overflow-y: auto;
      overflow-x: hidden;
      li {
        padding: 10px;
        border-bottom: 1px solid #f3f3f3;

        > dl {
          > dt {
            position: relative;
            margin-bottom: 5px;
            padding-left: 45px;
            img {
              position: absolute;
              top: 5px;
              left: 5px;
              width: 35px;
              height: 35px;
              border-radius: 50%;
            }
            h4 {
              padding-top: 3px;
              line-height: 23px;
              font-size: 14px;
              font-weight: 400;
              color: #333;
              letter-spacing: 1px;
            }
            p {
              color: #999;
              font-size: 10px;
            }
          }
          > dd {
            padding-left: 45px;
            line-height: 26px;
            font-size: 10px;
            color: #888;
            > h5 {
              padding: 6px 0;
              line-height: 18px;
              font-size: 14px;
              font-weight: 400;
              color: #222;
              letter-spacing: 1px;
              > b {
                font-weight: 500;
                color: #5298fd;
              }
            }
            > a {
              position: relative;
              display: inline-block;
              margin-right: 30px;
              padding-left: 20px;
              &::before {
                content: "";
                position: absolute;
                top: 4px;
                left: 0px;
                display: inline-block;
                width: 16px;
                height: 16px;
                background: url(@/assets/svg/laud.svg) no-repeat;
                background-size: cover;
              }
            }
            > a:last-child {
              &::before {
                content: "";
                background: url(@/assets/svg/text.svg) no-repeat;
                background-size: cover;
              }
            }
            > a.laud {
              &::before {
                content: "";
                background: url(@/assets/svg/laud-h.svg) no-repeat;
                background-size: cover;
              }
            }
            > a.text {
              &::before {
                content: "";
                background: url(@/assets/svg/text-h.svg) no-repeat;
                background-size: cover;
              }
            }
          }
        }
      }
      li.void {
        box-sizing: border-box;
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background: url(@/assets/imgs/void.webp) center top no-repeat;
        background-size: 44%;
        > b {
          font-size: 15px;
          font-weight: 400;
          color: #888;
        }
      }
    }
  }
  &-footer {
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
    border-top: 1px solid #f3f3f3;
    background: white;
    .input {
      position: relative;
      box-sizing: border-box;
      padding-left: 40px;
      width: 240px;
      height: 35px;
      background: #f3f3f3;
      border-radius: 18px;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: 15px;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(@/assets/svg/say.svg) no-repeat;
        background-size: cover;
      }
      > input {
        width: 100%;
        height: 38px;
        border: none;
        background: none;
      }
    }
    .input-set {
      width: 268px !important;
    }
    button {
      padding: 0 20px;
      height: 35px;
      font-size: 15px;
      font-weight: 500;
      color: white;
      letter-spacing: 1px;
      border-radius: 18px;
      background: linear-gradient(129deg, #ffbb9f 0%, #c573e9 100%);
    }
  }
}
</style>