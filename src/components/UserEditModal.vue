<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="user-edit"
    tabindex="-1"
    aria-labelledby="user-edit-label"
    aria-hidden="true"
  >
    <div class="modal-dialog">
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
          <button type="button" class="modal-close">儲存</button>
        </div>
        <div class="modal-body">
          <div class="modal-img">
            <div class="black">
              <img
                class="background-img"
                src="./../assets/image/user-background.png"
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
                  src="./../assets/image/avatar.png"
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
                id="name"
                name="name"
                type="text"
                placeholder="請輸入名稱"
                required
              />
              <div class="alert-msg">
                <span class="msg">8/50</span>
              </div>
            </div>
            <div class="form-field introduction-field">
              <label for="introduction">自我介紹</label>
              <textarea
                id="introduction"
                name="introduction"
                type="text"
                placeholder="請輸入自我介紹"
                required
              />
            </div>
            <div class="alert-msg-intro">
              <span class="msg">0/160</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserEditModal",
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
        }
        .modal-close {
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
            padding: 2px 10px 4px 10px;
            background-color: #f5f8fa;
            border-radius: 2px;
            border-bottom: 2px solid #657786;
            &:hover,
            &focus {
              border-bottom: 2px solid $light-blue1;
            }
            &.error {
              border-bottom: 2px solid $Error;
            }
            &.disabled {
              border-bottom: 2px solid $gray-white1;
            }
            .alert-msg {
              position: absolute;
              top: 54px;
              right: 0;
              margin: 4px 0 0 0;
              span {
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
            }
            input,
            textarea {
              width: 100%;
              border-color: transparent;
              background-color: transparent;
              &:disabled {
                border-color: transparent;
                background-color: transparent;
              }
            }
            input {
              height: 26px;
            }
            input::-webkit-input-placeholder {
              color: $gray3;
              font-size: 16px;
            }
          }

          .introduction-field {
            background-color: #f5f8fa;
            height: 145px;
            textarea {
              height: 127px;
              overflow: hidden;
              resize: none;
            }
          }
          .alert-msg-intro {
            position: absolute;
            bottom: 16px;
            right: 16px;
            margin: 4px 0 0 0;
            span {
              color: $gray1;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>

