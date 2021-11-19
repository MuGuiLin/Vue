<template>
    <el-container>
        <el-header>
            <Nav />
        </el-header>
        <router-view />
        <el-footer>
            <a href="https://v3.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">vuejs3</a>
            <a
                href="https://element-plus.org/zh-CN/"
                target="_blank"
                rel="noopener noreferrer"
            >element-plus</a>
        </el-footer>
    </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Nav from '@/components/Nav.vue'; // @ is an alias to /src

@Options({
    components: {
        Nav,
    },
})
export default class Home extends Vue { }
</script>

<style lang="less" scoped>
.el-header {
    padding: 0px;
}
#app .el-container main {
    height: calc(100vh - 120px);
}
.el-footer {
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-top: 2px solid #2c3e50;
    background: #545c64;
    a {
        padding: 0 20px;
        color: white;
        text-decoration: none;
    }
}
</style>