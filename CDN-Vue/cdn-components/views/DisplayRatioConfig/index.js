import CmsCollapse from "../../components/Collapse/index.js";
import CmsInput from "../../components/Input/index.js";

export default {
  template: /*html*/`
  <cms-collapse label="公式系数设置">
    <cms-input :is_show="true" label="xxx人在看系数" placeholder="请输入在看系数"></cms-input>
    <cms-input :is_show="true" label="xxx人气系数" placeholder="请输入人气系数"></cms-input>
    <cms-input :is_show="true" label="xxx热度系数" placeholder="请输入热度系数"></cms-input>
  </cms-collapse>
  `,
  components: {
    CmsCollapse,
    CmsInput
  }
}