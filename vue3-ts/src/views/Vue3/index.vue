<template>
    <el-container>
        <el-aside>
            <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                <el-radio-button :label="false">expand</el-radio-button>
                <el-radio-button :label="true">collapse</el-radio-button>
            </el-radio-group>-->
            <el-menu
                default-active="1-1"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>数据初始化</span>
                    </template>
                    <el-menu-item-group>
                        <template #title>
                            <span>单个数据声明</span>
                        </template>
                        <router-link to="/vue3/setup">
                            <el-menu-item index="1-1">setup()、ref()</el-menu-item>
                        </router-link>
                        <router-link to="/vue3/module">
                            <el-menu-item index="1-2">module 模块化</el-menu-item>
                        </router-link>
                        <router-link to="/vue3/letter">
                            <el-menu-item index="1-3">父子组件通信</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                    <el-menu-item-group title="数据/对象声明">
                        <el-menu-item index="1-4">
                            <router-link to="/vue3/setup">reactive()， toRefs()</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-5">
                            <router-link to="/vue3/watch">watch()</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-6">
                        <template #title>
                            <span>生命周期钩子</span>
                        </template>
                        <el-menu-item index="1-6-1">
                            <router-link to="/vue3/hook">Hook</router-link>
                        </el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title>Navigator Two</template>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <template #title>Navigator Three</template>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
    Location,
    Document,
    Menu as IconMenu,
    Setting,
} from '@element-plus/icons'

export default defineComponent({
    components: {
        Location,
        Document,
        Setting,
        IconMenu,
    },
    setup() {
        const isCollapse = ref(false)
        const handleOpen = (key: any, keyPath: any) => {
            // console.log(key, keyPath);
        }
        const handleClose = (key: any, keyPath: any) => {
            // console.log(key, keyPath);
        }
        return {
            isCollapse,
            handleOpen,
            handleClose,
        }
    },
})
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    // width: 200px;
    min-height: calc(100vh - 120px);
}
</style>