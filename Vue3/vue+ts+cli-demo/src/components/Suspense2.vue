<template>
    <!-- 异步组件<suspense></suspense>：https://v3.cn.vuejs.org/guide/migration/suspense.html -->
    <section class="suspense">
        <el-image
            :src="result && result?.imgUrl"
            fits="contain"
            :preview-src-list="[result.imgUrl]"
            :initial-index="1"
        ></el-image>
    </section>
</template>

<script lang="ts">

import { defineComponent, ref } from "vue-demi";
import axios from 'axios';

export default {
    async setup(props: any) {

        const res = await axios.get('https://apiblog.jspang.com/default/getGirl');

        console.log(res.data);

        return { result: res.data }; // 注：这里需要返回的是一个Promise对象！！！
    }
}
</script>

<style lang="less" scoped>
.suspense {
    text-align: left;
    font-size: 16px;
}
</style>