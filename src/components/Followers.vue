<template>
  <div class="follow-lists">
    <div
      v-for="followList in showFollowLists"
      :key="followList.followingId"
      class="follow-list"
    >
      <router-link :to="{ path: `/users/${followList.followingId}/tweets` }">
        <img class="user-avatar" :src="followList.avatar" alt="user-avatar" />
      </router-link>
      <div class="follow-content">
        <p class="follow-name">{{ followList.name }}</p>
        <p class="follow-intro">
          {{ followList.selfIntroduction }}
        </p>
      </div>
      <button
        @click.stop.prevent="deleteFollowed(followList.followingId)"
        v-if="followList.isFollowing"
        class="btn-follow"
      >
        正在跟隨
      </button>
      <button
        @click.stop.prevent="addFollowed(followList.followingId)"
        v-if="!followList.isFollowing"
        class="btn-unfollow"
      >
        跟隨
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowerNavPills",
  props: {
    followerList: {
      type: Array,
      default: () => [
        {
          followingId: -1,
          name: "",
          account: "",
          avatar: "",
          selfIntroduction: "",
          isFollowing: false,
        },
      ],
    },
    followingList: {
      type: Array,
      default: () => [
        {
          followingId: -1,
          name: "",
          account: "",
          avatar: "",
          selfIntroduction: "",
          isFollowing: false,
        },
      ],
    },
  },
  data() {
    return {
      showFollowLists: [],
    };
  },
  created() {
    // 使用路由判斷 要顯示追蹤者，還是正在追蹤的資料
    if (this.$route.name === "user-followers") {
      this.showFollowLists = this.followerList;
    } else if (this.$route.name === "user-followings") {
      this.showFollowLists = this.followingList;
    }
  },
  methods: {
    addFollowed(userId) {
      // POST /api/followships 加追蹤
      this.showFollowLists = this.showFollowLists.map((showFollowList) => {
        return userId === showFollowList.followingId
          ? {
              ...showFollowList,
              isFollowing: !showFollowList.isFollowing,
            }
          : showFollowList;
      });
    },
    deleteFollowed(userId) {
      // Delete /api/followships/:followingId 刪追蹤
      this.showFollowLists = this.showFollowLists.map((showFollowList) => {
        return userId === showFollowList.followingId
          ? {
              ...showFollowList,
              isFollowing: !showFollowList.isFollowing,
            }
          : showFollowList;
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.follow-lists {
  border-right: $light-blue2 1px solid;
  .follow-list {
    display: flex;
    position: relative;
    max-height: 158px;
    padding: 16px 23px 16px 23px;
    border-bottom: $light-blue2 1px solid;
    border-left: $light-blue2 1px solid;
    .user-avatar {
      width: 50px;
      height: 50px;
    }
    .follow-content {
      margin: 0 0 0 8px;
      width: 88%;
      .follow-name {
        margin: 7px 8px 0 0;
        font-weight: 700;
        color: $black;
      }
      .account-time {
        color: $Secondary;
        font-size: 14px;
      }
      .follow-intro {
        margin: 15px 0 0 0;
        line-height: 26px;
        overflow-wrap: break-word;
      }
    }
    .btn-follow {
      position: absolute;
      top: 16px;
      right: 30px;
      @extend %btn-style;
      width: 96px;
    }
    .btn-unfollow {
      position: absolute;
      top: 16px;
      right: 30px;
      @extend %btn-unfollowed-style;
      width: 64px;
    }
  }
}
</style>