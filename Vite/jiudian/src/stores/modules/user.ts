import { defineStore } from 'pinia';
import { loginApi, getUserApi } from '@/api/user';
import { TOKEN_KEY, PREFIX_KEY, USERS_KEY } from '@/enums/cacheEnum';
import { setAuthCache, getAuthCache, clearAuthCache } from '@/utils/auth';

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
        async login(cb?: Function) {
            const { data = {
                access_token: ''
            } }: IAccessProps = await loginApi();
            if (data && data.access_token) {
                this.token = `${PREFIX_KEY} ${data.access_token}`;
                this.getUser(cb);
            }
            return data;
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
