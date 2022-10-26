import CmsInput from './../../components/Input/index.js';
import CmsUpload from './../../components/Upload/index.js';
import PushLiveTable from './pushLiveTable.js';
import CmsCard from './../../components/Card/index.js';
import CmsSection from './../../components/Section/index.js';
import CmsSwitch from './../../components/Switch/index.js';
import CmsDateTimePicker from './../../components/DateTimePicker/index.js';
import CmsButton from './../../components/Button/index.js';
import PullLiveTable from './pullLiveTable.js';

export default {
  template: /*html*/`
<div class="live-stream-config-item">
  <cms-card :shadow="true">
    <div class="flex-row justify-between items-start">
      <cms-input style="flex:4;" label="线路名称" :inline="true" label_width="80px"></cms-input>
      <div style="flex:1;"></div>
      <cms-upload label_width="70px" :inline="true" style="flex:2;align-items:flex-start;" label="封面图"></cms-upload>
      <cms-upload label_width="70px" :inline="true" style="flex:2;align-items:flex-start;" label="播前图" :required="true"></cms-upload>
      <cms-upload label_width="70px" :inline="true" style="flex:2;align-items:flex-start;" label="播后图" :required="true"></cms-upload>
    </div>
    <push-live-table v-if="type == 2" label="推流地址" :required="true"></push-live-table>
    <pull-live-table v-if="type == 1 || type == 3" label="播放地址" :required="true"></pull-live-table>
    <cms-section label="回看设置" size="14">
      <cms-switch v-if="type != 1" size="medium" label="时移回看" :inline="true" label_width="80px"></cms-switch>
      <div v-if="type != 1" class="flex-row justify-between">
        <cms-switch size="medium" label="时移拆条" :inline="true" label_width="80px"></cms-switch>
        <div style="width:60px;flex-shrink: 0;"></div>
        <cms-date-time-picker label="拆条开始" :inline="true" label_width="80px"></cms-date-time-picker>
        <div style="flex:1;"></div>
        <cms-date-time-picker label="拆条结束" :inline="true" label_width="80px"></cms-date-time-picker>
      </div>
      <div class="flex-row">
        <cms-switch size="medium" label="文件回看" :inline="true" label_width="80px"></cms-switch>
        <div style="width:60px;flex-shrink: 0"></div>
        <cms-button @click="handleGetMaterialClick" type="primary" :plain="true" style="font-weight:bold;margin-bottom:18px;width:auto;">关联视频</cms-button>
      </div>
      <cms-input label="回看地址" :inline="true" label_width="80px" placeholder="请输入回看地址"></cms-input>
    </cms-section>
  </cms-card>
</div>
  `,
  props: {
    // 1播流 2推流 3拉流
    type: {
      type: Number,
      default: 1
    }
  },
  components: {
    CmsInput,
    CmsUpload,
    PushLiveTable,
    CmsCard,
    CmsSection,
    CmsSwitch,
    CmsDateTimePicker,
    CmsButton,
    PullLiveTable
  },
  methods: {
    handleGetMaterialClick() {
      this.$materialSelector.show({
        title: "选择关联视频"
      }
      ,()=> {
        // confirm事件回调
        console.log("confirm")
      }, () => {
        // cancel事件回调
        console.log("cancel")
      })
    }
  }
}