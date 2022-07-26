<template>
  <div class="main-tweet-wrapper">
    <div class="tweet-title">
      <img
        class="user-avatar"
        src="./../assets/image/user-image.png"
        alt="user-avatar"
      />
      <div class="tweet-title-name-account">
        <p class="name">Apple</p>
        <p class="account">@apple</p>
      </div>
    </div>
    <div class="tweet-text">
      <p class="text">
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip deserunt.
      </p>
      <p class="time">上午 10:05・2021年11月10日</p>
    </div>
    <div class="count">
      <div class="count-reply">
        <p>34</p>
        <p>回覆</p>
      </div>
      <div class="count-like">
        <p>808</p>
        <p>喜歡次數</p>
      </div>
    </div>
    <div class="tweet-reply-heart">
      <img class="icon" src="./../assets/image/reply.png" alt="reply" />
      <img class="icon" src="./../assets/image/heart.png" alt="heart" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Reply",
};
</script>

<style scoped lang="scss">
$Secondary: #6c757d;
$black: #171725;
$light-blue2: #e6ecf0;

.main-tweet-wrapper {
  display: flex;
  flex-direction: column;
  margin: 16px;

  .tweet-title {
    display: flex;
    margin: 16px 0 10px 0;

    .user-avatar {
      width: 50px;
      height: 50px;
    }
    .tweet-title-name-account {
      margin: 0 0 0 8px;
      .account {
        color: $Secondary;
      }
    }
  }
  .tweet-text {
    .text {
      font-size: 24px;
    }
    .time {
      margin: 8px 0;
      font-size: 14px;
      color: $Secondary;
    }
  }
  .count {
    display: flex;
    padding: 16px 0;
    border-top: $light-blue2 1px solid;
    border-bottom: $light-blue2 1px solid;
    .count-reply,
    .count-like {
      display: flex;
      font-size: 19px;
      font-weight: 500;
      p:nth-child(2) {
        margin: 0 0 0 2px;
        color: $Secondary;
      }
    }

    .count-like {
      margin: 0 0 0 24px;
    }
  }
  .tweet-reply-heart {
    display: flex;
    margin: 16px 0;
    .icon {
      width: 25px;
      height: 25px;
    }

    img:nth-child(1) {
      margin: 0 133px 0 0;
    }
  }
}
</style>