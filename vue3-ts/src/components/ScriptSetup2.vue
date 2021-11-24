<template>
    <div>
        <h1>{{title}}子组件：{{ count }}, {{ text }}</h1>
        <el-button type="success" @click="update">修改父组件的值</el-button>
        <el-button type="success" @click="chingeTitle('')">修改自己组件的值</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineEmits, onMounted, useSlots, useAttrs, ref, reactive, toRefs } from 'vue'
export default defineComponent({
    props: {
        count: {
            type: Number,
            default: 1
        }, 
        update: {
            type: Object
        }
    },
    setup(props: any) {
        const emits = defineEmits(['update']);

        onMounted(() => {
            const slots = useSlots();
            // console.log('slots', slots);

            const attrs = useAttrs();
            // console.log('attrs：', attrs);

        });

        const update = () => {
            // 调用父组件传过来的update方法，并传值回去。
            console.log(props)
            // props.update( props.count + 1);
            emits('update', props.count + 1);
        };

        const title = ref('我是')

        const data = reactive({
            text: '',
            date: '2021-11-23',
        });

        const chingeTitle = (par?: string) => {
            console.log(par);
            data.text = par || '' + Math.random();
        };

        return {
            title,
            update,
            ...toRefs(data),
            chingeTitle
        }
    }
});

</script>

<style lang="less" scoped>
</style>