import { defineComponent, reactive } from 'vue';

export default defineComponent({
    name: 'TsxSolt',
    setup(props, ctx) {

        const state = reactive<any>({
            first: 0,
            arr: [
                {
                    name: '小明',
                    age: 16,
                    six: '男'
                },
                {
                    name: '小红',
                    age: 18,
                    six: '女'
                },
                {
                    name: '小强',
                    age: 31,
                    six: '男'
                },
                {
                    name: '小英',
                    age: 9,
                    six: '女'
                },
            ],
        });

        state.change = () => {
            state.first++;
        };

        let type = true;
        state.sort = () => {
            type = !type;

            state.arr.sort((a, b) => {
                if (type) {
                    return a['age'] > b.age ? 1 : -1;
                } else {
                    return a.age < b['age'] ? 1 : -1;
                }
            })
        };

        return () => {
            console.log('tsx插槽：', ctx.slots);

            return <div>
                {/* 默认插槽 */}
                {ctx.slots.default && ctx.slots.default()}

                {/* 具名插槽 */}
                {ctx.slots.juming && ctx.slots.juming()}

                {/* 作用域插槽 */}
                {ctx.slots.zuoyongyu && ctx.slots.zuoyongyu(state)}

            </div>
        }
    },
})