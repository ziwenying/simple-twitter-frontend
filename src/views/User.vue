<template>
  <div class="row outer-user-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 user-nav" />
    <div class="col-7 user-page">
      <div class="user-outer">
        <div class="reply-lists-title">
          <router-link :to="{ name: 'main-page' }">
            <img class="arrow" src="./../assets/image/arrow.png" alt="arrow" />
          </router-link>
          <div class="name-tweet">
            <p class="name">{{ targetProfile.name }}</p>
            <p class="tweet-count">{{ targetProfile.tweetsCount }} 推文</p>
          </div>
        </div>
        <!-- component UserProfileCard.vue -->
        <UserProfileCard :targetProfile="targetProfile" />
        <!-- component UserNavPills.vue -->
        <UserNavPills />
        <!-- view MainTweets.vue or Replies.vue -->
        <router-view
          :initialTweets="tweets"
          :initialLikeTweets="likeTweets"
          :replies="replies"
          @after-click-reply="afterClickReply"
          class="scrollbar bottom-lists"
        />
      </div>
    </div>
    <!--component Populars -->
    <Populars class="col-3 popular" />
    <!-- component UserEditModal -->
    <UserEditModal
      @after-submit="afterSubmit"
      :initialTargetProfile="targetProfile"
    />
    <CreateTweetModal />
    <ReplyModal :replyModalData="replyModalData" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserProfileCard from "../components/UserProfileCard.vue";
import UserNavPills from "../components/UserNavPills.vue";
import Populars from "../components/Populars.vue";
import UserEditModal from "../components/UserEditModal.vue";
import CreateTweetModal from "../components/CreateTweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue";

const dummyDataProfile = {
  id: 2,
  account: "user1",
  email: "user1@example.com",
  name: "user1",
  avatar:
    "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
  cover:
    "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/profile-background.png?raw=true",
  introduction:
    "balabababa, Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  role: "user",
  createdAt: "2022-07-29T14:25:42.000Z",
  updatedAt: "2022-07-29T14:25:42.000Z",
  followerCount: 59, //新增
  followingCount: 34, //新增
  tweetsCount: 25, //新增
};
const DummyData = {
  currentUser: {
    id: -1,
    name: "",
    email: "",
    avatar: "",
    role: "false",
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
      isLiked: true,
      likeCount: 9,
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
      isLiked: true,
      likeCount: 2,
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
      likeCount: 1,
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
      isLiked: true,
      likeCount: 4,
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
  // 使用者回覆過的留言
  replies: [
    {
      id: 1,
      text: "早安午安晚安Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "nononono!!", //推文的主人
      // 留言者的資料
      user: {
        id: 1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
    {
      id: 2,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "apple", //新增推文的主人
      // 留言者的資料
      user: {
        id: 1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
    {
      id: 2,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "apple", //新增推文的主人
      // 留言者的資料
      user: {
        id: 1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
    {
      id: 3,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "apple1", //新增推文的主人
      // 留言者的資料
      user: {
        id: 4,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
    {
      id: 5,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "apple", //新增推文的主人
      // 留言者的資料
      user: {
        id: 1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
    {
      id: 6,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "sleeping", //新增推文的主人
      // 留言者的資料
      user: {
        id: 1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
    {
      id: 7,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "you", //新增推文的主人
      // 留言者的資料
      user: {
        id: 1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
    {
      id: 8,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "haha", //新增推文的主人
      // 留言者的資料
      user: {
        id: 1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
    {
      id: 9,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "apple", //新增推文的主人

      // 留言者的資料
      user: {
        id: 1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
    {
      id: 10,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      tweetMaster: "banana", //新增推文的主人
      // 留言者的資料
      user: {
        id: 1,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/avatar.png?raw=true",
        account: "user1",
      },
      createdAt: "2022-07-29T08:41:42.564Z",
    },
  ],
};

export default {
  name: "User",
  components: {
    Navbar,
    UserProfileCard,
    UserNavPills,
    Populars,
    UserEditModal,
    ReplyModal,
    CreateTweetModal,
  },
  data() {
    return {
      targetProfile: {
        id: 2,
        account: "user1",
        email: "user1@example.com",
        name: "user1",
        avatar: "https://avatar-url",
        cover: "https://cover-url",
        introduction: "balabababa",
        role: "user",
        createdAt: "2022-07-29T14:25:42.000Z",
        updatedAt: "2022-07-29T14:25:42.000Z",
      },
      tweets: [],
      likeTweets: [],
      replies: [],
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
    };
  },
  created() {
    //透過 id 取得指定使用者的資料
    const { id } = this.$route.params;
    this.fetchData(id);
  },
  methods: {
    fetchData() {
      // /api/users/:id 取得指定使用者的資料
      //用 this.$route.parmas 給後端去取
      this.targetProfile = dummyDataProfile;
      // /api/tweets 取得所有推文
      this.tweets = DummyData.tweets;
      this.likeTweets = this.tweets.filter((tweet) => {
        return tweet.isLiked === true;
      });
      //GET  /api/tweets/:tweet_id/replies 取得
      this.replies = DummyData.replies;
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
    afterSubmit(formData) {
      //Put /api/users/:id 編輯自己的資料
      let arrayFormData = [];
      for (let [name, value] of formData.entries()) {
        // 撈出更新的資料
        arrayFormData.push(value);
        console.log([name]);
      }
      console.log(1, arrayFormData);
      // 下面更新使用者的資料使用
      this.targetProfile = {
        ...this.targetProfile,
        avatar: "https://avatar-url",
        cover: "https://cover-url",
        name: arrayFormData[2],
        introduction: arrayFormData[3],
      };
    },
  },
};
</script>
<style scoped lang="scss">
@import "./../assets/application.scss";

.outer-user-wrapper {
  .user-page {
    .user-outer {
      .reply-lists-title {
        display: flex;
        align-items: center;
        margin: 16px 0 17px 0;
        background: $white;
        .arrow {
          margin: 0 0 0 28px;
          width: 14px;
          height: 14px;
          font-weight: 700;
        }
        .name-tweet {
          margin: 0 0 0 19px;
          .name {
            font-size: 18px;
            font-weight: 700;
          }
          .tweet-count {
            color: $Secondary;
            font-size: 13px;
          }
        }
      }
    }
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