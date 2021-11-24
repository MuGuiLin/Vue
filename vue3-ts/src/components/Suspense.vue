<template>
    <!-- 异步组件<suspense></suspense>：https://v3.cn.vuejs.org/guide/migration/suspense.html -->
    <section class="suspense">
        <el-collapse accordion>
            <el-collapse-item
                v-for="(item, index) in data"
                :key="index"
                title="Vue3异步组件 >>"
                :name="index + 1"
            >
                <h3>{{ item }}：生产环境请勿使用。</h3>
                <div>Suspense 是一个试验性的新特性，其 API 可能随时会发生变动。特此声明，以便社区能够为当前的实现提供反馈。</div>
            </el-collapse-item>
        </el-collapse>
    </section>
</template>

<script lang="ts">
export default {
    setup(props: any) {

        const data = new Promise((resolve, reject) => {

            setTimeout(() => {
                Math.random() < 0.5 ? resolve({ code: 200, data: [1, 2, 3, 4, 5, 6] }) : reject({ code: 404, data: '啊偶：随机数据小于0.5了！' });
            }, 3000);
        });

        console.log(data);

        return data; // 注：这里需要返回的是一个Promise对象！！！
    }
}
</script>

<style lang="less" scoped>
.suspense {
    text-align: left;
    font-size: 16px;
}
</style>