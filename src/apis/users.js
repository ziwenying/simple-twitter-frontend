import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get('/users/currentUser', {
      headers: { Authorization : `Bearer ${getToken()}`}
    })
  },
  getTopUser() {
    return apiHelper.get('/followships', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFollowers({ userId }) {
    return apiHelper.get(`/users/${userId}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFollowings({ userId }) {
    return apiHelper.get(`/users/${userId}/followings`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addfollowed({ userId }) {
    return apiHelper.post(`/followships`, {userId}, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deletefollowed({ userId }) {
    return apiHelper.delete(`/followships/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
} 