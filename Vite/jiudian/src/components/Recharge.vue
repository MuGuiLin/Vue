<script lang="ts" setup name="Recharge">
import { reactive, onMounted, getCurrentInstance } from "vue";
import { rechargeApi, paymentApi } from "@api/mine";
import { is, pay } from "@/utils";

interface Props {
  show?: boolean;
}

const { proxy }: any = getCurrentInstance();

const state: any = reactive({
  money: 0,
  item: {
    id: "",
    money: 0,
  },
  pay: {},
  recharge_item: [],
});

const { show } = withDefaults(defineProps<Props>(), {});

const setCheck = (arr: any) => {
  if (!is.isArray(arr)) {
    return [];
  }
  return arr.map((o: any) => {
    o.check = false;
    return o;
  });
};

const select = (o: any, i: number) => {
  state.recharge_item = setCheck(state.recharge_item);
  state.recharge_item[i].check = true;
  state.item = o;
};

const recharge = async () => {
  const { data }: any = await rechargeApi();
  state.money = data.money;
  state.recharge_item = setCheck(data.recharge_item);
};

const submit = async () => {
  const { id } = state.item;
  if (id) {
    const { data }: any = await paymentApi({ chargeId: id });
    pay.request(data, (o: any) => recharge());
  } else {
    proxy.$notify.warn("您还没有选择充值金额哦！");
  }
};

onMounted(async () => {
  recharge();
});
</script>

<template>
  <section class="recharge">
    <div class="recharge-plus" v-show="show"></div>
    <main class="recharge-main">
      <div
        :class="`recharge-main-balance ${show && 'recharge-main-balance-show'}`"
      >
        <label>{{ show ? "剩余：" : "我的账户" }}</label>
        <strong>￥{{ state.money }}</strong>
      </div>
      <div class="recharge-main-units">选择充值金额（1元=100鸡腿）</div>
      <ul class="recharge-main-amount">
        <template v-for="(o, i) in state.recharge_item">
          <li
            :key="i"
            class="recommend"
            v-if="o.is_recommend"
            :class="o.check && 'select'"
            @click="select(o, i)"
          >
            <h3>
              {{ o.money }}元<b>{{ o.subdesc }}</b>
            </h3>
            <p>{{ o.desc }}</p>
            <img src="@/assets/imgs/recommend.webp" alt="" />
          </li>
          <li v-else :class="o.check && 'select'" @click="select(o, i)">
            <h3>{{ o.money }}元</h3>
            <p>{{ o.subdesc }}</p>
            <i>{{ o.desc }}</i>
          </li>
        </template>
      </ul>
      <div class="recharge-main-topupnow">
        <nut-button
          block
          size="large"
          color="linear-gradient(293deg, #9853C0 0%, #A869BF 24%, #FFBBA0 100%)"
          @click="submit"
          >立即充值：{{ state.item.money }}元</nut-button
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
      margin-bottom: 10px;
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
    &-amount {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 0 18px 0;
      min-height: 340px;
      > li {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 7px 0;
        width: 166px;
        height: 100px;
        background: #f4f8fc;
        border: 1px solid #f4f8fc;
        border-radius: 8px;
        overflow: hidden;
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
      > li.recommend {
        align-items: flex-start;
        padding-left: 26px;
        width: 100%;
        height: 92px;
        border: 2px solid #9854bf !important;
        > h3 {
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
          &::after {
            background: none;
          }
        }
        > img {
          position: absolute;
          right: 20px;
          width: 160px;
        }
      }

      > li.select {
        background: #f2edf5;
        border: 1px solid #9854bf;
        &::before {
          content: "";
          position: absolute;
          top: -1px;
          right: -1px;
          width: 0;
          height: 0;
          border-top: 36px solid #9854bf;
          border-left: 36px solid transparent;
        }
        &::after {
          content: "";
          position: absolute;
          top: 4px;
          right: 2px;
          display: block;
          width: 16px;
          height: 16px;
          background: rgba(152, 83, 192, 0.1) url(@/assets/icon/hooks.webp)
            center no-repeat;
          background-size: contain;
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