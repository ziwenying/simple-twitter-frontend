import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get('/currentUser', {
      headers: { Authorization : `Bearer ${getToken()}`}
    })
  }
}