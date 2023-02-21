import { defineStore } from 'pinia';
import { TOKEN_KEY, PREFIX_KEY, USERS_KEY } from '@/enums/auth';
import { useRoute as UseRoute, useRouter as UseRouter, usrLoginApi, usrInfoApi } from '@/apis/user';

interface IAccessProps {
  usr?: any;
}

export const useRoute = UseRoute;
export const useRouter = UseRouter;

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      users: {},
    };
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: USERS_KEY,
        storage: window.localStorage,
      },
    ],
  },
  getters: {
    computed() {},
  },
  actions: {
    async login(pars: any) {
      const { usr }: IAccessProps = await usrLoginApi(pars);
      if (usr.usrToken) {
        this.users = usr;
        this.token = usr.usrToken;
      }
      return this.users;
    },

    async logout() {
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    },

    async getUser(cb?: Function) {
      if (this.token) {
        const { users = {} }: any = await usrInfoApi(this.token);
        this.users = users;
        cb && cb();
        return users;
      } else {
        this.login({});
      }
    },
  },
});
