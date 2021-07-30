<template>
  <el-form ref="form" class="reg-form">
    <h2 class="form-title">
      注册
      <small>Comic-Website</small>
    </h2>
    <el-alert class="email-alert" type="warning" effect="dark" show-icon>
      邮箱地址为隐私信息，仅自己可见。
      <br />
      正确的邮箱地址在丢失密码时是唯一找回手段
    </el-alert>
    <el-form-item>
      <el-input type="email" v-model="email" placeholder="请输入邮箱" clearable>
        <template #append>
          <i class="iconfont">&#xe66a;</i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="password" placeholder="请输入密码" clearable>
        <template #append>
          <i class="iconfont">&#xe630;</i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="username" placeholder="请输入用户名" clearable>
        <template #append>
          <i class="iconfont">&#xe841;</i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class="form-gender-item">
      <div class="gender-label">
        * 性别
        <small>(无法更改)</small>
      </div>
      <div class="gender-select">
        <el-radio v-model="gender" label="男" class="male">
          <i class="iconfont">&#xe60d;</i>
          男
        </el-radio>
        <el-radio v-model="gender" label="女" class="female">
          <i class="iconfont">&#xe60c;</i>
          女
        </el-radio>
      </div>
    </el-form-item>
    <el-form-item class="form-buttons">
      <el-button type="warning" size="small" class="reg-button" @click="SwitchContent('login-content')">
        <i class="iconfont">&#xe614;</i>
        已有账号
      </el-button>
      <el-button type="danger" size="small" class="login-button">
        <i class="iconfont">&#xed5e;</i>
        完成注册
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: "RegContent",
    data() {
      return {
        email: "",
        gender: "",
        password: "",
        username: "",
      };
    },
    methods: {
      SwitchContent(value) {
        this.$emit('switch', value)
      },
    },
  };
</script>
<style lang="less">
  .reg-form {
    width: 100%;
    margin: auto 0;

    h2 {
      font-weight: normal;
      padding-left: 15px;
      border-left: 5px solid burlywood;

      small {
        font-size: 14px;
      }
    }

    .email-alert {
      padding: 5px 10px;
      margin-bottom: 15px;

      .el-alert__content {
        padding-right: 20px;
      }
    }

    .el-form-item {
      margin-bottom: 15px;

      .el-form-item__content {
        line-height: 30px;

        input {
          height: 30px;
        }
      }
    }

    .form-gender-item {
      padding: 0 10px;

      .gender-select {
        display: flex;
        justify-content: space-around;
        width: 100%;

        .male {
          color: rgb(144, 202, 249);
        }

        .female {
          color: #ff436f;
        }

        label.is-checked:first-child {
          .el-radio__inner {
            border-color: rgb(144, 202, 249);
            background-color: rgb(144, 202, 249);
          }

          .el-radio__label {
            color: rgb(144, 202, 249);
          }
        }

        label.is-checked:last-child {
          .el-radio__inner {
            border-color: #ff436f;
            background-color: #ff436f;
          }

          .el-radio__label {
            color: #ff436f;
          }
        }
      }
    }

    .form-buttons {
      .el-form-item__content {
        display: flex;
        justify-content: space-between;

        button {
          width: 40%;
        }
      }
    }
  }
</style>