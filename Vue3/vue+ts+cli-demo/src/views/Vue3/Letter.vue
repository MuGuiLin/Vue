<template>
    <div class="letter">
        <h1>组件通信</h1>

        <div class="vue3">
            <h1>Vue 3 的三种语法 以及【3个方法：defineProps()、defineEmits()、defineExpose()】</h1>
            <hr />
            <h4>1、Option API</h4>这个不多赘述了，会写vue的都会，这就是vue2 大家最常用的 选项式API。
            <h4>2、Composition API</h4>
            <pre>
            组合式API，也就是Vue3诞生以来，最为人津津乐道的语法更新，也是下面script setup 语法糖的基础。
            export default defineComponent({
                setup() {
                    注：在 setup() 内部，this是无效的<b>this = undefined</b>，因为setup()是<b>在解析其它组件选项之前被调用</b>的，
                    所以 setup() 内部的 this 的行为与其它选项中的 this 完全不同。
                    这使得 setup() 在和其它选项式 API 一起使用时可能会导致混淆。

                    let name = ref('');
                    name.value = 'myName';

                    return {
                        // 要在template标签中使用的变量、涵数等，必需在这里返回去出!!!
                        name
                    }
                }
            });
            </pre>

            <h4>3、script setup（Composition API 的语法糖 Vue3.2新增的）</h4>&lt;script setup lang="ts" name="CompName"&gt; 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。相比于普通的 &lt;script&gt; 语法，它具有更多优势：
            <br />* 更少的样板内容，更简洁的代码（比如要用 defineProps(), defineEmits(), defineExpose() 等方法时无需引入，直接使用即可！！）。
            <br />* 能够使用纯 Typescript 声明 props 和抛出事件。
            <br />* 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
            <br />* 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。
        </div>

        <!-- <el-scrollbar height="200px">
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
        </el-scrollbar>-->
        <div class="box">
            <h1>我是父组件：{{ count }}</h1>
            <el-button type="warning" @click="updateSon">修改子组件的值</el-button>

            <CompositionAPI ref="compos" :count="count" @update="updateCount" />
            <br />
            <script-setup ref="script" :count="count" @update="updateCount" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, toRefs} from 'vue';

import CompositionAPI from '@/components/CompositionAPI.vue';
import ScriptSetup from '@/components/ScriptSetup.vue';

export default defineComponent({
    name: 'Letter',
    components: {
        CompositionAPI,
        ScriptSetup
    },

    setup() {
        const compos = ref();
        const script = ref();

        const data = reactive({
            count: 0,
            updateCount: (val: number) => {
                data.count = val;
            }
        });

        const updateSon = () => {
            compos.value.chingeTitle('green', Math.random());
            script.value.chingeTitle('blue', Math.random());

            console.log('compos------------>：', compos.value.title, 'data：', compos.value.data);
            console.log('script------------>：', script.value.title, 'data：', script.value.data);
        };

        onMounted(() => {
            console.log('compos------------>：', compos.value.title, 'data：', compos.value.data);
            console.log('script------------>：', script.value.title, 'data：', script.value.data); // 注: 如果子组是用script setup 时，需要用defineExpose({})将属性暴露出来，这里才能收到！！！
        });

        console.debug('this------------>：', this);

        return {
            ...toRefs(data),
            compos,
            script,
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
    .box {
        margin: 20px;
        padding: 30px;
        border: 1px solid #e6a23c;
    }
}
</style>