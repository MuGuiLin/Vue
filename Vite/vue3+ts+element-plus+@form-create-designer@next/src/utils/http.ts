import axios from 'axios';
// import qs from "qs";
import { ElMessage, ElLoading } from 'element-plus';

import { useUserStore } from '@/stores/modules/user';
import { ContentTypeEnum } from '@/enums/http';

let loading: any = null;

const storageClear = () => {
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
};

const http = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000,
  withCredentials: true,
  headers: {
    'Content-Type': ContentTypeEnum.FORM_URLENCODED,
  },
});

http.interceptors.request.use(
  (cfg) => {
    if (cfg.data?.loading || cfg.params?.loading) {
      loading = ElLoading.service({
        target: document.querySelector('.el-table'),
        fullscreen: true,
        text: cfg.data?.loadingText || cfg.params?.loadingText || '加载中，请稍候！',
      });
    }

    const { token } = useUserStore();
    if (token) {
      cfg.headers['Authorization'] = token;
    }

    // if (cfg.headers && cfg.headers?.["Content-Type"] === ContentTypeEnum.FORM_URLENCODED) {
    //     cfg.data = qs.stringify(cfg.data, {
    //         arrayFormat: "brackets",
    //     });
    // }

    if (cfg.data?.loading) delete cfg.data?.loading;
    if (cfg.params?.loading) delete cfg.params?.loading;

    return cfg;
  },
  (err) => {
    Promise.reject(err);
  },
);

http.interceptors.response.use(
  (res) => {
    loading?.close();
    if (200 === res.status && 200 === res.data?.code) {
      return Promise.resolve(res.data.data);
    } else {
      ElMessage({
        showClose: true,
        message: res.data?.message,
        type: 'error',
      });
      if (res.data?.code) {
        setTimeout(storageClear, 3000);
      }
      return Promise.reject(res);
    }
  },
  (err) => {
    loading?.close();
    if (401 === err.response?.status) {
      storageClear();
    }
    ElMessage({
      showClose: true,
      message: err.message || '网络异常，请稍后再试！',
      type: 'error',
    });
    return Promise.reject(err);
  },
);

export default http;
