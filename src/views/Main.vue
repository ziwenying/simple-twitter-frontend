<template>
  <div class="outer-main-wrapper">
    <!--component Navbar -->

    <!-- MainPage.vue -->
    <router-view />

    <!--component Populars -->
    <Populars />
  </div>
</template>

<script>
import Populars from "../components/Populars.vue";

export default {
  name: "MainPage",
  components: {
    Populars,
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.outer-main-wrapper {
  // 這邊可以考慮用 grid
  display: flex;
}
</style>