<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/vuex">Vuex</router-link> | 
      <router-link to="/move">Move</router-link> | 
      <router-link to="/nativedom">NativeDom</router-link> |
      <router-link to="/virtualdom">VirtualDom</router-link>
    </nav>
    <!-- 路由动画 -->
    <transition name="mupiao" mode="out-in">
      <router-view/>
    </transition>
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
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}



.mupiao-enter-active, .mupiao-leave-active{
  transition: all .5s;
}

.mupiao-enter, .mupiao-leave-active{
  opacity: 0;
  // transform: translateX(0px);
}

</style>
