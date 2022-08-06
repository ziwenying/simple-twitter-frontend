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
    props: {
    changeFollow : {
      type: Boolean,
      required: true
    }
  },
  components: {
    Followers,
  },
  data() {
    return {
      followerList: [],
    }
  },
  watch: {
    changeFollow() {
      const { id: userId } = this.$route.params;
      this.fetchFollowers(userId);
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
        if (data.length === 0) {
          Toast.fire({
            icon: 'info',
            title: '您的追隨者清單是空的'
          })
        }
        this.followerList = data
      } catch (error) {
        console.error(error.message)
         {
          Toast.fire({
            icon: 'error',
            title: '無法取得追隨者資料'
          })
        }
      }
    },
  }
};
</script>