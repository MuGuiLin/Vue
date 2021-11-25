<template>
  <input class="input" :type="type" :value="modelValue" @input="onInput" />
</template>
<script lang="ts" setup>
import { emitter } from "../composables/useEmitter";

// 输入
defineProps({
  type: {
    type: String,
    defaule: "text",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

// 输出
const emit = defineEmits<{
  (e: "update:model-value", value: string): void;
}>();

function onInput(e: Event) {
  const input = e.target as HTMLInputElement;
  emit("update:model-value", input.value);

  // 通知FormItem校验
  emitter.emit("validate", input.value);
}
</script>

<style scoped>
.input {
  padding: 8px;
  font-size: 16px;
}
</style>
