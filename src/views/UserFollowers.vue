<template>
  <!-- component Followers -->
  <Followers :followerList="followerList" />
</template>

<script>
import Followers from "../components/Followers.vue";
import { Toast } from './../utils/helpers'
import userAPI from './../apis/users'

export default {
  name: "UserFollowers",
  components: {
    Followers,
  },
  data() {
    return {
      followerList: [],
    }
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchFollowers(userId);
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
        // 沒有跟隨者的情況
        if (error.message === 'No followers found.') {
          this.followingList = []
          return
        } else {
          Toast.fire({
            icon: 'error',
            title: '無法取得跟隨者資料'
          })
        }
      }
    },
  }
};
</script>