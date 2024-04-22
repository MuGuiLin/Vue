<script setup lang="ts" name="KeepAliveEdit" >
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
  router.push({ path: '/vue3/keepAlive/index'  })
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
    <pre>

    </pre>

    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="姓名：">
          <a-input v-if="formState.show" v-model:value="formState.name" />
        <a-button type="primary" @click="formState.show = !formState.show">显示/隐藏{{formState.show}}</a-button>
      </a-form-item>
      <a-form-item label="即时送达">
        <a-switch v-model:checked="formState.delivery" />
      </a-form-item>
      <a-form-item label="活动类型">
        <a-checkbox-group v-model:value="formState.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="资源">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">Sponsor</a-radio>
          <a-radio value="2">Venue</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="活动形式">
        <a-textarea v-model:value="formState.desc" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">提交(Submit)</a-button>
        <a-button style="margin-left: 10px" @click="onSubmit">取消(Cancel)</a-button>
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