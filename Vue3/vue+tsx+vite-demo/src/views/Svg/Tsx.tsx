import { defineComponent, ref, reactive, unref } from 'vue';
import MuButton from '@/components/tsxcoms/MuButton';

import './style.less';

export default defineComponent({
    name: 'SvgTsx',
    props: {

    },
    setup(props, ctx) {
        let msg = ref('Hello Tsx！');

        const state: any = reactive({
            count: 1
        });

        function push() {
            state.count++;
        };

        return {
            msg,
            push,
            // ...unref(state) ！！！
            state,
        }
    },
    render() {
        console.log(this);
        const { push, state, count }: any = this;
        return <>
            <h1 class={['box', state.count === 3 ||　state.count === 5 ? 'active' : '']}>{this.msg}</h1>
            {/* <MuButton type='success' onClick={(event: any) => { this.count++ }}>点我试试：{this.count}</MuButton>
            <MuButton type='success' onClick={(event: any) => push()}>点我试试：{count}</MuButton> */}

            <MuButton type='success' onClick={(event: any) => { this.state.count++ }}>点我试试：{this.state.count}</MuButton>
            <MuButton type='success' onClick={(event: any) => push()}>点我试试：{state.count}</MuButton>
        </>
    }
});