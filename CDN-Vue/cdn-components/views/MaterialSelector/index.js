const { createApp, ref, reactive } = Vue

import MaterialSelector from "./materialSelector.js"

export default {
  materialSelector: null,
  install(Vue) {
    if (this.materialSelector) {
      Vue.config.globalProperties.$materialSelector = this.materialSelector;
      return;
    }
    let instance = createApp(MaterialSelector);
    let parent = document.createElement("div")
    // parent.classList = "coin-point-container"
    let bodyDom = document.body
    bodyDom.appendChild(parent)
    this.materialSelector = instance.mount(parent)

    Vue.config.globalProperties.$materialSelector = this.materialSelector;
  }
}