<template>
  <div class="row outer-user-wrapper">
    <!--component Navbar -->
    <Navbar class="col-2 user-nav" />
    <!-- MainTweets.vue -->
    <div class="col-7 user-page">
      <div class="user-outer">
        <div class="reply-lists-title">
          <a href="#">
            <img class="arrow" src="./../assets/image/arrow.png" alt="arrow" />
          </a>
          <div class="name-tweet">
            <p class="name">John Doe</p>
            <p class="tweet-count">25 推文</p>
          </div>
        </div>
        <!-- component UserProfileCard.vue -->
        <UserProfileCard />
        <!-- component UserNavPills.vue -->
        <UserNavPills />
        <!-- view MainTweets.vue -->
        <router-view class="scrollbar bottom-lists" />
      </div>
    </div>
    <!--component Populars -->
    <Populars class="col-3 popular" />
    <!-- component UserEditModal -->
    <UserEditModal />
    <CreateTweetModal/>
    <ReplyModal/>
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

export default {
  name: "User",
  components: {
    Navbar,
    UserProfileCard,
    UserNavPills,
    Populars,
    UserEditModal,
    ReplyModal,
    CreateTweetModal
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