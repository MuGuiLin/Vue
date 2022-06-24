import { defineStore } from 'pinia';
import { loginApi, loginOutApi } from '@/api/user';
import { STORE_KEY } from '@/enums/cacheEnum';
import { setAuthCache, getAuthCache, clearAuthCache } from '@/utils/auth';

export const PiniaStore = defineStore(
    'user',
    {
        state: () => {
            return {
                user_info: getAuthCache(STORE_KEY),
            }
        },
        actions: {
            async login(user: any) {
                const { data = {} }: any = await loginApi(user);
                if (data && data.token) {
                    setAuthCache(STORE_KEY, data);
                    this.$patch({
                        user_info: data
                    });
                }
                return data;
            },
            async logout() {
                clearAuthCache();
                this.$patch({
                    user_info: {},
                });
                return loginOutApi();
            },
        }
    }
);
