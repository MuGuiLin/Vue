const { ref } = Vue;

export default {
  template: /*html*/`
<div class="cms-form-section" :style="style">
  <div class="cms-form-section-title flex-row" @click="handleSectionClick" style="cursor: pointer;">
    <svg :style="isHide? { transform: 'rotate(-90deg) translatey(-2px)' }: {}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="12" height="12" style="
        fill: rgba(116, 131, 160, 1);
        border-color: rgba(0, 0, 0, 0);
        border-width: bpx;
        border-style: undefined;
        transition: all 300ms cubic-bezier(0.45, 1, 0.4, 1);
      " filter="none">
      <path
        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z">
      </path>
    </svg>
    <span :style="{ fontSize: size + 'px' }">
      {{ label }}
      <span v-show="required" class="required">*</span>
    </span>
    
  </div>
  <div class="cms-form-section-content" :style="isHide? { height:0, overflow:'hidden' }: {}" style="transition: all 300ms cubic-bezier(0.45, 1, 0.4, 1);">
    <slot name="default"></slot>
  </div>
</div>
  `,
  name: 'section',
  props: {
    label: {
      type: String
    },
    // 这个字段控制是否为主要核心字段，核心字段不可省略和编辑
    required: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object,
      default: ""
    },
    size: {
      type: String,
      default: "16"
    }
  },
  setup() {
    const isHide = ref(false);
    const handleSectionClick = () => {
      isHide.value = !isHide.value
    }

    return {
      isHide,
      handleSectionClick
    }
  }
}