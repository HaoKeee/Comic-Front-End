<template>
  <el-dialog title="App下载" v-model="model" width="30%" @close="ggg" destroy-on-close center>
    <template #title>
      <span class="dialog-title">对话框标题</span>
    </template>
    <span>
      对话框内容
    </span>
    <template #footer>
      <span class="dialog-footer">对话框页脚</span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogBox',
  props: ['model'],
  methods: {
    ggg() {
      this.model = false;
      console.log(this.model);
    }
  },
}
</script>
<style lang="less">
  
</style>