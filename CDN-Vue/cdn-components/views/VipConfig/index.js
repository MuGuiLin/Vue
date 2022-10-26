import CmsCollapse from "../../components/Collapse/index.js";
import CmsSwitch from "../../components/Switch/index.js";

export default {
  template: /*html*/`
  <cms-collapse label="权限设置">
    <cms-switch size="medium" label="VIP观看" :inline="true" label_width="80px"></cms-switch>
  </cms-collapse>
  `,
  components: {
    CmsCollapse,
    CmsSwitch
  }
}