<template>
  <div class="row outer-follow-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 main-nav" />
    <div class="col-7 follow-page scrollbar">
      <div class="follow-outer">
        <div class="follow-lists-title">
          <router-link
            :to="{ name: 'user', params: { userId: $route.params } }"
          >
            <img class="arrow" src="~@/assets/image/arrow.png" alt="arrow" />
          </router-link>
          <div class="name-tweet">
            <p class="name">{{ this.tweets[0].User.name }}</p>
            <p class="tweet-count">{{ this.tweets.length }}&ensp;推文</p>
          </div>
        </div>
        <!-- component FollowerNavPills.vue -->
        <FollowerNavPills />
        <!-- UserFollowers.vue, UserFollowings.vue -->
        <router-view
          :followerList="followerList"
          :followingList="followingList"
          class="bottom-lists scrollbar"
        />
      </div>
    </div>

    <!--component Populars -->
    <Populars :initialTopPopular="topPopular" class="col-3 popular" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FollowerNavPills from "../components/FollowerNavPills.vue";
import Populars from "../components/Populars.vue";

const DummyData = [
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
  }
]
    
const dummyData = {
  followers: [
    {
      followingId: 1,
      name: "white",
      account: "white",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "whitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhitewhite, blackblackblackblackblackblackblackblackblackblackblackblack",
      isFollowing: false, //我是否有追蹤
    },
    {
      followingId: 2,
      name: "black",
      account: "black",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "blackblackblackblackblackblackblackblackblackblackblackblack",
      isFollowing: true, //我是否有追蹤
      // isSubscribe: false, //我是否有開小鈴鐺
    },
    {
      followingId: 3,
      name: "brown",
      account: "brown",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "brownbrownbrownbrownbrownbrownbrownbrownbrownbrownbrownbrown",
      isFollowing: false, //我是否有追蹤
      // isSubscribe: false, //我是否有開小鈴鐺
    },
    {
      followingId: 4,
      name: "blue",
      account: "blue",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "blueblueblueblueblueblueblueblueblueblueblueblueblueblueblue",
      isFollowing: false, //我是否有追蹤
      // isSubscribe: false, //我是否有開小鈴鐺
    },
    {
      followingId: 5,
      name: "gray",
      account: "gray",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "graygraygraygraygraygraygraygraygraygraygraygraygraygraygraygraygraygraygraygray",
      isFollowing: false, //我是否有追蹤
      // isSubscribe: false, //我是否有開小鈴鐺
    },
  ],
  followings: [
    {
      followingId: 6,
      name: "red",
      account: "red",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "redredredredredredredredredredredredredredredredredredredred, blackblackblackblackblackblackblackblackblackblackblackblack",
      isFollowing: true, //我是否有追蹤
    },
    {
      followingId: 7,
      name: "yellow",
      account: "yellow",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "yellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellow",
      isFollowing: true, //我是否有追蹤
      // isSubscribe: false, //我是否有開小鈴鐺
    },
    {
      followingId: 8,
      name: "green",
      account: "green",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "greengreengreengreengreengreengreengreengreengreengreengreengreen",
      isFollowing: true, //我是否有追蹤
      // isSubscribe: false, //我是否有開小鈴鐺
    },
    {
      followingId: 9,
      name: "blue",
      account: "blue",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "blueblueblueblueblueblueblueblueblueblueblueblueblueblueblue",
      isFollowing: true, //我是否有追蹤
      // isSubscribe: false, //我是否有開小鈴鐺
    },
    {
      followingId: 10,
      name: "purple",
      account: "purple",
      avatar:
        "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
      selfIntroduction:
        "purplepurplepurplepurplepurplepurplepurplepurplepurplepurplepurplepurplepurplepurplepurplepurplepurple",
      isFollowing: true, //我是否有追蹤
      // isSubscribe: false, //我是否有開小鈴鐺
    },
  ],
};
const dummyTweets = [
  {
    id: 43,
    description: "balabala",
    createdAt: "2022-07-30T09:39:15.000Z",
    replyCount: 3,
    likeCount: 2,
    User: {
      id: 6,
      name: "user5",
      account: "user5",
      avatar: "https://avatar-url",
    },
    isLiked: false,
  },
  {
    id: 49,
    description: "balabababa",
    createdAt: "2022-07-29T17:27:20.000Z",
    replyCount: 3,
    likeCount: 0,
    User: {
      id: 6,
      name: "user5",
      account: "user5",
      avatar: "https://avatar-url",
    },
    isLiked: false,
  },
];

export default {
  name: "UserFollowList",
  components: {
    Navbar,
    Populars,
    FollowerNavPills,
  },
  data() {
    return {
      currentUser: {
        id: 5,
        name: "user1",
        avatar:
          "https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/user-image.png?raw=true",
        account: "apple01",
        email: "user1@example.com",
        role: "user",
      },
      isAuthenticated: false,
      topPopular: [],
      followerList: [],
      followingList: [],
      tweets: [],
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    console.log(userId);
    this.fetchPopular();
    this.fetchFollowList(userId);
  },
  methods: {
    fetchFollowList(userId) {
      console.log("userid", userId); //取跟隨資料用
      ///api/users/:id/followers 某使用者的跟隨者
      this.followerList = dummyData.followers;
      ///api/users/:id/followings 某使用者追蹤中的人
      this.followingList = dummyData.followings;
      // /api/tweets (利用使用者 id 取得所有推文，計算推文數量使用)
      this.tweets = dummyTweets;
    },
    fetchPopular() {
      //GET /api/followships
      this.topPopular = DummyData;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.outer-follow-wrapper {
  .follow-page {
    overflow-y: scroll;
    max-height: 914px;
    .follow-outer {
      .follow-lists-title {
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        height: 74px;
        background: $white;
        border: $light-blue2 1px solid;
        z-index: 1;
        .arrow {
          margin: 0 0 0 28px;
          width: 17px;
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