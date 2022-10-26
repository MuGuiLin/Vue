import CmsButton from '../components/Button/index.js';
import CmsSection from '../components/Section/index.js';
import CmsInput from '../components/Input/index.js';
import CmsRadio from '../components/Radio/index.js';
import CmsSwitch from '../components/Switch/index.js';
import CmsDateTimePicker from '../components/DateTimePicker/index.js';
import CmsUpload from '../components/Upload/index.js';
import LiveStreamConfig from '../views/LiveStreamConfig/index.js';
import TagsSelector from '../views/TagsSelector/index.js';
import MaterialSelector from '../views/MaterialSelector/index.js';
import CmsCollapse from '../components/Collapse/index.js';
import CmsSelect from '../components/Select/index.js';

import Parser from '../parser/index.js';
import Validator from '../validator/index.js';

import Json from './AddLiveRenderJson.js'
import Data, { data as Rdata } from './AddLiveRenderData.js'

const { createApp, ref, onMounted, isRef } = Vue

const { ElInputNumber } = ElementPlus

const app = createApp({
  components: {
    "cms-button": CmsButton,
    "cms-section": CmsSection,
    "cms-input": CmsInput,
    "cms-radio": CmsRadio,
    "cms-switch": CmsSwitch,
    "cms-date-time-picker": CmsDateTimePicker,
    "cms-upload": CmsUpload,
    "live-stream-config": LiveStreamConfig,
    "tags-selector": TagsSelector,
    "cms-collapse": CmsCollapse,
    "cms-select": CmsSelect,
    "el-input-number": ElInputNumber,
  },
  setup() {
    const data = ref({});
    const addLiveJson = ref({});
    const form = {};
    const refs = {};

    const leftContainer = ref(null);
    const rightContainer = ref(null);

    const ip = "http://10.31.17.138:8999";
    // const ip = "";

    const id = ref("");

    const GetQueryString = (name) => {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]);
      return null;
    }

    const getPageJson = () => {
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: ip + "/backend/rf-content-live/live/form-json",
          type: "get",
          success: function (data) {
            // if (data.status == "1") {
            resolve(data);
            // } else {
            //   reject(data.info);
            // }
          },
          error: function () {
            reject()
          }
        })
      })
    }

    const getFormData = () => {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: ip + "/backend/rf-content-live/live/edit",
          type: "get",
          data: {
            id: id.value
          },
          success: function (data) {
            resolve(data);
          },
          error: function () {
            reject()
          }
        })
      })
    }

    const initPageForm = (formData) => {

      const leftParser = new Parser(leftContainer.value, addLiveJson.value.left, app._component.components, form, formData, refs);
      leftParser.initForm();

      const rightParser = new Parser(rightContainer.value, addLiveJson.value.right, app._component.components, form, formData, refs);
      rightParser.initForm();
    }

    /**
     * 获取表单验证结果
     * @param {Boolean} isToValid 是否需要验证
     * @returns {Object} validateResult 验证结果对象 
     * @returns {Boolean} validateResult.status 是否验证通过 true/false
     * @returns {Object} validateResult.formData 验证通过返回表单填写内容json
     */
    const getData = (isToValid) => {
      return new Promise((resolve, reject) => {
        let result = parseFormData();
        if (isToValid) {
          // 需要验证
          const validator = new Validator([
            ...addLiveJson.value.left,
            ...addLiveJson.value.right
          ]);
          validator.validate(result)
            .then(() => {

            })
            .catch(({ errors, fields }) => {
              console.log(errors, fields)
              console.log(refs)
              for (let i in fields) {
                console.log(refs[i])
                refs[i].isError.value = true;
              }
            })
        } else {
          // 不需要验证
          // let result = $("form").serializeArray()
          resolve(result);
        }
      })
    }

    const parseFormData = () => {
      let result = {};
      for (let i in form) {
        // console.log(i, form[i].value)
        result[i] = form[i].value
      }
      return result;
    }

    const ajaxEdit = (requestData) => {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: ip + "/backend/rf-content-live/live/ajax-edit",
          type: "post",
          data: {
            "model[id]": id.value,
            ...requestData
          },
          success: function (data) {
            resolve(data);
          },
          error: function () {
            reject()
          }
        })
      })
    }

    //#region 顶部按钮点击事件处理
    // 取消
    const handleCancelClick = () => {
      console.log(form)
      // 跳转列表页
    }

    // 驳回
    const handleRefuseClick = () => {
      console.log(form)
      // 弹出文本域输入框填写驳回理由，确定时提交
    }

    // 保存
    const handleSaveClick = () => {
      getData(false)
        .then(result => {
          console.log(result)
          ajaxEdit(result)
        })
        .catch(err => {

        })
    }

    // 更新上线
    const handleUpdateOnlineClick = () => {

    }

    // 审核通过
    const handleAuditPassClick = () => {

    }

    // 审核上线
    const handleAudioPassOnlineClick = () => {

    }

    // 送审
    const handleSubmitClick = () => {
      getData(true)
        .then(result => {
          console.log(result)
          ajaxEdit(result)
        })
        .catch(err => {

        })
    }

    // 预览
    const handlePreviewClick = () => {
      console.log(form)
      // 判断是否保存
    }

    // 操作日志
    const handleLogClick = () => {
      console.log(form)
      // 弹层嵌套页面
    }

    //#endregion

    onMounted(() => {
      // console.log("app._component.components", app._component.components)

      id.value = GetQueryString("id");

      addLiveJson.value = Json;
      initPageForm(Data);
      initPageForm(Rdata);

      // getPageJson()
      //   .then(result => {
      //     addLiveJson.value = result;
      //     getFormData()
      //       .then(formData => {
      //         if (formData) {
      //           initPageForm(JSON.parse(formData));
      //         }
      //       })
      //   })
    })

    return {
      data,
      leftContainer,
      rightContainer,
      addLiveJson,
      getPageJson,
      initPageForm,
      handleCancelClick,
      handleRefuseClick,
      handleSaveClick,
      handleSubmitClick,
      handlePreviewClick,
      handleLogClick,
      handleUpdateOnlineClick,
      handleAuditPassClick,
      handleAudioPassOnlineClick
    }
  }
})

app.use(ElementPlus, {
  locale: ElementPlusLocaleZhCn,
})

app.use(MaterialSelector);

app.mount('#app');