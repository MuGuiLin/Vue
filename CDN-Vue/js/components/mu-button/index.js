import { defineComponent, ref, computed } from '../../package/vue.esm-browser.js';
// import "./style.css";

export default defineComponent({
    name: 'mu-button',
    template: `
    <button :class="classs" :type="type" :disabled="disabled" @click="click"><slot>按扭</slot></button>、
    <button :class="classs" :type="type" :disabled="disabled" @click="click2"><slot>按扭</slot></button>
    `,
    props: {
        type: String,
        click: Function,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, ctx) {
        console.log(1, props, ctx);

        const num = ref(0);

        const click = ({ target }) => {
            console.log(target.value);
            ctx.emit('click', target.value);
        };

        const click2 = ({ target }) => {
            console.log(target.value);
            props.click(target.value)
        };

        const classs = computed(() => {
            return {
                [`btn-type-${props.type}`]: true,
                [`is-disabled`]: props.disabled,
            }
        });

        return {
            click,
            click2,
            classs
        };
    }
});