<template>
  <div class="admin-tweets-wrapper row">
    <Navbar class="col-2 pl-0"/>
    <!-- <div>後台推文清單</div> -->
    <AdminTweetsList class="col-10"/>
  </div>  
</template>

<script>
import Navbar from './../components/Navbar.vue'
import AdminTweetsList from './../components/AdminTweetsList.vue'
export default {
  name: "AdminTweets",
  components: {
    Navbar,
    AdminTweetsList
  }
};
</script>
