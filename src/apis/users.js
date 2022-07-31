import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    // TODO: 待API做好, 放入API路由
    return apiHelper.get('/', {
      headers: { Authorization : `Bearer ${getToken()}`}
    })
  }
}