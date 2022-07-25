<template>
  <div id="app">
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
.main-container {
  max-width: 1140px;
  margin: 0 auto;
  
}
</style>