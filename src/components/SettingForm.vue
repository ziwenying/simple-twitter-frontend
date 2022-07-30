<template>
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
      <div class="alert-msg" >
        <span class="msg">message</span>
      </div>
    </div>

    <div class="form-field name-field">
      <label for="name">名稱</label>
      <input
        v-model="name"
        id="name"
        name="name"
        type="text"
        placeholder="請輸入使用者名稱"
        required
      />
      <div class="alert-msg" >
        <span class="msg">message</span>
        <span class="letter-count">0/50</span>
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
      <div class="alert-msg" >
        <span class="msg">message</span>
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
      <div class="alert-msg">
        <span class="msg">message</span>
      </div>
    </div>

    <div class="form-field password-check-field">
      <label for="password-check">密碼確認</label>
      <input
        v-model="passwordCheck"
        id="password-check"
        name="password-check"
        type="password"
        placeholder="請再次輸入密碼"
        required
      />
      <div class="alert-msg" >
        <span class="msg">message</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingForm',
  data () {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      passwordCheck: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";
.form-container {
  width: 356px;
  .form-field {
        position: relative;
        width: 100%;
        height: 54px;
        padding: 2px 0px 4px 0px;
        margin-bottom: 32px;
        background-color: #F5F8FA;
        border-radius: 2px;
        &.password-check-field {
          margin-bottom: 0;
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
          margin-left: 10px;
        }
        input {
          width: 100%;
          height: 26px;
          border-color: transparent;
          background-color: transparent;
          border-bottom: 2px solid #657786 ;
          padding-bottom: 10px;
          padding-left: 9px;
          &:disabled {
            border-color: transparent;
            background-color: transparent;
          } 
          &:hover, &:focus {
        border-bottom: 2px solid $light-blue1 ;
        }
        &.error {
          border-bottom: 2px solid $Error ;
        }
        &::-webkit-input-placeholder {
          color: $gray3;    
          font-size: 16px;    
        }
        }
      }
}
</style>