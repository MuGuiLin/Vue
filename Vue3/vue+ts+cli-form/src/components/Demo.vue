<!-- 基础用法 -->
<!-- <script lang="ts">
export default {
    props: {
        title: {
            type: String,
            default: _ => { return '标题666！' }
        },
        name:  {
            type: String,
            default: 'Vite'
        },
    },

    setup(props, context) {
        console.log(props);
        console.log(props.title)
        
        console.log('属性对象(非响应式)', context.attrs);
        console.log('插槽(非响应式对象)', context.slots);

        console.log('触发事件', context.emit);
    }
}
</script> -->

<!-- 高级用法 -->
<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        default: _ => { return '标题666！' }
    },
    name: {
        type: String,
        default: '【我是子组件】'
    },
});
console.log(props);

const emit = defineEmits([]);
const mupiao = () => {
    let random = Math.random() * 1000
    emit('mu-click', random);
}

const printJob = (par: any) => {
    console.log('我在父组件中被调用了：', par);
}

// 向父组件暴露数据
defineExpose({
    name: props.name,
    age:30,
    printJob
});
</script>

<template>
    <h1>{{ title }}</h1>
    <button @click="mupiao">调用父组件的方法 {{ name }}</button>
</template>

<style scoped>
h1 {
    color: green;
}
</style>