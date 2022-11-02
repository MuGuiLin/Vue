<template>
    <section class="watch">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>watch API 与选项式 API this.$watch (以及相应的 watch 选项) 完全等效。watch 需要侦听特定的数据源，并在单独的回调函数中执行副作用。默认情况下，它也是惰性的——即回调仅在侦听源发生变化时被调用。</span>
                    <el-button class="button" size="mini" type="warning">{{ title }}</el-button>
                </div>
                <h1>最终选择：{{ overText }}</h1>
            </template>
            <div class="text item">
                <el-button
                    type="success"
                    v-for="(o, i) in fruit"
                    :key="i"
                    @click="select(i)"
                >{{ o.name }} => {{ o.num }}</el-button>
                <el-button type="primary" @click="overClick">完成选择</el-button>
            </div>
        </el-card>
    </section>
</template>

<script lang="ts">

import { defineComponent, ref, reactive, toRefs, watch } from 'vue-demi';  // vue-demi是一个可以开发同时支持Vue2和3的通用的Vue库的开发工具

interface DataProps {
    title: string;
    fruit: any;
    select: (index: number) => void;
}
export default {
// export default defineComponent({
    name: 'Watch',
    setup() {
        const overText = ref<string | number>('');
        const overClick = () => {
            overText.value = data.title
        };

        const data: DataProps = reactive({
            title: '',
            fruit: [{ name: 'Apple', sum: 10 }, { name: 'Banana', num: 40 }, { name: 'Pear', num: 20 }, { name: 'Orange', num: 30 }],
            select: (index: number) => {
                data.title = data.fruit[index].name;
            }
        });

        // 侦听单一源（数据源可以是一个具有返回值的 reactive 函数，也可以直接是一个 ref：）
        // watch(overText, (newVal, oldVal) => {
        //     console.log('修改前：', newVal);
        //     console.log('修改后：', oldVal);
        //     document.title = newVal;
        // });

        // 侦听多个源（可以使用数组以同时侦听多个源）
        // watch([overText, () => data.title], (count, prevCount) => {
        //     console.log('旧：', count[1], '新：', prevCount[1]);
        //     document.title = count[0];
        watch([overText, () => data.title], ([overNew, titleNew], [prevOver, prevTitle]) => {
            console.log('旧：', prevOver, '新：', overNew);
            console.log('旧：', prevTitle, '新：', titleNew);
            document.title = titleNew;
        });


        return {
            overText,
            overClick,
            ...toRefs(data)
        };
    }
    // });
};
</script>

<style lang="less" scoped>
.watch {
}
</style>