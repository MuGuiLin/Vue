import { defineComponent, ref } from '../package/vue.esm-browser.js';

export default defineComponent({
    name: 'mu-input',
    template: `
    <label>{{label}}：<input :type="type" v-model="value" @input="input" /></label>
    <label>{{label}}：<input :type="type" v-model="value" @input="input2" /></label>
    `,
    props: {
        label: {
            type: String,
            default: '标题'
        },
        type: String,
        // value: {
        //     type: Number | String,
        //     default: 0
        // }
        value: Number | String,
        input: Function
    },
    setup(props, ctx) {
        console.log(1, props, ctx);

        const num = ref(0);

        const input = ({ target }) => {
            console.log(target.value);
            ctx.emit('input', target.value);
        };

        const input2 = ({ target }) => {
            console.log(target.value);
            props.input(target.value)
        };

        return {
            num,
            input,
            input2
        };
    }
});