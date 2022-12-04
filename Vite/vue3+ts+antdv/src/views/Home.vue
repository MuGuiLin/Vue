

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
    components: {},
    setup(props) {
        const options = [
            { label: 'Apple', value: '1' },
            { label: 'Pear', value: '2' },
            { label: 'Orange', value: '3', disabled: true },
            { label: 'Banana', value: '4' },
        ];

        const state = reactive({
            value: ['2', '3'],
        });

        const change = (e) => {
            console.log(e);
        };

        return {
            options,
            change,
            ...toRefs(state),
        };
    }
});
</script>

<template>
    <section>
        CheckboxGroup：<a-checkbox-group v-model:value="value" name="checkboxgroup1" :options="options" @change="change" />
        <br>
        CheckboxGroup：<a-checkbox-group v-model:value="value" name="checkboxgroup2" @change="change">
            <a-checkbox v-for="item in options"  :value="item.value" :disabled="item.disabled" >{{ item.label }}</a-checkbox>
        </a-checkbox-group>
    </section>
</template>

<style scoped lang="less">

</style>