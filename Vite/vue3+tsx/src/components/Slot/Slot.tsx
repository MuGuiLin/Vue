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

            state.arr.sort((a: { [x: string]: number; age: number; }, b: { [x: string]: number; age: number; }) => {
                if (type) {
                    return a['age'] > b.age ? 1 : -1;
                } else {
                    return a.age < b['age'] ? 1 : -1;
                }
            })
        };

        return () => {
            console.log('tsx插槽：', ctx.slots);

            /**
             * 在.tsx插槽中，其实就是在子组件中去执行父组件传递进来的函数，如果要传参数只需要把参数放在函数中返回去就OK了。
             */

            return <div>
                {/* 默认插槽出口 */}
                {ctx.slots.default && ctx.slots.default({ data1: "我是.tsx默认插槽出口传来的数据666", data2: state.arr[0] })}

                {/* 具名插槽出口 */}
                {ctx.slots.juming && ctx.slots.juming()}

                {/* 作用域插槽出口 */}
                {ctx.slots.zuoyongyu && ctx.slots.zuoyongyu(state)}

            </div>
        }
    },
})