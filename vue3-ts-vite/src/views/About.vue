<template>
  <div class="about">
    <h2>This is an about page</h2>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="用户名：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
      </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const From = reactive({
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入名称",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "长度应为 3 到 5 之间",
            trigger: "blur",
          },
        ],
      },
    });
    const submitForm = (_formName: any) => {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    };

    const resetForm = (_formName: any) => {
      // this.$refs[formName].resetFields();
    };
    return {
      ...toRefs(From),
      submitForm,
      resetForm,
    };
  },
});
</script>

<style lang="less">
.about {
  padding:  50px 20%;
  .el-form{
    margin: 50px;
    padding: 20px;
    border: 1px solid rgb(185, 185, 185);
    border-radius: 8px;
  }
}
</style>
