<template>
  <div class="account-detail">
    <container>
      <div class="user-container-content">
        <h3 class="container-title">账号详情</h3>
        <div class="user-info-form">
          <el-form ref="form" :model="form">
            <el-form-item>
              <h4 class="form-item-title">修改头像</h4>
              <div class="change-user-avator">
                <el-avatar :src="userAvatar"></el-avatar>
                <div class="change-user-avator-funcs">
                  <el-upload class="upload-img-button">
                    <el-button type="danger" round>选择图片</el-button>
                  </el-upload>
                  <small class="upload-img-tips"
                    >推荐上传格式为abcdefghijklmn的图片</small
                  >
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <h4 class="form-item-title">修改密码</h4>
              <div class="change-password">
                <div>
                  <el-input placeholder="请输入旧密码" v-model="oldPassword">
                    <template #append> 密码(旧) </template>
                  </el-input>
                </div>
                <div>
                  <el-input placeholder="请输入新密码" v-model="oldPassword">
                    <template #append> 密码(新) </template>
                  </el-input>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存更改</el-button>
            </el-form-item>
            <el-divider>
              <i class="iconfont">&#xe603;</i>
            </el-divider>
            <el-form-item class="user-profile-section">
              <h4 class="form-item-title">详细信息</h4>
              <div class="user-profile-info">
                <table>
                  <tr>
                    <td class="profile-title">性别</td>
                    <td class="profile-content"><span>1230</span></td>
                  </tr>
                  <tr>
                    <td class="profile-title">UID</td>
                    <td class="profile-content"><span>1230</span></td>
                  </tr>
                  <tr>
                    <td class="profile-title">等级</td>
                    <td class="profile-content"><span>1230</span></td>
                  </tr>
                  <tr>
                    <td class="profile-title">昵称</td>
                    <td class="profile-content"><span>1230</span></td>
                  </tr>
                  <tr>
                    <td class="profile-title">账号邮箱</td>
                    <td class="profile-content"><span>1230</span></td>
                  </tr>
                  <tr>
                    <td class="profile-title">拥有积分</td>
                    <td class="profile-content"><span>1230</span></td>
                  </tr>
                  <tr>
                    <td class="profile-title">收藏上限</td>
                    <td class="profile-content"><span>1230</span></td>
                  </tr>
                  <tr>
                    <td class="profile-title">下载配额</td>
                    <td class="profile-content"><span>1230</span></td>
                  </tr>
                  <tr>
                    <td class="profile-title">高级会员</td>
                    <td class="profile-content"><span>1230</span></td>
                  </tr>
                </table>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </container>
  </div>
</template>
<script>
import Container from "/src/components/Container/Container.vue";
export default {
  name: "AccountDetail",
  data() {
    return {
      userAvatar: "/src/assets/images/UserIcon.jpg",
    };
  },
  components: {
    Container: Container,
  },
};
</script>
<style lang="less">
.el-tabs__item {
  color: burlywood !important;
}
.account-detail {
  width: 100%;
  .user-container-content {
    margin: 15px;
    h3.container-title {
      padding: 0 35px;
      border-left: 5px solid burlywood;
    }
    .el-form-item {
      .el-form-item__content {
        padding: 0 25px;
        @media @max-480-screen {
          padding: 0 5px;
        }
        // line-height: normal;
      }
      .form-item-title {
        margin: 5px 0;
      }
      .change-user-avator {
        display: flex;
        flex-wrap: wrap;
        .el-avatar {
          flex-grow: 0;
          width: 100px;
          height: 100px;
        }
        .change-user-avator-funcs {
          padding: 10px 2%;
          line-height: 16px;
          .upload-img-button {
            margin-bottom: 10px;
          }
        }
      }

      .change-password {
        width: 100%;
        .el-input {
          max-width: 500px;
          margin-bottom: 10px;
        }
        .el-input-group__append {
          padding: 0 10px;
        }
      }
      .user-profile-info {
        width: 100%;
        table {
          width: 100%;
          border-collapse: collapse;
          tr {
            td.profile-title {
              width: 80px;
              text-align: center;
              border-right: 1px dashed #757575;
              border-bottom: 1px dashed #757575;
            }
            td.profile-content {
              padding-left: 10px;
              border-bottom: 1px dashed #757575;
              span {
                padding: 3px 8px;
                border-radius: 4px;
                border: 1px solid rgb(255, 217, 226);
                color: rgb(255, 67, 111);
                background-color: rgb(255, 236, 241);
              }
            }
          }
        }
      }
    }
    .el-divider__text {
      background-color: rgba(66, 66, 66, 0.95);
      .iconfont {
        font-size: 20px;
      }
    }
  }
}
</style>
