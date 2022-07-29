<template>
  <div class="main-outer">
    <div class="main-page-title">
      <h4 class="pb-4">首頁</h4>
    </div>
    <form @submit.stop.prevent="handleSubmit">
      <div class="main-wrapper">
        <div class="main-tweet-wrapper">
          <div class="avatar-input">
            <a href="">
              <img
                class="user-avatar"
                src="./../assets/image/avatar.png"
                alt="user-avatar"
              />
            </a>
            <textarea
              v-model="text"
              class="textarea-tweet"
              type="text"
              placeholder="有什麼新鮮事？"
            />
          </div>
          <!-- if more 140 show waring-msg-->
          <div class="input-footer">
            <p v-if="exceedText" class="waring-msg">字數不可超過 140 字</p>
            <button type="submit" class="btn-setting" :disabled="exceedText">
              推文
            </button>
          </div>
        </div>
        <!-- component MainTweet -->
      </div>
    </form>
    <MainTweet @after-click-reply="afterClickReply" :initialTweets="tweets" />
  </div>
</template>

<script>
import MainTweet from "../components/MainTweet.vue";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "./../utils/helpers";

export default {
  name: "MainPage",
  components: {
    MainTweet,
  },
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tweets: [],
      text: "",
      exceedText: false,
      newTweet: {},
    };
  },
  watch: {
    text() {
      this.calWords();
    },
  },
  created() {
    this.tweets = this.initialTweets;
  },
  methods: {
    handleSubmit() {
      if (this.exceedText === true) {
        return Toast.fire({
          icon: "warning",
          title: "內容超過字數上限 140 字",
        });
      }
      // 刪掉半形和全形空白
      this.text = this.text.trim(" ", "");
      if (!this.text) {
        Toast.fire({
          icon: "warning",
          title: "內容不可空白",
        });
        return;
      } else {
        Toast.fire({
          icon: "success",
          title: "推文發送成功",
        });
        //把使用者寫的推文內容存入 newTweet
        this.newTweet = {
          id: uuidv4(),
          tweetText: this.text,
        };
        // 新的推文資料(newTweet) -> 傳至父層 Main.vue
        this.$emit("after-submit-tweet", this.newTweet);
        // 將發推區內的文字清空
        this.text = "";
      }
    },
    calWords() {
      return this.text.length > 140
        ? (this.exceedText = true)
        : (this.exceedText = false);
    },
    afterClickReply(payload) {
      // 被點擊的那則留言的資料，繼續傳到父層 Main.vue
      this.$emit("after-click-reply", payload);

      // {
      //           id: id,
      //           text: tweetText,
      //           likeCount: 0,
      //           commentCount: 0,
      //           createdAt: "2022-07-29T08:41:42.564Z",
      //           // 留言的那個人 (currentUser)
      //           user: {
      //             id: this.currentUser.id,
      //             name: this.currentUser.name,
      //             avatar: this.currentUser.avatar,
      //             account: this.currentUser.account,
      //           },
      //         }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

%btn-style {
  height: 40px;
  background: $brand-color;
  color: $white;
  border-radius: 50px;
}
.main-outer {
  position: relative;
  .main-page-title {
    position: sticky;
    top: 0;
    background: $white;
    height: 74px;
    border-bottom: $light-blue2 1px solid;
    z-index: 1;
    h4 {
      height: 74px;
      padding: 24px 0 0 23px;
      font-size: 24px;
      font-weight: 700;
      border-left: $light-blue2 1px solid;
      border-right: $light-blue2 1px solid;
      z-index: 1;
    }
  }
  .main-wrapper {
    position: relative;
    border-top: $light-blue2 1px solid;
    border-left: $light-blue2 1px solid;
    border-right: $light-blue2 1px solid;
    .main-tweet-wrapper {
      position: relative;
      .avatar-input {
        display: flex;
        position: relative;
        padding: 16px 0 0 23px;

        .user-avatar {
          width: 50px;
          height: 50px;
          margin: 0 8px 0 0;
        }
        .textarea-tweet {
          padding: 12px;
          width: 100%;
          height: 150px;
          border: none;
          resize: none;
        }
        textarea::-webkit-input-placeholder {
          color: $Secondary;
          font-size: 16px;
          font-weight: 700;
        }
      }
      .input-footer {
        display: flex;
        justify-content: end;
        padding: 0 15px 15px 20px;
        border-bottom: $light-blue2 10px solid;
        .waring-msg {
          padding: 10px;
          color: $brand-color;
          font-size: 15px;
        }
        .btn-setting {
          width: 64px;
          font-size: 18px;
          @extend %btn-style;
        }
      }
    }
  }
}
</style>