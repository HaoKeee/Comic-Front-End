<template>
  <el-form ref="form" class="forgot-form">
    <h2 class="form-title">
      找回密码
      <small>Comic-Website</small>
    </h2>
    <el-form-item>
      <el-input type="email" v-model="email" placeholder="注册邮箱" clearable>
        <template #append>
          <el-button>
            发送邮件
            <i class="iconfont">&#xe66a;</i>
          </el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" maxlength="6" v-model="code" placeholder="邮箱验证码" clearable>
        <template #append>
          <i class="iconfont">&#xe66a;</i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" placeholder="新密码" v-model="newPassword">
        <template #append>
          <i class="iconfont">&#xe630;</i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" placeholder="确认密码" v-model="confirmPassword">
        <template #append>
          <i class="iconfont">&#xe630;</i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class="form-buttons">
      <el-button type="warning" size="small" class="reg-button" @click="SubmitForm">
        <i class="iconfont">&#xe683;</i>
        提交
      </el-button>
      <el-button type="danger" size="small" class="login-button" @click="SwitchContent('login-content')">
        <i class="iconfont">&#xe600;</i>
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: "ForgotContent",
    data() {
      return {
        email: '',
        code: '',
        newPassword: '',
        confirmPassword: ''
      }
    },
    methods: {
      SwitchContent(value) {
        console.log(value);
        this.$emit('switch',value)
      },
      SubmitForm() {
        if (this.email === '') {
          window.alert('请输入邮箱')
        }
        else if (this.code === '') {
          window.alert('请输入验证码')
        }
        else if (this.newPassword === '') {
          window.alert('请输入新密码')
        }
        else if (this.newPassword !== this.confirmPassword) {
          window.alert('密码不一致，请检查')
        }
        else {
          const data = {
            email: this.email,
            code: this.code,
            newPssword: this.newPassword,
            confirmPassword: this.confirmPassword,
          }
          console.log(data);
        }
      }
    },

  }
</script>
<style lang="less">
.forgot-form {
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