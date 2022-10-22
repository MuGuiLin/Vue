import { defineComponent } from '../package/vue.esm-browser.js';

export default defineComponent({
    name: 'mu-input',
    template: `<input type="text" v-model="value" @input="input" />`,
    props: {
        // value: {
        //     type: Number | String,
        //     default: 0
        // }
        // value: Number | String,
    },
    setup(props, ctx) {
        console.log(1, props, ctx)

        const input = (e) => {
            console.log(e);
            // ctx.emit('input', e);
        }
        return{
            input
        }
    }
});