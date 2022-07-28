<template>
  <div class="admin-users-wrapper row">
    <Navbar class="col-2 pl-0"/>
    <!-- <div>後台使用者列表</div> -->
    <AdminUserCards class="col-10 p-0"/>
  </div>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import AdminUserCards from './../components/AdminUserCards.vue'
export default {
  name: "AdminUsers",
  components: {
    Navbar,
    AdminUserCards
  }
};
</script>