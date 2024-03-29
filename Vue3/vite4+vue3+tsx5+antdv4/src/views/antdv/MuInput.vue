<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue'
import { MuInputCompositionAPI } from '@/components/MuInput_CompositionAPI'
import { MuInputSetup } from '@/components/MuInput_Setup'

const text = ref('Hello World!')
const compsRef = ref(null)
const setupRef = ref(null)

onMounted(() => {
  console.log('获取子组件的setupRef：', setupRef.value)
  console.log('setupRef让组件得到焦点：', setupRef.value.input.focus())
})
</script>

<template>
  <section class="antdv-two">
    <h1>二次封装UI组件</h1>
    <hr />
    <h2>{{text}}</h2>
    <hr>
    <h2>compsRef</h2>
    <MuInputCompositionAPI v-model:value="text" class="my-input" mupiao="666" ref="compsRef" placeholder="请输入内容！">
      <template #prefix>
        <user-outlined />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </MuInputCompositionAPI>
    <br>
    <h2>setupRef</h2>
    <MuInputSetup v-model:value="text" class="my-input" mupiao="666" ref="setupRef" placeholder="请输入内容！">
      <template #prefix>
        <user-outlined />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </MuInputSetup>
  </section>
</template>

<style scoped lang="less">
.antdv-two {
  padding: 20px;

  .my-input {
    margin: 20px;
  }
}
</style>