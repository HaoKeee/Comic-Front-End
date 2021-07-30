<template>
  <div class="comment">
    <div class="user-banner">
      <el-avatar :src="userIconSrc"></el-avatar>
      <span class="username user-info-text">{{ userName }}</span>
      <span class="user-info-text">{{ formatCommentDate }}</span>
    </div>
    <container>
      <div class="comment-section">{{commentContent}}</div>
    </container>
  </div>
</template>
<script>
import Container from '/src/components/Container/Container.vue'
import { formatDate } from '/src/components/common/functions.js'
export default {
  name: 'Comment',
  computed: {
    formatCommentDate() {
      const data = new Date(this.commentDate)
      return formatDate(data,'yyyy-MM-dd');
    }
  },
  components: {
    'Container': Container,
  },
  props: {
    userName: {
      type: String,
      default() {
        return ''
      }
    },
    userIconSrc: {
      type: String,
      default() {
        return ''
      }
    },
    commentContent: {
      type: Text,
      default() {
        return ''
      }
    },
    commentDate: {
      type: Number,
      default() {
        return Date.now()
      }
    }
  }
}
</script>
<style lang="less">
.comment {
  width: 100%;
  .user-banner {
    display: flex;
    font-size: 12px;
    padding: 5px 10px;
    img {
      width: 100%;
    }
    .username {
      max-width: 120px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .user-info-text {
      margin: 2px 10px;
      height: 36px;
      line-height: 36px;
    }
  }
  .comment-section {
    width: 100%;
    padding: 2px 10px;
    font-size: 14px;
    text-indent: 2rem;
    line-height: 16px;
    max-height: 68px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>