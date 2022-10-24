
import { createApp, ref, h } from "../js/package/vue.esm-browser.js";

const renderButton = {
    render: () => {
        return h(
            // 1. 要渲染的标签名称：第一个参数【必需】
            "button",
            // 2. 渲染标签的属性：第二个参数【可选】
            {
                style: {
                    color: "#333",
                    border: "1px solid #ccc",
                },
                class: "",
                id: "",
                ref: 'num',
                onClick: () => {
                    num.value++    // 改变ref定义的变量值需要使用.value , reactive不需要 
                },
            },
            // 3. 渲染标签的子元素数组：第三个参数【可选】
            [
                // "render函数文本" 文本内容可以直接写入
                h("p", num.value), // h()创建的VNodes
            ]
        );
    },
};

let num = ref(0);  // vue3中需要使用ref或reactive声明变量，否则无法实现双向数据绑定
const changeNum = () => {
    num.value++    // 改变ref定义的变量值需要使用.value , reactive不需要 
}

// 未使用setup语法糖时需要使用return，使用则无需return即可实现双向数据绑定
return {
    num,
    changeNum
}


