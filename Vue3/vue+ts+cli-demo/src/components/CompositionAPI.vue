<template>
    <div class="son">
        <h1>
            {{ title }}子组件：{{ count }}，
            <b :style="{ 'color': data.color }">{{ data.text }}</b>
            ，{{ data.date }}
        </h1>
        <el-button type="success" @click="update">修改父组件的值</el-button>
        <el-button type="success" @click="chingeTitle('red')">修改自己组件的值</el-button>
    </div>
</template>

<script lang="ts" >
import { defineComponent, defineEmits, onMounted, useSlots, useAttrs, ref, reactive, toRef, toRefs } from 'vue'
export default defineComponent({
    props: {
        count: {
            type: Number,
            default: 1,
            required: true
        }
    },
    // setup(props: any, { attrs, slots, emit, expose }) {
    setup(props, context) {
        /**
         * 使用 setup() 函数时，它将接收两个参数：
         *  1、props
         *  2、context
         * 
         *  注：在 setup() 函数内部 不能用this，因为 setup() 是在解析其它组件选项之前被调用的，所以 setup() 内部的 this 的行为与其它选项中的 this 完全不同。这使得 setup() 在和其它选项式 API 一起使用时可能会导致混淆。
         * 
         *  由于：setup() 函数是围绕 beforeCreate() 和 created() 生命周期钩子运行的，所以不需要显式地定义它们。
         *  换句话说，要在beforeCreate() 和 created()这些钩子中编写的所以任何代码，都应该直接在 setup 函数中编写。
         */


        /**
         * setup() 函数中的第一个参数是 props
         * props 是响应式的，当传入新的 prop 时，它将被更新，但是 不能使用 ES6 解构，这样它会消除 prop 的响应性。
         */
        console.log('props------------->：', props);

        // 如果需要解构 prop 可用 toRefs 函数来完成
        // const { count } = props;
        // console.log(count);

        const { count } = toRefs(props);
        console.log('toRefs--->', count.value);

        // 注：如果 count 是可选的 prop，则传入的 props 中可能没有 count.value，toRefs 将不会为 count 创建一个 ref 。你需要使用 toRef 替代 value，toRefs
        const count2 = toRef(props, 'count');
        console.log('toRef--->', count2.value);


        /**
         * setup() 函数中的第二个参数是 context
         * context 是一个普通的 JavaScript 对象，也就是说，它不是响应式的，这意味着你可以安全地对 context 使用 ES6 解构。
         * 注：执行 setup 时，组件实例尚未被创建。因此，你只能访问：attrs, slots, emit, expose。
         */
        // Attribute (非响应式对象，等同于 $attrs)
        console.log(context.attrs)

        // 插槽 (非响应式对象，等同于 $slots)
        console.log(context.slots)

        // 触发事件 (方法，等同于 $emit)
        console.log(context.emit)

        // 暴露公共 property (函数)
        console.log(context.expose);



        onMounted(() => {
            console.log('OK DOM渲染完成！！')
        });

        const update = () => {
            // console.log(toRefs(props, 'count'));
            console.log('调用父组件传过来的update方法，并传值回去：', props)

            // const emits = defineEmits(['update']);

            // 调用父组件传过来的update方法，并传值回去。

            // emits('update', props.count + 1); 
            context.emit('update', props.count + 1);
        };

        const title = ref('我是Composition API')

        const data = reactive({
            text: '666',
            date: '2021-11-23',
            color: ''
        });

        const chingeTitle = (color: string, par?: string) => {
            console.log(par);
            data.text = par || '' + Math.random();
            data.color = color;
        };

        // 当想要将这个组件的方法通过模板 ref 暴露给父组件时，可以通过调用 expose 来解决这个问题，此时在父组件的模板中通过 ref 来访问
        // context.expose({
        //     title,
        //     data,
        //     chingeTitle
        // })

        return {
            // 从 setup 返回的 refs 在模板中访问时是被自动浅解包的，因此不应在模板中使用.value
            title,
            update,
            data,
            // ...toRefs(data),
            chingeTitle
        }
    }
});

</script>

<style lang="less" scoped>
.son {
    margin: 20px;
    padding: 30px;
    border: 1px solid #67c23a;
}
</style>