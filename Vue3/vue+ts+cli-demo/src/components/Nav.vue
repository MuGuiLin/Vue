<template>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
        <el-menu-item index="1">
            <img class="logo" src="../assets/logo.png" />
        </el-menu-item>
        <el-menu-item index="1">
            <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/about">About</router-link>
        </el-menu-item>
        <el-menu-item index="3">
            <router-link to="/vue3">Vue3</router-link>
        </el-menu-item>
        <el-sub-menu index="4">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="5" disabled>Info</el-menu-item>
        <el-menu-item index="6">Orders</el-menu-item>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'Nav',
    components: {

    },
    props: {

    },
    setup() {
        const activeIndex = ref('1')
        const activeIndex2 = ref('1')
        const handleSelect = (key: any, keyPath: any) => {
            console.log(key, keyPath)
        }
        return {
            activeIndex,
            activeIndex2,
            handleSelect,
        }
    },
})
// import { Options, Vue } from 'vue-class-component';
// @Options({
//     props: {
//         msg: String
//     }
// })
// export default class Nav extends Vue {
//     msg!: string,
//     activeIndex2: 1
// }
</script>

<style lang="less" scoped>
.logo {
    height: 40px;
}
</style>