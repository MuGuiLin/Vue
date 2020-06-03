<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/forms">Forms</router-link>|
      <router-link to="/myforms">MyForms</router-link>|
      <router-link to="/weather">Weather</router-link>
    </nav>

    <hr />
    <router-view />
    <!-- keepAlive默认true，开启缓存可以记录滚动条位置，同时支持路由配置meta:{keepAlive:false} 关闭某个页面缓存 -->
    <!-- <vue-route-transition id="app" :keepAlive="true"></vue-route-transition> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    padding: 30px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
