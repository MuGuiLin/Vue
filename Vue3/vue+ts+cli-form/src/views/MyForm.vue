<template>
  <div class="my-form">
    <h2>表单组件（带校验功能）</h2>
    <muForm ref="myForm" :model="model" :rules="rules">
      <muFormItem label="用户名：" prop="username">
        <muInput v-model="model.username"></muInput>
      </muFormItem>
      <muFormItem label="密码：" prop="password">
        <muInput type="password" v-model="model.password"></muInput>
      </muFormItem>
      <br />
      <muFormItem>
        <button type="button" @click="login">登 录</button>
      </muFormItem>
    </muForm>
    <p>表单数据：{{ model }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
import muForm from "@/components/Form.vue";
import muFormItem from "@/components/FormItem.vue";
import muInput from "@/components/Input.vue";
import { Form } from "@/types/formType";

const model = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名！",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码！",
    },
  ],
});

// 获取表单实例
const myForm = ref<Form>();
const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log(model);
    } else {
      alert("请正确填写表单！");
    }
  });
};
</script>

<style lang="less">
.my-form {
  margin: 100px;
  padding: 40px 60px;
  border: 1px solid gray;
  button {
    padding: 6px;
    font-size: 16px;
  }
}
</style>
