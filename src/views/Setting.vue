<template>
  <div class="row setting-wrapper">
    <Navbar class="col-2 pl-0"/> 
    <div class="col-7 setting-form-area">
      <h4>帳戶設定</h4>
      <hr>
      <div class="setting-form-container">
        <SettingForm />
      </div>      
      <div class="btn-container">
        <button class="save-btn">儲存</button>
      </div>
    </div>
    <div class="col-3 right"></div>
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

.setting-wrapper {
  width: 100%;
  margin: 0 auto;
  height: 914px;
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
    .setting-form-container {
      // 表格置中
      display: flex;
      justify-content: center;
    }
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
}
</style>