<script setup lang="ts">
import {useAttrs, useSlots} from 'vue'
import { Input } from 'ant-design-vue'
/**
 * 二次封装UI组件
 * 1、将传来的props 或 attrs 参数 传给 被封的ant-design-vue中的Input组件上
 * 2、将传来的slot 插槽 传给 被封的ant-design-vue中的Input组件中
 * 3、调用方可使用ref属性获取组件实例
 * @name: mu-input
 * @description: 输入框
 * @param {type} 
 * @return: MuInput
 */
</script>

<template>
  <div class="mu-input">
    <Input>
    <slot></slot>
    </Input>
  </div>
</template>

<style scoped lang="less" >
.mu-input {
}
</style>