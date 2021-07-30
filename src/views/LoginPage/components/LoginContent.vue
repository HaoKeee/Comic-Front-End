<template>
  <el-form ref="form" class="login-form">
    <h2 class="form-title">
      登入
      <small>Comic-Website</small>
    </h2>
    <el-form-item>
      <el-input type="email" v-model="email" clearable>
        <template #append>
          <i class="iconfont">&#xe66a;</i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="password">
        <template #append>
          <i class="iconfont">&#xe630;</i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class="func-form__item">
      <a class="forgot-pass" @click="SwitchContent('forgot-content')">找回密码</a>
      <el-checkbox v-model="keepStatus">保持登录</el-checkbox>
    </el-form-item>
    <el-form-item class="form-buttons">
      <el-button type="warning" size="small" class="reg-button" @click="SwitchContent('reg-content')">
        <i class="iconfont">&#xe683;</i>
        注册
      </el-button>
      <el-button type="danger" size="small" class="login-button">
        <i class="iconfont">&#xe600;</i>
        登入
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      keepStatus: false,
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
.login-form {
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
  .el-form-item {
    margin-bottom: 15px;
    .el-form-item__content {
      line-height: 30px;
      input {
        height: 30px;
      }
    }
  }
  .func-form__item {
    .el-form-item__content {
      display: flex;
      justify-content: space-between;
      .el-checkbox {
        color: inherit;
      }
      .el-checkbox.is-checked {
        .el-checkbox__inner {
          background-color: #ff436f;
        }
        .el-checkbox__label {
          color: #ff436f;
        }
      }
    }
    .forgot-pass {
      cursor: pointer;
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
