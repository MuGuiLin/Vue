<script lang="ts" setup>
import { useGo } from "@hooks/usePage";
const go = useGo();
</script>

<template>
  <section class="mission">
    <header class="head">
      <div class="days">
        <h2>已连续签到<b>2</b>天</h2>
      </div>
      <div class="vals">
        <span>当前鸡腿</span>
        <h1>3000</h1>
        <i></i>
      </div>
    </header>

    <main class="sign">
      <h3>每日签到（2/7）</h3>
      <ul class="week">
        <li class="check">
          <i></i>
          <p>鸡腿<b>×50</b></p>
        </li>
        <li>
          <i></i>
          <p>鸡腿<b>×100</b></p>
        </li>
        <li>
          <i></i>
          <p>鸡腿<b>×50</b></p>
        </li>
        <li>
          <i></i>
          <p>鸡腿<b>×100</b></p>
        </li>
        <li>
          <i></i>
          <p>鸡腿<b>×50</b></p>
        </li>
        <li>
          <i></i>
          <p>鸡腿<b>×100</b></p>
        </li>
        <li>
          <i>×150</i>
          <p>鸡腿大礼包</p>
        </li>
      </ul>

      <div>
        <button>签 到</button>
      </div>
    </main>

    <main class="task">
      <h3>任务（2/7）</h3>
      <div class="item">
        <label>
          <b>看漫任务</b>
          <i>+30</i>
        </label>
        <button>去完成</button>
      </div>
      <div class="item">
        <label>
          <b>看漫任务</b>
          <i>+30</i>
        </label>
        <button>去完成</button>
      </div>
      <div class="item">
        <label>
          <b>看漫任务</b>
          <i>+30</i>
        </label>
        <button>去完成</button>
      </div>
      <div class="item">
        <label>
          <b>看漫任务</b>
          <i>+30</i>
        </label>
        <button>去完成</button>
      </div>
      <div class="item">
        <label>
          <b>看漫任务</b>
          <i>+30</i>
        </label>
        <button>去完成</button>
      </div>
    </main>
  </section>
</template>



<style lang="scss" scoped>
.mission {
  min-height: 100vh;
  background: #fef1fd;
  .head {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 20px;
    width: 100%;
    height: 152px;
    background: url(@/assets/imgs/task.webp) left top no-repeat;
    background-size: contain;

    > .days {
      position: relative;
      padding-left: 40px;
      text-align: left;
      > h2 {
        line-height: 50px;
        font-weight: 600;
        font-size: 14px;
        color: white;
        letter-spacing: 2px;
        > b {
          font-size: 26px;
        }
      }
    }

    > .vals {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 356px;
      height: 68px;
      background: linear-gradient(
        90deg,
        #ffffff 0%,
        #ffffff 31%,
        #ffffff 69%,
        #ffffff 100%
      );
      box-shadow: 0px 2px 6px 0px rgba(161, 93, 189, 0.22);
      border-radius: 100px;

      > span {
        position: relative;
        width: 110px;
        font-size: 14px;
        font-weight: 600;
        color: #666;
        text-align: center;

        &::before {
          content: "";
          position: absolute;
          top: -9px;
          right: 0;
          display: inline-block;
          margin-right: 0px;
          width: 1px;
          height: 36px;
          background: linear-gradient(
            180deg,
            rgba(249, 180, 175, 0) 0%,
            #f8b4a1 53%,
            rgba(249, 180, 164, 0) 100%
          );
        }
      }
      > h1 {
        font-size: 32px;
        font-weight: 600;
        color: #333;
      }
      > i {
        display: inline-block;
        width: 50px;
        height: 28px;
        background: url(@/assets/icon/fowlleg.webp) no-repeat;
        background-size: contain;
      }
    }
  }
  .sign {
    box-sizing: border-box;
    margin: 15px auto 50px;
    padding: 11px;
    width: 350px;
    background: #ffffff;
    box-shadow: 0px 2px 6px 0px rgba(157, 89, 189, 0.22);
    border-radius: 16px;
    > h3 {
      font-size: 16px;
      font-weight: 600;
      color: #111;
    }
    > ul {
      box-sizing: border-box;
      display: flex;
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
          margin-top: -14px;
          margin-left: -14px;
          width: 28px;
          height: 28px;
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
        background: url(@/assets/svg/metre.svg) no-repeat;
        border: none;
        background-size: cover;   
        &::before {
          border-top: 22px solid #F6CC50;;
        }
      }
      > li:last-child {
        width: 154px;
        i {
          padding-left: 30px;
          left: 36%;
          font-size: 18px;
          color: #9854bf;
        }
      }
    }

    > div {
      margin: 10px auto 0;
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
    margin: 15px auto 50px;
    padding: 15px;
    width: 350px;
    background: white;
    box-shadow: 0px 2px 6px 0px rgba(157, 89, 189, 0.22);
    border-radius: 16px;
    > h3 {
      font-size: 16px;
      font-weight: 600;
      color: #111;
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
        color: white;
        background: linear-gradient(131deg, #fbb7a1 0%, #9c58be 100%);
        border-radius: 100px;
      }
    }
  }
}
</style>