<script lang="ts" setup name="Recharge">
interface Props {
  show?: boolean;
}

const { show } = withDefaults(defineProps<Props>(), {});

const select = () => {};
const submit = () => {};
</script>

<template>
  <section class="recharge">
    <div class="recharge-plus" v-show="show"></div>
    <main class="recharge-main">
      <div
        :class="`recharge-main-balance ${show && 'recharge-main-balance-show'}`"
      >
        <label>{{ show ? "剩余：" : "我的账户" }}</label>
        <strong>￥500</strong>
      </div>
      <div class="recharge-main-units">选择充值金额（1元=100鸡腿）</div>
      <div class="recharge-main-recommend">
        <h4>33元<b>3300鸡腿</b></h4>
        <p>多充3元，多得1000鸡腿</p>
      </div>
      <ul class="recharge-main-amount">
        <li @click="select">
          <h3>30元</h3>
          <p>3000鸡腿</p>
        </li>
        <li @click="select">
          <h3>59元</h3>
          <p>5900+2500鸡腿</p>
          <i>多送25元</i>
        </li>
        <li @click="select">
          <h3>66元</h3>
          <p>6600+3300鸡腿</p>
          <i>多送33元</i>
        </li>
        <li @click="select">
          <h3>100元</h3>
          <p>10000+10000鸡腿</p>
          <i>多送100元</i>
        </li>
      </ul>
      <div class="recharge-main-topupnow">
        <nut-button
          block
          size="large"
          color="linear-gradient(293deg, #9853C0 0%, #A869BF 24%, #FFBBA0 100%)"
          @click="submit"
          >立即充值：33元</nut-button
        >
      </div>
      <div class="recharge-main-explanation">
        <h4>购买漫币说明：</h4>
        <article>
          <p>1. 本平台人民币与漫币兑换比率：1元=100漫币。</p>
          <p>2. 有“VIP”标识的漫画，为付费章节。</p>
          <p>
            3.
            为了您的阅读体验，您同意在您的漫币余额足够的情况下，当你继续阅读下一章节时，则为您同意购买下一章节并同意系统从您的书币余额中自动扣除相应的书币。点击充值即表示您已同意并接受上述漫画章节购买规则。
          </p>
          <p>
            4.
            购买漫币时所赠送的漫币存在有效期，有效期：自您成功购买书币之日起5个自然日。逾期未消费的，将自动失效；消费时优先扣除所赠送的书币。
          </p>
          <p>
            5.
            若您是未满十八周岁的未成年人，在本平台进行购买书币前需获得家长同意或其他法定监护人的同意，点击购买书币后即视为您已经得您的家长或其他法定监护人的明确同意。
          </p>
          <p>
            6.
            本平台倡导理性消费。购买成功后，平台即时收取相应费用，漫币为虚拟币，非因法定事由，不提供退费服务，敬请谅解。
          </p>
          <p>
            7.
            若您在使用本平台服务过程中存在以盈利、经营等非个人使用目的购买/使用漫币、利用网络漏洞、作弊工具进行购买消费等违法违规或其他不正当行为的，本平台有权中断或终止向您提供相应的服务，不予返还您购买书币时的现金余额。
          </p>
          <p>
            8.
            本平台可根据运营情况调整相关服务规则，具体请以平台页面显示的为准。
          </p>
        </article>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
.recharge {
  box-sizing: border-box;
  &-plus {
    padding-top: 100px;
    width: 100%;
    height: 200px;
    background: rgba(0, 0, 0, 0.6) left bottom url(@/assets/imgs/plus.webp)
      no-repeat;
    background-size: contain;
  }
  &-main {
    padding: 15px;
    background: white;
    &-balance {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      height: 66px;
      border-bottom: 1px solid #f6f6f6;
      > label {
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }
      > strong {
        position: relative;
        padding-right: 33px;
        font-size: 26px;
        font-weight: 600;
        color: #333;
        &::after {
          content: "";
          position: absolute;
          top: 5px;
          right: 0px;
          display: inline-block;
          width: 28px;
          height: 28px;
          background: url(@/assets/icon/fowlleg.webp) no-repeat;
          background-size: cover;
        }
      }
    }
    &-balance-show {
      justify-content: flex-start;
      margin: -68px 0 0 0;
      border-bottom: none;
      > label {
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }
      > strong {
        font-size: 18px;
        &::after {
          top: 0;
          width: 26px;
          height: 26px;
        }
      }
    }
    &-units {
      line-height: 35px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
    }
    &-recommend {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 26px;
      height: 92px;
      background: rgba(152, 83, 192, 0.1) url(@/assets/imgs/recommend.webp)
        no-repeat;
      background-size: contain;
      border-radius: 8px;
      > h4 {
        font-size: 14px;
        color: #370909;
        b {
          padding-left: 10px;
          font-size: 12px;
          font-weight: 400;
        }
      }
      > p {
        font-size: 12px;
        color: #370909;
      }
    }
    &-amount {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 18px 0;
      > li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 7px 0;
        width: 166px;
        height: 100px;
        background: #f4f8fc;
        border-radius: 8px;
        > h3 {
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }
        > p {
          position: relative;
          padding-right: 10px;
          line-height: 26px;
          font-size: 12px;
          font-weight: 400;
          color: #333;
          &::after {
            content: "";
            position: absolute;
            top: 2px;
            right: -13px;
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url(@/assets/icon/fowlleg.webp) no-repeat;
            background-size: cover;
          }
        }
        > i {
          font-style: normal;
          font-size: 10px;
          font-weight: 400;
          color: #e9544f;
        }
      }
    }
    &-topupnow {
      margin-bottom: 25px;
      .nut-button__warp {
        font-size: 15px;
      }
    }
    &-explanation {
      > h4 {
        line-height: 24px;
        font-size: 12px;
        color: #333;
      }
      p {
        line-height: 20px;
        font-size: 11px;
        font-weight: 400;
        color: #666;
        text-align: justify;
      }
    }
  }
}
::v-deep {
  .nut-button__warp {
    font-size: 15px;
  }
}
</style>