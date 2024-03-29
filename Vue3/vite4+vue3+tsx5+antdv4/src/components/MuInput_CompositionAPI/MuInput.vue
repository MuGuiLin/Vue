<script setup lang="ts">
import { onMounted, ref, useAttrs, useSlots } from 'vue'
import { Input } from 'ant-design-vue'

/**
 * 二次封装UI组件需要解决的3个问题：这里以Antdv的Input为例
 *
 *    1、属性和事件的传递：
 *          将传来的props 或 attrs 参数 或 @事件 传给 被封的ant-design-vue中的Input组件上。
 *      解决：useAttrs() v-bind="attrs"
 *
 *    2、插槽的传递：（匿名、具名、作用域）
 *        将传来的slot 插槽 传给 被封的ant-design-vue中的Input组件中。
 *      解决：useSlots() v-bind="name" 循环绑定 #[name]="scoped"
 *
 *    3、ref的获取：
 *          当在外面调用时，如果给组件绑定了ref属性，也要能拿这个被封的ant-design-vue中的Input组件上ref的属性
 *
 */
const box = ref(null)
const input = ref(null)

const attrs = useAttrs()
console.log('--------->$attrs：', attrs)

const slots = useSlots()
console.log('--------->$slots：', slots)

// 注：父组件传过来的属性，在子组件这里，如果用defineProps来定义接收之后，就不会在useAttrs()中出现了哦！！！
// 如：这里的placeholder属性，就需要指定绑定到想要的input上，才会生效哦！！！
const props = defineProps({
  mupiao: {
    type: String,
    default: 888
  },
  placeholder: {
    type: String,
    default: '请输入内容'
  }
})

onMounted(() => {
  console.info('--------->input：ref', input)
  console.info('--------->input：ref.value', typeof(input.value), input.value)
 

  // 处理ref绑定
  for (const key in  input.value) {
    console.info(input.value[key], 6666666666)
    box.value[key] = input.value[key];
  }
})
 console.info('--------->input：...ref.value', {...input.value})
defineExpose({
  mupiao: () => {
    console.info('--------->input：mupiao', box.value.mupiao)
    return box.value.mupiao
  },
  input
  })
</script>

<template>
  <div class="mu-input" ref="box">

    <!-- 处理传递来的属性、事件：v-bind="attrs" -->
    <Input v-bind="attrs" ref="input" :placeholder="placeholder">

      <!-- 处理传递来的插槽：（匿名、具名、作用域） 
      <template v-for="(value, name) in slots">
        <h2>{{ value }}, {{ name }}</h2>
        <br />
        <br />
      </template>-->
      <template v-for="(value, name) in slots" #[name]="scoped">
        <slot :key="value" :name="name" v-bind="scoped"></slot>
      </template>
    </Input>
  </div>
</template>

<style scoped lang="less" >
.mu-input {
  background: blueviolet;
  padding: 10px;
}
</style>