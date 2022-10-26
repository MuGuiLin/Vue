import CmsTagItem from "./tagItem.js";

const { ref } = Vue;

export default {
  template: /*html*/`
  <div v-if="is_show" class="cms-form-item" :style="style" :class="inline?'inline':''" style="align-items:flex-start;">
    <label :style="{ width: label_width, fontSize: label_font_size }" v-if="is_label_show">
      {{ label }}
      <span v-show="required">*</span>
    </label>
    <div class="flex-row flex-col">
      <div class="cms-tags cms-tags-group" style="width: 400px;flex-wrap: wrap;">
        <cms-tag-item 
          style="margin:0 10px 10px 10px;"
          v-for="(item, index) in tags" 
          :key="item.id" 
          :id="item.id"
          :name="item.name"
          v-model="item.value"
          :label="item.label"
          :checked="item.checked"
          closable
          isMulti
          @close="handleTagClose(item, index)"
        ></cms-tag-item>
      </div>
      <input type="text" :name="name" :placeholder="placeholder" v-model="value" @keyup.enter="handleTagAdd" />
    </div>
  </div>
  `,
  components: {
    CmsTagItem
  },
  props: {
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
    }
  },
  setup(props) {
    const value = ref("");
    const tags = ref([]);

    const handleTagClose = (item, index) => {
      console.log(item)
      tags.value.splice(index, 1)
    }

    const handleTagAdd = () => {
      tags.value.push({
        id: `tag_${props.name}_${tags.value.length}`,
        name: props.name,
        value: tags.value.length + "",
        label: value.value,
        checked: true
      })

      value.value = "";
    }

    return {
      value,
      tags,
      handleTagClose,
      handleTagAdd
    }
  }
}