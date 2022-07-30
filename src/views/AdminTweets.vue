<template>
  <div class="admin-tweets-wrapper row">
    <Navbar class="col-2 pl-0"/>
    <!-- <div>後台推文清單</div> -->
    <AdminTweetsList class="col-10" :initial-tweets="tweets" @after-delete-tweet="afterTweetDelete"/>
  </div>  
</template>
<script>
import Navbar from './../components/Navbar.vue'
import AdminTweetsList from './../components/AdminTweetsList.vue'

const dummyData = { 
  tweets: [
    {
        "id": 18,
        "UserId": 3,
        "description": "balabala",
        "createdAt": "2022-07-29T13:04:27.000Z",
        "updatedAt": "2022-07-29T14:25:43.000Z",
        "userId": 3,
        "User": {
            "id": 3,
            "name": "user2",
            "account": "user2",
            "avatar": "https://joeschmoe.io/api/v1/random"
        }
    },
    {
        "id": 8,
        "UserId": 2,
        "description": "balabababa",
        "createdAt": "2022-07-29T09:08:43.000Z",
        "updatedAt": "2022-07-29T14:25:43.000Z",
        "userId": 2,
        "User": {
            "id": 2,
            "name": "user1",
            "account": "user1",
            "avatar": "https://joeschmoe.io/api/v1/random"
        },   
    },
    {
        "id": 5,
        "UserId": 3,
        "description": "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
        "createdAt": "2022-07-29T09:08:43.000Z",
        "updatedAt": "2022-07-29T14:25:43.000Z",
        "userId": 3,
        "User": {
            "id": 3,
            "name": "apple",
            "account": "apple",
            "avatar": "https://joeschmoe.io/api/v1/random"
        },   
    },
    {
        "id": 9,
        "UserId": 3,
        "description": "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
        "createdAt": "2022-07-29T09:08:43.000Z",
        "updatedAt": "2022-07-29T14:25:43.000Z",
        "userId": 3,
        "User": {
            "id": 3,
            "name": "apple",
            "account": "apple",
            "avatar": "https://joeschmoe.io/api/v1/random"
        },   
    },
    {
        "id": 7,
        "UserId": 3,
        "description": "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
        "createdAt": "2022-07-29T09:08:43.000Z",
        "updatedAt": "2022-07-29T14:25:43.000Z",
        "userId": 3,
        "User": {
            "id": 3,
            "name": "apple",
            "account": "apple",
            "avatar": "https://joeschmoe.io/api/v1/random"
        },   
    },
    {
        "id": 66,
        "UserId": 3,
        "description": "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
        "createdAt": "2022-07-29T09:08:43.000Z",
        "updatedAt": "2022-07-29T14:25:43.000Z",
        "userId": 3,
        "User": {
            "id": 3,
            "name": "apple",
            "account": "apple",
            "avatar": "https://joeschmoe.io/api/v1/random"
        },   
    },
    {
        "id": 75,
        "UserId": 3,
        "description": "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
        "createdAt": "2022-07-29T09:08:43.000Z",
        "updatedAt": "2022-07-29T14:25:43.000Z",
        "userId": 3,
        "User": {
            "id": 3,
            "name": "apple",
            "account": "apple",
            "avatar": "https://joeschmoe.io/api/v1/random"
        },   
    },
    {
        "id": 45,
        "UserId": 3,
        "description": "一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十",
        "createdAt": "2022-07-29T09:08:43.000Z",
        "updatedAt": "2022-07-29T14:25:43.000Z",
        "userId": 3,
        "User": {
            "id": 3,
            "name": "apple",
            "account": "apple",
            "avatar": "https://joeschmoe.io/api/v1/random"
        },   
    },
    
]

}
export default {
  name: "AdminTweets",
  components: {
    Navbar,
    AdminTweetsList
  },
  data () {
    return {
      tweets:[]
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    fetchTweets() {
      this.tweets = dummyData.tweets
    },
    // 刪除tweet
    afterTweetDelete(tweetId) {
      console.log(tweetId)
      // 過濾掉要刪除的tweet
      this.tweets = this.tweets.filter(tweet => tweet.id !== tweetId)
    }
  }
};
</script>
