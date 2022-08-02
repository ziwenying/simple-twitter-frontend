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
            <img class="arrow" src="./../assets/image/arrow.png" alt="arrow" />
          </router-link>
          <div class="name-tweet">
            <p class="name">John Doe</p>
            <p class="tweet-count">25 推文</p>
          </div>
        </div>
        <!-- component FollowerNavPills.vue -->
        <FollowerNavPills />
        <!-- UserFollowers.vue, UserFollowings.vue -->
        <router-view class="bottom-lists scrollbar" />
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
        id: -1,
        name: "",
        account: "",
        email: "",
        image: "",
        role: "",
      },
      isAuthenticated: false,
      topPopular: [],
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    console.log(userId);
    this.fetchPopular();
  },
  methods: {
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