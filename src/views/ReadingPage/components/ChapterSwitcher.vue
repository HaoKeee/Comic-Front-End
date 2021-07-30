<template>
  <div class=chapters-switcher :style="showOrHide" @mouseleave="HideSwitcher">
    <div class="chapters-switcher-content">
      <span class="chapter-switcher-header">
        共{{totalChap}}话
      </span>
      <ul>
        <el-scrollbar height="100%" max-height="100%">
          <li v-for="index in totalChap" :key="index">
            <router-link :to="'/reading?comic=' + this.comic + '&chap=' + index">
              第{{ index }}章
            </router-link>
          </li>
        </el-scrollbar>
      </ul>
      <div class="aside-switcher" @mouseenter="ShowSwitcher">章节栏</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ChapterSwitcher',
    data() {
      return {
        showOrHide: {
          left: '-150px',
          opacity: '0.65',
        }
      }
    },
    methods: {
      HideSwitcher() {
        this.showOrHide.left = '-150px'
        this.showOrHide.opacity = '0.65'
      },
      ShowSwitcher() {
        this.showOrHide.left = '0'
        this.showOrHide.opacity = '1'
      }
    },
    props: ['currentChap', 'totalChap', 'comic']
  }
</script>
<style lang="less">
  .chapters-switcher {
    z-index: 100;
    cursor: pointer;
    color: antiquewhite;
    background-color: rgb(51, 51, 51, 0.9);
    position: fixed;
    top: 25%;
    bottom: 25%;
    width: 150px;
    transition: left .5s ease-out, opacity .5s ease-out;

    .chapters-switcher-content {
      height: 100%;

      .chapter-switcher-header {
        width: 100%;
        position: absolute;
        bottom: 100%;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background-color: rgb(34, 34, 34, 0.9);
        padding: 0px 15px;
        border-radius: 3px;
      }

      ul {
        padding: 0;
        margin: 0;
        height: 100%;

        li {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 2px 15px;
          line-height: 18px;
          font-size: 14px;
          margin: 9px 0;
          border-radius: 2px;
          a {
            color: antiquewhite;
            text-decoration: none;
          }
        }

        li:hover {
          background-color: rgb(74, 82, 72);
        }
      }

      .aside-switcher {
        position: absolute;
        background-color: rgb(136, 136, 136, 0.9);
        top: 35%;
        left: 100%;
        width: 25px;
        writing-mode: vertical-rl;
        padding: 25px 2px;
        border-radius: 0 10px 10px 0;
      }

      .aside-switcher:hover {
        background-color: rgb(67, 90, 82);
      }
    }
  }
</style>