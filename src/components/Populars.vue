<template>
  <div class="popular-wrapper">
    <h4 class="popular-title">推薦跟隨</h4>
    <div class="popular-lists">
      <router-link
        :to="{ path: `/users/${popular.id}/tweets` }"
        v-for="popular in topPopular"
        :key="popular.id"
      >
        <div class="popular-list">
          <img class="user-avatar" :src="popular.avatar" alt="user-avatar" />
          <div class="name-account">
            <p class="name">{{ popular.name }}</p>
            <p class="account">@{{ popular.account }}</p>
          </div>
          <button
            @click.stop.prevent="deleteFollowed(popular.id)"
            v-if="popular.isFollowed"
            class="btn-follow btn-setting"
          >
            正在跟隨
          </button>
          <button
            @click.stop.prevent="addFollowed(popular.id)"
            v-if="!popular.isFollowed"
            class="btn-unfollow btn-setting"
          >
            跟隨
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";
export default {
  name: "Populars",
  props: {
    initialTopPopular: {
      type: Array,
      required: true,
    },
  },
  watch: {
    initialTopPopular(newVal) {
      this.topPopular = [...newVal];
    },
  },
  data() {
    return {
      topPopular: [],
    };
  },
  created() {
    this.fetchTopPupular();
  },
  methods: {
    fetchTopPupular() {
      this.topPopular = this.initialTopPopular;
    },
    async addFollowed(userId) {
      try {
        const { data } = await usersAPI.addfollowed({ id: userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.topPopular = this.topPopular.map((popular) => {
          return userId === popular.id
            ? {
                ...popular,
                isFollowed: !popular.isFollowed,
              }
            : popular;
        });
        Toast.fire({
          icon: "success",
          title: "成功追蹤該使用者",
        });
      } catch (error) {
        console.error(error.message);
        if (error.message === "Can not follow yourself.") {
          Toast.fire({
            icon: "warning",
            title: "不能追蹤自己唷！",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "無法追蹤該使用者，請稍後再試",
          });
        }
      }
    },
    async deleteFollowed(userId) {
      try {
        const { data } = await usersAPI.deletefollowed({ userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.topPopular = this.topPopular.map((popular) => {
          return userId === popular.id
            ? {
                ...popular,
                isFollowed: !popular.isFollowed,
              }
            : popular;
        });
        Toast.fire({
          icon: "success",
          title: "已取消追蹤該使用者",
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤該使用者，請稍後再試",
        });
      }
    },
  },
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
      position: relative;
      padding: 16px 0 16px 0;
      .user-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name-account {
        padding: 0 13px 0 8px;
        .name {
          width: 74px;
          color: $black;
          font-weight: 700;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .account {
          color: $gray2;
          font-size: 14px;
        }
      }
      .btn-setting {
        padding: 8px 16px 8px 16px;
      }
      .btn-unfollow {
        position: absolute;
        right: 16px;
        @extend %btn-unfollowed-style;
      }
      .btn-follow {
        position: absolute;
        right: 16px;
        @extend %btn-style;
      }
    }
  }
}
</style>