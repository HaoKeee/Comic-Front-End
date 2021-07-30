<template>
  <div class="reg-page">
    <div class="reg-page__content">
      <div class="form-container">
        <component :is="pageContent" @switch="switchPageContent"></component>
      </div>
    </div>
  </div>
</template>
<script>
import ForgotContent from './components/ForgotContent.vue'
import RegContent from "./components/RegContent.vue";
import LoginContent from "./components/LoginContent.vue";
export default {
  name: "LoginPage",
  data() {
    return {
      pageContent: "forgot-content",
    };
  },
  methods: {
    switchPageContent(value) {
      if (value === 'login-content') {
        this.pageContent = 'login-content'
      }
      else if (value === 'reg-content') {
        this.pageContent = 'reg-content'
      }
      else if (value === 'forgot-content') {
        this.pageContent = 'forgot-content'
      }
      else {
        this.pageContent = 'login-content'
      }
    },
  },
  components: {
    ForgotContent: ForgotContent,
    RegContent: RegContent,
    LoginContent: LoginContent,
  },
};
</script>
<style lang="less">
@min-1024-width: 33.333333%;
@min-768-width: 50%;

.reg-page {
  height: 100vh;
  width: 100%;
  color: burlywood !important;
  background-color: #303030;
  .reg-page__content {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    justify-content: center;
    @media @min-1024-screen {
      width: 1024px;
    }
    @media @min-1280-screen {
      width: 1280px;
    }
    .form-container {
      display: flex;
      justify-content: center;
      padding: 10px 15px;
      width: 100%;
      @media @min-768-screen {
        width: @min-768-width;
      }
      @media @min-1024-screen {
        width: @min-1024-width;
        margin-left: 15px;
      }
    }
  }
}
</style>
