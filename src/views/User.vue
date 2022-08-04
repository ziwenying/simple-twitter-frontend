<template>
  <div class="row outer-user-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 user-nav" />
    <div class="col-7 user-page">
      <div class="user-outer">
        <div class="reply-lists-title">
          <router-link :to="{ name: 'main-page' }">
            <img class="arrow" src="~@/assets/image/arrow.png" alt="arrow" />
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
          :initialReplies="replies"
          @after-click-reply="afterClickReply"
          class="scrollbar bottom-lists"
        />
      </div>
    </div>
    <!--component Populars -->
    <Populars :initialTopPopular="topPopular" class="col-3 popular" />
    <!-- component UserEditModal -->
    <UserEditModal
      @after-submit-profile="afterSubmitProfile"
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
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";
import tweetsAPI from "./../apis/tweets";

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
      id: 11,
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
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      targetProfile: {
        id: -1,
        account: "",
        email: "",
        name: "",
        avatar: "",
        cover: "",
        introduction: "",
        role: "",
      },
      tweets: [],
      likeTweets: [],
      replies: [],
      topPopular: [],
      replyModalData: {},
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 監聽路由
    const { id } = to.params;
    this.fetchProfile(id);
    this.fetchTweets();
    this.fetchReplies(id);
    next();
  },
  created() {
    //透過 id 取得指定使用者的資料
    const { id } = this.$route.params;
    this.fetchData(id);
    this.fetchProfile(id);
    this.fetchTweets();
    this.fetchReplies(id);
  },
  methods: {
    async fetchProfile(userId) {
      try {
        const response = await usersAPI.getTheUser({ userId });
        if (response.statusText !== "OK") {
          throw new Error("無法取得使用者資料，請稍後再試");
        }
        const {
          id,
          account,
          email,
          name,
          avatar,
          cover,
          introduction,
          role,
          followerCount,
          followingCount,
        } = {
          id: response.data.id,
          account: response.data.account,
          email: response.data.email,
          name: response.data.name,
          avatar: response.data.avatar,
          cover: response.data.cover,
          introduction: response.data.introduction,
          role: response.data.role,
          followerCount: response.data.followerCount,
          followingCount: response.data.followingCount,
        };
        this.targetProfile = {
          id,
          account,
          email,
          name,
          avatar,
          cover,
          introduction,
          role,
          followerCount,
          followingCount,
        };
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    async fetchTweets() {
      try {
        const response = await tweetsAPI.tweets.getTweets();
        if (response.statusText !== "OK") {
          throw new Error("無法取得推文資料，請稍後再試");
        }
        this.tweets = response.data;
        console.log(this.tweets);
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    async fetchReplies(id) {
      try {
        const response = await usersAPI.getTheUserReplies({
          userId: id,
        });
        if (response.statusText !== "OK") {
          throw new Error("無法取得留言資料，請稍後再試");
        }
        this.replies = response.data;
        console.log("reply1", response.data);
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得留言資料，請稍後再試",
        });
      }
    },
    fetchData() {
      // /api/tweets 使用 id 取得所有推文
      // this.tweets = DummyData.tweets;
      this.likeTweets = this.tweets.filter((tweet) => {
        return tweet.isLiked === true;
      });
      //GET  /api/tweets/:tweet_id/replies 取得所有回覆
      this.replies = DummyData.replies;
      //GET /api/followships 取得前十使用者
      this.topPopular = DummyData.users;
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
    async afterSubmitProfile(formData) {
      // for (let [name, value] of formData.entries()) {
      //   console.log(name, value);
      // }
      try {
        const response = await usersAPI.update({
          userId: this.currentUser.id,
          formData,
        });
        // console.log("id", this.currentUser.id);
        // console.log("edit", response.data);
        // 更新後的資料，渲染用
        if (response.statusText === "OK") {
          throw new Error("無法編輯個人資料，請稍後再試");
        }
        // 及時更新圖
        const data = response.data;
        const { name, avatar, cover, introduction } = {
          name: data.name,
          avatar: data.avatar,
          cover: data.cover,
          introduction: data.introduction,
        };
        this.targetProfile = {
          ...this.targetProfile,
          name,
          avatar,
          cover,
          introduction,
        };
        Toast.fire({
          icon: "success",
          title: "個人資料編輯成功",
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法編輯個人資料，請稍後再試",
        });
      }
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