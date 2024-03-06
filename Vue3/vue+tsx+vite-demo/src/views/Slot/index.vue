<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Slot from '@/components/Slot/index'
import TsxSlot from '@/components/Slot/Slot'
</script>

<template>
    <article>
        <h1> This is a Slot page </h1>

        <h2>xxx.vue 的插槽</h2>

        <Slot v-slot="slotProps">
            <h3>默认插槽内容</h3>
            <var>简间来说：就是在插槽没有指定name属性，或name属性为：name="default"）</var>
            <pre>接收插槽传来的数据： {{ slotProps.data1 }}, {{ slotProps.data2 }}</pre>
        </Slot>

        <Slot>
            <template v-slot="slotProps">
                <h3>默认插槽内容</h3>
                <var>简间来说：就是在插槽没有指定name属性，或name属性为：name="default"）</var>
                <pre>接收插槽传来的数据： {{ slotProps.data1 }}, {{ slotProps.data2 }}</pre>
            </template>

            <!-- <template v-slot:juming> -->
            <template #juming>
                <!-- 使用缩写 -->

                <h3>具名插槽内容</h3>
                <b>简间来说：就是根据指定name属性来表示插槽的名字，不传为默认插槽！</b>
                <!-- <pre>接收插槽传来的数据：{{mupiao}}</pre> -->
            </template>

            <!-- <template v-slot:zuoyongyu="{mupiao}"> -->
            <template #zuoyongyu="{mupiao}">
                <h3>作用域插槽内容</h3>
                <b>简间来说：就是根据指定name属性来表示插槽的名字，并且还带数据、参数的插槽！</b>
                <pre>接收插槽传来的数据：{{mupiao}}</pre>
                <h1>{{mupiao.first}}</h1>
                <button @click="mupiao.change">点我触发插槽传来方法 <b>数量增加</b></button>
                <button @click="mupiao.sort">点我触发插槽传来方法 <b>数组排序</b></button>
                <ul>
                    <li v-for="(o, i) in mupiao.arr" :key="i">{{i}}、姓名：{{o.name}}，年龄：{{o.age}}， 性别：{{o.six}}</li>
                </ul>
            </template>
        </Slot>



        <br><br><br>
        <h2>xxx.tsx 的插槽</h2>
        <TsxSlot v-slot="mupiao">
            <h3>默认插槽内容</h3>
            <pre>接收插槽传来的数据： {{ mupiao.data1 }}, {{ mupiao.data2 }}</pre>
        </TsxSlot>
        <TsxSlot>
            <h3>默认插槽内容</h3>
            <var>简间来说：就是在插槽没有指定name属性，或name属性为：name="default"）</var>

            <!-- <template v-slot:juming> -->
            <template #juming>
                <!-- 使用缩写 -->

                <h3>具名插槽内容</h3>
                <b>简间来说：就是根据指定name属性来表示插槽的名字，不传为默认插槽！</b>
            </template>

            <template v-slot:zuoyongyu="mupiao">
                <h3>作用域插槽内容</h3>
                <b>简间来说：就是根据指定name属性来表示插槽的名字，并且还带数据、参数的插槽！</b>
                <pre>接收插槽传来的数据：{{mupiao}}</pre>
                <h1>{{mupiao.first}}</h1>
                <button @click="mupiao.change">点我触发插槽传来方法 <b>数量增加</b></button>
                <button @click="mupiao.sort">点我触发插槽传来方法 <b>数组排序</b></button>
                <ul>
                    <li v-for="(o, i) in mupiao.arr" :key="i">{{i}}、姓名：{{o.name}}，年龄：{{o.age}}， 性别：{{o.six}}</li>
                </ul>
            </template>
        </TsxSlot>

    </article>
</template>

<style scoped lang="less">
article {
    h2 {
        margin-top: 20px;
        color: white;
        line-height: 50px;
        border-bottom: 2px solid white;
    }

    h3 {
        margin-top: 20px;
        color: #08d308
    }

    button b {
        color: rgb(226, 43, 180)
    }
}
</style>
    