import { apiHelper } from "../utils/helpers";

export default {
  signIn({account, password}) {
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  },
  signUp({account, name, email, password, checkPassword}) {
    return apiHelper.post('/users', {
        name,
        account,
        email,
        password,
        checkPassword
      }
    )
  },
  adminSignIn({account, password}) {
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  }
}