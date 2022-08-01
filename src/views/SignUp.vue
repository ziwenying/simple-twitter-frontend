<template>
  <div class="container">
    <form class="signup-form" @submit.prevent.stop="handleSubmit">
      <div class="logo">
        <img src="./../assets/image/logo.png" alt="logo" />
      </div>
      <div class="title">
        <h3>建立你的帳號</h3>
      </div>
      <div class="form-container">
        <div class="form-field account-field">
          <label for="account">帳號</label>
          <input
            v-model="account"
            id="account"
            name="account"
            type="text"
            placeholder="請輸入帳號"
            required
          />
          <div class="alert-msg" v-if="errorMsg === 'Account already exists. Please try another one.'">
            <span class="msg">account已重複註冊！</span>
          </div>
        </div>

        <div class="form-field name-field">
          <label for="name">名稱</label>
          <input
            :class="{ error: name.length > 50 }"
            v-model="name"
            id="name"
            name="name"
            type="text"
            placeholder="請輸入使用者名稱"
            required
          />
          <div class="alert-msg">
            <span class="msg" v-if="name.length > 50">字數超過上限！</span>
            <span class="letter-count">{{ name.length }}/50</span>
          </div>
        </div>

        <div class="form-field email-field">
          <label for="email">Email</label>
          <input
            v-model="email"
            id="email"
            name="email"
            type="email"
            placeholder="請輸入Email"
            required
          />
          <div class="alert-msg" v-if="errorMsg === 'Email already exists. Please try another one.'">
            <span class="msg">Email已重複註冊！</span>
          </div>
        </div>

        <div class="form-field password-field">
          <label for="password">密碼</label>
          <input
            v-model="password"
            id="password"
            name="password"
            type="password"
            placeholder="請設定密碼"
            required
          />
        </div>

        <div class="form-field password-check-field">
          <label for="password-check">密碼確認</label>
          <input
            v-model="checkPassword"
            id="password-check"
            name="password-check"
            type="password"
            placeholder="請再次輸入密碼"
            required
          />
        </div>
      </div>
      <div class="btn-container">
        <button class="signup-btn" type="submit" :disabled="isProcessing">{{isProcessing ? '註冊中' : '註冊'}}</button>
      </div>
      <div class="router-link-container">
        <router-link to="/login">取消</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";
import authorizationAPI from './../apis/authorization'
export default {
  name: "SignUp",
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false,
      errorMsg: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (
          !this.account.trim() ||
          !this.email.trim() ||
          !this.name.trim() ||
          !this.password.trim() ||
          !this.checkPassword.trim()
        ) {
          Toast.fire({
            icon: "warning",
            title: "請輸入所有欄位",
          });
          return
        } else if (this.password !== this.checkPassword) {
          this.password = "";
          this.checkPassword = "";
          Toast.fire({
            icon: "warning",
            title: "兩次密碼輸入不同",
          });
          return
        } else if (this.name.length > 50) {
          Toast.fire({
            icon: "warning",
            title: "暱稱不可超過50字",
          });
          return;
        }
        this.isProcessing = true
        const { data } = await authorizationAPI.signUp({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        })
        
        console.log(data)
        if (data.status === 'error') {
          throw new Error (data.message)
        }
        // 如果註冊成功, 轉址登入頁
        Toast.fire({
          icon: 'success',
          title: '註冊成功！'
        })
        this.$router.push("/login");
      } catch (error) {
        this.isProcessing = false
        console.error(error.message)
        if (error.message === 'Account already exists. Please try another one.') {
          this.errorMsg = error.message
            Toast.fire({
            icon: "error",
            title: "account已重複註冊！",
          });
        } else if (error.message === 'Email already exists. Please try another one.') {
          this.errorMsg = error.message
          Toast.fire({
            icon: "error",
            title: "Email已重複註冊！",
          });
        } else {
          this.errorMsg = error.message
          Toast.fire({
            icon: 'error',
            title: '註冊失敗，請重新嘗試'
          })
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.container {
  margin-bottom: 30px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 356px;
    margin: 0 auto;
    margin-top: 60px;
    .logo {
      width: 40px;
      height: 40px;
    }
    .title {
      margin: 40px 0;
      h3 {
        font-weight: 700;
      }
    }
    .form-container {
      padding-top: 24px;
      width: 356px;
      .form-field {
        position: relative;
        width: 100%;
        height: 54px;
        padding: 2px 0px 4px 0px;
        margin-bottom: 32px;
        background-color: #f5f8fa;
        border-radius: 2px;
        &.password-check-field {
          margin-bottom: 0;
        }
        .alert-msg {
          position: absolute;
          top: 54px;
          left: 0;
          width: 100%;
          margin: 4px 0 0 0;
          span {
            font-size: 12px;
            &.msg {
              position: absolute;
              left: 0;
              color: $Error;
            }
            &.letter-count {
              position: absolute;
              right: 0;
              color: $gray1;
            }
          }
        }
        > label {
          display: block;
          width: 100%;
          height: 22px;
          font-size: 14px;
          color: $gray1;
          margin-bottom: 0;
          margin-left: 10px;
        }
        input {
          width: 100%;
          height: 26px;
          border-color: transparent;
          background-color: transparent;
          border-bottom: 2px solid #657786;
          padding-bottom: 10px;
          padding-left: 9px;
          &:disabled {
            border-color: transparent;
            background-color: transparent;
          }
          &:hover,
          &:focus {
            border-bottom: 2px solid $light-blue1;
          }
          &.error {
            border-bottom: 2px solid $Error;
          }
          &::-webkit-input-placeholder {
            color: $gray3;
            font-size: 16px;
          }
        }
      }
    }
    .btn-container {
      width: 100%;
      height: 46px;
      margin-top: 40px;
      .signup-btn {
        width: 100%;
        height: 100%;
        background-color: $brand-color;
        border-radius: 50px;
        color: $white;
        font-size: 20px;
        &:disabled {
          background-color: $gray3;
        }
      }
    }
    .router-link-container {
      width: 100%;
      margin-top: 22px;
      text-align: center;
      a {
        text-decoration-line: underline;
        font-size: 16px;
        color: $Primary;
      }
    }
  }
}
</style>