<template>
    <section class="module" v-loading="loading">
        <el-button type="success">{{ nowTime }}</el-button>

        <br />
        <br />

        <el-image
            v-if="!loading"
            :src="result.imgUrl"
            fits="contain"
            :preview-src-list="[result.imgUrl]"
            :initial-index="1"
        ></el-image>

        <br />
        <br />

        <el-button type="primary" @click="show = !show">
            <h2>Vue3瞬移组件&lt;teleport&gt;标签</h2>
        </el-button>
        <Alert v-if="show" />

        <br />
        <br />

        <suspense>
            <template #default>
                <div class="suspense">
                    <h2>Vue3异步组件&lt;suspense&gt;标签</h2>
                    <!-- <Async /> -->
                    <async-axios />
                </div>
            </template>
            <template #fallback>
                <h1 class="loading">{{ loadingText }}</h1>
            </template>
        </suspense>
    </section>
</template>

<script lang="ts">
import { ref, onMounted, onErrorCaptured, watch } from 'vue';
import { ElLoading } from 'element-plus';

import { nowTime, getNowTime } from '@/utils/nowTime';
import useAxios from '@/utils/useAxios';

import Alert from '../../components/Teleport.vue';
import Async from '@/components/Suspense.vue';
import AsyncAxios from '@/components/Suspense2.vue';

export default {
    name: 'Module',
    components: {
        Alert,
        Async,
        AsyncAxios
    },
    setup(props: any) {
        // 模块化前：
        // const nowTime = ref<string>('00:00:00');
        // const into = (n: number) => {
        //     return Number(n) < 10 ? '0' + n : n;
        // }
        // const getNowTime = () => {
        //     const now = new Date();
        //     const YYYY = now.getFullYear();
        //     const MM = now.getMonth() + 1;
        //     const DD = now.getDate();
        //     const hh = now.getHours();
        //     const mm = now.getMinutes();
        //     const ss = now.getSeconds();
        //     const day = now.getDay();
        //     const week:any = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        //     nowTime.value = `现在时刻：${into(YYYY)}年 ${into(MM)}月 ${into(DD)}日 ${week[day]} ${into(hh)}：${into(mm)}：${into(ss)}`;
        //     setTimeout(getNowTime, 1000);
        // };

        // 模块化后：将公用代码抽离封装成一个独立的模块，用使用时按需导入引用即可！！！
        // import { nowTime, getNowTime } from '@/utils/nowTime';

        onMounted(() => {
            getNowTime();
        });

        const loadingText = ref('加载中，请稍后！');

        onErrorCaptured((err, vm, info) => {
            console.error('* Error、在捕获一个来自后代(子孙)组件的异常、错误时被调用！------> onErrorCaptured()');
            console.debug(err);
            console.debug(vm);
            console.debug(info);
            loadingText.value = 'API请求出错啦！';
            return true;
        });

        // const openFullScreen = () => {
        //     const loading = ElLoading.service({
        //         lock: true,
        //         text: 'Loading',
        //         background: 'rgba(0, 0, 0, 0.7)',
        //     })
        //     setTimeout(loading.close, 2000);
        // };
        // openFullScreen();


        // 模块化2 返回 获取远程数据
        const { result, loading } = useAxios('https://apiblog.jspang.com/default/getGirl');


        // Vue3异步组件Suspense 【试验中！！！】
        const show = ref<boolean>(false);
        watch(show, (n, o) => {
            if (n) {
                setTimeout(() => {
                    show.value = !show.value;
                }, 2000);
            }
        });


        //  Vue3瞬移组件teleport标签
        return {
            nowTime,
            result,
            loading,
            loadingText,
            show
        }
    }
}
</script>

<style lang="less" scoped>
.module {
    .loading {
        padding: 20px;
        color: green;
    }

    .suspense {
        h2 {
            padding: 20px;
            color: purple;
        }
    }
}
</style>