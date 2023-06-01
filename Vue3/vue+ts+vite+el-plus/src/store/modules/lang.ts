import { defineStore } from "pinia";

export default defineStore("lang", {
    state() {
        return {
            lang: "zh",
        };
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: "__LANG__", // 存储状态的 key
                storage: window.localStorage, // 默认 window.sessionStorage
                // paths: [
                //     "lang", // 指定要存储的状态名 (前后不能有空格，必需和上面state中声明的一样！！)
                // ],
            },
        ],
    },
    // getters: {},
    // actions: {}
});

