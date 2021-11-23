<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>ref() 单个值 返回一个响应式且可变的 ref 对象 const count = ref(0); count.value++; </span>
                <el-button class="button" type="text">{{ title }}</el-button>
            </div>
        </template>
        <div class="text item">
            <el-button
                type="success"
                v-for="(o, i) in fruit"
                :key="i"
                @click="select(i)"
            >{{ i }} => {{ o }}</el-button>
        </div>
    </el-card>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>reactive() 多个值 返回对象的响应式副本 const obj = reactive({ count: 0 }); obj.count++ </span>
                <el-button class="button" type="text">{{ data.title }}</el-button>
            </div>
        </template>
        <div class="text item">
             <el-button
                type="success"
                v-for="(o, i) in data.fruit"
                :key="i"
                @click="data.select(i)"
            >{{ i }} => {{ o }}</el-button>
        </div>
    </el-card>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, reactive } from 'vue'

interface DataProps {
    title: string;
    fruit: string[];
    select: (index: number) => void;
}
export default defineComponent({
    name: 'Setup',
    props: {

    },

    /**
     * 使用 setup 函数时，它将接收两个参数：props, context
     *  1、setup 函数中的第一个参数是 props。正如在一个标准组件中所期望的那样，setup 函数中的 props 是响应式的，当传入新的 prop 时，它将被更新。
     *  2、context 是一个普通的 JavaScript 对象，也就是说，它不是响应式的，这意味着你可以安全地对 context 使用 ES6 解构。
     * 
     * 注意：在执行 setup 时，组件实例尚未被创建。因此，你只能访问以下 property：
        props
        attrs
        slots
        emit
        换句话说，你将无法访问以下组件选项：
        data
        computed
        methods
        refs (模板 ref)
     * */

    setup(props, context) {
        // setup(props, { attrs, slots, emit, expose }) {

        // Attribute (非响应式对象，等同于 $attrs)
        console.log(context.attrs)

        // 插槽 (非响应式对象，等同于 $slots)
        console.log(context.slots)

        // 触发事件 (方法，等同于 $emit)
        console.log(context.emit)

        // 暴露公共 property (函数)
        console.log(context.expose)

        // 单个值 响应式API：ref, unef, toRef, toRefs, isRef, customRef, shallowRef, triggerRef, Computed, watch, Effect
        const title = ref<string | number>('');
        const fruit = ref(['Apple', 'Banana', 'Pear', 'Orange']);
        const select = (index: number) => {
            title.value = fruit.value[index];
        };


        // 多个值(深层次) 响应性基础 API: reactive, readonly, isProxy, isReactive, isReadonly, toRaw, markRaw, shallowReactive, shallowReadonly
        const data: DataProps = reactive({
            title: '',
            fruit: ['Apple', 'Banana', 'Pear', 'Orange'],
            select: (index: number) => {
                data.title = data.fruit[index];
            }
        });

        // const data2: DataProps = reactive({
        //     title2: '',
        //     fruit2: ['apple', 'banana', 'pear', 'orange'],
        //     select2: (index: number) => {
        //         data2.title2 = data2.fruit2[index];
        //     }
        // });

        return {
     
            // title,
            // fruit,
            // select,

            data,
            // 解构输出toRefs
            ...toRefs(data),  // 解构这里和上面的title，fruit，select功能效果一样
        }
    },
})
</script>

<style lang="less" scoped>
</style>