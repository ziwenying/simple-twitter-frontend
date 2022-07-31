import axios from 'axios'

// TODO: 更改Api baseURL
const baseURL = 'https://rocky-sea-34138.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL
})
import Swal from 'sweetalert2'

//提示通知
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})