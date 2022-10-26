import CmsCollapse from "../../components/Collapse/index.js";
import CmsInput from "../../components/Input/index.js";
import CmsUpload from "../../components/Upload/index.js";

export default {
  template: /*html*/`
  <cms-collapse label="主持人设置">
    <cms-input :is_show="true" label="主持人昵称" placeholder="请输入主持人昵称" default="观察君"></cms-input>
    <cms-upload label="主持人头像"></cms-upload>
  </cms-collapse>
  `,
  components: {
    CmsCollapse,
    CmsInput,
    CmsUpload
  }
}