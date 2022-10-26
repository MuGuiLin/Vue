// safari不兼容
// import btnStyle from './rdc-button.css' assert { type: 'css' };
// document.adoptedStyleSheets = [btnStyle];
// // shadowRoot.adoptedStyleSheets = [sheet];

export default {
  template: /*html*/`
  <button type="button" :class="classes" @click="onClick" :disabled="disabled || loading">
    <i v-if="has_icon" class="rdc-icon">
      <slot name="icon"></slot>
    </i>
    <span>
      <slot name="default"></slot>
    </span>
  </button>
  `,
  setup() {


    return {

    }
  },
  props: {
    type: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'primary', 'success', 'warning', 'danger',  'info'].indexOf(value) !== -1;
      }
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    has_icon: {
      type: Boolean,
      default: false
    },
    // 样式控制，解决显示区域大小，横排问题
    // style: {
    //   type: Object,
    //   default: ""
    // },
    shadow: {
      type: Boolean,
      default: false
    },
    solid: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        'cms-btn': true,
        [`cms-btn-${this.type}`]: !this.solid,
        [`cms-btn-${this.size}`]: true,
        'is-plain': this.plain,
        'cms-btn-round': this.round,
        'cms-btn-round-with-icon': this.round && this.has_icon,
        'cms-shadow': this.shadow,
        'is-disabled': this.disabled,
        'cms-btn-link': this.link,
        // 'is-loading': this.loading,
        [`cms-btn-${this.type}-solid`]: this.solid,
        [`cms-btn-${this.type}-outline`]: this.outline,
      };
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  },
}