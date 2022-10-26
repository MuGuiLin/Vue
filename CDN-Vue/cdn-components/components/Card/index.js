export default {
  template: /*html*/`
  <div :class="classes" :style="style">
    <slot name="default"></slot>
  </div>
  `,
  props: {
    style: {
      type: Object,
      default: ""
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'cms-card': true,
        // [`cms-btn-${this.type}`]: !this.solid,
        // [`cms-btn-${this.size}`]: true,
        'shadow': this.shadow,
      };
    }
  },
}