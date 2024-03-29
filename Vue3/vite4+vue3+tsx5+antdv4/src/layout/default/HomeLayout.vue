<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { TranslationOutlined, BgColorsOutlined } from '@ant-design/icons-vue'
import { useUserStore, storeToRefs } from '@/store/modules/user'
import HelloWorld from '@/components/HelloWorld.vue'
import { useTheme } from '@/hooks/useTheme'

const { lang, theme } = storeToRefs(useUserStore())
const { theme: use_theme } = useTheme()

const {
  appContext: {
    config: {
      globalProperties: { $t }
    }
  }
} = getCurrentInstance()

const setLang = () => {
  lang.value = 'zh' === lang.value ? 'en' : 'zh'
  location.reload()
}

const setTheme = () => {
  theme.value.mode = theme.value.is ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme.value.mode
  // location.reload()
}

onMounted(() => {
  /**
   * prefers-color-scheme 的两种监听方式
   *  1、 css里通过@media监听
   *  2、js里面通过matchMedia监听
   * 注：两种方式都能监听到操作系统主题变化后的值
   */

  // 检查用户是否偏好深色主题
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  // js监听操作系统主题变化时触发
  darkModeMediaQuery.addEventListener('change', () => {
    if (darkModeMediaQuery.matches) {
      console.log('主题已切换：用户偏好深色主题，暗色主题：dark')
      // 在这里应用深色主题的样式或逻辑
      // tipText.innerHTML = darkTip
    } else {
      console.log('主题已切换：用户偏好浅色主题，亮色主题：light')
      // 在这里应用浅色主题的样式或逻辑
      // tipText.innerHTML = lightTip
    }
  })

  // 初始检查
  if (darkModeMediaQuery.matches) {
    console.log('初始状态：用户偏好深色主题')
  } else {
    console.log('初始状态：用户偏好浅色主题')
  }
})
</script>

<template>
  <a-button class="lang-btn" type="primary" ghost @click="setLang"
    ><TranslationOutlined />{{ lang }}</a-button
  >
  <a-button
    class="theme-btn"
    type="primary"
    ghost
    @click="'dark' === use_theme ? (use_theme = 'light') : (use_theme = 'dark')"
    ><BgColorsOutlined />{{ use_theme }}</a-button
  >
  <a-switch
    class="theme-switch"
    v-model:checked="theme.is"
    @change="setTheme"
    checked-children="dark"
    un-checked-children="light"
  />

  <section id="home">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/svg/logo.svg" width="125" height="125" />
      <img alt="AntdV logo" class="logo" src="@/assets/svg/antdv.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld :msg="$t('home.title')" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/vue3">Vue3</RouterLink>
          <RouterLink to="/store">Store</RouterLink>
          <RouterLink to="/antdv">Antdv</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </section>
</template>

<style scoped lang="less" >
.lang-btn,
.theme-btn,
.theme-switch {
  position: fixed;
  top: 10px;
  right: 250px;
}
.theme-btn {
  right: 150px;
}
.theme-switch {
  top: 15px;
  right: 50px;
}
header {
  line-height: 1.5;
  max-height: 100vh;

  .logo {
    display: block;
    margin: 0 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }
}

@media (min-width: 1920px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
