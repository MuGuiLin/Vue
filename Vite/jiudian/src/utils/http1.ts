import type { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosPromise } from "axios";
import axios from "axios";
import qs from "qs";
import { Toast } from "vant";
import env from "../../config/env.config";
import { ContentTypeEnum } from "@/enums/httpEnum";

const http = axios.create({
    baseURL: env.__URL__,
    timeout: 60 * 1000,
    withCredentials: true,
});

http.interceptors.request.use(
    (cfg: AxiosRequestConfig) => {
        if (
            cfg.headers &&
            cfg.headers?.["Content-Type"] === ContentTypeEnum.FORM_URLENCODED
        ) {
            cfg.data = qs.stringify(cfg.data, {
                arrayFormat: "brackets",
            });
        }
        return cfg;
    },
    (err: AxiosError) => {
        return Promise.reject(err);
    }
);

http.interceptors.response.use(
    (res: AxiosResponse<any>) => {
        if (res.status == 200) {
            if (0 > res.data?.code) {
                Toast.fail({
                    icon: "warning-o",
                    message: res.data?.msg,
                });
            }
            return Promise.resolve(res.data);
        } else {
            return Promise.reject(res);
        }
    },
    (err: AxiosError) => {
        Toast.fail({
            icon: "warning-o",
            message: "网络异常，请稍后再试！",
        });
        return Promise.reject(err);
    }
);

export default {
    get<T = any>(ops: T): AxiosPromise<T> {
        return http({ ...ops, method: "GET" });
    },

    put<T = any>(ops: T): AxiosPromise<T> {
        return http({ ...ops, method: "PUT" });
    },

    post<T = any>(ops: T): AxiosPromise<T> {
        return http({ ...ops, method: "POST" });
    },

    delete<T = any>(ops: T): AxiosPromise<T> {
        return http({ ...ops, method: "DELETE" });
    },
};
