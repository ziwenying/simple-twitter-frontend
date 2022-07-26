<template>
  <div class="scrollbar">
    <h4 class="pb-4">首頁</h4>
    <div class="main-wrapper">
      <div class="main-tweet-wrapper">
        <div class="avatar-input">
          <img
            class="user-avatar"
            src="./../assets/image/avatar.png"
            alt="user-avatar"
          />
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

h4 {
  position: fixed;
  top: 0;
  width: 50%; //這邊改
  height: 74px;
  background: $white;
  padding: 24px 0 0 23px;
  font-size: 24px;
  font-weight: 700;
  border-left: $light-blue2 1px solid;
  border-right: $light-blue2 1px solid;
  border-bottom: $light-blue2 1px solid;
  z-index: 1;
}
.main-wrapper {
  position: relative;
  margin: 74px 0 0 0;
  border-left: $light-blue2 1px solid;
  border-right: $light-blue2 1px solid;
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

// 卷軸
.scrollbar {
  padding-left: 6px;
  // 整體的樣式
  &::-webkit-scrollbar {
    width: 6px;
  }
  // bar的樣式
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>