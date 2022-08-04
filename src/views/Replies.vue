<template>
  <div class="reply-lists">
    <div class="reply-list" v-for="reply in replies" :key="reply.id">
      <a href="#">
        <img class="user-avatar" :src="reply.avatar" alt="user-avatar" />
      </a>
      <div class="reply-content">
        <div class="reply-title">
          <p class="name">{{ reply.name }}</p>
          <p class="account-time">
            @{{ reply.account }}&nbsp;‧&nbsp;{{ reply.createdAt | fromNow }}
          </p>
        </div>
        <div class="reply-who">
          <p class="reply">回覆</p>
          <p class="account">@{{ reply.targetAccount }}</p>
        </div>
        <p class="text">
          {{ reply.comment }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  name: "Replies",
  mixins: [fromNowFilter],
  data() {
    return {
      replies: [],
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 監聽路由
    const { id } = to.params;
    this.fetchReplies(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchReplies(id);
  },
  methods: {
    async fetchReplies(id) {
      try {
        const response = await usersAPI.getTheUserReplies({
          userId: id,
        });
        if (response.statusText !== "OK") {
          throw new Error("無法取得留言資料，請稍後再試");
        }

        this.replies = response.data;
        // 資料拆層
        this.replies = this.replies.map((reply) => {
          return {
            id: reply.id,
            avatar: reply.User.avatar,
            name: reply.User.name,
            account: reply.User.account,
            createdAt: reply.createdAt,
            comment: reply.comment,
            targetAccount: reply.Tweet.User.account,
          };
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得留言資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.reply-lists {
  overflow-y: scroll;
  max-height: 400px;
  border-left: $light-blue2 1px solid;
  border-right: $light-blue2 1px solid;

  .reply-list {
    display: flex;
    max-height: 158px;
    padding: 16px 23px 16px 23px;
    border-bottom: $light-blue2 1px solid;

    .user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .reply-content {
      margin: 0 0 0 8px;
      .reply-title {
        display: flex;
        align-items: center;
        .name {
          margin: 0 8px 0 0;
          font-weight: 700;
          color: $black;
        }
        .account-time {
          color: $Secondary;
          font-size: 14px;
        }
      }
      .reply-who {
        display: flex;
        .reply {
          color: $Secondary;
        }
        .account {
          margin: 0 0 0 8px;
          color: $brand-color;
        }
      }
      .text {
        line-height: 26px;
      }
      .reply-who,
      .text {
        margin: 8px 0 0 0;
      }
    }
  }
}
</style>