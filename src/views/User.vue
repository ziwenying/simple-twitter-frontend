<template>
  <div class="row outer-user-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 user-nav" />
    <div class="col-7 user-page">
      <div class="user-outer">
        <div class="reply-lists-title">
          <router-link :to="{ name: 'main-page' }">
            <img class="arrow" src="~@/assets/image/arrow.png" alt="arrow" />
          </router-link>
          <div class="name-tweet">
            <p class="name">{{ targetProfile.name }}</p>
            <p class="tweet-count">{{ targetProfile.tweetCount }} 推文</p>
          </div>
        </div>
        <!-- component UserProfileCard.vue -->
        <UserProfileCard
          @after-change-profile-follow="fetchPopular"
          :targetProfile="targetProfile"
          :initialChangeFollow="followShip"
        />
        <!-- component UserNavPills.vue -->
        <UserNavPills />
        <!-- view MainTweets.vue or Replies.vue or likedTweets.vue -->
        <router-view
          @after-click-reply="afterClickReply"
          class="scrollbar bottom-lists"
        />
      </div>
    </div>
    <!--component Populars -->
    <Populars
      @after-change-follow="fetchFollowings"
      @change-profile-follow="changeProfilePopular"
      :initialTopPopular="topPopular"
      class="col-3 popular"
    />
    <!-- component UserEditModal -->
    <UserEditModal
      @after-submit-profile="afterSubmitProfile"
      :initialTargetProfile="targetProfile"
    />
    <CreateTweetModal />
    <ReplyModal :replyModalData="replyModalData" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserProfileCard from "../components/UserProfileCard.vue";
import UserNavPills from "../components/UserNavPills.vue";
import Populars from "../components/Populars.vue";
import UserEditModal from "../components/UserEditModal.vue";
import CreateTweetModal from "../components/CreateTweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  name: "User",
  components: {
    Navbar,
    UserProfileCard,
    UserNavPills,
    Populars,
    UserEditModal,
    ReplyModal,
    CreateTweetModal,
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      targetProfile: {
        id: -1,
        account: "",
        email: "",
        name: "",
        avatar: "",
        cover: "",
        introduction: "",
        role: "",
      },
      topPopular: [],
      replyModalData: {},
      followingList: [],
      followShip: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 監聽路由
    const { id } = to.params;
    this.fetchProfile(id);
    this.fetchFollowings(this.currentUser.id);
    next();
  },
  created() {
    //透過 id 取得指定使用者的資料
    const { id } = this.$route.params;
    this.fetchProfile(id);
    this.fetchPopular();
    this.fetchFollowings(this.currentUser.id);
  },
  methods: {
    async fetchProfile(userId) {
      try {
        const response = await usersAPI.getTheUser({ userId });
        if (response.statusText !== "OK") {
          throw new Error("無法取得使用者資料，請稍後再試");
        }
        const {
          id,
          account,
          email,
          name,
          avatar,
          cover,
          introduction,
          role,
          followerCount,
          followingCount,
          tweetCount,
        } = {
          id: response.data.id,
          account: response.data.account,
          email: response.data.email,
          name: response.data.name,
          avatar: response.data.avatar,
          cover: response.data.cover,
          introduction: !response.data.introduction
            ? ""
            : response.data.introduction,
          role: response.data.role,
          followerCount: response.data.followerCount,
          followingCount: response.data.followingCount,
          tweetCount: response.data.tweetCount,
        };
        this.targetProfile = {
          id,
          account,
          email,
          name,
          avatar,
          cover,
          introduction,
          role,
          followerCount,
          followingCount,
          tweetCount,
        };
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    async fetchPopular() {
      try {
        const response = await usersAPI.getTopUser();
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        this.topPopular = data;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推薦追蹤名單",
        });
      }
    },
    afterClickReply(payload) {
      // 點擊回覆，顯示 modal 使用的資料
      const { id, description, User, createdAt } = payload;
      this.replyModalData = {
        id,
        description,
        userName: User.name,
        userAccount: User.account,
        userAvatar: User.avatar,
        createdAt: createdAt,
      };
    },
    async afterSubmitProfile(formData) {
      try {
        const response = await usersAPI.update({
          userId: this.currentUser.id,
          formData,
        });
        // 更新後的資料，渲染用
        if (response.statusText === "OK") {
          throw new Error("無法編輯個人資料，請稍後再試");
        }
        // 及時更新圖
        const data = response.data;
        const { name, avatar, cover, introduction } = {
          name: data.name,
          avatar: data.avatar,
          cover: data.cover,
          introduction: data.introduction,
        };
        this.targetProfile = {
          ...this.targetProfile,
          name,
          avatar,
          cover,
          introduction,
        };
        Toast.fire({
          icon: "success",
          title: "個人資料編輯成功",
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法編輯個人資料，請稍後再試",
        });
      }
    },
    async fetchFollowings(userId) {
      // 這邊為了個人頁面的追蹤按鈕
      // popular 傳回來
      try {
        const response = await usersAPI.getFollowings({ userId });
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        this.followingList = data;
        const followingShip = this.followingList.find(
          (following) => following.followingId === Number(this.$route.params.id)
        );
        this.followShip = !!followingShip; //可以判斷 true 正在追蹤，傳到 UserProfileCard 使用
      } catch (error) {
        console.error(error.message);
      }
    },
    async changeProfilePopular(change) {
      // 這邊為了個人頁面的追蹤按鈕
      // popular 傳回來的 change 物件包含 id 和 改變狀態 true or false
      const userId = change.userId;
      try {
        const response = await usersAPI.getFollowings({ userId });
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        this.followingList = data;
        this.followShip = change.change; //可以判斷 true 正在追蹤，傳到 UserProfileCard 使用
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "./../assets/application.scss";

.outer-user-wrapper {
  .user-page {
    .user-outer {
      .reply-lists-title {
        display: flex;
        align-items: center;
        margin: 16px 0 17px 0;
        background: $white;
        .arrow {
          margin: 0 0 0 28px;
          width: 14px;
          height: 14px;
          font-weight: 700;
        }
        .name-tweet {
          margin: 0 0 0 19px;
          .name {
            font-size: 18px;
            font-weight: 700;
          }
          .tweet-count {
            color: $Secondary;
            font-size: 13px;
          }
        }
      }
    }
  }
  .scrollbar {
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>