<template>
  <!-- component Followers -->
  <Followers :followerList="followerList" />
</template>

<script>
import Followers from "../components/Followers.vue";

export default {
  name: "UserFollowers",
  components: {
    Followers,
  },
  props: {
    followerList: {
      type: Array,
      required: true,
    },
  },
};
</script>