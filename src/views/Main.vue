<template>
  <div class="row outer-main-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 main-nav" />
    <!-- MainPage.vue -->
    <router-view
      :initialTweets="tweets"
      :popular="popular"
      class="col-7 main-page scrollbar"
    />
    <!--component Populars -->
    <Populars class="col-3 popular" />
    <!-- Modal -->
    <CreateTweetModal/>
    <ReplyModal/>
  </div>
</template>

<script>
import Populars from "../components/Populars.vue";
import Navbar from "../components/Navbar.vue";
import CreateTweetModal from "../components/CreateTweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue";

// const userDummyData = {
//   currentUser: {},
//   tweets: [],
//   users: [],
//   newTweet: "",
// };
const tweetsDummyData = [
  {
    id: 7,
    text: "11Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    user: {
      id: 1,
      name: "Orange",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      account: "orange",
    },
    createdAt: "2022-07-04T00:55:09.000Z",
    isLiked: true,
    likeCount: 5,
    commentCount: 3,
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
];

export default {
  name: "MainPage",
  components: {
    Populars,
    Navbar,
    ReplyModal,
    CreateTweetModal
  },
  data() {
    return {
      tweets: [],
      popular: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.tweets = tweetsDummyData;
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