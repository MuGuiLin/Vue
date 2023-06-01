<script setup lang="ts" name="Home">
import { ref, getCurrentInstance } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

const prototype = getCurrentInstance();
console.log("getCurrentInstance", prototype);

const { appContext, proxy } = prototype;
console.log("appContext", appContext);
console.log("proxy", proxy);

const global = appContext.config.globalProperties;
console.log("appContext.config.globalProperties", global);

const { $t } = global;

const title = $t("home.title");
console.log(title);

const useI18n = proxy.useI18n();
console.log(useI18n);
const title2 = useI18n.t("home.title");
</script>

<template>
  <div class="home">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <h3>{{ $t("home.title") }}</h3>
    <h3>{{ title }}</h3>
    <h3>{{ title2 }}</h3>

    <h1>{{ $t("vue.vite") }} + {{ $t("vue.vue") }}</h1>
    <HelloWorld msg="Vite + Vue" />

    <RouterLink to="/upload">upload</RouterLink>、
    <RouterLink to="/store">store</RouterLink>
  </div>
</template>

<style scoped lang="less">
.home {
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
