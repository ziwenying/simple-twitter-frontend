<template>
  <div class="popular-wrapper">
    <h4 class="popular-title">推薦跟隨</h4>
    <div class="popular-lists">
      <div class="popular-list">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
        <div class="name-account">
          <p class="name">Pizza Hut</p>
          <p class="account">@pizzahut</p>
        </div>
        <button class="btn-setting">正在跟隨</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Populars",
};
</script>

<style scoped lang="scss">
$brand-color: #ff6600;
$light-blue2: #e6ecf0;
$white: #ffffff;
$gray2: #92929d;
$near-white: #fafafb;

%btn-style {
  height: 40px;
  background: $brand-color;
  color: $white;
  border-radius: 50px;
}

.popular-wrapper {
  background: $near-white;
  border-radius: 16px;
  width: 273px;
  .popular-title {
    padding: 24px 0 24px 24px;
    border-bottom: $light-blue2 1px solid;
  }
  .popular-lists {
    .popular-list {
      margin: 16px;

      .user-avatar {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>