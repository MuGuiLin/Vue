import CmsForm from './../components/Form/index.js';
import CmsButton from './../components/Button/index.js';
const { createApp, ref, reactive } = Vue

createApp({
  components: {
    CmsForm,
    CmsButton
  },
  setup() {
    const formRule = ref({
      aaa: 111
    });
    const formValue = ref({});

    const button = reactive({
      onClick: () => {

      }
    })

    return {
      formRule,
      formValue,
      button,
      handleBtnClick
    }
  },
}).mount('#app')