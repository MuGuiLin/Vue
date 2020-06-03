<template>
  <section class="weather">
    <h1>
      <a href="https://www.tianqiapi.com/" target="_blank">
        <img src="../assets/tq.png" alt srcset />
        <br />全球化天气预报API接口
      </a>
    </h1>
    <el-tabs v-model="tabShow" @tab-click="tabChange">
      <el-tab-pane label="基础实况天气" name="day">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>今日基础实况天气</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            <label>城市ID：</label>
            {{weather.cityid}}
          </div>
          <div class="text item">
            <label>城市名称：</label>
            {{weather.city}}
          </div>
          <div class="text item">
            <label>更新时间：</label>
            {{weather.update_time}}
          </div>
          <div class="text item">
            <label>天气情况：</label>
            <img src="../assets/skin/durian.png" />
            <!-- <img :src="'../assets/skin/'+weather.wea_img+'.png'" /> -->
            {{weather.wea}}
          </div>
          <div class="text item">
            <label>天气图标：</label>
            {{weather.wea_img}}
          </div>
          <div class="text item">
            <label>实时温度：</label>
            {{weather.tem}}
          </div>
          <div class="text item">
            <label>白天温度(高温)：</label>
            {{weather.tem_day}}
          </div>
          <div class="text item">
            <label>白天温度(低温)：</label>
            {{weather.tem_night}}
          </div>
          <div class="text item">
            <label>风向：</label>
            {{weather.win}}
          </div>
          <div class="text item">
            <label>风力等级：</label>
            {{weather.win_speed}}
          </div>
          <div class="text item">
            <label>风速：</label>
            {{weather.win_meter}}
          </div>
          <div class="text item">
            <label>空气质量：</label>
            <el-button type="success" round size="mini">{{weather.air}}</el-button>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="基础七日天气" name="week">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">城市ID：{{weather.cityid}}</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">城市名称：{{weather.city}}</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">更新时间：{{weather.update_time}}</el-card>
          </el-col>
        </el-row>

        <el-card class="box-card" v-for="(o, i) in weather.data" :key="i">
          <div slot="header" class="clearfix">
            <span>日期：{{o.date}}</span>
            <el-button type="warning" style="float: right;" :loading="true" size="small" circle></el-button>
          </div>
          <div class="text item">
            <label>天气情况：</label>
            <img src="../assets/skin/durian.png" />
            {{o.wea}}
          </div>
          <div class="text item">
            <label>天气图标：</label>
            {{o.wea_img}}
          </div>
          <div class="text item">
            <label>白天温度(高温)：</label>
            {{o.tem_day}}
          </div>
          <div class="text item">
            <label>白天温度(低温)：</label>
            {{o.tem_night}}
          </div>
          <div class="text item">
            <label>风向：</label>
            {{o.win}}
          </div>
          <div class="text item">
            <label>风力等级：</label>
            {{o.win_speed}}
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="详细实况天气" name="dayInfo">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>今日详细实况天气</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            <label>国家名称：</label>
            {{weather.country}}
          </div>
          <div class="text item">
            <label>国家英文名称：</label>
            {{weather.countryEn}}
          </div>
          <div class="text item">
            <label>城市ID：</label>
            {{weather.cityid}}
          </div>
          <div class="text item">
            <label>城市名称：</label>
            {{weather.city}}
          </div>
          <div class="text item">
            <label>城市英文名称：</label>
            {{weather.cityEn}}
          </div>
          <div class="text item">
            <label>当前日期：</label>
            {{weather.date}}
          </div>
          <div class="text item">
            <label>当前星期：</label>
            {{weather.week}}
          </div>
          <div class="text item">
            <label>气象台更新时间：</label>
            {{weather.update_time}}
          </div>
          <div class="text item">
            <label>天气情况：</label>
            <img src="../assets/skin/durian.png" />
            {{weather.wea}}
          </div>
          <div class="text item">
            <label>天气图标：</label>
            {{weather.wea_img}}
          </div>
          <div class="text item">
            <label>实时温度：</label>
            {{weather.tem}}
          </div>
          <div class="text item">
            <label>白天温度(高温)：</label>
            {{weather.tem1}}
          </div>
          <div class="text item">
            <label>白天温度(低温)：</label>
            {{weather.tem2}}
          </div>
          <div class="text item">
            <label>风向：</label>
            {{weather.win}}
          </div>
          <div class="text item">
            <label>风力等级：</label>
            {{weather.win_speed}}
          </div>
          <div class="text item">
            <label>风速：</label>
            {{weather.win_meter}}
          </div>
          <div class="text item">
            <label>湿度：</label>
            {{weather.humidity}}
          </div>
          <div class="text item">
            <label>能见度：</label>
            {{weather.visibility}}
          </div>
          <div class="text item">
            <label>气压hPa：</label>
            {{weather.pressure}}
          </div>
          <div class="text item">
            <label>空气质量：</label>
            <el-button type="success" round size="mini">{{weather.air}}</el-button>
          </div>
          <div class="text item">
            <label>空气质量等级：</label>
            {{weather.air_level}}
          </div>
          <div class="text item">
            <label>空气质量描述：</label>
            {{weather.air_tips}}
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="详细七日天气" name="weekInfo">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">国家名称：{{weather.country}}</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">城市名称：{{weather.city}}</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">更新时间：{{weather.update_time}}</el-card>
          </el-col>
        </el-row>

        <el-card class="box-card" v-for="(o, i) in weather.data" :key="i">
          <div slot="header" class="clearfix">
            <span>日期：{{o.date}}，天数：{{o.day}}，星期：{{o.week}}</span>
            <el-button type="warning" style="float: right;" :loading="true" size="small" circle></el-button>
          </div>
          <div class="text item">
            <label>天气情况：</label>
            <img src="../assets/skin/durian.png" />
            {{o.wea}}
          </div>
          <div class="text item">
            <label>天气图标：</label>
            {{o.wea_img}}
          </div>
          <div class="text item">
            <label>实时温度：</label>
            {{o.tem}}
          </div>
          <div class="text item">
            <label>白天温度(高温)：</label>
            {{o.tem1}}
          </div>
          <div class="text item">
            <label>白天温度(低温)：</label>
            {{o.tem2}}
          </div>
          <div class="text item">
            <label>风向：</label>
            {{o.win}}
          </div>
          <div class="text item">
            <label>风力等级：</label>
            {{o.win_speed}}
          </div>
          <div class="text item">
            <label>湿度：</label>
            {{o.humidity}}
          </div>
          <div class="text item">
            <label>空气质量：</label>
            <el-button type="success" round size="mini">{{o.air}}</el-button>
          </div>
          <div class="text item">
            <label>空气质量等级：</label>
            {{o.air_level}}
          </div>
          <div class="text item">
            <label>空气质量描述：</label>
            {{o.air_tips}}
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100"> -->
  </section>
