<template>
  <div class="container">
    <form class="login-form">
      <div class="logo">
        <img src="./../assets/image/logo.png" alt="logo" />
      </div>
      <div class="title">
        <h3>後台登入</h3>
      </div>

      <div class="form-field account-field">
        <label for="account">帳號</label>
        <input
          id="account"
          name="account"
          type="text"
          placeholder="請輸入帳號"
          required
        />
        <div class="alert-msg" >
          <span class="msg">message</span>
          <span class="letter-count">0/50</span>
        </div>
      </div>

      <div class="form-field password-field">
        <label for="password">密碼</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="請輸入密碼"
          required
        />
        <div class="alert-msg">
          <span class="msg">message</span>
          <span class="letter-count">0/50</span>
        </div>
      </div>

      <div class="btn-container">
        <button class="login-btn" type="submit" >
          登入
        </button>
      </div>
      <div class="router-link-container">
        <div class="router-link-group">
          <router-link  to="/login">前台登入</router-link>
        </div>
      </div>
    </form>
   </div> 
</template>

<script>
export default {
  name: "AdminLogin",
};
</script>

// TODO: input disabled => form-field也要加class = "disabled"

<style lang="scss" scoped>
@import "./../assets/application.scss";

.container {
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
    .form-field.account-field {
      margin-bottom: 32px;
    }
    .form-field {
      position: relative;
      width: 100%;
      height: 54px;
      padding: 2px 10px 4px 10px;
      background-color: #F5F8FA;
      border-radius: 2px;
      border-bottom: 2px solid #657786 ;
      &:hover,&focus {
        border-bottom: 2px solid $light-blue1 ;
      }
      &.error {
        border-bottom: 2px solid $Error ;
      }
      &.disabled {
        border-bottom: 2px solid $gray-white1 ;
      }
      .alert-msg {
        position: absolute;
        top: 54px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 4px 0 0 0;
        span {
          font-size: 12px;
        }
      }
      >label {
        display: block;
        width: 100%;
        height: 22px;
        font-size: 14px;
        color: $gray1;
        margin-bottom: 0;
      }
      input {
        width: 100%;
        height: 26px;
        border-color: transparent;
        background-color: transparent;
        &:disabled {
          border-color: transparent;
          background-color: transparent;
        } 
      }
      input::-webkit-input-placeholder {
        color: $gray3;    
        font-size: 16px;    
      }
    }
    .btn-container {
      width:100%;
      height: 46px;
      margin-top:40px;
      .login-btn {
        width: 100%;
        height: 100%;
        background-color: $brand-color;
        border-radius: 50px;
        color: $white;
        font-size: 20px;
      }
    }
    .router-link-container {
      width: 100%;
      margin-top: 22px;
      display: flex;
      justify-content: flex-end;
      .router-link-group {
        text-align: center;
        line-height: 24px;
        span {
          padding: 0 12px;
        }
        a {
          text-decoration-line: underline;
          font-size: 16px;
          color: $Primary;
        }
      }
    }
 }
}
</style>
