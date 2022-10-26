import IndexComponent from "../components/IndexComponent/index.js";
import CmsButton from "../components/Button/index.js";
import Validator from '../validator/index.js';

const { createApp } = Vue

const app = createApp({
  components: {
    IndexComponent,
    CmsButton
  },
  data() {
    return {
      id: "",
      ip: "http://10.31.17.138:8999",
      leftComponents: [],
      rightComponents: [],
    }
  },
  methods: {
    GetQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]);
      return null;
    },
    getPageJson() {
      const that = this;
      return new Promise((resolve, reject) => {
        $.ajax({
          url: that.ip + "/backend/rf-content-live/live/form-json",
          type: "get",
          success: function (data) {
            resolve(data);
          },
          error: function () {
            reject()
          }
        })
      })
    },
    getFormData() {
      const that = this;
      return new Promise((resolve, reject) => {
        $.ajax({
          url: that.ip + "/backend/rf-content-live/live/edit",
          type: "get",
          data: {
            id: that.id
          },
          success: function (data) {
            resolve(data);
          },
          error: function () {
            reject()
          }
        })
      })
    },
    setFormData(name, formData) {
      let queryArr = name.split("[");
      let value = formData;
      queryArr.forEach(q => {
        q = q.replace("]", "");
        value = value[q]
      })
      return value;
    },
    setComponentsValue(arr, formData) {
      const that = this;
      arr.forEach(item => {
        if (item.name) {
          let formValue = that.setFormData(item.name, formData)
          item.value = formValue == "" ? item.default : formValue;
        }

        if (item.children) {
          that.setComponentsValue(item.children, formData)
        }
      })
    },
    /**
     * 获取表单验证结果
     * @param {Boolean} isToValid 是否需要验证
     * @returns {Object} validateResult 验证结果对象 
     * @returns {Boolean} validateResult.status 是否验证通过 true/false
     * @returns {Object} validateResult.formData 验证通过返回表单填写内容json
     */
    getData(isToValid) {
      const that = this;
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
    },
    // 取消
    handleCancelClick() {

    },
    // 驳回
    handleRefuseClick() {

    },
    // 保存
    handleSaveClick() {
      getData(false)
        .then(result => {
          console.log(result)
          ajaxEdit(result)
        })
        .catch(err => {

        })
    },
    // 更新上线
    handleUpdateOnlineClick() {

    },
    // 审核通过
    handleAuditPassClick() {

    },
    // 审核上线
    handleAudioPassOnlineClick() {

    },
    // 送审
    handleSubmitClick() {

    },
    // 预览
    handlePreviewClick() {

    },
    // 操作日志
    handleLogClick() {

    }
  },
  mounted() {
    const that = this;
    this.id = this.GetQueryString("id");

    this.getPageJson()
      .then(result => {
        this.leftComponents = result.left;
        this.rightComponents = result.right;

        that.getFormData()
          .then(data => {
            let formData = JSON.parse(data);
            this.setComponentsValue(this.leftComponents, formData);
            this.setComponentsValue(this.rightComponents, formData);

            console.log("leftComponents", this.rightComponents)
          })
      })
  }
})

app.use(ElementPlus, {
  locale: ElementPlusLocaleZhCn,
})

// app.use(MaterialSelector);

app.mount('#app');