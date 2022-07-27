<template>
  <div class="tweets-list">
      <h4 class="title">
        推文清單
      </h4>
      <div class="tweets">
        <div class="tweet">
          <img class="avatar" src="~@/assets/image/user-image.png" alt="avatar">
          <div class="tweet-info">
            <div class="tweet-detail">
              <span class="user-name">Apple</span>
              <span class="account-created-time">@apple&#xb7;3小時</span>
            </div>
             <p class="tweet-text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <button class="delete-btn">✕</button>
        </div>
        <div class="tweet">
          <img class="avatar" src="~@/assets/image/user-image.png" alt="avatar">
          <div class="tweet-info">
            <div class="tweet-detail">
              <span class="user-name">Apple</span>
              <span class="account-created-time">@apple&#xb7;3小時</span>
            </div>
             <p class="tweet-text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <button class="delete-btn">✕</button>
        </div>
        <div class="tweet">
          <img class="avatar" src="~@/assets/image/user-image.png" alt="avatar">
          <div class="tweet-info">
            <div class="tweet-detail">
              <span class="user-name">Apple</span>
              <span class="account-created-time">@apple&#xb7;3小時</span>
            </div>
             <p class="tweet-text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <button class="delete-btn">✕</button>
        </div>
        <div class="tweet">
          <img class="avatar" src="~@/assets/image/user-image.png" alt="avatar">
          <div class="tweet-info">
            <div class="tweet-detail">
              <span class="user-name">Apple</span>
              <span class="account-created-time">@apple&#xb7;3小時</span>
            </div>
             <p class="tweet-text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <button class="delete-btn">✕</button>
        </div>
        <div class="tweet">
          <img class="avatar" src="~@/assets/image/user-image.png" alt="avatar">
          <div class="tweet-info">
            <div class="tweet-detail">
              <span class="user-name">Apple</span>
              <span class="account-created-time">@apple&#xb7;3小時</span>
            </div>
             <p class="tweet-text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <button class="delete-btn">✕</button>
        </div>
        <div class="tweet">
          <img class="avatar" src="~@/assets/image/user-image.png" alt="avatar">
          <div class="tweet-info">
            <div class="tweet-detail">
              <span class="user-name">Apple</span>
              <span class="account-created-time">@apple&#xb7;3小時</span>
            </div>
             <p class="tweet-text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <button class="delete-btn">✕</button>
        </div>
        <div class="tweet">
          <img class="avatar" src="~@/assets/image/user-image.png" alt="avatar">
          <div class="tweet-info">
            <div class="tweet-detail">
              <span class="user-name">Apple</span>
              <span class="account-created-time">@apple&#xb7;3小時</span>
            </div>
             <p class="tweet-text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <button class="delete-btn">✕</button>
        </div>
        <div class="tweet">
          <img class="avatar" src="~@/assets/image/user-image.png" alt="avatar">
          <div class="tweet-info">
            <div class="tweet-detail">
              <span class="user-name">Apple</span>
              <span class="account-created-time">@apple&#xb7;3小時</span>
            </div>
             <p class="tweet-text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <button class="delete-btn">✕</button>
        </div>
        <div class="tweet">
          <img class="avatar" src="~@/assets/image/user-image.png" alt="avatar">
          <div class="tweet-info">
            <div class="tweet-detail">
              <span class="user-name">Apple</span>
              <span class="account-created-time">@apple&#xb7;3小時</span>
            </div>
             <p class="tweet-text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <button class="delete-btn">✕</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AdminTweetsList'
}
</script>

<script>
export default {
  name: "AdminTweetsList",
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";
.tweets-list {
  border-right: 1px solid $light-blue2;
  border-left: 1px solid $light-blue2;
  padding: 0;
  .title {
    font-size: 24px;
    font-weight: 700;
    color: $black;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 20px;
  }
  .tweets {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid $light-blue2;
    .tweet {
      display: flex;
      padding: 16px 23px;
      position: relative;
      border-bottom: 1px solid $light-blue2;
      .avatar {
        height: 50px;
        width: 50px;
        margin-right: 8px;
      }
      .tweet-info {
        display: flex;
        flex-direction: column;
        .tweet-detail {
          > span {
          font-size: 16px;
          font-weight: 700;
          color: $black;
          margin-right: 8px;
          }
          .account-created-time {
            font-size: 14px;
            font-weight: 400;
            color: $gray4;
          }
        }
        .tweet-text {
          margin-right: 0;
          margin-top: 8px;
          padding-right: 50px;
          color: $black;
          font-size: 16px;
          font-weight: 400;
        }
      }
      .delete-btn {
        position: absolute;
        right: 5px;
        top: 10px;
        height: 16px;
        width: 16px;
      }
    }
  }
}
</style>