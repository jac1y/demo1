import Vue from 'vue'
import Vuex from 'vuex'
import tabs from './tabs'
import user from './modules/user'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    path: '',
    journal: [],
  },
  // 所有state持久化
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    // 指定需要持久化的模块
    paths: ['tabs', 'user']
  })],
  getters: {
  },
  mutations: {
    // 伪全局刷新
    getPath(state, path) {
      state.path = path;
    },
    // clear
    clearJournal(state) {
      state.journal = [];
    }
  },
  actions: {
  },
  modules: {//将vuex分为多个模块
    tabs: tabs,
    user: user
  }

})
