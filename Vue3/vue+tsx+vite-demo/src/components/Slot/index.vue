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

    state.arr.sort((a: { [x: string]: number; age: number; }, b: { [x: string]: number; age: number; }) => {
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
        <slot data1="我是默认插槽出口传来的数据666" :data2="state.arr[0]">默认插槽出口1 <h3>【注：写在这个slot标签中的内容，如果引入的父组件里有内容(空标签也算)传过来，那么这里就会被覆盖掉，反之就显示这里的内容！！！】</h3></slot>
        <slot name="default">默认插槽出口2 name="default" 可不用加（注：和上面二选一！！）</slot>

        <slot name="juming" :mupiao="state.arr">具名插槽出口</slot>
        <slot name="zuoyongyu" v-bind:mupiao="state">作用域插槽出口</slot>
    </div>
</template>

<style scoped lang="less">
div {}
</style>