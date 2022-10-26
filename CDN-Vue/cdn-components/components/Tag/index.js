import CmsTagItem from "./tagItem.js";

const { ref, reactive } = Vue;

export default {
  template: /*html*/`
<div v-if="is_show" :class="inline?'cms-form-item inline':'cms-form-item'" :style="{...style, alignItems: 'flex-start'}">
  <div class="flex-row flex-col items-start" :style="{ width: label_width }">
    <div class="flex-row flex-col">
      <label v-if="is_label_show">
        {{ label }}
        <span v-show="required">*</span>
      </label>
      <label class="sub">{{sub_label}}</label>
    </div>
  </div>
  
  <div class="flex-row flex-col" v-for="tags in tagsArr" :key="item">
    <div class="cms-tags cms-tags-group">
      <cms-tag-item 
        style="margin:0 10px 10px 10px;"
        v-for="(item, index) in tags" 
        :key="item.id" 
        :id="item.id"
        :name="item.name"
        :value="item.value"
        :label="item.label"
        :checked="item.checked"
      ></cms-tag-item>
    </div>
  </div>
</div>
  `,
  components: {
    CmsTagItem
  },
  props: {
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
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
    // 字段提示文案
    placeholder: {
      type: String,
      default: ""
    },
    // 这个字段控制是否为主要核心字段，核心字段不可省略和编辑
    required: {
      type: Boolean,
      default: false
    },
    // 表单的默认值，可以通过接口拿数据填充
    default: {
      type: String,
      default: ""
    },
    // 字段校验规则
    validate: {
      type: Array,
      default: []
    },
    // 是否显示
    is_show: {
      type: Boolean,
      default: true
    },
    // 样式控制，解决显示区域大小，横排问题
    style: {
      type: Object,
      default: ""
    },
    // 字段长度控制
    length: {
      type: Number,
      default: -1
    },
    sub_label: {
      type: String,
      default: ""
    },
    level: {
      type: Number,
      default: 0
    },
    source: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const tagsArr = ref([]);
    for (let i = 0; i < props.level; i++) {
      tagsArr.value.push([])
    }

    console.log("child", props.source.child)

    // tagsFirst.value[0].checked = true;

    // TODO: 三级tag联动

    return {
      tagsArr
    }
  }
}