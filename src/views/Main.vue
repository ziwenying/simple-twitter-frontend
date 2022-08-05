<template>
  <div class="row outer-main-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 main-nav" />
    <!-- MainPage.vue & ReplyList -->
    <router-view
      :initialTweets="tweets"
      :newReply="newReply"
      :popular="topPopular"
      @after-click-reply="afterClickReply"
      class="col-7 main-page scrollbar"
    />
    <!--component Populars -->
    <Populars :initialTopPopular="topPopular" class="col-3 popular" />
    <!-- Modal -->
    <CreateTweetModal @after-submit-tweet="afterSubmitTweet" />
    <ReplyModal
      :replyModalData="replyModalData"
      @main-after-submit-reply="fetchTweets"
    />
  </div>
</template>

<script>
import Populars from "../components/Populars.vue";
import Navbar from "../components/Navbar.vue";
import CreateTweetModal from "../components/CreateTweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets";
import userAPI from "./../apis/users";

export default {
  name: "MainPage",
  computed: {
    ...mapState(["currentUser"]),
  },
  components: {
    Populars,
    Navbar,
    ReplyModal,
    CreateTweetModal,
  },
  data() {
    return {
      tweets: [],
      topPopular: [],
      replyModalData: {},
      newReply: {},
    };
  },
  created() {
    this.fetchTweets();
    this.fetchPopular();
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await tweetsAPI.tweets.getTweets();
        if (response.statusText !== "OK") {
          throw new Error("無法取得推文資料，請稍後再試");
        }
        this.tweets = response.data;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    async fetchPopular() {
      try {
        const response = await userAPI.getTopUser();
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        this.topPopular = data;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推薦追蹤名單",
        });
      }
    },
    afterSubmitTweet(payload) {
      const { tweetId, description } = payload;
      // 新增的推文加入下面的推文清單中
      this.tweets.unshift({
        id: tweetId,
        description: description,
        likeCount: 0,
        replyCount: 0,
        isLiked: false,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          avatar: this.currentUser.avatar,
          account: this.currentUser.account,
        },
      });
    },
    afterClickReply(payload) {
      // 點擊回覆，顯示 modal 使用的資料
      const { id, description, User, createdAt } = payload;
      this.replyModalData = {
        id,
        description,
        userName: User.name,
        userAccount: User.account,
        userAvatar: User.avatar,
        createdAt: createdAt,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.outer-main-wrapper {
  .main-page {
    overflow-y: scroll;
    max-height: 914px;
  }
  .scrollbar {
    &::-webkit-scrollbar {
      width: 1px;
    }
  }
}
</style>