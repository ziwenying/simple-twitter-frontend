<template>
  <div class="tweet-lists">
    <div class="tweet-list" v-for="tweet in tweets" :key="tweet.id">
      <a href="#">
        <img class="user-avatar" :src="tweet.User.avatar" alt="user-avatar" />
      </a>
      <div class="tweet-content">
        <div class="tweet-title">
          <p class="name">{{ tweet.User.name }}</p>
          <p class="account">
            @{{ tweet.User.account }}&nbsp;‧&nbsp;{{
              tweet.createdAt | fromNow
            }}
          </p>
        </div>
        <div class="tweet-text">
          <p>
            {{ tweet.description }}
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
              src="~@/assets/image/reply.png"
              alt="reply"
            />
            <p>{{ tweet.replyCount }}</p>
          </div>
          <div class="tweet-heart">
            <img
              v-if="tweet.isLiked"
              @click.stop.prevent="deleteLiked(tweet.id)"
              class="icon"
              src="~@/assets/image/red-heart.png"
              alt="heart"
            />
            <img
              v-if="!tweet.isLiked"
              @click.stop.prevent="addLiked(tweet.id)"
              class="icon"
              src="~@/assets/image/heart.png"
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
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets";

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
  watch: {
    initialTweets(newValue) {
      this.tweets = [...newValue];
    },
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.tweets = this.initialTweets;
    },
    isClickedTweet(tweetId) {
      // 被點擊的那則留言的資料，傳到父層 User.vue
      this.oneTweet = this.tweets.find((tweet) => {
        return tweet.id === tweetId;
      });
      this.$emit("after-click-reply", this.oneTweet);
    },
    async addLiked(tweetId) {
      try {
        const { data } = await tweetsAPI.tweets.addLiked({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweets = this.tweets.map((tweet) => {
          return tweetId === tweet.id
            ? {
                ...tweet,
                isLiked: !tweet.isLiked,
                likeCount: tweet.likeCount + 1,
              }
            : tweet;
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法將此推文加入喜歡的內容，請稍後再試",
        });
      }
    },
    async deleteLiked(tweetId) {
      try {
        const { data } = await tweetsAPI.tweets.deleteLiked({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweets = this.tweets.map((tweet) => {
          return tweetId === tweet.id
            ? {
                ...tweet,
                isLiked: !tweet.isLiked,
                likeCount: tweet.likeCount - 1,
              }
            : tweet;
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法將此推文從喜歡的內容移除，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.tweet-lists {
  overflow-y: scroll;
  height: 400px;
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
      border-radius: 50%;
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