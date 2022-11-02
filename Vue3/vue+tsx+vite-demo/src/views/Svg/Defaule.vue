
<script setup lang="ts" name="SvgDefaule">
import { ref, reactive } from 'vue'
import MuButton from '@/components/tsxcoms/MuButton'

let msg = ref('Hello Defaule！');

const state = reactive({
    count: 0
});

function push() {
    state.count++;
};

</script>

<template>
    <h1 class="box" :class="{active: state.count === 2 ||　state.count === 5}">{{msg}} </h1>
    <mu-button @click="push">我是一个按扭 {{state.count}}</mu-button>
</template>

<style scoped lang="less">
.active {
    color: red;
    font-size: 26px;
}
</style>