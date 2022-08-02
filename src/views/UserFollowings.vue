<template>
  <!-- component Followers -->
  <Followers :followingList="followingList" />
</template>

<script>
import Followers from "../components/Followers.vue";

export default {
  name: "UserFollowings",
  components: {
    Followers,
  },
  props: {
    followingList: {
      type: Array,
      required: true,
    },
  },
};
</script>