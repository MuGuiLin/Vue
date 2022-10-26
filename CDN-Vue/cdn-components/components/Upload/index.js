import CmsButton from './../Button/index.js';
const { ref, reactive } = Vue
export default {
  template: /*html*/`
<div v-if="is_show" class="cms-form-item" :class="inline?'inline':''" :style="style">
  <label :style="{ width: label_width }" v-if="is_label_show">
    {{ label }}
    <span v-show="required">*</span>
  </label>
  <div class="cms-upload cms-upload-img" @mouseenter="handleHover(true)" @mouseleave="handleHover(false)">
    <i></i>
    <div v-show="showUpload" class="flex-row flex-col justify-center" style="width:100%;height:100%;position: absolute;background-color: rgba(0, 0, 0, 0.5);">
      <a class="cms-btn cms-btn-primary-solid" style="text-decoration-line: none;" href="/backend/file/selector?boxId=d41d8cd98f00b204e9800998ecf8427eb2b9cfebf2e7aab159a78948523629d6&upload_type=images&multiple=0&upload_drive=local" data-toggle="modal" data-target="#ajaxModalMax">选择图片</a>
      <cms-button type="success" :solid="true" @click="handleCutPicClick">裁剪上传</cms-button>
    </div>
  </div>
  <div class="cms-upload_result" style="display: none">
    <img class="cms-upload-img_result" />
    <i class="cms-upload-img_result_remove"></i>
  </div>
</div>
  `,
  components: {
    CmsButton
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
    const value = ref("");
    const showUpload = ref(false);

    // TODO: 调后端组件？
    // 选择图片
    const handleSelectPicClick = () => {
      // console.log(1111)
    }

    // 裁剪图片
    const handleCutPicClick = () => {

    }

    const handleHover = (isShow) => {
      showUpload.value = isShow;
    }

    return {
      value,
      handleSelectPicClick,
      handleCutPicClick,
      handleHover,
      showUpload
    }
  }
}