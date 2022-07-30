import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: - 1,
      name: '',
      account: '',
      email: '',
      image: '',
      role: ''
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser  // 等API拉資料進來後覆蓋掉state的currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
  },
  modules: {
  }
})
