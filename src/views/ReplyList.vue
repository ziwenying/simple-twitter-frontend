<template>
  <div class="reply-outer">
    <div class="reply-lists-title">
      <router-link :to="{ name: 'main-page' }">
        <img
          class="arrow"
          src="https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/arrow.png?raw=true"
          alt="arrow"
        />
      </router-link>
      <h4 class="pb-4">推文</h4>
    </div>
    <div class="main-wrapper">
      <!-- component TweetDetail -->
      <TweetDetail :initialTweet="tweet" @after-click-reply="afterClickReply" />
      <!-- component Reply -->
      <Reply :initialTweet="tweet" />
    </div>
  </div>
</template>

<script>
import Reply from "../components/Reply.vue";
import TweetDetail from "../components/TweetDetail.vue";

const DummyData = {
  id: 1,
  text: "搭拉拉拉拉拉，加一加一遊  faj nhksssshmksaruiaj, aqiraoisshmksaruiaj, asshmksaruiaj, a",
  // 上午 10:05・2021年11月10日
  createdAt: "2022-07-04T00:55:09.000Z",
  user: {
    id: 5,
    name: "巴娜娜",
    avatar:
      "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
    account: "banana",
  },
  isLiked: false,
  likeCount: 59,
  replyCount: 101,
};

export default {
  name: "ReplyList",
  components: {
    TweetDetail,
    Reply,
  },
  data() {
    return {
      tweet: {},
    };
  },
  created() {
    this.fetchTweet();
  },
  methods: {
    fetchTweet() {
      this.tweet = DummyData;
      // GET /api/tweets/:id 取得單一推文
    },
    afterClickReply(payload) {
      console.log("pay", payload);
      this.$emit("after-click-reply", payload);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.reply-outer {
  position: relative;
  .reply-lists-title {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background: $white;
    border-right: $light-blue2 1px solid;
    border-bottom: $light-blue2 1px solid;
    border-left: $light-blue2 1px solid;
    z-index: 1;
    h4:nth-child(1) {
      cursor: pointer;
    }
    h4 {
      padding: 24px 0 0 19px;
      font-size: 24px;
      font-weight: 700;
      z-index: 1;
    }
    .arrow {
      margin: 0 0 0 28px;
      width: 24px;
      height: 24px;
      z-index: 1;
    }
  }
  .main-wrapper {
    position: relative;
    border-right: $light-blue2 1px solid;
    border-left: $light-blue2 1px solid;
    border-bottom: $light-blue2 1px solid;
  }
}
</style>