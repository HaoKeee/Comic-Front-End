<template>
  <div class="user-page">
    <reveal-section>
      <el-tabs>
        <el-tab-pane label="账号详情">
          <account-detail></account-detail>
        </el-tab-pane>
        <el-tab-pane label="偏好设置">偏好设置页</el-tab-pane>
        <el-tab-pane label="反馈留言">反馈留言页</el-tab-pane>
        <el-tab-pane label="退出">退出</el-tab-pane>
      </el-tabs>
    </reveal-section>
  </div>
</template>
<script>
import RevealSection from '/src/components/Container/RevealSection.vue';
import AccountDetail from './components/AccountDetail.vue';
import Preferences from './components/Preferences.vue';
import FeedBack from './components/FeedBack.vue';

export default {
  name: 'UserPage',
  components: {
    'RevealSection': RevealSection,
    'AccountDetail': AccountDetail,
    'Preferences': Preferences,
    'FeedBack': FeedBack,
  }
}
</script>
<style lang="less">
.user-page {
  width: 100%;
  height: 900px;
  .el-tabs {
    color: bisque;
  }
}
</style>