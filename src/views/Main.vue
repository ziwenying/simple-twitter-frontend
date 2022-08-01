<template>
  <div class="row outer-main-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 main-nav" />
    <!-- MainPage.vue & ReplyList -->
    <router-view
      :initialTweets="tweets"
      :newReply="newReply"
      :popular="popular"
      @after-submit-tweet="afterSubmitTweet"
      @after-click-reply="afterClickReply"
      class="col-7 main-page scrollbar"
    />
    <!--component Populars -->
    <Populars class="col-3 popular" />
    <!-- Modal -->
    <CreateTweetModal @after-submit-tweet="afterSubmitTweet" />
    <ReplyModal
      @after-submit-reply="afterSubmitReply"
      :replyModalData="replyModalData"
    />
  </div>
</template>

<script>
import Populars from "../components/Populars.vue";
import Navbar from "../components/Navbar.vue";
import CreateTweetModal from "../components/CreateTweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue";

const DummyData = {
  currentUser: {
    id: -1,
    name: "",
    email: "",
    avatar: "",
    role: "user",
  },
  tweets: [
    {
      id: 7,
      text: "這個時間11Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      createdAt: "2022-07-29T08:41:42.564Z",
      isLiked: true,
      likeCount: 5,
      commentCount: 3,
      user: {
        id: 1,
        name: "Orange",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
        account: "orange",
      },
    },
    {
      id: 1,
      text: "213Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      user: {
        id: 1,
        name: "Apple",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
        account: "apple",
      },
      createdAt: "2022-07-04T00:55:09.000Z",
      isLiked: false,
      likeCount: 5,
      commentCount: 3,
    },
    {
      id: 2,
      text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      user: {
        id: 1,
        name: "Apple",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
        account: "apple",
      },
      createdAt: "2022-07-04T00:55:09.000Z",
      isLiked: false,
      likeCount: 5,
      commentCount: 3,
    },
    {
      id: 3,
      text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      user: {
        id: 1,
        name: "Apple",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
        account: "apple",
      },
      createdAt: "2022-07-04T00:55:09.000Z",
      isLiked: false,
      likeCount: 5,
      commentCount: 3,
    },
    {
      id: 4,
      text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      user: {
        id: 1,
        name: "Apple",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
        account: "apple",
      },
      createdAt: "2022-07-04T00:55:09.000Z",
      isLiked: false,
      likeCount: 5,
      commentCount: 3,
    },
    {
      id: 5,
      text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      user: {
        id: 1,
        name: "Apple",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
        account: "apple",
      },
      createdAt: "2022-07-04T00:55:09.000Z",
      isLiked: false,
      likeCount: 5,
      commentCount: 3,
    },
    {
      id: 6,
      text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      user: {
        id: 1,
        name: "Apple",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
        account: "apple",
      },
      createdAt: "2022-07-04T00:55:09.000Z",
      isLiked: false,
      likeCount: 5,
      commentCount: 3,
    },
  ],
  // 活躍使用者
  users: [
    {
      id: -1,
      name: "",
      avatar: "",
      isFollowed: false,
    },
  ],
  newTweet: {
    user: {
      id: -1,
      name: "",
      avatar: "",
      account: "",
    },
    tweetText: "",
    likeCount: 0,
    commentCount: 0,
  },
};

export default {
  name: "MainPage",
  components: {
    Populars,
    Navbar,
    ReplyModal,
    CreateTweetModal,
  },
  data() {
    return {
      tweets: [],
      popular: [],
      currentUser: {
        id: -1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
        account: "apple01",
        email: "user1@example.com",
        role: "user",
      },
      replyModalData: {},
      newReply: {},
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.tweets = DummyData.tweets;
    },
    afterSubmitTweet(payload) {
      const { id, tweetText } = payload;
      // 新增推文
      // POST /api/tweets
      this.tweets.push({
        id: id,
        text: tweetText,
        likeCount: 0,
        commentCount: 0,
        createdAt: new Date(),
        // 留言的那個人 (currentUser)
        user: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          avatar: this.currentUser.avatar,
          account: this.currentUser.account,
        },
      });
    },
    afterClickReply(payload) {
      const { id, text, createdAt, user } = payload;
      this.replyModalData = {
        id,
        text,
        createdAt,
        userName: user.name,
        userAccount: user.account,
        userAvatar: user.avatar,
      };
    },
    afterSubmitReply(payload) {
      this.newReply = payload;
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
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>