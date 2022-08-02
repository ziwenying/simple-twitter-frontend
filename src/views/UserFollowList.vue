<template>
  <div class="row outer-follow-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 main-nav" />
    <div class="col-7 follow-page scrollbar">
      <div class="follow-outer">
        <div class="follow-lists-title">
          <router-link :to="{ path: `/users/${$route.params.id}/tweets` }">
            <img
              class="arrow"
              src="https://github.com/ziwenying/simple-twitter-frontend/blob/main/src/assets/image/arrow.png?raw=true"
              alt="arrow"
            />
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
import { Toast } from './../utils/helpers'
import userAPI from './../apis/users'
import tweetAPI from './../apis/tweet'

export default {
  name: "UserFollowList",
  components: {
    Navbar,
    Populars,
    FollowerNavPills,
  },
  data() {
    return {
      topPopular: [],
      followerList: [],
      followingList: [],
      tweets: [],
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchPopular();
    this.fetchFollowers(userId);
    this.fetchFollowings(userId)
    this.fetchTweets(userId)
  },
  methods: {
    async fetchFollowers(userId) {
      try {
        const response = await userAPI.getFollowers({ userId })
        const { data } = response
        if (response.statusText !== 'OK') {
          throw new Error (data.message)
        }
        this.followerList = data
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得跟隨者資料'
        })
      }
    },
    async fetchFollowings(userId) {
      try {
        const response = await userAPI.getFollowings( {userId} )
        const { data } = response
        this.followingList = data
      } catch(error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得跟隨中的使用者資料'
        })
      }
    },
    // 利用使用者 id 取得所有推文，計算推文數量使用
    async fetchTweets(userId) {
      try {
        const response = await tweetAPI.getTweets( {userId} )
        const { data } = response
        if (response.statusText !== 'OK') {
          throw new Error (data.message)
        }
        this.tweets = data;
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得推文數量資料'
        })
      }
    },
    async fetchPopular() {
      try {
        const response = await userAPI.getTopUser()
        const { data } = response
        if (response.statusText !== 'OK') {
          throw new Error(data.message)
        }
        this.topPopular = data 
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得推薦追蹤名單'
        })
      }
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