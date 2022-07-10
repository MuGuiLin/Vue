<script lang="ts" setup>
import { reactive } from "vue";
import Navbar from "@/components/Navbar.vue";
const state = reactive({
  active: 0,
  edit: false,
});
const edit = () => {
  state.edit = !state.edit;
};
</script>

<template>
  <section class="recent">
    <Navbar title="" />
    <a class="edit" @click="edit">{{ state.edit ? "取消" : "编辑" }}</a>
    <nut-tabs v-model="state.active">
      <nut-tabpane class="like" title="喜欢">
        <ul class="recent-ul">
          <li>
            <dl>
              <dt>
                <i v-show="state.edit" class="radio"></i>
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>阅读到：第2话</dd>
              <dd>更新至：第16话</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <i v-show="state.edit" class="radio radio-h"></i>
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>阅读到：第2话</dd>
              <dd>更新至：第16话</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <i v-show="state.edit" class="radio"></i>
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>阅读到：第2话</dd>
              <dd>更新至：第16话</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <i v-show="state.edit" class="radio"></i>
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>阅读到：第2话</dd>
              <dd>更新至：第16话</dd>
            </dl>
          </li>
        </ul>

        <h3 class="recent-h3">九九推荐</h3>
        <ul class="recent-ul">
          <li>
            <dl>
              <dt>
                <!-- <i>VIP</i> -->
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>玄幻 科幻 异能</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <!-- <i>VIP</i> -->
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>玄幻 科幻 异能</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <!-- <i>VIP</i> -->
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>玄幻 科幻 异能</dd>
            </dl>
          </li>
        </ul>
      </nut-tabpane>
      <nut-tabpane class="history" title="历史">
        <ul class="recent-ul">
          <li class="void">
            <b>书架是空的哦～</b>
          </li>
          <li>
            <dl>
              <dt>
                <!-- <i>VIP</i> -->
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>阅读到：第2话</dd>
              <dd>更新至：第16话</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <!-- <i>VIP</i> -->
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>阅读到：第2话</dd>
              <dd>更新至：第16话</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <!-- <i>VIP</i> -->
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>阅读到：第2话</dd>
              <dd>更新至：第16话</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <!-- <i>VIP</i> -->
                <img class="cover" src="@/assets/imgs/cover.jpg" alt="" />
                <!-- <p>666 已助力</p> -->
              </dt>
              <dd>
                <h4>黑客漫画</h4>
              </dd>
              <dd>阅读到：第2话</dd>
              <dd>更新至：第16话</dd>
            </dl>
          </li>
        </ul>
      </nut-tabpane>
    </nut-tabs>
    <footer class="footer" v-show="state.edit">
      <a><i></i> 全 选</a>
      <!-- <a><i class="check"></i> 反 选</a> -->
      <a><i class="del"></i> 删 除</a>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.recent {
  position: relative;
  .edit {
    position: absolute;
    top: 55px;
    right: 13px;
    font-size: 13px;
    color: #666;
  }
  .nut-tabs {
    .nut-tabpane {
      padding: 10px 7px;
      height: calc(100vh - 82px);
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      .recent-h3 {
        padding: 30px 0 0 6px;
        font-size: 16px;
        color: #333;
      }
      .recent-ul {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 10px auto;
        > li {
          flex-shrink: 0;
          -ms-flex-negative: 0;
          margin: 10px 5px;
          width: 110px;
          > dl {
            > dt {
              position: relative;
              // i {
              //   position: absolute;
              //   top: 5px;
              //   right: 5px;
              //   display: block;
              //   padding: 2px 5px;
              //   font-size: 12px;
              //   font-weight: 600;
              //   color: #560805;
              //   border-radius: 3px;
              //   background: #fce373;
              // }
              i.radio {
                position: absolute;
                top: 8px;
                right: 8px;
                display: block;
                width: 18px;
                height: 18px;
                color: #560805;
                border-radius: 10px;
                border: 1px solid white;
              }
              i.radio-h {
                width: 20px;
                height: 20px;
                background: url(@/assets/svg/radio-h.svg) no-repeat;
                border: none;
                background-size: cover;
              }
              img {
                width: 100%;
                height: 150px;
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
              font-size: 11px;

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
        > li.void {
          width: 100%;
          height: 186px;
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
      .recent-ul:last-child {
        padding-bottom: 50px;
      }
    }
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 0.98);
    border-top: 1px solid rgba(151, 151, 151, 0.3);
    > a {
      width: 50%;
      text-align: center;
      font-weight: 400;
      color: #333;
      i {
        position: relative;
        top: 5px;
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid #333;
      }
      i.check {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url(@/assets/svg/close.svg) no-repeat;
        border: none;
        background-size: cover;
      }
    }
    // > a:first-child {
    > a:last-child {
      border-left: 1px solid rgba(151, 151, 151, 0.3);
      i {
        width: 20px;
        height: 20px;
        background: url(@/assets/svg/del-h.svg) no-repeat;
        border: none;
        background-size: cover;
      }
    }
  }
}
::v-deep {
  .nut-tabs {
    .nut-tabs__titles {
      width: 120px;
      background: none;

      .nut-tabs__titles-item {
        font-size: 18px;
        .nut-tabs__titles-item__line {
          bottom: 10%;
          width: 26px;
          border-radius: 3px;
          background: linear-gradient(137deg, #ffbb9f 0%, #9853c0 100%);
        }
      }
    }
  }
}
</style>