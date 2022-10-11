<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <div id="root">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/tsx">Tsx</router-link> |
            <router-link to="/slot">Slot</router-link> |
            <router-link to="/svg">Svg</router-link> |
            <router-link to="/svgEdit">svgEdit</router-link> |
            <router-link to="/404">404</router-link>
        </nav>
        <hr />
        <br />
        <router-view></router-view>
    </div>
</template>

<style scoped lang="less">
// :root {
#root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    // max-width: 1280px;
    min-width: 320px;
    min-height: 100vh;

    nav {
        padding: 20px;

        a {
            padding: 10px;
            font-size: 18px;
        }

        a.router-link-active {
            color: #08d308;
            font-size: 22px;
            font-weight: bold;
        }
    }

}
</style>
