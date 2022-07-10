

<script lang="ts" setup>
import { useGo, back } from "@hooks/usePage";
const go = useGo();
</script>

<template>
  <section class="details">
    <header class="details-header">
      <img class="cover" src="@/assets/imgs/bg.jpg" alt="" />
      <a class="back" @click="back()">返回</a>
      <div class="title">
        <h1>黑客漫画</h1>
        <b>人气值：2000</b>
        <button>预 约</button>
      </div>
    </header>

    <div class="details-wantsee">
      <div class="lover">
        <h3>666,888<b>人想看</b></h3>
        <ul>
          <li>
            <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
          </li>
          <li>
            <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
          </li>
          <li>想看 <i>3分钟前</i></li>
        </ul>
        <p>王炸热血内容，引爆期待！</p>
      </div>
    </div>

    <div class="details-summary">
      <h3>简介<a>展开</a></h3>
      <article>
        <b>热血·冒险·奇幻</b
        >不知你有没有听过这么一种说法：预知前生事，今生所受事。前世之因，后世之果，如果你种下了这个因，那么无论经过多少个轮回，你都摆脱不了这个结果。该如何化解呢？
      </article>
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
      <button>发布</button>
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
      > button {
        position: absolute;
        right: 0px;
        bottom: -3px;
        // padding-left: 20px;
        width: 80px;
        height: 30px;
        font-size: 12px;
        font-weight: 600;
        border-radius: 40px;
        color: white;
        letter-spacing: 1px;
        background: #a05bbd;
        // &::before {
        //   content: "";
        //   position: absolute;
        //   top: 5px;
        //   left: 15px;
        //   display: inline-block;
        //   width: 20px;
        //   height: 20px;
        //   background: url(@/assets/svg/like.svg) no-repeat;
        //   background-size: cover;
        // }
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
      }
    }
    > article {
      line-height: 20px;
      font-size: 12px;
      color: #666;

      > b {
        color: #a05bbd;
        padding-right: 3px;
      }
    }
  }
  &-wantsee {
    margin-bottom: 8px;
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
        padding-left: 35px;
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
          top: 1px;
          left: 8px;
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url(@/assets/svg/like.svg) no-repeat;
          background-size: contain;
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