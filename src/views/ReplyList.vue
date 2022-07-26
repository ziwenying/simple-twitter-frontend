<template>
  <div>
    <h4 class="pb-4">← 推文</h4>
    <div class="main-wrapper">
      <!-- component TweetDetail -->
      <TweetDetail />
      <div class="line"></div>
      <!-- component Reply -->
      <Reply />
    </div>
  </div>
</template>

<script>
import Reply from "../components/Reply.vue";
import TweetDetail from "../components/TweetDetail.vue";

export default {
  name: "ReplyList",
  components: {
    TweetDetail,
    Reply,
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

h4 {
  position: fixed;
  top: 0;
  width: 100%;
  height: 74px;
  background: $white;
  padding: 24px 0 0 23px;
  font-size: 24px;
  font-weight: 700;
  border-left: $light-blue2 1px solid;
  border-right: $light-blue2 1px solid;
  border-bottom: $light-blue2 1px solid;
  z-index: 1;
}

.main-wrapper {
  position: relative;
  margin: 74px 0 0 0;
  border-left: $light-blue2 1px solid;
  border-right: $light-blue2 1px solid;
  border-bottom: $light-blue2 1px solid;

  .line {
    border-bottom: $light-blue2 1px solid;
  }
}
</style>