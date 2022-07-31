<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { useGo } from "@hooks/usePage";
import { activeTaskApi, activeSignApi } from "@api/mine";

const go = useGo();
const state: any = reactive({
  user_info: {
    money: 0,
    sign_days: 0,
    gift_money: 0,
  },
  sign_items: [],
  task_items: [],
});

const init = async () => {
  const {
    data: { user_info, sign_items, task_items },
  } = await activeTaskApi();
  state.user_info = user_info;
  state.sign_items = sign_items;
  state.task_items = task_items;
};

const sign = async () => {
  await activeSignApi();
  init();
};

onMounted(async () => {
  init();
});
</script>

<template>
  <section class="mission">
    <header class="head">
      <div class="days">
        <h2>
          已连续签到<b>{{ state.user_info.sign_days }}</b
          >天
        </h2>
      </div>
      <div class="vals">
        <div>
          <h1>
            {{ state.user_info.money }}
          </h1>
          <p>当前鸡腿</p>
        </div>
        <div>
          <h1>
            {{ state.user_info.gift_money }}
          </h1>
          <p>赠送鸡腿</p>
        </div>
      </div>
    </header>

    <main class="sign">
      <h3>每日签到（{{ state.user_info.sign_days }}/7）</h3>
      <p>
        已经连续签到<b>{{ state.user_info.sign_days }}</b
        >天
      </p>
      <ul class="week">
        <li
          :class="o.is_sign && `check`"
          v-for="(o, i) in state.sign_items"
          :key="o.gift_money"
        >
          <template v-if="i === state.sign_items.length - 1 && 0 < i">
            <i>×{{ o.gift_money }}</i>
            <p>鸡腿大礼包</p>
          </template>
          <template v-else>
            <i></i>
            <p>
              鸡腿<b>×{{ o.gift_money }}</b>
            </p>
          </template>
        </li>
      </ul>
      <div>
        <nut-animate type="ripple" action="click">
          <button type="button" @click="sign">签 到</button>
        </nut-animate>
      </div>
    </main>

    <main class="task">
      <h3>任务（{{ state.user_info.sign_days }}/7）</h3>
      <div class="item" v-for="(o, i) in state.task_items" :key="i">
        <label>
          <b>{{ o.title }}</b>
          <i>+{{ o.gift_money }}</i>
        </label>
        <button type="button" @click="go('/')">去完成</button>
      </div>
    </main>

    <main class="rule">
      <h5>签到规则：</h5>
      <p>1. 本签到为累计签到，用户若中途中断签到，签到记录将自动从新开始</p>
      <p>2. 签到周期为7天</p>
      <p>3. 签到领取的书币有效期为5天</p>
    </main>
  </section>
</template>



