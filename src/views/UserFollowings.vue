<template>
  <!-- component Followers -->
  <Followers :followingList="followingList" />
</template>

<script>
import Followers from "../components/Followers.vue";
import { Toast } from './../utils/helpers'
import userAPI from './../apis/users'

export default {
  name: "UserFollowings",
  components: {
    Followers,
  },
  data() {
    return {
      followingList: [],
    }
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchFollowings(userId)
  },
  methods: {
    async fetchFollowings(userId) {
      try {
        const response = await userAPI.getFollowings( {userId} )
        const { data } = response
        if (response.statusText !== 'OK') {
          throw new Error (data.message)
        }
        if (data.length === 0) {
          Toast.fire({
            icon: 'info',
            title: '您的追隨中清單是空的'
          })
        }
        this.followingList = data
      } catch(error) {
        console.error(error.message)
        {
          Toast.fire({
            icon: 'error',
            title: '無法取得追隨中的使用者資料'
          })
        }
      }
    },
  }
};
</script>