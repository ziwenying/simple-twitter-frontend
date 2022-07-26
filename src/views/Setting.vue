<template>
  <div class="setting-container">
    <Navbar /> 
    <div class="setting-form-area">
      <h4>帳戶設定</h4>
      <hr>
      <SettingForm />
      <div class="btn-container">
        <button class="save-btn">儲存</button>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import SettingForm from './../components/SettingForm.vue'
export default {
  name: "Setting",
  components: {
    Navbar,
    SettingForm
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.setting-container {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 332px 1fr 427px;
  .side-navbar {
    grid-column: 1/2;
  }
  .setting-form-area {
    position: relative;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 24px;
    border-right: 1px solid $light-blue2;
    border-left: 1px solid $light-blue2;
    h4 {
      color: $black;
      font-weight: 700;
      margin-bottom: 24px;
    }
    hr {
     width:100%;
     position: absolute;
     color: $light-blue2;
     top: 62px;
     left: 0;
    }
    grid-column: 2/3;
    margin: 0 auto;
    .form-container {
      padding-top: 24px;      
      width: 593px;
    }
    .btn-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 40px;
      .save-btn {
        width: 88px;
        height: 46px;
        border-radius: 50px;
        background-color: $brand-color;
        padding: 8px 24px;
        font-size: 20px;
        color: $white;
      }
    }
    
  }
  .right {
    grid-column: 3/4;
  }
}
</style>