import axios from 'axios';
import { Dialog } from "@nutui/nutui";
import store from '../stores';

Dialog({
    content: "OK 666",
});
const http = axios.create({
    // 在请求地址前面加上baseURL
    baseURL: import.meta.env.VITE_BASE_API as string,

    // 当发送跨域请求时携带cookie
    // withCredentials: true,

    timeout: 10000,
});

// 请求拦截
http.interceptors.request.use(
    (config) => {
        // 指定请求令牌
        // if(store.getters.token) {
        //     // mu-token 是自定义的，和后台一至。
        //     config.headers["mu-token"] = store.getters.token;
        // }
        return config;
    },
    (error) => {
        // 请求错误的统一处理
        console.log(error);
        return Promise.reject(error);
    }
);

// 响应拦截
http.interceptors.response.use(
    /**
    * 通过判断状态码统一处理响应，根据情况修改
    * 同时也可以通过HTTP状态码判断请求结果
    */
    (response) => {
        return response.data;
        const res = response.data;

        // 如果状态码不是200则认为有错误
        if (res.code !== 200) {
            Dialog({
                content: res.message,
            });

            // -1: 非法令牌; -2: 其他客户端已登入; -3: 令牌过期;
            if (res.code === -1 || res.code === -2 || res.code === -3) {
                // 重新登录
                Dialog({
                    content: "您已登出, 请重新登录！",
                });
                // Dialog.confirm({
                //     title: '标题',
                //     message: "您已登出, 请重新登录！",
                //     confirmButtonText: "重登",
                //     cancelButtonText: "取消",
                // }).then(() => {
                //     store.dispatch("user/resetToken").then(() => {
                //         location.reload();
                //     });
                // });
            }
            return Promise.reject(new Error(res.message || "Error"));
        } else {
            return res;
        }
    },
    (error) => {
        console.log("err" + error);
        // Dialog.alert({
        //     allowHtml: true,
        //     message: `<img src="${warning}" />\n${error.message}！`,
        //     theme: "round-button",
        //     confirmButtonText: "知道啦",
        // }).then(() => {
        //     // on close
        // });
        Dialog({
            content: error.message,
        });
        return Promise.reject(error);
    }
);

export default http;
