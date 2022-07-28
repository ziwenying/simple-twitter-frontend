<template>
  <div class="user-profile-outer">
    <img
      class="background-img"
      src="./../assets/image/profile-background.png"
      alt="user-background"
    />
    <img
      class="user-avatar"
      src="./../assets/image/avatar.png"
      alt="user-avatar"
    />
    <button class="user-edit" data-toggle="modal" data-target="#user-edit">
      編輯個人資料
    </button>
    <div class="user-title">
      <div class="name">John Doe</div>
      <div class="account">@heyjohn</div>
    </div>
    <p class="user-text">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </p>
    <div class="follow">
      <a class="following">
        <div class="following-count">34 個</div>
        <div class="following-text">跟隨中</div>
      </a>
      <a class="follower">
        <div class="follower-count">59 位</div>
        <div class="follower-text">跟隨者</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileCard",
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.user-profile-outer {
  position: relative;
  height: 409px;
  border-left: $light-blue2 1px solid;
  border-right: $light-blue2 1px solid;
  .background-img {
    height: 200px;
  }
  .user-avatar {
    position: absolute;
    top: 124px;
    left: 16px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px $white solid;
  }
  .user-edit {
    @extend %btn-unfollowed-style;
    position: absolute;
    top: 216px;
    right: 16px;
    width: 128px;
  }
  .user-title {
    margin: 72px 0 0 16px;
    .name {
      font-size: 18px;
      font-weight: 700;
    }
    .account {
      font-size: 14px;
      color: $Secondary;
    }
  }
  .user-text {
    margin: 6px 0 0 16px;
    font-size: 14px;
  }
  .follow {
    display: flex;
    margin: 8px 0 0 16px;
    font-size: 14px;
    .following {
      display: flex;
      .following-text {
        color: $Secondary;
      }
    }
    .follower {
      display: flex;
      margin: 0 0 0 20px;
      .follower-text {
        color: $Secondary;
      }
    }
  }
}
</style>