const { ElIcon } = ElementPlus
export default {
  template: /*html*/`
  <div :class="classes" :style="style">
    <input :id="id" :type="isMulti? 'checkbox' : 'radio'" :name="name" hidden :value="value" :checked="checked" />
    <label :for="id">
      {{ label }}
      <el-icon v-if="closable" @click="handleCloseClick" style="margin-left: 5px;">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path></svg>
      </el-icon>
    </label>
  </div>
  `,
  components: {
    ElIcon
  },
  props: {
    isMulti: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object,
      default: ""
    },
    round: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'cms-tags_item': true,
      }
    }
  },
  emits: ["close"],
  setup(props, { emit }) {

    const handleCloseClick = () => {
      emit("close")
    }

    return {
      handleCloseClick
    }
  }
}