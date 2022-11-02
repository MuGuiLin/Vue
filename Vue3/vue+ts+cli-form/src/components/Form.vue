<template>
  <form class="form-dom">
    <slot></slot>
  </form>
</template>

<script lang="ts" setup>
import { defineProps, defineExpose, PropType, provide, ref } from "vue";
import { Rules } from "async-validator";
import { FormItem, icKey } from "@/types/formType";
import { emitter } from "@/composables/useEmitter";

// 接收Form配置：model和rules
const props = defineProps({
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> },
});

// 向下传递：提供后代model和rules
provide(icKey, {
  model: props.model,
  rules: props.rules,
});

// 监听FormTime注册事件
const formTime = ref<FormItem[]>([]);
emitter.on("formitem", (item) => {
  formTime.value.push(item);
});

const validate = (cb: (isValid: boolean) => void) => {
  // 循环执行内部所有FormItem校验方法
  const items = formTime.value.map((item) => item.validate());
  console.log("items------------------->", items);

  // 全部通过则校验通过
  Promise.all(items)
    .then(() => cb(true))
    .catch(() => cb(false));
};

// 向父级暴露校验事件
defineExpose({
  validate,
});
</script>

<style scoped>
.form-dom {
}
</style>


