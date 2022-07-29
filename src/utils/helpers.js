
import Swal from 'sweetalert2'

//提示通知
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})