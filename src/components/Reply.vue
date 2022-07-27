<template>
  <div class="reply-lists">
    <div class="reply-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="reply-content">
        <div class="reply-title">
          <p class="name">Devon Lane</p>
          <p class="account-time">@devon_lane・12 小時</p>
        </div>
        <div class="reply-who">
          <p class="reply">回覆</p>
          <p class="account">@apple</p>
        </div>
        <p class="text">
          former apple engineer shares a simple DIY fix to seal your surgical
          mask
        </p>
      </div>
    </div>
    <div class="reply-list">
      <a href="">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="reply-content">
        <div class="reply-title">
          <p class="name">Marvin McKinney</p>
          <p class="account-time">@MMcK・12 小時</p>
        </div>
        <div class="reply-who">
          <p class="reply">回覆</p>
          <p class="account">@apple</p>
        </div>
        <p class="text">
          Use your options to stand out from the crowd | Companies and Creatives
          Profiles
        </p>
      </div>
    </div>
    <div class="reply-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="reply-content">
        <div class="reply-title">
          <p class="name">Devon Lane</p>
          <p class="account-time">@devon_lane・12 小時</p>
        </div>
        <div class="reply-who">
          <p class="reply">回覆</p>
          <p class="account">@apple</p>
        </div>
        <p class="text">
          former apple engineer shares a simple DIY fix to seal your surgical
          mask
        </p>
      </div>
    </div>
    <div class="reply-list">
      <a href="">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="reply-content">
        <div class="reply-title">
          <p class="name">Marvin McKinney</p>
          <p class="account-time">@MMcK・12 小時</p>
        </div>
        <div class="reply-who">
          <p class="reply">回覆</p>
          <p class="account">@apple</p>
        </div>
        <p class="text">
          Use your options to stand out from the crowd | Companies and Creatives
          Profiles
        </p>
      </div>
    </div>
    <div class="reply-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="reply-content">
        <div class="reply-title">
          <p class="name">Devon Lane</p>
          <p class="account-time">@devon_lane・12 小時</p>
        </div>
        <div class="reply-who">
          <p class="reply">回覆</p>
          <p class="account">@apple</p>
        </div>
        <p class="text">
          former apple engineer shares a simple DIY fix to seal your surgical
          mask
        </p>
      </div>
    </div>
    <div class="reply-list">
      <a href="">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="reply-content">
        <div class="reply-title">
          <p class="name">Marvin McKinney</p>
          <p class="account-time">@MMcK・12 小時</p>
        </div>
        <div class="reply-who">
          <p class="reply">回覆</p>
          <p class="account">@apple</p>
        </div>
        <p class="text">
          Use your options to stand out from the crowd | Companies and Creatives
          Profiles
        </p>
      </div>
    </div>
    <div class="reply-list">
      <a href="#">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="reply-content">
        <div class="reply-title">
          <p class="name">Devon Lane</p>
          <p class="account-time">@devon_lane・12 小時</p>
        </div>
        <div class="reply-who">
          <p class="reply">回覆</p>
          <p class="account">@apple</p>
        </div>
        <p class="text">
          former apple engineer shares a simple DIY fix to seal your surgical
          mask
        </p>
      </div>
    </div>
    <div class="reply-list">
      <a href="">
        <img
          class="user-avatar"
          src="./../assets/image/user-image.png"
          alt="user-avatar"
        />
      </a>
      <div class="reply-content">
        <div class="reply-title">
          <p class="name">Marvin McKinney</p>
          <p class="account-time">@MMcK・12 小時</p>
        </div>
        <div class="reply-who">
          <p class="reply">回覆</p>
          <p class="account">@apple</p>
        </div>
        <p class="text">
          Use your options to stand out from the crowd | Companies and Creatives
          Profiles
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reply",
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

.reply-lists {
  .reply-list {
    display: flex;
    max-height: 158px;
    padding: 16px 23px 16px 23px;
    border-bottom: $light-blue2 1px solid;
    .user-avatar {
      width: 50px;
      height: 50px;
    }
    .reply-content {
      margin: 0 0 0 8px;
      .reply-title {
        display: flex;
        align-items: center;
        .name {
          margin: 0 8px 0 0;
          font-weight: 700;
          color: $black;
        }
        .account-time {
          color: $Secondary;
          font-size: 14px;
        }
      }
      .reply-who {
        display: flex;
        .reply {
          color: $Secondary;
        }
        .account {
          margin: 0 0 0 8px;
          color: $brand-color;
        }
      }
      .reply-who,
      .text {
        margin: 8px 0 0 0;
      }
    }
  }
}
</style>