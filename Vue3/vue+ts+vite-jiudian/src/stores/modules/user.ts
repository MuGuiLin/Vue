import { defineStore } from 'pinia';
import env from '~/configs/env.config';
import { loginApi, getUserApi } from '@/api/user';
import { TOKEN_KEY, PREFIX_KEY, USERS_KEY } from '@/enums/cacheEnum';
import { setAuthCache, getAuthCache, clearAuthCache } from '@/utils/auth';
import { uuid } from '@/utils';

interface IAccessProps {
    data: {
        access_token: string;
    }
}

export const PiniaStore = defineStore({
    id: USERS_KEY,
    state: () => {
        return {
            token: '',
            users: {},
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: USERS_KEY,
                storage: window.localStorage
            }
        ]
    },
    getters: {
        computed() { }
    },
    actions: {
        async login(cb?: Function, code?: string) {
            if (code) {
                const { data = {
                    access_token: ''
                } }: IAccessProps = await loginApi({ code });
                if (data && data.access_token) {
                    this.token = `${PREFIX_KEY} ${data.access_token}`;
                    this.getUser(cb);
                }
                return data;
            } else {
                location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${env.__APPID__}&redirect_uri=${location.origin}&response_type=code&scope=snsapi_userinfo&state=${uuid()}&connect_redirect=1`;
            }
        },
        async getUser(cb?: Function) {
            if (this.token) {
                const { data = {} }: any = await getUserApi(this.token);
                this.users = data;
                cb && cb();
                return data;
            } else {
                this.login();
            }
        },

    }
});
