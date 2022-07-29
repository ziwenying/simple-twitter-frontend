<template>
  <div class="tweet-lists">
    <div v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
      <a href="#">
        <img class="user-avatar" :src="tweet.user.avatar" alt="user-avatar" />
      </a>
      <div class="tweet-content">
        <div class="tweet-title">
          <p class="name">{{ tweet.user.name }}</p>
          <p class="account">
            @{{ tweet.user.account }}&nbsp;‧&nbsp;{{
              tweet.createdAt | fromNow
            }}
          </p>
        </div>
        <div class="tweet-text">
          <p>
            {{ tweet.text }}
          </p>
        </div>
        <div class="tweet-reply-heart">
          <!-- 要跳出 modal -->
          <div class="tweet-reply">
            <img
              @click="isClickedTweet(tweet.id)"
              data-toggle="modal"
              data-target="#replyTweetModal"
              class="icon"
              src="https://github.com/ziwenying/simple-twitter-frontend/blob/followpage/src/assets/image/reply.png?raw=true"
              alt="reply"
            />
            <p>{{ tweet.commentCount }}</p>
          </div>
          <div class="tweet-heart">
            <img
              v-if="tweet.isLiked"
              @click.stop.prevent="deleteLiked(tweet.id)"
              class="icon"
              src="https://github.com/ziwenying/simple-twitter-frontend/blob/followpage/src/assets/image/red-heart.png?raw=true"
              alt="heart"
            />
            <img
              v-if="!tweet.isLiked"
              @click.stop.prevent="addLiked(tweet.id)"
              class="icon"
              src="https://github.com/ziwenying/simple-twitter-frontend/blob/followpage/src/assets/image/heart.png?raw=true"
              alt="heart"
            />
            <p>{{ tweet.likeCount }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "MainTweets",
  mixins: [fromNowFilter],
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tweets: [],
      oneTweet: {},
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.tweets = this.initialTweets;
    },
    isClickedTweet(tweetId) {
      // 回覆推
      this.oneTweet = this.tweets.find((tweet) => {
        return tweet.id === tweetId;
      });
      // 得到，被點擊那則推文的資料 -> 傳到父曾 MainPage.vue
      this.$emit("after-click-reply", this.oneTweet);
    },
    addLiked(tweetId) {
      this.tweets = this.tweets.map((tweet) => {
        return tweetId === tweet.id
          ? {
              ...tweet,
              isLiked: !tweet.isLiked,
              likeCount: tweet.likeCount + 1,
            }
          : tweet;
      });
    },
    deleteLiked(tweetId) {
      this.tweets = this.tweets.map((tweet) => {
        return tweetId === tweet.id
          ? {
              ...tweet,
              isLiked: !tweet.isLiked,
              likeCount: tweet.likeCount - 1,
            }
          : tweet;
      });
    },
  },
};
</script>


<style scoped lang="scss">
@import "./../assets/application.scss";

.tweet-lists {
  .tweet-list {
    height: 168px;
    width: 100%;
    display: flex;
    padding: 0 0 0 23px;
    border: $light-blue2 1px solid;
    .user-avatar {
      margin: 16px 8px 0 0;
      width: 50px;
      height: 50px;
    }
    .tweet-content {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .tweet-title {
        display: flex;
        align-items: center;
        .name {
          margin: 0 8px 0 0;
          color: $black;
          font-size: 16px;
          font-weight: 700;
        }
        .account {
          color: $Secondary;
          font-size: 14px;
        }
      }
      .tweet-text {
        font-size: 16px;
        line-height: 26px;
      }
      .tweet-reply-heart {
        display: flex;
        .tweet-reply,
        .tweet-heart {
          display: flex;
          align-items: center;
          margin: 0 41px 0 0;
          font-size: 14px;
          .icon {
            width: 14px;
            height: 14px;
            margin: 0 8px 0 0;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>