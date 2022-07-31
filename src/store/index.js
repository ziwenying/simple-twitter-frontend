import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

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
    },
    // 登出
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({commit}) {
      try {
        // TODO:確認response格式
        const { data } = await usersAPI.getCurrentUser()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { id, name, account, email, avatar, role } = data
        commit('setCurrentUser', {
          id, name, account, email, avatar, role
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
