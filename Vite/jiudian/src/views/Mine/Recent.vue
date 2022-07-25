<script lang="ts" setup>
import { reactive, onMounted, getCurrentInstance } from "vue";
import Navbar from "@coms/Navbar.vue";
import { historysApi, delRecordsApi } from "@api/mine";
import { setCheck, getCheck, getCheckFalse } from "@/utils";
import { useGo } from "@hooks/usePage";

interface IStateProps {
  ["key"]: any;
}

interface IResProps extends IStateProps {
  data: {
    history_items: Array<any>;
    follows_items: Array<any>;
    recommend_items: Array<any>;
  };
}
const go = useGo();

const { proxy }: any = getCurrentInstance();

const state: any = reactive({
  active: 0,
  edit: false,
  isEdit: false,
  all: false,
  isAll: false,
  follows_items: [],
  history_items: [],
  recommend_items: [],
});

const edit = () => {
  state.edit = !state.edit;
};

const change = (vl: any) => {
  if (vl.paneKey != state.active) {
    state.edit = false;
    state.all = false;
    state.isAll = false;
    state.follows_items = setCheck(state.follows_items, false);
    state.history_items = setCheck(state.history_items, false);
  }
  if (vl.paneKey) {
    state.isEdit = state.history_items.length ? true : false;
  } else {
    state.isEdit = state.follows_items.length ? true : false;
  }
};

const remove = async () => {
  if (state.edit) {
    const follows_items = getCheck(state.follows_items);
    const history_items = getCheck(state.history_items);
    if (follows_items.length || history_items.length) {
      proxy.$dialog({
        title: "温馨提示",
        content: "您确定要删除吗？",
        onOk: async () => {
          const follow_ids = follows_items.map((o) => o.follow_id);
          const history_ids = history_items.map((o) => o.hisory_id);
          await delRecordsApi({ follow_ids, history_ids });
          proxy.$notify.success("删除成功！");
          if (follows_items.length) {
            state.follows_items = getCheckFalse(state.follows_items);
          }
          if (history_items.length) {
            state.history_items = getCheckFalse(state.history_items);
          }
        },
      });
    }
  }
};

const select = (o: any, i: number) => {
  if (state.edit) {
    if (state.active) {
      state.history_items[i].check = !state.history_items[i].check;
      if (state.history_items.some((o: { check: any }) => o.check)) {
        state.all = false;
        state.isAll = true;
      }
      if (state.history_items.every((o: { check: any }) => o.check)) {
        state.all = true;
        state.isAll = true;
      }
    } else {
      state.follows_items[i].check = !state.follows_items[i].check;
      if (state.follows_items.some((o: { check: any }) => o.check)) {
        state.all = false;
        state.isAll = true;
      }
      if (state.follows_items.every((o: { check: any }) => o.check)) {
        state.all = true;
        state.isAll = true;
      }
    }
  } else {
    go({ path: "/article", query: { id: o.id } });
  }
};

const setSelect = (check: boolean) => {
  if (state.edit) {
    if (state.active) {
      state.history_items = setCheck(state.history_items, check);
    } else {
      state.follows_items = setCheck(state.follows_items, check);
    }
  }
};

const selectAll: any = (o: any, i: number): void => {
  state.all = !state.all;
  state.isAll = state.all;
  setSelect(state.all);
};

onMounted(async () => {
  const { data }: IResProps | any = await historysApi();
  state.follows_items = setCheck(data.follows_items);
  state.history_items = setCheck(data.history_items);
  state.recommend_items = setCheck(data.recommend_items);
  state.isEdit = state.follows_items.length ? true : false;
});
</script>

<template>
  <section class="recent">
    <Navbar title="" />
    <a v-show="state.isEdit" class="edit" @click="edit">{{
      state.edit ? "取消" : "编辑"
    }}</a>
    <nut-tabs v-model="state.active" @click="change">
      <nut-tabpane class="like" title="喜欢">
        <ul class="recent-ul">
          <template v-if="state.follows_items.length">
            <li
              v-for="(o, i) in state.follows_items"
              :key="o.id"
              @click="select(o, i)"
            >
              <dl>
                <dt>
                  <i
                    v-show="state.edit"
                    class="radio"
                    :class="o.check && 'radio-h'"
                  ></i>
                  <img class="cover" :src="o.list_cover" alt="cover" />
                </dt>
                <dd>
                  <h4>{{ o.title }}</h4>
                </dd>
                <dd>阅读到：第{{ o.current_read_chapter }}话</dd>
                <dd>更新至：第{{ o.total_chapter_number }}话</dd>
              </dl>
            </li>
          </template>
          <template v-else>
            <li class="void">
              <b>书架是空的哦～</b>
            </li>
          </template>
        </ul>

        <h3 class="recent-h3">九九推荐</h3>
        <ul class="recent-ul">
          <template v-if="state.recommend_items.length">
            <li
              v-for="(o, i) in state.recommend_items"
              :key="o.id"
              @click="select(o, i)"
            >
              <dl>
                <dt>
                  <img class="cover" :src="o.list_cover" alt="cover" />
                  <!-- <p>666 已助力</p> -->
                </dt>
                <dd>
                  <h4>{{ o.title }}</h4>
                </dd>
                <dd>{{ o.tags.join(" ") }}</dd>
              </dl>
            </li>
          </template>
          <template v-else>
            <li class="void">
              <b>九九正在为您推荐哦～</b>
            </li>
          </template>
        </ul>
      </nut-tabpane>
      <nut-tabpane class="history" title="历史">
        <ul class="recent-ul">
          <template v-if="state.history_items.length">
            <li
              v-for="(o, i) in state.history_items"
              :key="o.id"
              @click="select(o, i)"
            >
              <dl>
                <dt>
                  <i
                    v-show="state.edit"
                    class="radio"
                    :class="o.check && 'radio-h'"
                  ></i>
                  <img class="cover" :src="o.list_cover" alt="cover" />
                </dt>
                <dd>
                  <h4>{{ o.title }}</h4>
                </dd>
                <dd>阅读到：第{{ o.current_read_chapter }}话</dd>
                <dd>更新至：第{{ o.total_chapter_number }}话</dd>
              </dl>
            </li>
          </template>
          <template v-else>
            <li class="void">
              <b>书架是空的哦～</b>
            </li>
          </template>
        </ul>
      </nut-tabpane>
    </nut-tabs>
    <footer class="footer" v-show="state.edit">
      <template v-if="state.isAll">
        <a @click="selectAll">
          <template v-if="state.all">
            <i class="check"></i> 取 消 全 选
          </template>
          <template v-else> <i></i> 全 选 </template>
        </a>
        <a @click="remove" class="del"><i></i> 删 除</a>
      </template>
      <template v-else>
        <a @click="selectAll"><i></i> 全 选</a>
        <a @click="remove">删 除</a>
      </template>
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
          background: url(@/assets/imgs/null.webp) center top no-repeat;
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
        width: 20px;
        height: 20px;
        background: url(@/assets/svg/close.svg) no-repeat;
        border: none;
        background-size: cover;
      }
    }
    // > a:first-child {
    > a:last-child {
      color: #999;
      border-left: 1px solid rgba(151, 151, 151, 0.3);
    }
    > a.del:last-child {
      color: #fe7b80;
      i {
        width: 18px;
        height: 18px;
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