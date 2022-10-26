const { ref } = Vue;

export default {
  template: /*html*/`
<div class="collapse-item" :style="style" :class="isHide?'':'active'">
  <div class="collapse-item__header flex-row" @click="handleCollapseClick" style="cursor: pointer;">
    {{ label }}
    <i class="collapse-item__arrow"></i>
  </div>
  <div class="collapse-item__content" style="transition: all 300ms cubic-bezier(0.45, 1, 0.4, 1);">
    <div class="content-item">
      <slot name="default"></slot>
    </div>
  </div>
</div>
  `,
  name: 'collapse',
  props: {
    label: {
      type: String
    },
    style: {
      type: Object,
      default: ""
    },
  },
  setup() {
    const isHide = ref(false);
    const handleCollapseClick = () => {
      isHide.value = !isHide.value
    }

    return {
      isHide,
      handleCollapseClick
    }
  }
}