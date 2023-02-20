import { defineStore } from "pinia";
import { TOKEN_KEY, PREFIX_KEY, USERS_KEY } from "@/enums/auth";
import { useRouter as UseRouter, usrLoginApi, usrInfoApi } from "@/apis/user";

interface IAccessProps {
    data?:any;
    usrToken: string;
}

export const useRouter = UseRouter;

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: "",
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
      const {
        data,
        usrToken = "",
      }: IAccessProps = await usrLoginApi(pars);
      if (usrToken) {
        this.token = usrToken;
        // this.users = data;
      }
      return data;
    },

    async getUser(cb?: Function) {
      if (this.token) {
        const { data = {} }: any = await usrInfoApi(this.token);
        this.users = data;
        cb && cb();
        return data;
      } else {
        this.login({});
      }
    },
  },
});
