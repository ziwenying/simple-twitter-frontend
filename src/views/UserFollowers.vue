<template>
  <!-- component Followers -->
  <Followers
    @after-followList-change-follow="afterFollowListChangeFollow"
    :followerList="followerList"
  />
</template>

<script>
import Followers from "../components/Followers.vue";
import { Toast } from "./../utils/helpers";
import userAPI from "./../apis/users";

export default {
  name: "UserFollowers",
  components: {
    Followers,
  },
  // 串聯 Populars
  props: {
    // initialChangeFollow 改變代表資料有從 Popular.vue 更新，重新向 api 取資料
    initialChangeFollow: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      followerList: [],
    };
  },
  watch: {
    initialChangeFollow() {
      const { id: userId } = this.$route.params;
      this.fetchFollowers(userId);
    },
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchFollowers(userId);
  },
  methods: {
    async fetchFollowers(userId) {
      try {
        const response = await userAPI.getFollowers({ userId });
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        this.followerList = data;
      } catch (error) {
        console.error(error.message);
        // 沒有跟隨者的情況
        if (error.message === "No followers found.") {
          this.followingList = [];
          return;
        } else {
          Toast.fire({
            icon: "error",
            title: "無法取得跟隨者資料",
          });
        }
      }
    },
    afterFollowListChangeFollow() {
      this.$emit("after-followList-change-follow");
    },
  },
};
</script>