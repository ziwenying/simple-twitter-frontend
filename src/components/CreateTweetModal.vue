<template>
  <div
    class="modal fade create-tweet-modal-container"
    id="createTweetModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="createTweetModal"
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
            <img aria-hidden="true" src="~@/assets/image/modal-close-icon.png" alt="close-icon">
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-user-avatar">
            <img src="~@/assets/image/avatar.png" alt="avatar">
          </div>
           <div class="modal-tweet-text">
             <textarea
                class="form-control"
                id="tweet-text"
                name="tweet-text"
                type="text"
                placeholder="有什麼新鮮事？"
                required
              />
           </div>
           <span class="alert-msg">字數不可超過 140 字</span>
           <button class="modal-tweet-btn" type="submit">推文</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateTweetModal",
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 634px;
  height: 300px;
  background-color: $white;
  background-clip: padding-box;
  border-radius: 14px;
  z-index: 10;
  .modal-header {
    width: 100%;
    height: 17%;
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
    width: 100%;
    height: 83%;
    padding: 16px 24px;
    .modal-user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .modal-tweet-text {
      flex: 1;
      margin-left: 8px;
      margin-top: 8px;
      textarea {
        width: 90%;
        height: 75%;
        border-color: transparent;
        border-radius: 5px;
        resize: none;
        &::-webkit-scrollbar {
          width: 6px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: $light-blue2;
          border-radius: 3px;
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
    .modal-tweet-btn {
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