</template>

<script>
import { Loading } from "element-ui";
export default {
  data() {
    return {
      loading: Object,
      tabShow: "day",
      weather: {},
      wea: [
        "xue",
        "lei",
        "shachen",
        "wu",
        "bingbao",
        "yun",
        "yu",
        "yin",
        "qing"
      ]
    };
  },
  methods: {
    load() {
      this.loading = Loading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
    },
    day() {
      this.$.Axios.get("https://www.tianqiapi.com/free/day", {
        params: {
          appid: this.$.Appid,
          appsecret: this.$.Appsecret,
          vue: 1
        }
        // cityid、city和ip参数3选一提交，如果不传，默认返回当前ip城市天气，cityid优先级最高。
      })
        .then(res => {
          this.weather = res.data;
          console.log(res.data);
        })
        .catch(function(err) {
          console.log(err);
        })
        .finally(() => {
          this.loading.close();
        });
    },
    week() {
      this.$.Axios.get("https://www.tianqiapi.com/free/week", {
        params: {
          appid: this.$.Appid,
          appsecret: this.$.Appsecret,
          vue: 1
        }
      })
        .then(res => {
          this.weather = res.data;
          console.log(res.data);
        })
        .finally(() => {
          this.loading.close();
        });
    },
    dayInfo() {
      this.$.Axios.get("https://tianqiapi.com/api", {
        params: {
          version: "v6",
          appid: this.$.Appid,
          appsecret: this.$.Appsecret,
          vue: 1
        }
      })
        .then(res => {
          this.weather = res.data;
          console.log(res.data);
        })
        .finally(() => {
          this.loading.close();
        });
    },
    weekInfo() {
      this.$.Axios.get("https://tianqiapi.com/api", {
        params: {
          version: "v1",
          appid: this.$.Appid,
          appsecret: this.$.Appsecret,
          vue: 1
        }
      })
        .then(res => {
          this.weather = res.data;
          console.log(res.data);
        })
        .finally(() => {
          this.loading.close();
        });
    },
    tabChange(tab, event) {
      // console.log(tab, event);
      this.load();
      this[tab.name]();
    }
  },
  mounted() {
    this.load();
    this.day();
  }
};
</script>

<style lang="scss">
.weather {
  background: #0098ef url(../assets/cloud.png) no-repeat center bottom;
  background-size: contain;
  padding: 30px 100px 20% 100px;
  .box-card {
    display: inline-block;
    margin: 20px;
    width: 680px;
    .clearfix {
      text-align: left;
      color: #7f00ff;
      font-weight: bold;
    }
    .text {
      text-align: left;
      line-height: 32px;
      label {
        font-weight: bold;
        color: #0098ef;
        text-align: right;
        display: inline-block;
        width: 150px;
        padding-right: 10px;
      }
    }
  }
  .el-tabs__item.is-active {
    color: white !important;
    font-weight: bold;
  }
  .el-tabs__item {
    font-size: 18px;
  }
}
</style>