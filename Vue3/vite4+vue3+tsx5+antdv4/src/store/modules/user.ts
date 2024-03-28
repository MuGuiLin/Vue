export { storeToRefs } from 'pinia';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('__USER__', {
    state() {
        return {
            name: '沐枫',
            lang: 'zh',
            age: 32,
            list: [1, 2, 3, 4, 5, 6]
        }
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: '__USER__',   // 存储状态的 key
                storage: window.localStorage,   // 默认 window.sessionStorage
                paths: [
                    'lang', 'name', 'age'   // 指定要存储的状态名 (前后不能有空格，必需和上面state中声明的一样！！)
                ]
            }
        ]
    },

    getters: {
        // 监听计算值
        changeAge(store) {
            console.log(store)
            return this.age - 10;
        }
    },

    actions: {
        addAge(val) {
            this.age += val;
        },

        async login(val) {
            return new Promise((resolve, reject) => {
                if (1) {
                    resolve(1);
                } else {
                    reject();
                }
            });
        }
    },

});


export default useUserStore;