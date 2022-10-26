import CmsButton from './../Button/index.js';

export default {
  template: /*html*/`
    <div ref="cmsModal" class="cms-modal fade" :class="show?'in':''" :style="show?'display:block;':{}">
      <div 
        class="cms-modal__dialog" 
        :style="{...style, width: modal_width, height: modal_height}">
        <div class="cms-modal__close js-modal-close" @click="handleClose"></div>
        <div class="cms-modal__body is-block">
          <div class="cms-modal__title">
            <slot name="header"></slot>
          </div>
          <div class="cms-modal__content">
            <slot name="default"></slot>
          </div>
          <div class="cms-modal__footer">
            <slot name="footer"></slot>
            <cms-button v-if="showCancelButton" type="danger" round outline @click="handleClose">{{cancelButtonLabel}}</cms-button>
            <cms-button v-if="showConfirmButton" type="success" round solid @click="handleConfirm">{{confirmButtonLabel}}</cms-button>
          </div>
        </div>
      </div>
    </div>
  `,
  components: {
    CmsButton
  },
  props: {
    style: {
      type: Object,
      default: {}
    },
    modal_width: {
      type: String,
      default: "665px"
    },
    modal_height: {
      type: String,
      default: "528px"
    },
    title: {
      type: String,
      default: ""
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    cancelButtonLabel: {
      type: String,
      default: "取消"
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    confirmButtonLabel: {
      type: String,
      default: "确定"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    handleConfirm() {
      this.$emit('confirm')
    }
  }
}