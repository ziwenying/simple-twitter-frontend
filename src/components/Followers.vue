<template>
  <div class="follow-lists">
    <div class="follow-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="follow-content">
        <p class="follow-name">Apple</p>
        <p class="follow-intro">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
      <!-- v-if -->
      <!-- <button class="btn-follow">正在跟隨</button> -->
      <button class="btn-unfollow">跟隨</button>
    </div>
    <div class="follow-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="follow-content">
        <p class="follow-name">Apple</p>
        <p class="follow-intro">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
      <!-- v-if -->
      <button class="btn-follow">正在跟隨</button>
      <!-- <button class="btn-unfollow">跟隨</button> -->
    </div>
    <div class="follow-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="follow-content">
        <p class="follow-name">Apple</p>
        <p class="follow-intro">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
      <!-- v-if -->
      <!-- <button class="btn-follow">正在跟隨</button> -->
      <button class="btn-unfollow">跟隨</button>
    </div>
    <div class="follow-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="follow-content">
        <p class="follow-name">Apple</p>
        <p class="follow-intro">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
      <!-- v-if -->
      <!-- <button class="btn-follow">正在跟隨</button> -->
      <button class="btn-unfollow">跟隨</button>
    </div>
    <div class="follow-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="follow-content">
        <p class="follow-name">Apple</p>
        <p class="follow-intro">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
      <!-- v-if -->
      <!-- <button class="btn-follow">正在跟隨</button> -->
      <button class="btn-unfollow">跟隨</button>
    </div>
    <div class="follow-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="follow-content">
        <p class="follow-name">Apple</p>
        <p class="follow-intro">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
      <!-- v-if -->
      <!-- <button class="btn-follow">正在跟隨</button> -->
      <button class="btn-unfollow">跟隨</button>
    </div>
    <div class="follow-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="follow-content">
        <p class="follow-name">Apple</p>
        <p class="follow-intro">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
      <!-- v-if -->
      <!-- <button class="btn-follow">正在跟隨</button> -->
      <button class="btn-unfollow">跟隨</button>
    </div>
    <div class="follow-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="follow-content">
        <p class="follow-name">Apple</p>
        <p class="follow-intro">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
      <!-- v-if -->
      <!-- <button class="btn-follow">正在跟隨</button> -->
      <button class="btn-unfollow">跟隨</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowerNavPills",
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.follow-lists {
  border-right: $light-blue2 1px solid;
  .follow-list {
    display: flex;
    position: relative;
    max-height: 158px;
    padding: 16px 23px 16px 23px;
    border-bottom: $light-blue2 1px solid;
    border-left: $light-blue2 1px solid;
    .user-avatar {
      width: 50px;
      height: 50px;
    }
    .follow-content {
      margin: 0 0 0 8px;
      .follow-name {
        margin: 0 8px 0 0;
        font-weight: 700;
        color: $black;
      }
      .account-time {
        color: $Secondary;
        font-size: 14px;
      }
      .follow-intro {
        margin: 15px 0 0 0;
        line-height: 26px;
      }
    }
    .btn-follow {
      position: absolute;
      top: 8px;
      right: 30px;
      @extend %btn-style;
      width: 96px;
    }
    .btn-unfollow {
      position: absolute;
      top: 8px;
      right: 30px;
      @extend %btn-unfollowed-style;
      width: 64px;
    }
  }
}
</style>