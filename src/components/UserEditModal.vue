<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="user-edit"
    tabindex="-1"
    aria-labelledby="user-edit-label"
    aria-hidden="true"
  >
    <form
      action="submit"
      @submit.stop.prevent="handleSubmit"
      class="modal-dialog"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="user-edit-label">編輯個人資料</h5>
          <button
            type="button"
            class="close-btn"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <button type="submit" class="modal-save">儲存</button>
        </div>
        <div class="modal-body">
          <div class="modal-img">
            <div class="black">
              <img
                class="background-img"
                :src="profile.cover"
                alt="user-background"
              />
            </div>
            <div class="icon-add-delete">
              <img
                class="add-avatar"
                src="./../assets/image/add-avatar.png"
                alt="add-avatar"
              />
              <img
                class="delete-img"
                src="./../assets/image/delete-img.png"
                alt="delete-img"
              />
            </div>

            <div class="avatar-wrapper">
              <div class="black">
                <img
                  class="user-avatar"
                  :src="profile.avatar"
                  alt="user-avatar"
                />
              </div>
              <img
                class="add-avatar"
                src="./../assets/image/add-avatar.png"
                alt="add-avatar"
              />
            </div>
          </div>
          <!-- input -->
          <div class="name-introduction">
            <div class="form-field name-field">
              <label for="name">名稱</label>
              <input
                :class="{ error: profile.name.trim().length > 50 }"
                v-model="profile.name"
                id="name"
                name="name"
                type="text"
                placeholder="請輸入名稱"
                required
              />
              <div class="alert-msg">
                <span class="msg" v-if="profile.name.trim().length > 50"
                  >字數超出上限！</span
                >
                <span class="number">{{ profile.name.trim().length }}/50</span>
              </div>
            </div>
            <div class="form-field introduction-field">
              <label for="introduction">自我介紹</label>
              <textarea
                :class="{ error: profile.introduction.trim().length > 160 }"
                v-model="profile.introduction"
                id="introduction"
                name="introduction"
                type="text"
                placeholder="請輸入自我介紹"
                required
              />
              <div class="alert-msg-intro">
                <span
                  class="msg"
                  v-if="profile.introduction.trim().length > 160"
                  >字數超出上限！</span
                >
                <span class="number"
                  >{{ profile.introduction.trim().length }}/160</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "UserEditModal",
  props: {
    initialTargetProfile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profile: {},
    };
  },
  created() {
    // const { id: UserId } = this.$route.params;
    console.log("profile", this.initialTargetProfile);
    this.getProfile();
  },
  methods: {
    getProfile() {
      const { avatar, cover, name, introduction } = {
        avatar: this.initialTargetProfile.avatar,
        cover: this.initialTargetProfile.cover,
        name: this.initialTargetProfile.name,
        introduction: this.initialTargetProfile.introduction,
      };
      this.profile = { avatar, cover, name, introduction };
      console.log(this.profile.introduction.trim().length);
    },
    handleSubmit() {
      //關掉Modal
      $("#user-edit").modal("hide");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.modal {
  .modal-dialog {
    .modal-content {
      width: 641px;
      border-radius: 14px;
      .modal-header {
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        height: 57px;
        padding: 0;
        .modal-title {
          position: absolute;
          left: 56px;
          padding: 15px 0 0 0;
          font-size: 18px;
        }
        .close-btn {
          position: absolute;
          left: 19.5px;
          width: 15px;
          height: 15px;
          padding: 15px 0 0 0;
          color: $brand-color;
          z-index: 2;
        }
        .modal-save {
          @extend %btn-style;
          position: absolute;
          top: 8px;
          right: 16px;
          width: 64px;
          padding: 8px 0 8px 0;
        }
      }
      .modal-body {
        padding: 0;
        .modal-img {
          position: relative;
          width: 639px;
          .black::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            height: 200px;
            width: 639px;
            background: $black;
            cursor: pointer;
            opacity: 0.25;
          }
          .icon-add-delete {
            position: absolute;
            display: flex;
            align-items: center;
            top: 90px;
            left: 297px;
            height: 15px;
            .add-avatar {
              cursor: pointer;
              width: 20px;
              height: 20px;
            }
            .delete-img {
              width: 15px;
              height: 15px;
            }
            .delete-img {
              cursor: pointer;
              margin: 0 0 0 38.5px;
            }
          }
          .avatar-wrapper {
            position: absolute;
            top: 124px;
            left: 16px;
            width: 140px;
            height: 140px;
            .black::before {
              display: block;
              position: absolute;
              top: 3px;
              left: 2px;
              content: "";
              width: 135px;
              height: 132px;
              background: $black;
              border-radius: 50%;
              opacity: 0.5;
            }
            .black {
              .user-avatar {
                border-radius: 50%;
                border: 4px $white solid;
                cursor: pointer;
                object-fit: cover;
              }
            }
            .add-avatar {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 20px;
              height: 20px;
              cursor: pointer;
            }
          }
        }
        .name-introduction {
          margin: 80px 16px 40px 16px;
          .form-field.name-field {
            margin-bottom: 32px;
          }
          .form-field {
            position: relative;
            width: 100%;
            height: 54px;
            padding: 2px 0px 4px 0px;
            background-color: #f5f8fa;
            border-radius: 2px;

            .alert-msg {
              position: absolute;
              top: 54px;
              width: 100%;
              margin: 4px 0 0 0;
              .msg {
                position: absolute;
                left: 0;
                color: $brand-color;
                font-size: 12px;
              }
              .number {
                position: absolute;
                right: 0;
                color: $gray1;
                font-size: 12px;
              }
            }
            > label {
              display: block;
              width: 100%;
              height: 22px;
              font-size: 14px;
              color: $gray1;
              margin-bottom: 0;
              margin-left: 10px;
            }
            input,
            textarea {
              width: 100%;
              border-color: transparent;
              background-color: transparent;
              border-bottom: 2px solid #657786;
              padding-bottom: 10px;
              padding-left: 9px;
              &:disabled {
                border-color: transparent;
                background-color: transparent;
                border-bottom: 2px solid $gray-white1;
              }
              &:hover,
              &:focus {
                border-bottom: 2px solid $light-blue1;
              }
              &.error {
                border-bottom: 2px solid $Error;
              }
              &::-webkit-input-placeholder {
                color: $gray3;
                font-size: 16px;
              }
            }
            input {
              height: 26px;
            }
          }

          .introduction-field {
            position: relative;
            background-color: #f5f8fa;
            height: 145px;
            textarea {
              height: 122px;
              overflow: hidden;
              resize: none;
            }
            .alert-msg-intro {
              position: absolute;
              bottom: -8px;
              right: 0;
              width: 100%;
              .msg {
                position: absolute;
                left: 0;
                color: $brand-color;
                font-size: 12px;
              }
              .number {
                position: absolute;
                right: 0;
                color: $gray1;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

