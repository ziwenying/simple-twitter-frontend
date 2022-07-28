<template>
  <ul class="nav-pills">
    <li class="nav-item nav-item-selected">
      <a href="#" class="pills-link pills-link-active">追隨者</a>
    </li>
    <li class="nav-item">
      <a href="#" class="pills-link">正在追隨</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FollowerNavPills",
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.nav-pills {
  display: flex;
  position: sticky;
  top: 74px;
  background: $white;
  border-right: $light-blue2 1px solid;
  border-bottom: $light-blue2 1px solid;
  border-left: $light-blue2 1px solid;
  z-index: 1;
  .nav-item {
    text-align: center;
    padding: 15px 0 15px 0;
    font-weight: 700;
    font-size: 15px;
    width: 130px;
    .pills-link {
      color: $Secondary;
    }
    .pills-link:hover {
      color: $brand-color;
    }
    // 點擊後亮
    .pills-link-active {
      color: $brand-color;
    }
  }
  .nav-item:hover {
    cursor: pointer;
    color: $brand-color;
  }
  // 點擊後亮
  .nav-item-selected {
    height: 100%;
    border-bottom: 2px $brand-color solid;
  }
}
</style>