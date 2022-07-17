<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { useGo } from "@hooks/usePage";
import { homeApi } from "@api/home";
const go = useGo();
const state: any = reactive({
  noticebar: "新用户福利，首充多3块，送1000鸡腿！",
  page: 0,
  banner: [] as any[],
  original_comics: {
    title: "原创推荐",
  },
  assist_comics: {
    title: "新作预约 | 为原创漫画助力",
  },
});

onMounted(async () => {
  const { code, data }: any = await homeApi();
  if (200 === code) {
    if (data.carousels.length) {
      state.banner = data.carousels;
    }
    state.original_comics = data.original_comics;
    state.assist_comics = data.assist_comics;
  }
});
</script>

<template>
  <section class="home">
    <nut-swiper
      :init-page="state.page"
      :pagination-visible="true"
      pagination-color="#DB56EE"
      auto-play="3000"
    >
      <nut-swiper-item
        v-for="o in state.banner"
        :key="o"
        @click="go('/article')"
      >
        <img :src="o.img_url" :alt="o.title" />
      </nut-swiper-item>
    </nut-swiper>

    <main class="main">
      <div class="main-noticebar">
        <marquee class="marquee">{{ state.noticebar }}</marquee>
        <button class="watch" type="button" @click="go('/account')">
          去看看 <nut-icon name="right" size="10" color="#fa2c19"></nut-icon>
        </button>
      </div>

      <nav class="main-nav">
        <router-link to="/recent"><i></i>最近看漫</router-link>
        <router-link to="/mine"><i></i>我的</router-link>
      </nav>

      <h3 class="main-h3">{{ state.original_comics.title }}</h3>
      <ul class="main-recommend">
        <li v-for="o in state.original_comics.comic_items" :key="o.id">
          <img class="cover" :src="o.list_cover" :alt="o.title" />
          <dl class="info">
            <dt>
              <h4>{{ o.title }}</h4>
              <nut-button
                color="linear-gradient(to right, #FFBBA0, #C371ED)"
                @click="go({ path: '/article', query: { id: o.id } })"
                >续看</nut-button
              >
            </dt>
            <dd class="desc">{{ o.desc || "..." }}</dd>
            <dd class="read">
              {{ o.current_read_chapter }}/{{ o.total_chapter_number }}话
            </dd>
          </dl>
        </li>
      </ul>

      <h3 class="main-h3">{{ state.assist_comics.title }}</h3>

      <ul class="main-reserve">
        <li
          v-for="o in state.assist_comics.comic_items"
          :key="o.id"
          @click="go({ path: '/reserve', query: { id: o.id } })"
        >
          <dl>
            <dt>
              <i>VIP</i>
              <img class="cover" :src="o.list_cover" :alt="o.title" />
              <p>{{ o.assist_number }} 已助力</p>
            </dt>
            <dd>
              <h4>{{ o.title }}</h4>
            </dd>
            <dd>{{ o.label || "..." }}</dd>
          </dl>
        </li>
      </ul>

      <nut-divider
        :style="{
          color: '#B1B1B1',
          borderColor: '#D6D6D6',
          padding: '30px 30px 0',
        }"
        >来自九九的邀请</nut-divider
      >
      <footer class="main-footer"></footer>
    </main>
  </section>
</template>

