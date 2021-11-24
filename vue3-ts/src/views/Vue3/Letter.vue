<template>
    <div class="letter">
        <h1>组件通信</h1>

        <div class="vue3">
            <h1>Vue 3 的三种语法</h1>
            <hr />
            <h4>1、Option API</h4>这个不多赘述了，会写vue的都会，这就是vue2 大家最常用的 选项式API。
            <h4>2、Composition API</h4>
            <pre>
            组合式API，也就是Vue3诞生以来，最为人津津乐道的语法更新，也是下面script setup 语法糖的基础。
            export default defineComponent({
                setup() {
                    return {}
                }
            });
            </pre>

            <h4>3、script setup（Composition API 的语法糖 Vue3.2新增的）</h4>&lt;script lang="ts" setup&gt; 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。相比于普通的 &lt;script&gt; 语法，它具有更多优势：
            <br />* 更少的样板内容，更简洁的代码。
            <br />* 能够使用纯 Typescript 声明 props 和抛出事件。
            <br />* 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
            <br />* 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。
        </div>

        <!-- <el-scrollbar height="200px">
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
        </el-scrollbar>-->
        <h1>父组件：{{ count }}</h1>
        <el-button type="success" @click="updateSon">修改子组件的值</el-button>
        
        <script-setup ref="sonRef" :count="count" @update="updateCount" />
        <script-setup2 ref="sonRef2" :count="count" @update="updateCount" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, toRefs } from 'vue';
import ScriptSetup from '@/components/ScriptSetup.vue';
import ScriptSetup2 from '@/components/ScriptSetup2.vue';
export default defineComponent({
    name: 'Letter',
    components: {
        ScriptSetup,
        ScriptSetup2
    },

    setup() {

        const data = reactive({
            count: 99,
            updateCount: (val: number) => {
                data.count = val;
            }
        });

        const sonRef = ref();
        const sonRef2 = ref();

        const updateSon = () => {
            // sonRef.value.chingeTitle(666);
            sonRef2.value.chingeTitle(Math.random());


        };

        onMounted(() => {
            console.log('sonRef------------>：', sonRef.value);
            console.log('sonRef2------------>：', sonRef2.value.title);
        });

        return {
            ...toRefs(data),
            sonRef,
            sonRef2,
            updateSon
        }
    }
})
</script>

<style lang="less" scoped>
.letter {
    .vue3 {
        padding: 30px;
        line-height: 36px;
        font-size: 16px;
        text-align: left;
    }
}
</style>