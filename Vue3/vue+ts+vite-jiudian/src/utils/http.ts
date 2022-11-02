import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Notify } from '@nutui/nutui';
import axios from "axios";
import qs from "qs";
import env from "~/configs/env.config";
import { PiniaStore } from "@/stores/modules/user";
import { ContentTypeEnum } from "@/enums/httpEnum";

const http = axios.create({
    baseURL: env.__URL__ + env.__API__VERSION,
    timeout: 60 * 1000,
    withCredentials: true,
});

http.interceptors.request.use(
    (cfg: AxiosRequestConfig | any) => {
        const { token } = PiniaStore();
        if (token) {
            cfg.headers['Authorization'] = token;
        }
        if (cfg.headers && cfg.headers?.["Content-Type"] === ContentTypeEnum.FORM_URLENCODED) {
            cfg.data = qs.stringify(cfg.data, {
                arrayFormat: "brackets",
            });
        }
        return cfg;
    }, (err: AxiosError) => {
        return Promise.reject(err);
    }
);

http.interceptors.response.use(
    (res: AxiosResponse<any>) => {
        if (res.status === 200) {
            if (200 !== res.data?.code) {
                Notify.warn(res.data?.message);
            }
            return Promise.resolve(res.data);
        } else {
            Notify.warn(res.data?.message);
            return Promise.reject(res);
        }
    }, (err: AxiosError | any) => {
        if (401 === err.response.status) {
            localStorage.clear();
            Notify.warn(err.response.statusText);
            location.reload();
        } else {
            Notify.warn('网络异常，请稍后再试！');
        }
        return Promise.reject(err);
    }
);

export default http;