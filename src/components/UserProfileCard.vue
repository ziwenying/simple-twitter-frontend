<template>
  <div class="user-profile-outer">
    <img
      class="background-img"
      src="./../assets/image/profile-background.png"
      alt="user-background"
    />
    <div class="avatar">
      <img
        class="user-avatar"
        src="./../assets/image/avatar.png"
        alt="user-avatar"
      />
    </div>

    <button class="user-edit" data-toggle="modal" data-target="#user-edit">
      編輯個人資料
    </button>
    <div class="user-title">
      <div class="name">{{ targetProfile.name }}</div>
      <div class="account">@{{ targetProfile.account }}</div>
    </div>
    <p class="user-text">
      {{ targetProfile.introduction }}
    </p>
    <div class="follow">
      <router-link :to="{ name: 'user-followings' }" class="following">
        <div class="follow-count">{{ targetProfile.followingCount }} 個</div>
        <div class="follow-text">跟隨中</div>
      </router-link>
      <router-link :to="{ name: 'user-followers' }" class="follower">
        <div class="follow-count">{{ targetProfile.followerCount }} 位</div>
        <div class="follow-text">跟隨者</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileCard",
  props: {
    targetProfile: {
      type: Object,
      require: true,
    },
  },
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
  .avatar {
    position: absolute;
    top: 124px;
    left: 16px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px $white solid;
    .user-avatar {
      width: 132px;
      height: 132px;
      object-fit: cover;
    }
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

    .following,
    .follower {
      display: flex;
      .follow-text {
        color: $Secondary;
      }
      .follow-count {
        color: $black;
      }
    }
    .following:hover,
    .follower:hover {
      text-decoration: underline;
    }
    .follower {
      margin: 0 0 0 20px;
    }
  }
}
</style>