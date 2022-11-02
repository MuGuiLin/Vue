<template>
    <div class="son">
        <h1>
            {{ title }}子组件：{{ count }}，
            <b :style="{ 'color': data.color }">{{ data.text }}</b>
            ，{{ data.date }}
        </h1>
        <el-button type="primary" @click="update">修改父组件的值</el-button>
        <el-button type="primary" @click="chingeTitle('red')">修改自己组件的值</el-button>
    </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, defineEmits, defineExpose, onMounted, useSlots, useAttrs, ref, reactive, } from 'vue';
// import mitt from 'mitt';

// 非ts专有声明
// const props = defineProps({
//     count: {
//         type: Number,
//         default: 0.1,
//         required: true
//     }
// })

// ts专有声明，无默认值
const props = withDefaults(
    // defineProps 声明的不足之处在于它没有可以给 props 提供默认值的方式， 为了解决这个问题，提供了 withDefaults 编译器宏来设置默认值
    defineProps<{
        count?: number,
        required: true
    }>(), {
    // 设置props默认值
    count: 1
});

// 非ts专有
// const emits = defineEmits(['update']);

// ts专有
const emits = defineEmits<{
    (e: 'update', count: number): void
}>();

onMounted(() => {
    const attrs = useAttrs();
    // console.log('attrs：', attrs);

    const slots = useSlots();
    // console.log('slots', slots);

    console.log('props：', props);
});

const update = () => {
    // 调用父组件传过来的update方法，并传值回去。
    console.log('调用父组件传过来的update方法，并传值回去：', props);
    emits('update', props.count + 1);
};

let title = ref('我是<script lang="ts" setup>');

const data = reactive({
    text: '888',
    date: '2021-12-25',
    color: ''
});

const chingeTitle = (color: string, par?: string,) => {
    title.value = '自己是';
    data.text = par || '' + Math.random();
    data.color = color;

};

// 注：用script setup 时，如果要在父组件中获取sonRef.value.xxx, 这里一定要将xxx属性暴露出去！！！
defineExpose({
    title,
    data,
    chingeTitle
});

</script>

<style lang="less" scoped>
.son {
    margin: 20px;
    padding: 30px;
    border: 1px solid #409eff;
}
</style>