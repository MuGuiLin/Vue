import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const PI = Math.PI;

export default new Vuex.Store({
  state: {
    config: {
      __URL__: 'https://kcpx-test.smgtech.net',
      __NET__: 'http://elbofang.smgtech.net/live/elearning.m3u8',
      __WSS__: 'wss://kcpx-test.smgtech.net/wss'
    },
    pi: PI,
    random: Math.random(),
    rmb: 9200
  },
  mutations: {
    getUserInfo() {
      const data = {
        userId: '01810597',
        userName: '沐枫'
      };
      console.log(data);
      
      alert(data);
      return data;
    },
    addRmb() {
      this.state.rmb++;
    }
  },
  actions: {
  },
  modules: {
  }
})
