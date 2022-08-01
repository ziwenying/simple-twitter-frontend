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
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

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
    async fetchTweets() {
      try {
        const {data} = await adminAPI.tweets.get()
        if (data.status === 'error') {
          throw new Error (data.message)
        }
        const tweets = data 
        this.tweets = tweets
      } catch (error) {
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得推文資料，請稍後再試'
        })
      }
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
