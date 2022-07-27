<template>
  <div class="popular-wrapper">
    <h4 class="popular-title">推薦跟隨</h4>
    <div class="popular-lists">
      <div class="popular-list">
        <a href="#">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>
        <div class="name-account">
          <p class="name">Pizza Hut</p>
          <p class="account">@pizzahut</p>
        </div>
        <button class="btn-setting">正在跟隨</button>
      </div>
      <div class="popular-list">
        <a href="#">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>
        <div class="name-account">
          <p class="name">McDona ...</p>
          <p class="account">@McDona ...</p>
        </div>
        <button class="btn-setting">正在跟隨</button>
      </div>
      <div class="popular-list">
        <a href="#">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>

        <div class="name-account">
          <p class="name">Bank of ...</p>
          <p class="account">@BankOfA ...</p>
        </div>
        <button class="btn-unfollowed">跟隨</button>
      </div>
      <div class="popular-list">
        <a href="">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>

        <div class="name-account">
          <p class="name">Bank of ...</p>
          <p class="account">@BankOfA ...</p>
        </div>
        <button class="btn-unfollowed">跟隨</button>
      </div>
      <div class="popular-list">
        <a href="">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>

        <div class="name-account">
          <p class="name">Bank of ...</p>
          <p class="account">@BankOfA ...</p>
        </div>
        <button class="btn-unfollowed">跟隨</button>
      </div>
      <div class="popular-list">
        <a href="">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>

        <div class="name-account">
          <p class="name">Bank of ...</p>
          <p class="account">@BankOfA ...</p>
        </div>
        <button class="btn-unfollowed">跟隨</button>
      </div>
      <div class="popular-list">
        <a href="">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>

        <div class="name-account">
          <p class="name">Bank of ...</p>
          <p class="account">@BankOfA ...</p>
        </div>
        <button class="btn-unfollowed">跟隨</button>
      </div>
      <div class="popular-list">
        <a href="">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>

        <div class="name-account">
          <p class="name">Bank of ...</p>
          <p class="account">@BankOfA ...</p>
        </div>
        <button class="btn-unfollowed">跟隨</button>
      </div>
      <div class="popular-list">
        <a href="">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>

        <div class="name-account">
          <p class="name">Bank of ...</p>
          <p class="account">@BankOfA ...</p>
        </div>
        <button class="btn-unfollowed">跟隨</button>
      </div>
      <div class="popular-list">
        <a href="">
          <img
            class="user-avatar"
            src="./../assets/image/user-image.png"
            alt="user-avatar"
          />
        </a>

        <div class="name-account">
          <p class="name">Bank of ...</p>
          <p class="account">@BankOfA ...</p>
        </div>
        <button class="btn-unfollowed">跟隨</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Populars",
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.popular-wrapper {
  margin: 16px 0 20px 0;
  background: $near-white;
  border-radius: 16px;
  .popular-title {
    padding: 24px 0 24px 24px;
    border-bottom: $light-blue2 1px solid;
  }
  .popular-lists {
    .popular-list {
      display: flex;
      justify-content: space-between;
      padding: 16px 0 16px 0;
      .user-avatar {
        width: 50px;
        height: 50px;
      }
      .name-account {
        padding: 0 13px 0 8px;
        .name {
          font-weight: 700;
        }
        .account {
          color: $gray2;
          font-size: 14px;
        }
      }
      .btn-setting {
        @extend %btn-style;
        padding: 8px 16px 8px 16px;
      }
      .btn-unfollowed {
        @extend %btn-unfollowed-style;
        padding: 8px 16px 8px 16px;
      }
    }
  }
}
</style>