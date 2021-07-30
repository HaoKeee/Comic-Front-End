<template>
  <li class="top-row-li">
    <div class="top-li">
      <div class="top-li-img">
        <span class="top-li-tag" :style="TagColor">{{index+1}}</span>
        <img :src="imgSrc" :alt="title" />
      </div>
      <div class="top-li-info">
        <span>{{title}}</span>
        <span>{{title}}</span>
        <span>{{title}}</span>
        <span>{{title}}</span>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'TopRow',
  computed: {
    TagColor() {
      return this.index === 0? {'background-color': 'red'} : {'background-color': 'pink'};
    }
  },
  props: {
    index: {
      type: Number,
      default() {
        return 1
      }
    },
    imgSrc: {
      type: String,
      default() {
        return '/src/assets/images/cover.png'
      }
    },
    title: {
      type: String,
      default() {
        return '标题'
      }
    },
  }
}
</script>
<style lang="less">
@top-li-height: 100px;
@top-li-padding: 2px;
li.top-row-li {
  cursor: pointer;
  height: @top-li-height;
  padding: @top-li-padding;
  .top-li {
    display: flex;
    height: @top-li-height;
    .top-li-img {
      position: relative;
      height: 100%;
      .top-li-tag {
        position: absolute;
        top: 0;
        left: 0;
        height: 15px;
        line-height: 15px;
        width: 15px;
        z-index: 1;
        font-size: 12px;
        text-align: center;
      }
      img {
        height: 100%;
      }
    }
    .top-li-info {
      padding: 3px 3px 5px 20px;
      overflow: hidden;
      span {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        font-size: 14px;
      }
      span:first-child {
        font-size: 16px;
      }
    }
  }
}
li.top-row-li:hover {
  background-color: rgb(63, 57, 51);;
}
</style>