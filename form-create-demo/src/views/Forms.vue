<template>
  <section class="form-box">
    <form-create v-model="formApi" :rule="ruleObj" :option="option"></form-create>

    <!-- <ElButton type="primary" plain @click="submit">提交</ElButton>
    <ElButton aligen="center" plain @click="reset">重置</ElButton>-->
  </section>
</template>

<script>
export default {
  name: "Forms",

  components: {},

  data() {
    return {
      //form表单实例对象
      formApi: {},

      //表单生成规则
      ruleObj: [
        {
          type: "input",
          field: "name",
          title: "名称",
          validate: [{ type: "string", required: true, message: "请输入名称" }]
        },
        {
          type: "input",
          field: "input",
          title: "插槽",
          children: [
            {
              type: "i",
              class: "ios-home",
              slot: "prefix"
            },
            {
              type: "i",
              class: "ios-construct",
              slot: "suffix"
            }
          ]
        },
        {
          type: "ColorPicker",
          field: "color2",
          title: "颜色2",
          value: "#ff7271",
          props: {
            alpha: true
          }
        },
        {
          type: "myInput",
          field: "user",
          title: "mupiao",
          value: 123456,
          validate: [
            { type: "string", required: false, message: "自定义表单input" }
          ]
        },
        {
          type: "select",
          field: "select",
          title: "下拉选择",
          value: "",
          options: [{ value: 0, label: "0".repeat(5) }]
        },
        {
          type: "datePicker",
          field: "name2",
          title: "名称",
          validate: [{ type: "string", required: true, message: "请输入名称" }]
        }

        // 'checkbox、radio、switch、select、',
      ],

      //form表单组件参数配置
      option: {
        // 配置隐藏表单默认的操作按钮
        // submitBtn: false,
        // resetBtn: false,

        //表单提交事件
        onSubmit: function(formData) {
          console.log("获取表单中的数据：", JSON.stringify(formData));
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.form-box {
  margin: 50px auto;
  padding: 20px;
  width: 60%;
  border: 1px solid gray;
  border-radius: 6px;
}
</style>