<template>
  <div class="main-tweet-wrapper">
    <div class="tweet-title">
      <a href="#">
        <img class="user-avatar" :src="oneTweet.user.avatar" alt="user-avatar"
      /></a>
      <div class="tweet-title-name-account">
        <p class="name">{{ oneTweet.user.name }}</p>
        <p class="account">@{{ oneTweet.user.account }}</p>
      </div>
    </div>
    <div class="tweet-text">
      <p class="text">
        {{ oneTweet.text }}
      </p>
      <!-- 這邊要重寫時間 -->
      <p class="time">{{ oneTweet.createdAt | exactTime }}</p>
    </div>
    <div class="count">
      <div class="count-reply">
        <p>{{ oneTweet.replyCount }}</p>
        <p>回覆</p>
      </div>
      <div class="count-like">
        <p>{{ oneTweet.likeCount }}</p>
        <p>喜歡次數</p>
      </div>
    </div>
    <div class="tweet-reply-heart">
      <img
        @click="isClickedTweet(oneTweet.id)"
        class="icon"
        data-toggle="modal"
        data-target="#replyTweetModal"
        src="./../assets/image/reply.png"
        alt="reply"
      />
      <img
        v-if="oneTweet.isLiked"
        @click.stop.prevent="deleteLiked(oneTweet.id)"
        class="icon"
        src="https://github.com/ziwenying/simple-twitter-frontend/blob/followpage/src/assets/image/red-heart.png?raw=true"
        alt="heart"
      />
      <img
        v-if="!oneTweet.isLiked"
        @click.stop.prevent="addLiked(initialTweet.id)"
        class="icon"
        src="https://github.com/ziwenying/simple-twitter-frontend/blob/followpage/src/assets/image/heart.png?raw=true"
        alt="heart"
      />
    </div>
  </div>
</template>

<script>
import { exactTimeFilter } from "./../utils/mixins";

export default {
  name: "Reply",
  mixins: [exactTimeFilter],
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      oneTweet: {},
    };
  },
  created() {
    this.fetchTweet();
  },
  methods: {
    fetchTweet() {
      this.oneTweet = this.initialTweet;
    },
    isClickedTweet() {
      // 被點擊的那則留言的資料，傳到父層 User.vue
      this.oneTweet = this.initialTweet;
      this.$emit("after-click-reply", this.oneTweet);
    },
    addLiked() {
      // /api/tweets/:id/like
      this.oneTweet = {
        ...this.oneTweet,
        isLiked: !this.oneTweet.isLiked,
        likeCount: this.oneTweet.likeCount + 1,
      };
    },
    deleteLiked() {
      // /api/tweets/:id/unlike
      this.oneTweet = {
        ...this.oneTweet,
        isLiked: !this.oneTweet.isLiked,
        likeCount: this.oneTweet.likeCount - 1,
      };
    },
  },
};
</script>

<style scoped lang="scss">
$Secondary: #6c757d;
$black: #171725;
$light-blue2: #e6ecf0;

.main-tweet-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 16px;
  .tweet-title {
    display: flex;
    margin: 16px 0 10px 0;
    .user-avatar {
      width: 50px;
      height: 50px;
    }
    .tweet-title-name-account {
      margin: 0 0 0 8px;
      .account {
        color: $Secondary;
      }
    }
  }
  .tweet-text {
    .text {
      font-size: 24px;
    }
    .time {
      margin: 8px 0;
      font-size: 14px;
      color: $Secondary;
    }
  }
  .count {
    display: flex;
    padding: 16px 0;
    border-top: $light-blue2 1px solid;
    border-bottom: $light-blue2 1px solid;
    .count-reply,
    .count-like {
      display: flex;
      font-size: 19px;
      font-weight: 500;
      p:nth-child(2) {
        margin: 0 0 0 2px;
        color: $Secondary;
      }
    }
    .count-like {
      margin: 0 0 0 24px;
    }
  }
  .tweet-reply-heart {
    display: flex;
    margin: 16px 0;
    .icon {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    img:nth-child(1) {
      margin: 0 133px 0 0;
    }
  }
}
</style>