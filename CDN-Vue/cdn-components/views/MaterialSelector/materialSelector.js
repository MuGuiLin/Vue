import CmsDialog from './../../components/Dialog/index.js';
import CmsInput from './../../components/Input/index.js';

const { ref, reactive } = Vue;

export default {
  template: /*html*/`
  <cms-dialog 
    :show="showDialog" 
    @close="handleOnClose"
    @confirm="handleOnConfirm"
  >
    <template #header>
      <div class="flex-row justify-between">
        {{modalTitle}}
        <cms-input inline round placeholder="请输入标题" has_icon style="margin-bottom:0;">
          <template #suffix>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" style="
                fill: rgba(80, 88, 96, 1);
                border-color: rgba(0, 0, 0, 0);
                border-width: bpx;
                border-style: undefined;
              " filter="none">
              <path
                d="M14.667 2.667c6.624 0 12 5.376 12 12s-5.376 12-12 12-12-5.376-12-12 5.376-12 12-12zM14.667 24c5.156 0 9.333-4.177 9.333-9.333 0-5.157-4.177-9.333-9.333-9.333-5.157 0-9.333 4.176-9.333 9.333 0 5.156 4.176 9.333 9.333 9.333zM25.98 24.095l3.772 3.771-1.887 1.887-3.771-3.772 1.885-1.885z">
              </path>
            </svg>
          </template>
        </cms-input>
      </div>
    </template>

    
  </cms-dialog>
  `,
  components: {
    CmsDialog,
    CmsInput,
  },
  setup(props, { emits }) {
    const showDialog = ref(false);
    const modalTitle = ref("");
    let confirmFunc = () => {};
    let cancelFunc = () => {};

    // 传入确认和取消回调事件
    const show = ({ title }, confirm, cancel) => {
      showDialog.value = true;
      confirmFunc = confirm;
      cancelFunc = cancel;
      modalTitle.value = title;
    }

    const hide = () => {
      showDialog.value = false;
    }

    const handleOnClose = () => {
      hide();
      cancelFunc()
    }

    const handleOnConfirm = () => {
      hide();
      confirmFunc()
    }

    return {
      showDialog,
      show,
      hide,
      handleOnClose,
      handleOnConfirm,
      modalTitle
    }
  },
}