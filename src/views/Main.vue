<template>
  <div class="row outer-main-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 main-nav" />
    <!-- MainPage.vue & ReplyList -->
    <router-view
      :initialTweets="tweets"
      :newReply="newReply"
      :popular="popular"
      @after-click-reply="afterClickReply"
      class="col-7 main-page scrollbar"
    />
    <!--component Populars -->
    <Populars :initialTopPopular="topPopular" class="col-3 popular" />
    <!-- Modal -->
    <CreateTweetModal @after-submit-tweet="afterSubmitTweet" />
    <ReplyModal :replyModalData="replyModalData" />
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
      id: 31,
      name: "GOOOOOOOOOOOO!",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: false,
    },
    {
      id: 32,
      name: "sgjs",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: true,
    },
    {
      id: 33,
      name: "Fhkhh",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: true,
    },
    {
      id: 34,
      name: "Wfjgj",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: true,
    },
    {
      id: 35,
      name: "zHtts",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: true,
    },
    {
      id: 36,
      name: "你好",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: false,
    },
    {
      id: 37,
      name: "很好",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: true,
    },
    {
      id: 38,
      name: "非常好啊啊",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: false,
    },
    {
      id: 39,
      name: "啊啊啊啊啊",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: true,
    },
    {
      id: 40,
      name: "Lahjkh",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
      account: "ahjkh",
      isFollowed: true,
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
      popular: [],
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
        const response = await tweetsAPI.getTweets();
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
    fetchPopular() {
      //GET /api/followships
      this.topPopular = DummyData.users;
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
        // 留言的那個人 (currentUser)
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          avatar: this.currentUser.avatar,
          account: this.currentUser.account,
        },
      });
    },
    afterClickReply(payload) {
      console.log("one", payload);
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
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>