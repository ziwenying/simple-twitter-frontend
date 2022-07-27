<template>
  <div class="main-outer">
    <div class="main-page-title">
      <h4 class="pb-4">首頁</h4>
    </div>

    <div class="main-wrapper">
      <div class="block"></div>
      <div class="main-tweet-wrapper">
        <div class="avatar-input">
          <a href="">
            <img
              class="user-avatar"
              src="./../assets/image/avatar.png"
              alt="user-avatar"
            />
          </a>
          <textarea
            class="textarea-tweet"
            type="text"
            placeholder="有什麼新鮮事？"
          />
        </div>
        <button class="btn-setting btn-position">推文</button>
      </div>
      <!-- component MainTweet -->
    </div>
    <MainTweet />
  </div>
</template>

<script>
import MainTweet from "../components/MainTweet.vue";

export default {
  name: "MainPage",
  components: {
    MainTweet,
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

%btn-style {
  height: 40px;
  background: $brand-color;
  color: $white;
  border-radius: 50px;
}

.main-outer {
  position: relative;

  .main-page-title {
    position: fixed;
    width: 45%; //這邊有問題
    background: $white;
    height: 74px;
    border-bottom: $light-blue2 1px solid;
    z-index: 1;

    h4 {
      height: 74px;
      padding: 24px 0 0 23px;
      font-size: 24px;
      font-weight: 700;
      border-left: $light-blue2 1px solid;
      z-index: 1;
    }
  }

  .main-wrapper {
    position: relative;
    border-top: $light-blue2 1px solid;
    border-left: $light-blue2 1px solid;
    border-right: $light-blue2 1px solid;
    .block {
      height: 74px;
    }
    .main-tweet-wrapper {
      position: relative;
      .avatar-input {
        display: flex;
        position: relative;
        padding: 16px 0 0 23px;
        border-bottom: $light-blue2 10px solid;

        .user-avatar {
          width: 50px;
          height: 50px;
          margin: 0 8px 0 0;
        }
        .textarea-tweet {
          padding: 12px;
          width: 100%;
          height: 137px;
          border: none;
          resize: none;
        }
        textarea::-webkit-input-placeholder {
          color: $Secondary;
          font-size: 16px;
          font-weight: 700;
        }
      }
      .btn-setting {
        width: 64px;
        @extend %btn-style;
      }
      .btn-position {
        position: absolute;
        right: 23px;
        bottom: 26px;
      }
    }
  }
}
</style>