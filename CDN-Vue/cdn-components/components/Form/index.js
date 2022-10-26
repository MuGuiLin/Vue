export default {
  template: /*html*/`<div class="cms-form"></div>`,
  props: {
    rule: {
      type: Object
    },
    value: {
      type: Object
    }
  },
  setup(props) {
    console.log(props.rule)
    return {

    }
  }
}