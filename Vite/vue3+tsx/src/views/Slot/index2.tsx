import { defineComponent, reactive } from 'vue';
import TsxSlot from '@/components/Slot/Slot'

import style from './tsx.module.less'

export default defineComponent({
    name: 'TsxSolt',
    setup(props, ctx) {

        const slots = {
            default: (mupiao: any) => {
                console.log(mupiao);
                return <>
                    <var>简间来说：就是在插槽没有指定name属性，或name属性为：name="default"）</var>
                    <pre>接收插槽传来的数据：{JSON.stringify(mupiao)}，{mupiao.data1}, {mupiao.data2}</pre>
                </>
            },
            juming: () => {
                return <>
                    <h3>具名插槽内容</h3>
                    <b>简间来说：就是根据指定name属性来表示插槽的名字，不传为默认插槽！</b>
                </>
            },
            zuoyongyu: (mupiao: any) => {
                console.log('作用域插槽：', mupiao);

                return <>
                    <h3>作用域插槽内容</h3>
                    <b>简间来说：就是根据指定name属性来表示插槽的名字，并且还带数据、参数的插槽！</b>
                    <pre>接收插槽传来的数据：{JSON.stringify(mupiao)}</pre>
                    <h1>{mupiao.first}</h1>
                    <button onClick={mupiao.change}>点我触发插槽传来方法 <b>数量增加</b></button>
                    <button onClick={mupiao.sort}>点我触发插槽传来方法 <b>数组排序</b></button>
                    <ul>
                        {mupiao.arr.map((o: any, i: number) => {
                            return <li key={i}>{i}、姓名：{o.name}，年龄：{o.age}， 性别：{o.six}</li>;
                        })}
                    </ul>
                </>
            }
        };

        return () => {
            return <article class={style.article}>
                <h1>.tsx插槽</h1>
                <TsxSlot v-slots={slots}></TsxSlot>;
            </article>
        };
    },
});