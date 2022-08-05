<template>
  <!-- component Followers -->
  <Followers
    @after-followList-change-follow="afterFollowListChangeFollow"
    :followingList="followingList"
  />
</template>

<script>
import Followers from "../components/Followers.vue";
import { Toast } from "./../utils/helpers";
import userAPI from "./../apis/users";

export default {
  name: "UserFollowings",
  components: {
    Followers,
  },
  // 串聯 Populars
  props: {
    initialChangeFollow: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      followingList: [],
    };
  },
  watch: {
    initialChangeFollow() {
      const { id: userId } = this.$route.params;
      this.fetchFollowings(userId);
    },
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchFollowings(userId);
  },
  methods: {
    async fetchFollowings(userId) {
      try {
        const response = await userAPI.getFollowings({ userId });
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        this.followingList = data;
      } catch (error) {
        console.error(error.message);
        // 沒有跟隨中對象的情況
        if (error.message === "No followings found.") {
          this.followingList = [];
          return;
        } else {
          Toast.fire({
            icon: "error",
            title: "無法取得跟隨中的使用者資料",
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