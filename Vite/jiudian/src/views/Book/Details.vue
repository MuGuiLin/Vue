

<script lang="ts" setup>
import { reactive, unref, onMounted } from "vue";
import { useGo, usePar, back } from "@hooks/usePage";
import { getDetailsApi, getPaginateApi, starAssistApi } from "@api/book";

const go = useGo();
const { query } = usePar();
interface IStateProps {
  ["key"]: any;
}

interface IResProps extends IStateProps {
  data: any;
}

const state: IStateProps | any = reactive({
  id: "",
  show: false,
  data: {
    desc: "...",
    tags: "",
  },
  chapter: {
    total: 0,
    items: [],
  },
});

const chapter = async () => {
  const { data }: IResProps = await getPaginateApi(state.id);
  state.chapter = data;
};

const toggle = () => {
  state.show = !state.show;
};

const starAssist = async () => {
  const { data }: IStateProps | any = await starAssistApi({
    comic_id: state.id,
  });
  console.log(data);
};

onMounted(async () => {
  const { id } = query;
  if (id) {
    state.id = id;
    const { data }: IResProps | any = await getDetailsApi(state.id);
    chapter();
    state.data = data;
    if (data.tags.length) {
      state.data.tags = data.tags.join("·");
    }
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
        <b>点赞数：{{ state.data.star_number }}</b>
        <nut-animate type="jump" action="click">
          <button type="button" @click="starAssist">喜欢</button>
        </nut-animate>
      </div>
    </header>
    <div class="details-summary" :class="state.show && 'show'">
      <h3>简介<a @click="toggle">展开</a></h3>
      <article>
        <b>{{ state.data.tags }}</b>
        {{ state.data.desc }}
      </article>
    </div>

    <div class="details-serialize">
      <h3>
        连载中<a>更新{{ state.chapter.total }}话</a>
      </h3>
      <ul>
        <li v-for="o in state.chapter.items" :key="o.chapter_number">
          <dl>
            <dt>
              <img class="cover" :src="o.cover" :alt="o.chapter_number" />
              <p>{{ o.date }}</p>
            </dt>
            <dd>第{{ o.chapter_number }}话-{{ o.title }}</dd>
          </dl>
        </li>
      </ul>
    </div>

    <div class="details-reviews">
      <h3>漫画点评</h3>
      <ul>
        <li class="void">
          <b>冲鸭 抢沙发～</b>
        </li>
        <li>
          <dl>
            <dt>
              <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
              <h4>九九</h4>
              <p>2022-03-06</p>
            </dt>
            <dd>
              <h5>
                一次就好，一次就好，我带你去看天涯海角一次就好，我带你去看天涯海角我带你去看天涯海角。
              </h5>
            </dd>
            <dd>
              <a class="laud">666</a>
              <a>888</a>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
              <h4>九九</h4>
              <p>2022-03-06</p>
            </dt>
            <dd><h5>一次就好，我带你去看天涯海角</h5></dd>
            <dd>
              <a>666</a>
              <a class="text">888</a>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <footer class="details-footer">
      <div class="input">
        <input type="text" placeholder="说一说" />
      </div>
      <button>开始阅读</button>
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
      }
    }
  }
  &-summary {
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
  }
  .show {
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
  &-serialize {
    margin: 8px 0;
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
    margin: 8px 0 45px;
    padding: 12px 0px;
    background: white;
    > h3 {
      position: relative;
      padding: 0px 12px;
      font-size: 16px;
      color: #333;
    }
    > ul {
      box-sizing: border-box;
      background: white;

      > li {
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
              width: 34px;
              height: 34px;
              border-radius: 50%;
            }
            h4 {
              line-height: 26px;
              font-size: 14px;
              font-weight: 400;
              color: #999;
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
            color: #666;
            > h5 {
              line-height: 16px;
              font-size: 12px;
              font-weight: 400;
              color: #999;
              letter-spacing: 1px;
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

      > li.void {
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
      width: 220px;
      height: 35px;
      background: #f3f3f3;
      border-radius: 18px;
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
        height: 38px;
        border: none;
        background: none;
      }
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