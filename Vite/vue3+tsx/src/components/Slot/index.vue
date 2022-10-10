<script setup lang="ts" >
import { ref, reactive } from 'vue';
const state = reactive<any>({
    first: 0,
    arr: [
        {
            name: '小明',
            age: 16,
            six: '男'
        },
        {
            name: '小红',
            age: 18,
            six: '女'
        },
        {
            name: '小强',
            age: 31,
            six: '男'
        },
        {
            name: '小英',
            age: 9,
            six: '女'
        },
    ],
});

state.change = () => {
    state.first++;
};

let type = true;
state.sort = () => {
    type = !type;

    state.arr.sort((a, b) => {
        if (type) {
            return a['age'] > b.age ? 1 : -1;
        } else {
            return a.age < b['age'] ? 1 : -1;
        }
    })
};
</script>

<template>
    <div>
        <!-- <dialog open>我是一个插槽组件</dialog> -->
        <slot>默认插槽1 <h3>【注：写在这个slot标签中的内容，如果引入的父组件里有内容(空标签也算)传过来，那么这里就会被覆盖掉，反之就显示这里的内容！！！】</h3>
        </slot>
        <slot name="default">默认插槽2 name="default" 可不用加</slot>

        <slot name="juming">具名插槽</slot>
        <slot name="zuoyongyu" v-bind:mupiao="state">作用域插槽</slot>
    </div>
</template>

<style scoped lang="less">
div {}
</style>