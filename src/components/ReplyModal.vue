<template>
  <div
    class="modal fade reply-tweet-modal-container"
    id="replyTweetModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="replyTweetModal"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close-btn"
            data-dismiss="modal"
            aria-label="Close"
          >
            <img
              aria-hidden="true"
              src="~@/assets/image/modal-close-icon.png"
              alt="close-icon"
            />
          </button>
        </div>
        <div class="modal-body">
          <div class="tweet-area">
            <div class="tweet">
              <img
                class="avatar"
                :src="replyModalData.userAvatar"
                alt="avatar"
              />
              <div class="tweet-info">
                <div class="tweet-detail">
                  <span class="user-name">{{ replyModalData.userName }}</span>
                  <span class="account-created-time"
                    >@{{ replyModalData.userAccount }}&#xb7;{{
                      replyModalData.createdAt | fromNow
                    }}</span
                  >
                </div>
                <p class="tweet-text">
                  {{ replyModalData.text }}
                </p>
                <div class="reply-to">
                  <span>回覆給</span>&nbsp;<span class="reply-to-account"
                    >@{{ replyModalData.userAccount }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="reply-area">
            <div class="modal-user-avatar">
              <!-- 這邊圖片之後記得改 currentUser 的大頭貼 -->
              <img src="./../assets/image/avatar.png" alt="avatar" />
            </div>
            <div class="modal-tweet-text">
              <textarea
                class="form-control"
                id="tweet-text"
                name="tweet-text"
                type="text"
                placeholder="推你的回覆"
                required
              />
            </div>
          </div>
          <span class="alert-msg">內容不可空白</span>
          <button class="modal-reply-btn" type="submit">回覆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "ReplyModal",
  mixins: [fromNowFilter],
  props: {
    replyModalData: {
      type: Object,
      required: true,
    },
  },

  // 待做功能，新增留言到指定的推文
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 634px;
  height: 500px;
  background-color: $white;
  background-clip: padding-box;
  border-radius: 14px;
  z-index: 10;
  .modal-header {
    width: 100%;
    height: 11%;
    border-bottom: 1px solid $light-blue2;
    display: flex;
    .close-btn {
      align-items: center;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 89%;
    padding: 16px 24px;
    .tweet-area {
      display: flex;
      flex-direction: column;
      .tweet {
        display: flex;
        position: relative;
        // 連結線
        &::before {
          content: "";
          position: absolute;
          left: 25px;
          top: 60px;
          height: 85px;
          background-color: $gray3;
          border-right: 1px solid $gray3;
          border-left: 1px solid $gray3;
        }
        .avatar {
          height: 50px;
          width: 50px;
          margin-right: 8px;
        }
        .tweet-info {
          display: flex;
          flex-direction: column;
          .tweet-detail {
            align-items: center;
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
            color: $black;
            font-size: 16px;
            font-weight: 400;
          }
          .reply-to {
            margin-top: 10px;
            span {
              font-size: 14px;
              font-weight: 400;
              color: $gray4;
            }
            .reply-to-account {
              color: $brand-color;
            }
          }
        }
      }
    }
    .reply-area {
      display: flex;
      flex: 1;
      width: 100%;
      margin-top: 23px;
      .modal-user-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 8px;
      }
      .modal-tweet-text {
        flex: 1;
        textarea {
          width: 90%;
          height: 75%;
          border-color: transparent;
          border-radius: 5px;
          resize: none;
          padding: 0;
          &::-webkit-scrollbar {
            width: 6px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: $light-blue2;
            border-radius: 3px;
          }
          &::placeholder {
            margin-left: 0;
          }
        }
      }
    }
    .alert-msg {
      position: absolute;
      right: 100px;
      bottom: 28px;
      font-size: 15px;
      font-weight: 500;
      color: $Error;
    }
    .modal-reply-btn {
      @extend %btn-style;
      width: 64px;
      position: absolute;
      bottom: 16px;
      right: 16px;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
</style>