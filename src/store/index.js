import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: - 1,
      name: '',
      account: '',
      email: '',
      avatar: '',
      role: ''
    },
    isAuthenticated: false,
    topPopular: []
  },
  getters: {
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser  // 等API拉資料進來後覆蓋掉state的currentUser
      }
      // 改變登入狀態
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    // 登出
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    },
    setTopPopular(state, topPopular) {
      state.topPopular = [...topPopular]
    }
  },
  actions: {
    async fetchCurrentUser({commit}) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { id, name, account, email, avatar, role } = data
        commit('setCurrentUser', {
          id, name, account, email, avatar, role
        })
        return {isAuthenticated : true, role: this.state.currentUser.role} //登入有效
      } catch (error) {
        console.error(error.message)
        commit('revokeAuthentication') // 登入無效直接把使用者登出
        return { isAuthenticated: false, role: '' }  //登入無效
      }
    },
    async fetchPopular({commit}) {
      try {
        const response = await usersAPI.getTopUser();
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        console.log(data)
        commit('setTopPopular', data)
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推薦追蹤名單",
        });
      }
    },
  },
  modules: {
  }
})
