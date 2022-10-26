// 解析配置json，渲染成表单
import { removeProperty } from "./utils.js";

const { h, render, resolveComponent, ref } = Vue;

class Parser {

  constructor(container, json = {}, components, form, formData, refs) {
    this.container = container;
    this.json = JSON.parse(JSON.stringify(json));
    this.components = components || [];
    this.form = form;
    this.formData = formData || {};
    this.refs = refs;
  }

  getComponent(tag) {
    if (tag.indexOf('-') < 0) {
      return tag;
    }

    if (this.components[tag]) {
      return this.components[tag];
    } else {
      return resolveComponent(tag)
    }

    
  }

  setFormData(name) {
    let queryArr = name.split("[");
    let value = this.formData;
    queryArr.forEach(q => {
      q = q.replace("]", "");
      value = value[q]
    })
    return value;
  }

  renderItemToVnode(item) {
    console.info('------vnode', item)
    let vnode;
    // <cms-input v-model="data.model.title" style="flex:3;" :inline="true" :is_show="true" label="主标题" placeholder="请输入标题" :required="true"></cms-input>
    const tag = item.field_type;
    if (tag) {
      let component = this.getComponent(tag)
      
      // 子元素
      let childrenVnodes = [];
      if (item.children && item.children.length > 0) {
        item.children.forEach(child => {
          childrenVnodes.push(this.renderItemToVnode(child));
        });
      }

      item.children = null;
      item.field_type = null;

      let props = removeProperty(item);

      if (item.name) {
        let value = this.setFormData(item.name)
        this.form[`${item.name}`] = ref(value)
        this.refs[`${item.name}`] = {};
        this.refs[`${item.name}`].isError = ref(false);
        this.refs[`${item.name}`].errorMessage = ref("");

        props = {
          modelValue: this.form[`${item.name}`].value,
          // 'onUpdate:modelValue': (value) => emit('update:modelValue', value),
          'onUpdate:modelValue': (value) => {
            this.form[`${item.name}`].value = value
            // console.log('onUpdate:modelValue', this.form[`${item.name}`], value)
          },
          isError: this.refs[`${item.name}`].isError.value,
          errorMessage: this.refs[`${item.name}`].errorMessage.value,
          ...props
        }
      }

      if (item.text) {
        vnode = h(
          component, 
          props,
          item.text
        )
      } else {
        vnode = h(
          component, 
          props,
          [...childrenVnodes]
        )
      }

      console.log(vnode)
    } else {
      console.log("json配置错误");
    }
  
    return vnode;
  }

  initForm() {
    let children = []
    this.json.forEach(item => {
      children.push(this.renderItemToVnode(item));
    });

    const $vm = h('div', {}, children)
    console.log("vm", $vm)

    render($vm, this.container)
  }
}

export default Parser;