<style lang="scss" scoped>
.home {
  .nut-swiper {
    position: relative;
    height: 220px;
    background: url(@/assets/imgs/banner-1.jpg) no-repeat;
    background-size: cover;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 100%;
      height: 100px;
      background: url(@/assets/svg/catear.svg) 0 23px no-repeat;
      background-size: cover;
    }
    .nut-swiper-item {
      img {
        width: 100%;
        height: 220px;
      }
    }
  }

  .main {
    padding: 10px;
    &-noticebar {
      position: relative;
      margin: 10px auto;
      display: flex;
      width: 345px;
      overflow: hidden;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 40px;
        height: 32px;
        border-radius: 16px 0px 0px 16px;
        background: #feecf3 url(@/assets/svg/noticebar.svg) center center
          no-repeat;
        background-size: 40%;
      }
      > .marquee {
        height: 32px;
        line-height: 32px;
        border-radius: 16px 0px 0px 16px;
        font-size: 12px;
        color: #fe6d6e;
        background: #feecf3;
      }

      > .watch {
        width: 120px;
        height: 32px;
        line-height: 32px;
        font-size: 12px;
        font-weight: 600;
        color: #fe6d6e;
        background: #ffcbe8;
        border: 0;
        border-radius: 0px 16px 16px 0px;
      }
    }

    &-nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px 0;
      > a {
        font-size: 16px;
        line-height: 38px;
        font-weight: 400;
        color: #333;
        > i {
          display: inline-block;
          padding-right: 5px;
          width: 38px;
          height: 38px;
          vertical-align: middle;
          background: url(@/assets/svg/recent.svg) no-repeat;
          background-size: contain;
        }
      }
      > a:nth-child(2) {
        i {
          padding-right: 2px;
          background: url(@/assets/svg/mine.svg) no-repeat;
          background-size: contain;
        }
      }
    }
    &-h3 {
      margin-top: 10px;
      font-size: 16px;
      color: #333;
    }
    &-recommend {
      margin-bottom: 36px;
      > li {
        margin: 12px 0;
        display: flex;
        justify-content: space-between;
        > .cover {
          width: 100px;
          height: 116px;
          border-radius: 8px;
        }
        > .info {
          box-sizing: border-box;
          padding: 10px;
          width: 245px;
          height: 116px;
          border-radius: 8px;
          background: linear-gradient(
            180deg,
            #fff5eb 0%,
            #fef9f7 23%,
            #fef8f0 42%,
            #fff5f5 60%,
            #fef5f3 83%
          );
          > dt {
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: center;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0px;
              width: 15px;
              height: 3px;
              background: #e6d4cd;
            }
            h4 {
              font-size: 15px;
              color: #333;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            > .nut-button {
              font-size: 15px;
            }
          }
          > dd.desc {
            padding: 8px 0;
            display: -webkit-box;
            height: 34px;
            font-size: 12px;
            line-height: 20px;
            font-weight: 400;
            color: #9f9f9f;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          > dd.read {
            font-size: 11px;
            color: #b08a7c;
            text-align: right;
          }
        }
      }
    }

    &-reserve {
      box-sizing: border-box;
      display: flex;
      margin: 10px auto;
      padding: 10px;
      width: 355px;
      height: 234px;
      border-radius: 8px;
      background: #574d4d url(@/assets/imgs/list-bg.webp) no-repeat;
      background-size: cover;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      > li {
        flex-shrink: 0;
        -ms-flex-negative: 0;
        margin-right: 10px;
        width: 130px;
        > dl {
          > dt {
            position: relative;
            i {
              position: absolute;
              top: 5px;
              right: 5px;
              display: block;
              padding: 2px 5px;
              font-size: 12px;
              font-weight: 600;
              color: #560805;
              border-radius: 3px;
              background: #fce373;
            }
            img {
              width: 100%;
              height: 170px;
              border-radius: 8px;
            }
            p {
              position: absolute;
              bottom: 5px;
              right: 5px;
              color: rgba(255, 255, 255, 0.8);
              font-size: 12px;
            }
          }
          > dd {
            color: rgba(255, 255, 255, 0.8);
            h4 {
              line-height: 25px;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.8);
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
      }
    }

    &-footer {
      width: 100%;
      height: 100px;
      background: url(@/assets/imgs/qq.webp) center top no-repeat;
      background-size: contain;
    }
  }
  ::v-deep {
    .nut-swiper-pagination {
      z-index: 1;
      bottom: 6px;
      i {
        width: 6px;
        height: 6px;
        color: #db56ee;
        border-radius: 6px;
        background-color: #db56ee;
        &.active {
          width: 18px;
        }
      }
    }
  }
}
</style>
