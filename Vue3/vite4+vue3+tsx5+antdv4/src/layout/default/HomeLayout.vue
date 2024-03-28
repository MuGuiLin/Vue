<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { TranslationOutlined } from '@ant-design/icons-vue'
import { useUserStore, storeToRefs } from '@/store/modules/user'
import HelloWorld from '@/components/HelloWorld.vue'

const { lang } = storeToRefs(useUserStore())

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
</script>

<template>
  <a-button class="lang-btn" type="primary" ghost @click="setLang"
    ><TranslationOutlined />{{ lang }}</a-button
  >
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
.lang-btn {
  position: fixed;
  top: 10px;
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
