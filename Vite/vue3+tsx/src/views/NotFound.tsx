import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
    name: '404',
    props: {
    },
    setup(props) {
        const msg = ref('Hello tsx！');
        const state = reactive({
            count: 1
        });
        return {
            msg,
            state
        }
        // return () => {
        //     console.log(666);
        //     return <h1>
        //         {msg.value} <button onClick={(event) => { state.count++ }}>{state.count}</button>
        //     </h1>
        // }
    },
    render() {
        console.log(this);
        const { msg, state } = this;
        return <h1>
            {msg} <button onClick={(event) => { state.count++ }}>{state.count}</button>
        </h1>
    }
});