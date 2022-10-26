import CmsCollapse from "../../components/Collapse/index.js";
import CmsSwitch from "../../components/Switch/index.js";

export default {
  template: /*html*/`
  <cms-collapse label="评论设置">
    <div class="flex-row justify-between" style="margin-right: 100px;">
      <cms-switch size="medium" label="允许评论" :inline="true" label_width="80px"></cms-switch>
      <cms-switch size="medium" label="允许问题" :inline="true" label_width="80px"></cms-switch>
    </div>
  </cms-collapse>
  `,
  components: {
    CmsCollapse,
    CmsSwitch
  }
}