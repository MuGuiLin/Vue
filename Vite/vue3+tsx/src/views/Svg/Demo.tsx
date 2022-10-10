import { defineComponent, ref, reactive } from 'vue';
import MuButton from '@/components/tsxcoms/MuButton';

export default defineComponent({
    name: 'SvgDemo',
    props: {

    },
    setup(props, ctx) {
        console.log(props, ctx);

        let msg = ref('Hello Demo！');

        const state = reactive({
            count: 0
        });

        function push() {
            state.count++;
        };

        function color() {
            const color = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
            return color[parseInt((Math.random() * 7).toString())];
        };

        return () => {
            return <>
                <h1 style={{ height: (state.count || 30) + 'px', color: color() }} >{msg.value} </h1>
                <MuButton type='primary' onClick={(event: any) => { state.count++ }}>点我试试：{state.count}</MuButton>
                <MuButton type='primary' onClick={(event: any) => push()}>点我试试：{state.count}</MuButton>
            </>
        };
    },
});