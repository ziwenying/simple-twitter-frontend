<template>
  <div class="container">
    <form class="signup-form">
      <div class="logo">
        <img src="./../assets/image/logo.png" alt="logo" />
      </div>
      <div class="title">
        <h3>建立你的帳號</h3>
      </div>
      <SettingForm />
      <div class="btn-container">
        <button class="signup-btn" type="submit" >
          註冊
        </button>
      </div>
      <div class="router-link-container">
        <router-link  to="/login"
          >取消</router-link
        >
      </div>
    </form>
   </div> 
</template>

<script>
import SettingForm from './../components/SettingForm.vue'
export default {
  name: "SignUp",
  components: {
    SettingForm
  }
};
</script>

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
    .btn-container {
      width:100%;
      height: 46px;
      margin-top:40px;
      .signup-btn {
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