import { defineStore } from 'pinia';
import { TOKEN_KEY, PREFIX_KEY, USERS_KEY } from '@/enums/auth';
import { useRoute as UseRoute, useRouter as UseRouter, usrLoginApi, usrInfoApi } from '@/apis/user';

interface IAccessProps {
  users?: any;
  usrToken: string;
}

export const useRoute = UseRoute;
export const useRouter = UseRouter;

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: 'hnba3eqlz8ei07j442k8wsvz845s4554b5edd41bf7f707350acdab7362da15',
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
      const { users, usrToken = '' }: IAccessProps = await usrLoginApi(pars);
      if (usrToken) {
        this.token = usrToken;
        // this.users = users;
      }
      return users;
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
