<template>
  <div class="footer">
    <section class="footer-flex-section">
      <router-link to="/">
        <img class="footer-logo" src="/src/assets/images/logo.png" alt="logo" />
      </router-link>
      <router-link to="/">
        <span>首页</span>
      </router-link>
      <el-divider direction="vertical"></el-divider>
      <span @click="appDialog = true">App下载</span>
      <el-dialog title="App下载" v-model="appDialog" width="30%" @close="appDialog = false" destroy-on-close center>
        <div class="introduction">
          网站App尚在开发中，敬请期待~~~
        </div>
        <img src="/src/assets/images/cover.png" alt="扫码下载">
      </el-dialog>
      <el-divider direction="vertical"></el-divider>
      <span @click="contactDialog = true">联系我们</span>
      <el-dialog title="联系我们" v-model="contactDialog" width="30%" @close="contactDialog = false" destroy-on-close center>
        <div class="introduction">
          邮箱：a2788039381@gmail.com
        </div>
      </el-dialog>
      <el-divider direction="vertical"></el-divider>
      <span @click="usageDialog = true">使用守则</span>
      <el-dialog title="使用守则" v-model="usageDialog" width="30%" @close="usageDialog = false" destroy-on-close center>
        <div class="introduction">
          使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则使用守则
        </div>
      </el-dialog>
      <el-divider direction="vertical"></el-divider>
      <span @click="privacyDialog = true">隐私政策</span>
      <el-dialog title="隐私政策" v-model="privacyDialog" width="30%" @close="privacyDialog = false" destroy-on-close center>
        <div class="introduction">
          隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策隐私政策
        </div>
      </el-dialog>
    </section>
  </div>
</template>

<script>
import DialogBox from '/src/components/common/DialogBox.vue'
export default {
  name: 'PageFooter',
  data() {
    return {
      appDialog: false,
      contactDialog: false,
      usageDialog: false,
      privacyDialog: false,
    }
  },
  components: {
    DialogBox: DialogBox,
  }
}
</script>

<style lang="less">
.footer {
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 14px;
  padding: 10px 2% 10px 2%;
  background-color: #3c3c3c;
  border: 0px solid #3c3c3c;
  .footer-flex-section {
    a {
      text-decoration: none;
      color: #fff;
    }
    display: flex;
    float: left;
    margin: 0px 10px 0px 10px;
    .el-divider--vertical {
      height: 20px;
    }
    .footer-logo {
      width: 20px;
      height: 20px;
      margin-right: 20px;
      border-radius: 50%;
    }
    span:hover {
      cursor: pointer;
    }
    .el-dialog__body {
      text-align: center;
      .introduction {
        text-align: left;
        text-indent: 2rem;
      }
      img {
        width: 80%;
        margin: 10px auto;
      }
    }
  }
}
</style>
