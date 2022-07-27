<template>
  <div class="reply-outer">
    <div class="reply-lists-title">
      <h4>←</h4>
      <h4 class="pb-4">推文</h4>
    </div>

    <div class="main-wrapper">
      <div class="block"></div>
      <!-- component TweetDetail -->
      <TweetDetail />
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

.reply-outer {
  position: relative;

  .reply-lists-title {
    display: flex;
    position: fixed;
    width: 45%; //這邊有問題
    background: $white;
    border-left: $light-blue2 1px solid;
    border-bottom: $light-blue2 1px solid;
    z-index: 1;
    h4:nth-child(1) {
      cursor: pointer;
    }
    h4 {
      height: 74px;
      padding: 24px 0 0 23px;
      font-size: 24px;
      font-weight: 700;
      z-index: 1;
    }
  }

  .main-wrapper {
    position: relative;
    border-left: $light-blue2 1px solid;
    border-right: $light-blue2 1px solid;
    border-bottom: $light-blue2 1px solid;
    .block {
      height: 74px;
    }
  }
}
</style>