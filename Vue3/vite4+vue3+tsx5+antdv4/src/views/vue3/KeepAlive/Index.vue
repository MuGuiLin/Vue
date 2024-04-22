<script setup lang="ts" name="KeepAliveIndex" >
import { reactive, toRaw, type UnwrapRef, onActivated, onDeactivated } from 'vue'
import { useRoute, useRouter, useLink } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log(route, router)
interface FormState {
  name: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}
const formState: UnwrapRef<FormState> = reactive({
  name: '',
  show: true,
  delivery: false,
  type: [],
  resource: '',
  desc: 'Component is activated!'
})
const onSubmit = () => {
  console.log('submit!', toRaw(formState))
  router.push({ path: '/vue3/keepAlive/edit' })
}
const labelCol = { style: { width: '150px' } }
const wrapperCol = { span: 14 }

onActivated(() => {
  // 首次挂载，以及每次从缓存中被激活时调用
  formState.desc = 'OK，组件已激活！'
  console.log('OK，组件已激活！')
})

onDeactivated(() => {
  // 从DOM上移除时调用， 比如从 A 组件，切换到 B 组件，A 组件消失时执行
  formState.desc = 'NO， 组件消失时执行！'
  console.log('NO， 组件消失时执行！')
})
</script>

<template>
  <main class="keep-alive">
    了解更多：<a href="https://cn.vuejs.org/guide/built-ins/keep-alive.html">Vue keep-alive</a>
    <pre>
    onActivated 是 Vue 3 中组件生命周期钩子的一部分，它是在组件被 keep-alive 缓存并且再次被激活时调用的钩子函数。这个钩子函数通常用于处理组件被缓存后再次显示时的逻辑。
    当一个被 &lt;keep-alive> 包裹的组件被切换展示时，如果该组件定义了 onActivated 钩子函数，那么该钩子函数将会被调用。
    以下是关于 onActivated 钩子函数的一些重要信息：
      - 触发时机： 当被包裹在 &lt;keep-alive> 组件中的组件从缓存中被激活时，onActivated 钩子函数会被触发。
      - 使用场景： 适合用于处理组件被缓存后再次显示时的数据更新、状态重置等逻辑操作。
      - 参数： onActivated 钩子函数没有接收任何参数。
    </pre>
    <keep-alive>
      <a-input v-if="formState.show" v-model:value="formState.name" />
    </keep-alive>
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Activity name">
        <a-input v-if="formState.show" v-model:value="formState.name" />
        <a-button type="primary" @click="formState.show = !formState.show">显示/隐藏{{formState.show}}</a-button>
      </a-form-item>
      <a-form-item label="Instant delivery">
        <a-switch v-model:checked="formState.delivery" />
      </a-form-item>
      <a-form-item label="Activity type">
        <a-checkbox-group v-model:value="formState.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="Resources">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">Sponsor</a-radio>
          <a-radio value="2">Venue</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="Activity form">
        <a-textarea v-model:value="formState.desc" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">创建(Create)</a-button>
        <a-button style="margin-left: 10px" >取消(Cancel)</a-button>
      </a-form-item>
    </a-form>
  </main>
</template>

<style lang="less" scoped>
.keep-alive {
  padding: 20px;
  text-align: left;
  p {
    line-height: 32px;
  }
  pre {
    line-height: 26px;
  }
}
</style>