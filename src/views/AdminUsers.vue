<template>
  <div class="admin-users-wrapper row">
    <Navbar class="col-2 pl-0" />
    <!-- <div>後台使用者列表</div> -->
    <AdminUserCards class="col-10 p-0" :initial-users="users"/>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import AdminUserCards from "./../components/AdminUserCards.vue";
const dummyData = {
  users: [
    {
      id: 14,
      name: "user1",
      account: "user1",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 10000,
      likeCount: 329,
      followingCount: 3214,
      followerCount: 1000,
    },
    {
      id: 24,
      name: "user2",
      account: "user2",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 1000000,
      likeCount: 2330000,
      followingCount: 25600,
      followerCount: 1563,
    },
    {
      id: 34,
      name: "user3",
      account: "user3",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 55689,
      likeCount: 7613,
      followingCount: 22000,
      followerCount: 55555,
    },
    {
      id: 44,
      name: "user4",
      account: "user4",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 10,
      likeCount: 28,
      followingCount: 2,
      followerCount: 2,
    },
    {
      id: 54,
      name: "user5",
      account: "user5",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 10,
      likeCount: 28,
      followingCount: 1,
      followerCount: 2,
    },
    {
      id: 4,
      name: "root",
      account: "root",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 0,
      likeCount: 0,
      followingCount: 0,
      followerCount: 0,
    },
        {
      id: 4,
      name: "root",
      account: "root",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 0,
      likeCount: 0,
      followingCount: 0,
      followerCount: 0,
    },
        {
      id: 4,
      name: "root",
      account: "root",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 0,
      likeCount: 0,
      followingCount: 0,
      followerCount: 0,
    },
        {
      id: 4,
      name: "root",
      account: "root",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 0,
      likeCount: 0,
      followingCount: 0,
      followerCount: 0,
    },
        {
      id: 4,
      name: "root",
      account: "root",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 0,
      likeCount: 0,
      followingCount: 0,
      followerCount: 0,
    },
        {
      id: 4,
      name: "root",
      account: "root",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 0,
      likeCount: 0,
      followingCount: 0,
      followerCount: 0,
    },
        {
      id: 4,
      name: "root",
      account: "root",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover:
        "https://github.com/ritachien/twitter-api-2022/blob/main/assets/default-cover.png?raw=true",
      tweetCount: 0,
      likeCount: 0,
      followingCount: 0,
      followerCount: 0,
    },
  ],
};
export default {
  name: "AdminUsers",
  components: {
    Navbar,
    AdminUserCards,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
    }
  },
};
</script>