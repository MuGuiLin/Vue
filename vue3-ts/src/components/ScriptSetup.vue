<template>
    <h1>子组件：{{ count }}, {{ data.text }}</h1>
    <el-button type="success" @click="update">修改父组件的值</el-button>
    <el-button type="success" @click="chingeTitle('')">修改自己组件的值</el-button>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, defineEmits, onMounted, useSlots, useAttrs, reactive, } from 'vue'
const props = withDefaults(
    // defineProps 声明的不足之处在于它没有可以给 props 提供默认值的方式， 为了解决这个问题，提供了 withDefaults 编译器宏
    defineProps<{
        count?: number
    }>(), {
    // 设置props默认值
    count: 1
});

const emits = defineEmits(['update']);

onMounted(() => {
    const slots = useSlots();
    // console.log('slots', slots);

    const attrs = useAttrs();
    // console.log('attrs：', attrs);

    console.log('props：', props);
});

const update = () => {
    // 调用父组件传过来的update方法，并传值回去。
    emits('update', props.count + 1);
};


const data = reactive({
    text: '',
    date: '2021-11-23',
});

const chingeTitle = (par?: string) => {
    console.log(par);
    data.text = par || '' + Math.random();
};

</script>

<style lang="less" scoped>
</style>