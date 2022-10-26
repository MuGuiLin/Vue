// 推流地址表格
import CmsButton from './../../components/Button/index.js';
import CmsSelect from './../../components/Select/index.js';

const { ref, reactive, onMounted } = Vue
const { ElTable, ElTableColumn } = ElementPlus

export default {
  template: /*html*/`
  <div v-if="is_show" :class="inline?'inline cms-form-item':'cms-form-item'">
    <label :style="{ width: label_width }" v-if="is_label_show">
      {{ label }}
      <span v-show="required">*</span>
    </label>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="" width="100" align="center">
        <template #default="scope">
          <p style="font-weight: bold;text-align:center;color:#7584a0;">{{ scope.row.name }}{{ scope.$index != 0?scope.$index:'' }}</p>
        </template>
      </el-table-column>
      <el-table-column label="推流地址" align="center">
        <template #default="scope">
          <div class="flex-row">
            <cms-select v-model="scope.row.type" :options="addressTypeList" style="width: 130px;" :is_label_show="false" style="margin-bottom:0;"></cms-select>
            <cms-select v-model="scope.row.url" :options="addressList" style="flex:1;margin-left: 10px;" :is_label_show="false" style="margin-bottom:0;"></cms-select>
            <cms-button type="primary" :outline="true" size="small" style="margin-left: 10px;">自动生成</cms-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="ratio" label="权限设置" width="150" align="center">
        <template #default="scope">
          <cms-select :options="ratioList" :is_label_show="false" style="margin-bottom:0;" v-model="scope.row.weight"></cms-select>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80" align="center">
        <template #default="scope">
          <div v-if="scope.$index != 0" @click="handleRemoveClick(scope.$index, scope.row)" style="cursor:pointer;width: 20px;display:flex;margin:auto;">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="#c3c3c4" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"></path></svg>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex-row justify-end" style="margin-top: 10px;">
      <cms-button type="success" :outline="true" size="small" @click="handleAddClick">添加备路</cms-button>
    </div>
  </div>
  `,
  components: {
    CmsButton,
    CmsSelect,
    ElTable,
    ElTableColumn
  },
  props: {
    label_width: {
      type: String,
      default: "120px"
    },
    // 标签是否显示
    is_label_show: {
      type: Boolean,
      default: true
    },
    // 表单项是否行内显示
    inline: {
      type: Boolean,
      default: false
    },
    // 表单项name名
    name: {
      type: String,
      default: ""
    },
    // 表单项名称
    label: {
      type: String,
      default: ""
    },
    // 这个字段控制是否为主要核心字段，核心字段不可省略和编辑
    required: {
      type: Boolean,
      default: false
    },
    // 是否显示
    is_show: {
      type: Boolean,
      default: true
    },
    // 样式控制，解决显示区域大小，横排问题
    // style: {
    //   type: Object,
    //   default: ""
    // },
  },
  setup() {
    const tableData = ref([]);
    const addressTypeList = ref([]);
    const addressList = ref([]);
    const ratioList = ref([]);

    onMounted(() => {
      tableData.value = [{
        name: "主路",
        type: "",
        url: "",
        weight: 1,
      }];
  
      // TODO:后面传参
      addressTypeList.value = [{
        label: "腾讯",
        value: 0
      }, {
        label: "阿里",
        value: 1
      }, {
        label: "网宿",
        value: 2
      }, {
        label: "火山",
        value: 3
      }];
  
      // TODO:
      addressList.value = [{
        label: "https://xxx",
        value: 0
      }]
  
      // TODO:
      // 100%、80%、60%、50%、40%、20%、0
      ratioList.value = [{
        label: "100%",
        value: 1
      }, {
        label: "80%",
        value: 0.8
      }, {
        label: "60%",
        value: 0.6
      }, {
        label: "50%",
        value: 0.5
      }, {
        label: "40%",
        value: 0.4
      }, {
        label: "20%",
        value: 0.2
      }, {
        label: "0%",
        value: 0
      }]
    })
  
    return {
      tableData,
      addressTypeList,
      addressList,
      ratioList
    }
  },
  methods: {
    handleAddClick() {
      console.log(1111)
      this.tableData.push({
        name: "备路",
        type: "",
        url: "",
        weight: 0,
        id: this.tableData.length + 1
      })
    },
    handleRemoveClick(index, row) {
      this.tableData.splice(index, 1)
    }
  }
}