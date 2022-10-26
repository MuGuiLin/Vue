import CmsCollapse from "../../components/Collapse/index.js";
import CmsUpload from "../../components/Upload/index.js";
import CmsInput from "../../components/Input/index.js";

export default {
  template: /*html*/`
  <cms-collapse label="分享设置">
    <cms-upload label="分享头图"></cms-upload>
    <cms-input :is_show="true" label="分享标题" placeholder="请输入分享标题"></cms-input>
    <cms-input :is_show="true" label="分享链接" placeholder="请输入分享链接"></cms-input>
    <cms-input label="分享描述" type="textarea" placeholder="请输入分享描述"></cms-input>
  </cms-collapse>
  `,
  components: {
    CmsCollapse,
    CmsUpload,
    CmsInput
  }
}