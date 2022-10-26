import CmsCollapse from "../../components/Collapse/index.js";
import CmsSwitch from "../../components/Switch/index.js";

export default {
  template: /*html*/`
  <cms-collapse label="人数开关设置">
    <cms-switch size="medium" label="显示直播间人数" :inline="true"></cms-switch>
  </cms-collapse>
  `,
  components: {
    CmsCollapse,
    CmsSwitch
  }
}