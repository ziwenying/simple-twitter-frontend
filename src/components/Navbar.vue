<template>
  <div class="side-navbar">
    <div class="nav-container">
      <div class="nav-top">
        <img class="logo-img" src="~@/assets/image/logo.png" alt="logo-img" />
        <!-- 黑色 -->
        <div class="home-btn nav-item">
          <img
            class="home-icon"
            src="~@/assets/image/home.png"
            alt="home-icon"
          />
          <p class="nav-text">首頁</p>
        </div>
        <!-- 在該頁面時, 變成橘色 -->
        <!-- <div class="home-btn nav-item btn-clicked">
          <img class="home-icon" src="~@/assets/image/home-orange.png" alt="home-icon">
          <p class="nav-text">首頁</p>
        </div> -->
        <div class="user-profile-btn nav-item">
          <img
            class="user-icon"
            src="~@/assets/image/user.png"
            alt="user-icon"
          />
          <p class="nav-text">個人資料</p>
        </div>
        <!-- <div class="user-profile-btn nav-item btn-clicked">
          <img class="user-icon" src="~@/assets/image/user-orange.png" alt="user-icon">
          <p class="nav-text">個人資料</p>
        </div> -->
        <div class="setting-btn nav-item">
          <img
            class="setting-icon"
            src="~@/assets/image/setting.png"
            alt="setting-icon"
          />
          <p class="nav-text">設定</p>
        </div>
        <!-- <div class="setting-btn nav-item btn-clicked">
          <img  class="setting-icon" src="~@/assets/image/setting-orange.png" alt="setting-icon">
          <p class="nav-text">設定</p>
        </div> -->
        <button class="tweet-btn">推文</button>
      </div>
      <!-- 後台Navbar  -->
      <!-- <div class="nav-top">
        <img class="logo-img" src="~@/assets/image/logo.png" alt="logo-img">
        <div class="home-btn nav-item">
          <img class="home-icon" src="~@/assets/image/home.png" alt="home-icon">
          <p class="nav-text">推文清單</p>
        </div>
        <div class="home-btn nav-item btn-clicked">
          <img class="home-icon" src="~@/assets/image/home-orange.png" alt="home-icon">
          <p class="nav-text">推文清單</p>
        </div>
        <div class="user-profile-btn nav-item">
          <img class="user-icon" src="~@/assets/image/user.png" alt="user-icon">
          <p class="nav-text">使用者列表</p>
        </div>
        <div class="user-profile-btn nav-item btn-clicked">
          <img class="user-icon" src="~@/assets/image/user-orange.png" alt="user-icon">
          <p class="nav-text">使用者列表</p>
        </div>
      </div> -->
      <div class="nav-bottom">
        <img
          class="logout-icon"
          src="~@/assets/image/logout-icon.png"
          alt="logout-icon"
        />
        <p class="nav-text">登出</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";
.side-navbar {
  // max-width: 332px; //註解掉 設這邊的話 pupular 會被擠到下面
  height: 100vh;
  // position: absolute; //註解掉
  // left: 0; //註解掉
  .nav-container {
    width: 178px;
    height: 100%;
    //這邊 margin: 0 24px 0 130px ->> margin: 0 24px 0 0;
    margin: 0 24px 0 0; //修改
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .nav-text {
      display: inline-block;
    }
    .nav-top {
      display: flex;
      flex-direction: column;
      .tweet-btn {
        width: 178px;
        height: 46px;
        color: $white;
        font-size: 20px;
        border-radius: 50px;
        background-color: $brand-color;
      }
      .nav-item {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        margin-left: 17px;
        &:hover {
          cursor: pointer;
        }
        .nav-text {
          font-weight: 700;
          font-size: 18px;
          color: $darkgray;
          &:hover {
            color: $brand-color;
          }
        }
        &.btn-clicked {
          p {
            color: $brand-color;
          }
        }
        > img {
          margin-right: 20px;
        }
        .home-icon,
        .user-icon,
        .setting-icon {
          width: 24px;
          height: 24px;
          &:hover {
            color: $brand-color;
          }
        }
      }
      .nav-item.setting-btn {
        margin-bottom: 24px;
      }
      .logo-img {
        width: 50px;
        height: 50px;
        margin: 8px 120px 30px 8px;
      }
    }
    .nav-bottom {
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
      .logout-icon {
        width: 24px;
        height: 24px;
        margin: 16px;
        &:hover {
          color: $brand-color;
        }
      }
      .nav-text {
        color: $darkgray;
        font-weight: 700;
        font-size: 18px;
        &:hover {
          color: $brand-color;
        }
      }
    }
  }
}
</style>