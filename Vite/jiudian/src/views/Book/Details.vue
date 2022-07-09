

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
        <b>点赞数：2000</b>
        <button>喜欢</button>
      </div>
    </header>
    <div class="details-summary">
      <h3>简介<a>展开</a></h3>
      <article>
        <b>热血·冒险·奇幻</b
        >不知你有没有听过这么一种说法：预知前生事，今生所受事。前世之因，后世之果，如果你种下了这个因，那么无论经过多少个轮回，你都摆脱不了这个结果。该如何化解呢？
      </article>
    </div>

    <div class="details-serialize">
      <h3>连载中<a>更新16话</a></h3>
      <ul>
        <li>
          <dl>
            <dt>
              <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
              <p>2022-03-06</p>
            </dt>
            <dd>第1话-序章</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
              <p>2022-03-06</p>
            </dt>
            <dd>第1话-序章</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
              <p>2022-03-06</p>
            </dt>
            <dd>第1话-序章</dd>
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
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background: url(@/assets/imgs/void.png) center top no-repeat;
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