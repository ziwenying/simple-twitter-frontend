<template>
  <div class="user-profile-outer">
    <img
      class="background-img"
      :src="targetProfile.cover"
      alt="user-background"
    />
    <!--  -->
    <div class="user-avatar">
      <!-- 大頭貼 -->
      <img :src="targetProfile.avatar" alt="user-avatar" class="avatar" />
    </div>
    <!--  -->
    <button
      v-if="Number($route.params.id) === currentUser.id"
      class="user-edit"
      data-toggle="modal"
      data-target="#user-edit"
    >
      編輯個人資料
    </button>
    <!-- v-if 如果此頁面非當前的使用者 -->
    <div
      v-else-if="Number($route.params.id) !== currentUser.id"
      class="btn-icon"
    >
      <img
        src="~@/assets/image/message.png"
        alt="message-btn"
        class="message-btn"
      />
      <!-- <img src="~@/assets/image/bell.png" alt="bell-btn" class="bell-btn" /> -->
      <img src="~@/assets/image/notfi.png" alt="bell-btn" class="bell-btn" />
      <button
        class="handle-follow"
        :class="{ 'btn-follow': false, 'btn-unfollow': true }"
      >
        跟隨
      </button>
    </div>
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
import { mapState } from "vuex";

export default {
  name: "UserProfileCard",
  props: {
    targetProfile: {
      type: Object,
      require: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
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
  .user-avatar {
    position: absolute;
    top: 124px;
    left: 16px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px $white solid;
    .avatar {
      width: 132px;
      height: 132px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .user-edit {
    @extend %btn-unfollowed-style;
    position: absolute;
    top: 216px;
    right: 16px;
    width: 128px;
  }

  .btn-icon {
    display: flex;
    position: absolute;
    top: 216px;
    right: 16px;
    widows: 100%;
    .message-btn,
    .bell-btn {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
    .message-btn,
    .bell-btn,
    .handle-follow {
      margin: 0 0 0 16px;
    }

    .btn-follow {
      @extend %btn-style;
      width: 96px;
    }
    .btn-unfollow {
      @extend %btn-unfollowed-style;
      width: 64px;
    }
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