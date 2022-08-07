<template>
  <div class="reply-lists">
    <div class="reply-list" v-for="reply in replies" :key="reply.id">
      <router-link :to="{ path: `/users/${reply.User.id}/tweets` }">
        <img class="user-avatar" :src="reply.User.avatar" alt="user-avatar" />
      </router-link>
      <div class="reply-content">
        <div class="reply-title">
          <router-link :to="{ path: `/users/${reply.User.id}/tweets` }">
            <p class="name">{{ reply.User.name }}</p>
          </router-link>
          <router-link :to="{ path: `/users/${reply.User.id}/tweets` }">
            <p class="account-time account">@{{ reply.User.account }}</p>
          </router-link>
          <p class="account-time time">
            &nbsp;‧&nbsp;{{ reply.createdAt | fromNow }}
          </p>
        </div>
        <router-link
          :to="{ path: `/users/${reply.tweetAuthorId}/tweets` }"
          class="reply-link"
        >
          <div class="reply-who">
            <p class="reply">回覆</p>
            <p class="account">@{{ reply.tweetAuthorAccount }}</p>
          </div>
        </router-link>
        <p class="text">
          {{ reply.comment }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "Reply",
  mixins: [fromNowFilter],
  props: {
    initialReplies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      replies: [],
    };
  },
  watch: {
    initialReplies(newValue) {
      this.replies = [...newValue];
    },
  },
  created() {
    this.replies = this.initialReplies;
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.reply-lists {
  .reply-list {
    display: flex;
    padding: 16px 23px 16px 23px;
    border-top: $light-blue2 1px solid;
    border-bottom: $light-blue2 1px solid;
    .user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .reply-content {
      width: 90%;
      margin: 0 0 0 8px;
      overflow-wrap: anywhere;
      .reply-title {
        width: 100%;
        display: flex;
        align-items: center;
        .name {
          margin: 0 8px 0 0;
          font-weight: 700;
          color: $black;
          &:hover {
            text-decoration: underline;
          }
        }
        .account-time {
          color: $Secondary;
          font-size: 14px;
        }
        .account:hover {
          text-decoration: underline;
        }
      }
      .reply-link {
        width: 100%;
        cursor: auto;
        .reply-who {
          display: flex;
          margin: 8px 0 0 0;
          .reply {
            color: $Secondary;
          }
          .account {
            margin: 0 0 0 8px;
            color: $brand-color;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
      .text {
        width: 100%;
        margin: 8px 0 0 0;
        
      }
    }
    .reply-list div:nth-child(1) {
      border-top: $light-blue2 1px solid;
    }
  }
}
</style>