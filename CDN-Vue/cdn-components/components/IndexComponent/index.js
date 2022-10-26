import CmsButton from '../Button/index.js';
import CmsSection from '../Section/index.js';
import CmsInput from '../Input/index.js';
import CmsRadio from '../Radio/index.js';
import CmsSwitch from '../Switch/index.js';
import CmsDateTimePicker from '../DateTimePicker/index.js';
import CmsUpload from '../Upload/index.js';
import LiveStreamConfig from '../../views/LiveStreamConfig/index.js';
import TagsSelector from '../../views/TagsSelector/index.js';
import MaterialSelector from '../../views/MaterialSelector/index.js';
import CmsCollapse from '../Collapse/index.js';
import CmsSelect from '../Select/index.js';

const { ElInputNumber } = ElementPlus

export default {
  template: /*html*/`
    <component :is="components[tag] || tag">
      <template v-if="children.length > 0">
        <index-component 
          v-for="item in children" 
          :key="item" 
          :tag="item.field_type"
          :children="item.children"
          v-bind="item"
          v-model="item.value"
          ref="childRef"
        ></index-component>
      </template>
    </component>
  `,
  name: "index-component",
  props: {
    tag: {
      type: String,
    },
    children: {
      type: Array,
      default: []
    },
    originItem: {
      type: Object,
      default: {}
    },
    form: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      components: {
        "cms-button": CmsButton,
        "cms-section": CmsSection,
        "cms-input": CmsInput,
        "cms-radio": CmsRadio,
        "cms-switch": CmsSwitch,
        "cms-date-time-picker": CmsDateTimePicker,
        "cms-upload": CmsUpload,
        "live-stream-config": LiveStreamConfig,
        "tags-selector": TagsSelector,
        "cms-collapse": CmsCollapse,
        "cms-select": CmsSelect,
        "el-input-number": ElInputNumber,
      },
      // childRef: []
    }
  },
}