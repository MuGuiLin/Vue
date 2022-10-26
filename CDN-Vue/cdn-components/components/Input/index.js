const { ref, computed, watch } = Vue;

export default {
  template: /*html*/`
  <div v-if="is_show" class="cms-form-item" :style="style" :class="inline?'inline':''">
    <label :style="{ width: label_width, fontSize: label_font_size }" v-if="is_label_show" :class="isError?'error': ''">
      {{ label }}
      <span v-show="required">*</span>
    </label>
    <div :class="classes" style="flex:1; position: relative;">
      <div :class="has_icon?'cms-search-form__box':''" style="flex:1;">
        <slot name="prefix"></slot>
        <input v-if="type == 'text'" type="text" :name="name" :placeholder="placeholder" v-model="inputValue" style="width: 100%;" />
        <slot name="suffix"></slot>
      </div>
      <label v-if="type == 'text' && isError" class="error error-info">{{ errorMessage }}</label>
    </div>
    
    <textarea v-if="type == 'textarea'" :name="name" :placeholder="placeholder" v-model="inputValue"></textarea>
    <label v-if="type == 'textarea' && isError" class="error error-info">{{ errorMessage }}</label>
  </div>
  `,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'textarea'].indexOf(value) !== -1;
      }
    },
    label_width: {
      type: String,
      default: "120px"
    },
    label_font_size: {
      type: String,
      default: "14px"
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
    round: {
      type: Boolean,
      default: false
    },
    has_icon: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  computed: {
    classes() {
      return {
        'cms-input-round': this.round
      }
    }
  },
  setup(props, { emit }) {
    // const isError = ref(false);
    // const errorMessage = ref("");

    const inputValue = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        console.log("update:modelValue")
        emit('update:modelValue', value)
      }
    })

    if (props.default) {
      inputValue.value = props.default
    }

    // const showError = (isShow, message = "") => {
    //   if (isShow) {
    //     isError.value = true;
    //     errorMessage.value = message;
    //   } else {
    //     isError.value = false;
    //   }
    // }

    return {
      inputValue,
      // isError,
      // errorMessage,
      // showError
    }
  }
}