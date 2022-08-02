
import axios from 'axios'

const baseURL = 'https://twitter-api-2022.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL,
  validateStatus: function (status) {
    return status >= 200 && status < 500; 
  },
})
import Swal from 'sweetalert2'

//提示通知
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})