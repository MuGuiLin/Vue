// 表单验证插件
import Schema from './async-validator/dist-web/index.js';

class Validator {

  constructor(formJson) {
    this.formJson = formJson || [];
    this.descriptor = this.initDescriptor();
    this.validator = new Schema(this.descriptor);
  }

  initDescriptor() {
    let descriptor = {};

    let formItemList = this.getAllFormItems(this.formJson);
    formItemList.forEach(formItem => {
      descriptor[formItem.name] = []

      if (formItem.required) {
        descriptor[formItem.name].push({
          required: true,
          message: `${formItem.label}不能为空`
        })
      }

      if (formItem.validate_rule) {
        let reg = new RegExp(decodeURI(formItem.validate_rule));
        descriptor[formItem.name].push({
          pattern: reg,
          message: `${formItem.label}不符合规则`
        })
      }
    })
    
    return descriptor;
  }

  getAllFormItems(json) {
    let formItemList = [];
    json.forEach(item => {
      if (item.name) {
        formItemList.push(item);
      }

      if (item.children) {
        formItemList.push(...this.getAllFormItems(item.children))
      }
    })

    return formItemList;
  }

  validate(formData) {
    return this.validator.validate(formData);
  }
}

export default Validator;