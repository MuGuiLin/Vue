export default {
  template: /*html*/`
<div v-if="is_show" class="cms-form-item" :class="inline?'inline':''" :style="style">
  <label :style="{ width: label_width }" v-if="is_label_show">
    {{ label }}
    <span v-show="required">*</span>
  </label>
  <div class="cms-radio" v-for="item in options" :key="item.value" @click="handleRadioClick(item)">
    <div class="cms-radio__input">
      <input
        type="radio"
        :name="item.key"
        :value="item.value"
        :checked="item.select"
        class="cms-radio__original"
      />
      <div class="cms-radio__inner"></div>
    </div>
    <div class="cms-radio__label">{{ item.label }}</div>
  </div>  
</div>
`,
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
    options: {
      type: Array,
      default: []
    }
  },
  setup() {
    const handleRadioClick = (item) => {
      item.select = !item.select;
    }

    return {
      handleRadioClick
    }
  }
}