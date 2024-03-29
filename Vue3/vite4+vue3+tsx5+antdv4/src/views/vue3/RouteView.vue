<script setup lang="ts">
import { ref, type CSSProperties } from 'vue'
import Menu from './src/Menu.vue'

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px'
}

const siderStyle: CSSProperties = {
  width: '256px!important',
  maxWidth: '256px!important',
  flex: '0 0 256!important',
  textAlign: 'left',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9'
}

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 500,
  lineHeight: '120px'
}

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea'
}
</script>

<template>
  <a-layout>
    <a-layout-header :style="headerStyle">
      <h1><RouterLink to="/">首页（Home）</RouterLink>，Vue3语法</h1>
    </a-layout-header>
    <a-layout>
      <a-layout-sider :style="siderStyle">
        <Menu />
      </a-layout-sider>
      <a-layout-content :style="contentStyle">
        <RouterView />
      </a-layout-content>
    </a-layout>
    <a-layout-footer :style="footerStyle"> ©2024 Created by Ant-Design-Vue UED </a-layout-footer>
  </a-layout>
</template>