const { ElSelect, ElOption } = ElementPlus
const { ref, computed } = Vue
export default {
  template: /*html*/`
  <div v-if="is_show" class="cms-form-item" :style="style" :class="inline?'inline':''">
    <label :style="{ width: label_width }" v-if="is_label_show">
      {{ label }}
      <span v-show="required">*</span>
    </label>
    <el-select v-model="selectorValue" :placeholder="placeholder" @change="changeSelect">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  `,
  components: {
    ElSelect,
    ElOption
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
    options: {
      type: Array,
      default: []
    },
    modelValue: {
      type: String,
      default: ""
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const selectorValue = ref("");
    selectorValue.value = props.modelValue;

    if (props.default) {
      selectorValue.value = props.default
    }

    return {
      selectorValue
    }
  },
  methods: {
    changeSelect() {
      this.$emit("update:modelValue", this.selectorValue)
    }
  }
}