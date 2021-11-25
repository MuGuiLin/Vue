<template>
  <div class="form-item">
    <!-- label -->
    <label class="form-label" v-if="label">{{ label }}</label>

    <slot></slot>

    <!-- 校验信息 -->
    <p class="form-error" v-if="error">{{ error }}</p>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, inject } from "vue";
import Schema from "async-validator";
import { emitter } from "../composables/useEmitter";
import { FormItem, icKey } from "../types/formType";

interface Props {
  label?: string;
  prop?: string;
}

const props = withDefaults(defineProps<Props>(), { label: "", prop: "" });

// 错误信息
const error = ref("");

// 获取从父级From中传下来的校验值和规则model与rules
const fromData = inject(icKey);
console.log(' 获取从父级From中用 provide() 传下来的值：', fromData);

// 校验
function validate() {
  if (fromData?.rules === undefined) {
    return Promise.resolve({ result: true });
  }

  // 获取值
  const value = fromData.model[props.prop];
  // 获取规则
  const rules = fromData.rules[props.prop];
  const scheam = new Schema({ [props.prop]: rules });
  // 处理规则
  return scheam.validate({ [props.prop]: value }, (err) => {
    if (err) {
      error.value = err[0].message || "校验错误！";
    } else {
      error.value = "";
    }
  });
}

// 监听校验事件
const ev: FormItem = {
  validate,
};

onMounted(() => {
  // 当prop存在时 才需要校验！
  if (props.prop) {
    emitter.on("validate", (val) => {
      validate();
    });
    // 发布FormTime事件
    emitter.emit("formitem", ev);
  }
});

// 向父级暴露校验事件
defineExpose(ev);
</script>

<style scoped>
.form-item {
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
}
.form-label {
  text-align: left;
  line-height: 30px;
}
.form-error {
  margin: 5px;
  text-align: left;
  color: red;
}
</style>
