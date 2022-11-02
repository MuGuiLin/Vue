<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { PiniaStore } from "@/stores/modules/user";
import { useGo } from "@hooks/usePage";
import avatar from "@/assets/logo.png";
const go = useGo();
const { users, getUser }: any = PiniaStore();
getUser();
const state = reactive({
  id: "99",
  name: "九九",
  money: 0,
  gift_money: 0,
  avatar: avatar,
  ...users,
});
</script>

<template>
  <section class="mine">
    <header class="user">
      <div class="name">
        <img :src="state.avatar" alt="user" />
        <h2>{{ state.name }}</h2>
        <p>ID：{{ state.id }}</p>
        <button type="button" @click="go('/mission')">签到</button>
      </div>
      <div class="info">
        <span>{{ Number(state.money) + Number(state.gift_money) }}鸡腿</span>
        <nut-button
          size="small"
          color="linear-gradient(to right, #FFBBA0, #C371ED)"
          @click="go('/account')"
          >充值</nut-button
        >
      </div>
    </header>

    <main class="navs">
      <!-- <nut-cell-group>
        <h3 class="history-h3">阅读历史</h3>
        <ul class="history-ul">
          <li>
            <dl>
              <dt>
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>5话/20话</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>5话/20话</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <i class="defaule">+</i>
              </dt>
              <dd></dd>
              <dd>历史空空如也～</dd>
            </dl>
          </li>
        </ul>
      </nut-cell-group> -->

      <nut-cell-group>
        <nut-cell title="充值记录" to="/record">
          <template v-slot:icon>
            <i class="wallet"></i>
          </template>
          <template v-slot:link>
            <i class="arrow"></i>
          </template>
        </nut-cell>
        <nut-cell icon="order" title="消费记录" to="/spend">
          <template v-slot:icon>
            <i class="money"></i>
          </template>
          <template v-slot:link>
            <i class="arrow"></i>
          </template>
        </nut-cell>
      </nut-cell-group>

      <nut-cell-group>
        <nut-cell icon="setting" title="阅读记录" to="/recent">
          <template v-slot:icon>
            <i class="recent"></i>
          </template>
          <template v-slot:link>
            <i class="arrow"></i>
          </template>
        </nut-cell>
        <nut-cell icon="edit" title="意见反馈" to="/feedback">
          <template v-slot:icon>
            <i class="edit"></i>
          </template>
          <template v-slot:link>
            <i class="arrow"></i>
          </template>
        </nut-cell>
        <!-- <nut-cell
          icon="share-n"
          title="关于我们"
          desc="https://www.xxx.com"
          is-link
          url="/"
        ></nut-cell> -->
      </nut-cell-group>
    </main>
  </section>
</template>

<style lang="scss" scoped>
.mine {
  min-height: 100vh;
  padding: 10px;
  background: #f7f7f7 url(@/assets/imgs/mine-bg.webp) no-repeat;
  background-size: 100% 160px;
  .user {
    box-sizing: border-box;
    margin: 95px auto 20px;
    padding: 8px 20px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 355px;
    height: 120px;
    background: #ffffff;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    > .name {
      position: relative;
      padding-left: 70px;
      text-align: left;
      > img {
        position: absolute;
        top: -25px;
        left: -4px;
        width: 66px;
        height: 66px;
        border-radius: 33px;
        background: white;
        border: 1px solid #ffeefc;
      }
      > h2 {
        line-height: 26px;
        font-weight: 600;
        font-size: 16px;
        color: #333;
      }
      > p {
        font-weight: 400;
        color: #999;
      }
      > button {
        position: absolute;
        top: 10px;
        right: -20px;
        width: 76px;
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        color: #333;
        font-weight: 400;
        background: #f5edff;
        border-radius: 100px 0px 0px 100px;
        &::before {
          content: "";
          position: relative;
          top: 4px;
          left: 0;
          display: inline-block;
          margin-right: 4px;
          width: 16px;
          height: 16px;
          background: url(@/assets/icon/fowlleg.webp) no-repeat;
          background-size: cover;
        }
      }
    }
    > .info {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 30px;

      span {
        padding-left: 36px;
        line-height: 30px;
        font-size: 14px;
        font-weight: 600;
        color: #9c57be;

        &::before {
          content: "";
          position: absolute;
          top: 3px;
          left: 6px;
          display: inline-block;
          width: 25px;
          height: 25px;
          background: url(@/assets/icon/fowlleg.webp) no-repeat;
          background-size: cover;
        }
      }
      .nut-button {
        padding: 5px 14px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
  .navs {
    .nut-cell-group {
      .history-h3 {
        padding: 10px 10px 0px;
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }
      .history-ul {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        > li {
          flex-shrink: 0;
          -ms-flex-negative: 0;
          margin-right: 10px;
          width: 112px;
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
                font-style: none;
                text-align: center;
                border-radius: 6px;
                color: #ffbb9f;
                background: #fef8f2;
                border: 1px solid #f9cda1;
              }
              img {
                width: 100%;
                height: 64px;
                border-radius: 4px;
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
              font-size: 12px;

              color: #999;
              h4 {
                line-height: 25px;
                font-size: 12px;
                color: #333;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
          }
        }
      }
      .nut-cell {
        padding: 20px 16px;
      }
    }
  }
}
::v-deep {
  .nut-cell-group {
    .nut-cell-group__warp {
      .nut-cell__icon {
        i {
          display: block;
          margin-right: 5px;
          width: 22px;
          height: 22px;
          background: url(@/assets/icon/wallet.webp) no-repeat;
          background-size: cover;
        }
        i.money {
          background: url(@/assets/icon/money.webp) no-repeat;
          background-size: cover;
        }
        i.recent {
          background: url(@/assets/icon/recent.webp) no-repeat;
          background-size: cover;
        }
        i.edit {
          background: url(@/assets/icon/edit.webp) no-repeat;
          background-size: cover;
        }
      }
      .nut-cell__title {
        padding-top: 2px;
        font-size: 14px;
        font-weight: 400px;
        color: #333;
      }
      i.arrow {
        display: block;
        width: 15px;
        height: 15px;
        background: url(@/assets/icon/arrow-r.webp) no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>