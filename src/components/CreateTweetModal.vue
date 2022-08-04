<template>
  <form action="submit" @submit.prevent.stop="handleSubmit">
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
              <img
                aria-hidden="true"
                src="~@/assets/image/modal-close-icon.png"
                alt="close-icon"
              />
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-user-avatar">
              <img :src="currentUser.avatar" alt="avatar" />
            </div>
            <div class="modal-tweet-text">
              <textarea
                v-model="description"
                class="form-control"
                id="tweet-text"
                name="tweet-text"
                type="text"
                placeholder="有什麼新鮮事？"
              />
            </div>
            <span class="alert-msg" v-if="description.trim().length > 140"
              >字數不可超過 140 字</span
            >
            <button
              class="modal-tweet-btn"
              type="submit"
              :disabled="description.trim().length > 140"
            >
              推文
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets";
import { mapState } from 'vuex'
import $ from "jquery";

export default {
  name: "CreateTweetModal",
  data() {
    return {
      description: "",
    };
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async handleSubmit() {
      try {
        // 表單驗證
        if (!this.description.trim()) {
          Toast.fire({
            icon: "warning",
            title: "內容不可空白",
          });
          return;
        } else if (this.description.length > 140) {
          Toast.fire({
            icon: "warning",
            title: "字數不可超過 140 字",
          });
          return;
        } else {
          Toast.fire({
            icon: "success",
            title: "推文發送成功",
          });
        }
        const { data } = await tweetsAPI.tweets.create({ description: this.description })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        // 伺服器新增 Comment 成功後...
        this.$emit("after-submit-tweet", {
          tweetId: data.tweetId, 
          description: this.description,
        });
        // 送出後清空新增推文區塊的文字
        this.description = "";
        //關掉Modal
        $("#createTweetModal").modal("hide");
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法新增推文，請稍後再試",
        });
      }
    },
  },
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
      &:disabled {
        background-color: $gray3;
      }
    }
  }
}
</style>