<style lang="scss" scoped>
.mission {
  min-height: 100vh;
  padding-bottom: 6px;
  background: #fef1fd;
  .head {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 173px;
    background: url(@/assets/imgs/task.webp) left top no-repeat;
    background-size: cover;

    > .days {
      padding-left: 40px;
      text-align: left;
      > h2 {
        line-height: 50px;
        font-weight: 600;
        font-size: 14px;
        color: white;
        letter-spacing: 2px;
        > b {
          padding: 0 2px;
          font-size: 26px;
        }
      }
    }

    > .vals {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: 352px;
      height: 88px;
      background: linear-gradient(
        90deg,
        #ffffff 0%,
        #ffffff 31%,
        #ffffff 69%,
        #ffffff 100%
      );
      box-shadow: 0px 2px 6px 0px rgba(161, 93, 189, 0.22);
      border-radius: 16px;

      > div {
        flex: auto;
        position: relative;
        text-align: center;
        > h1 {
          font-size: 32px;
          font-weight: 600;
          color: #333;
        }
        p {
          position: relative;
          font-size: 14px;
          font-weight: 600;
          color: #666;
          text-align: center;
        }
        &:nth-child(1) {
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            display: inline-block;
            margin-right: 0px;
            width: 1px;
            height: 40px;
            background: linear-gradient(
              180deg,
              rgba(249, 180, 175, 0) 0%,
              #f8b4a1 53%,
              rgba(249, 180, 164, 0) 100%
            );
          }
        }
      }
    }
  }
  .sign {
    box-sizing: border-box;
    position: relative;
    margin: 15px auto 6px;
    padding: 11px;
    width: 350px;
    height: 360px;
    background: #ffffff;
    box-shadow: 0px 2px 6px 0px rgba(157, 89, 189, 0.22);
    border-radius: 16px;
    &::after {
      content: "";
      position: absolute;
      bottom: -20px;
      right: 33px;
      display: block;
      width: 31px;
      height: 31px;
      background: url(@/assets/icon/pushpin.webp) no-repeat;
      background-size: cover;
      z-index: 1;
    }
    > h3 {
      position: relative;
      padding-left: 15px;
      font-size: 16px;
      font-weight: 600;
      color: #111;
      letter-spacing: 2px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 4px;
        display: block;
        width: 4px;
        height: 20px;
        border-radius: 2px;
        background: #977ac4;
      }
    }
    > p {
      margin-top: 6px;
      line-height: 15px;
      font-weight: 400;
      color: #999;
      letter-spacing: 1px;
      > b {
        color: #9854bf;
      }
    }
    > ul.week {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 10px auto;
      > li {
        flex-shrink: 0;
        -ms-flex-negative: 0;
        position: relative;
        margin: 10px 5px;
        width: 72px;
        height: 92px;
        border-radius: 4px;
        background: #f6f0f9;
        overflow: hidden;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 0;
          height: 0;
          border-top: 22px solid #9854bf;
          border-right: 22px solid transparent;
        }

        i {
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          margin-top: -20px;
          margin-left: -14px;
          width: 28px;
          height: 28px;
          font-style: normal;
          background: url(@/assets/icon/fowlleg.webp) no-repeat;
          background-size: contain;
        }

        img {
          width: 28px;
          height: 28px;
        }

        p {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          font-weight: 500;
          text-align: center;
          color: #666666;
          background: #fff3e6;
          letter-spacing: 1px;
          > b {
            color: #9854bf;
          }
        }
      }
      > li.check {
        background: url(@/assets/svg/metre.svg) center no-repeat;
        border: none;
        background-size: cover;
        &::before {
          border-top: 22px solid #f6cc50;
        }
        p {
          color: white;
          background: rgba(0, 0, 0, 0.18);
          > b {
            color: white;
          }
        }
      }
      > li:last-child {
        width: 154px;
        i {
          padding-left: 30px;
          left: 36%;
          line-height: 30px;
          font-size: 18px;
          color: #9854bf;
        }
      }
      > li.check:last-child {
        background: url(@/assets/svg/metre.svg) center -40px no-repeat;
        background-size: cover;
      }
    }
    > div {
      margin: 10px auto 5px;
      width: 206px;
      height: 40px;
      text-align: center;
      background: linear-gradient(180deg, #fcb8a1 0%, #9b57bd 100%);
      border-radius: 100px;
      button {
        font-size: 18px;
        font-weight: 500;
        color: white;
        width: 195px;
        height: 40px;
        background: #352049;
        border-radius: 100px;
      }
    }
  }
  .task {
    box-sizing: border-box;
    position: relative;
    margin: 13px auto;
    padding: 15px;
    width: 350px;
    background: white;
    box-shadow: 0px 2px 6px 0px rgba(157, 89, 189, 0.22);
    border-radius: 16px;
    &::before {
      content: "";
      position: absolute;
      top: -24px;
      left: 33px;
      display: block;
      width: 31px;
      height: 31px;
      background: url(@/assets/icon/pushpin.webp) no-repeat;
      background-size: cover;
    }
    > h3 {
      position: relative;
      padding-left: 12px;
      font-size: 16px;
      font-weight: 600;
      color: #111;
      letter-spacing: 2px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 2px;
        display: block;
        width: 4px;
        height: 20px;
        border-radius: 2px;
        background: #977ac4;
      }
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      padding: 10px 0;
      > label {
        position: relative;
        padding-left: 30px;
        font-size: 15px;
        &::before {
          content: "";
          position: absolute;
          top: -2px;
          left: 0;
          display: inline-block;
          margin-right: 0px;
          width: 25px;
          height: 25px;
          background: url(@/assets/svg/money.svg) no-repeat;
          background-size: cover;
        }
        b {
          color: #333;
          font-weight: 400;
        }
        i {
          position: relative;
          padding: 0 20px 0 5px;
          font-style: normal;
          color: #9c58be;
          &::before {
            content: "";
            position: absolute;
            top: 1px;
            right: 0;
            display: inline-block;
            margin-right: 0px;
            width: 15px;
            height: 15px;
            background: url(@/assets/icon/fowlleg.webp) no-repeat;
            background-size: cover;
          }
        }
      }
      > button {
        width: 62px;
        height: 26px;
        font-size: 12px;
        color: white;
        background: linear-gradient(131deg, #fbb7a1 0%, #9c58be 100%);
        border-radius: 100px;
      }
    }
  }
  .rule {
    margin: 0 0 15px 0;
    padding: 0 15px;
    h5 {
      line-height: 26px;
      font-size: 12px;
      font-weight: 600;
      color: #333;
    }
    > p {
      line-height: 20px;
      font-size: 11px;
      font-weight: 400;
      color: #666;
    }
  }
}
</style>