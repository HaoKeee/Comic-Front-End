<template>
  <div class="card-item">
    <div class="card-content">
      <div class="img-container">
        <img :src="imgSrc" :alt="title" />
        <button class="add-shelf"><i class="iconfont">&#xe629;</i></button>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="comic-info">
        <a class="card-title">{{ title }}</a>
        <el-divider></el-divider>
        <div class="card-desc">
          <ul>
            <li>
              <i class="iconfont">&#xe672;</i>
              {{  status  }}/{{ category }}
            </li>
            <li>
              <i class="iconfont">&#xe689;</i>
              {{  timeDelta  }}
            </li>
            <li>
              <i class="iconfont">&#xe68a;</i>
              {{  peopleStared  }} 次 收藏
            </li>
            <li>
              <i class="iconfont">&#xe654;</i>
              <div class="hot-bar-back"><i class="hot-bar" :style="{'width': rate}"></i></div>
            </li>
          </ul>
          <el-divider direction="vertical"></el-divider>
          <div class="intro">
            {{ intro }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardItem',
  data() {
    return {
      showAside: false,
      title: this.data.title,
      url: this.data.url,
      status: this.data.status,
      category: this.data.category,
      intro: this.data.intro,
      imgSrc: this.data.imgSrc,
      hot: this.data.hot,
      peopleViewed: this.data.peopleViewed,
      favoritedNum: this.data.favoritedNum,
      updated_time: this.data.updated_time,
    }
  },
  props: ['data'],
  computed: {
    rate() {
      if (this.hot <= 1) {
        const rate = this.hot * 75
        return rate.toString() + 'px'
      } else {
        return '75px'
      }

    },
    peopleStared() {
      if (this.favoritedNum <= 999) {
        return this.favoritedNum
      } else {
        return '999+'
      }
    },
    peopleCommented() {
      if (this.commentsNum <= 999) {
        return this.commentsNum
      } else {
        return '999+'
      }
    },
    timeDelta() {
      const milliSeconds = Date.now() - this.updated_time
      const minutes = parseInt(milliSeconds / 60000)
      const hours = parseInt(minutes / 60)
      const days = parseInt(hours / 24)
      const months = parseInt(days / 30)
      const years = parseInt(days / 365)
      if (years > 0) {
        return years + '年前'
      } else if (years === 0 && months > 0) {
        return months + '月前'
      } else if (months === 0 && days > 0) {
        return days + '天前'
      } else if (days === 0 && hours > 0) {
        return hours + '小时前'
      } else if (hours === 0 && minutes > 0) {
        return minutes + '分钟前'
      } else {
        return '最近更新'
      }
    }
  }
}
</script>
<style lang="less">
@1024-item-width: 100%;
@item-margin: 16px;
@item-height: 205px;
@content-padding: 15px;
@title-height: 25px;
@desc-divider-margin: 4.5px;
@desc-divider-height: 1px;
@desc-height: @item-height - @content-padding*2 - @title-height -
  @desc-divider-margin*2 - @desc-divider-height;
.card-item {
  font-size: 14px;
  width: 50%;
  margin: 0 0 0 0;
  justify-content: space-between;
  background-color: aliceblue;
  height: @item-height;
  padding: 10px 0px;
  @media @max-1024-screen {
    width: @1024-item-width;
  }
  .card-content {
    display: flex;
    background-color: black;
    padding: @content-padding 2%;
    height: @item-height - @content-padding*2;
    .img-container {
      position: relative;
      img {
        height: @item-height - @content-padding*4;
      }
      .add-shelf {
        position: absolute;
        border: 0px;
        padding: 0px;
        bottom: 5%;
        opacity: 0.7;
        right: 15px;
        width: 25px;
        height: 25px;
        background: #fff;
        border-radius: 50%;
        z-index: 2;
      }
    }
    .el-divider--vertical {
      height: 100%;
    }
    .comic-info {
      overflow: hidden;
      .card-title {
        display: block;
        font-size: 16px;
        height: @title-height;
        line-height: @title-height;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .el-divider--horizontal {
        margin: @desc-divider-margin 0px;
        line-height: @desc-divider-height;
      }
      .card-desc {
        display: flex;
        height: @item-height - @content-padding*4 - @title-height - 5px;
        ul {
          height: 100%;
          list-style: none;
          padding: 0px;
          margin: 0;
          li {
            height: 25%;
            width: fit-content;
            white-space: nowrap;
            .hot-bar-back {
              display: inline-block;
              margin-left: 2px;
              width: 75px;
              height: 10px;
              border-radius: 5px;
              background-color: white;
              align-self: center;
              .hot-bar {
                display: block;
                width: 75px;
                height: 10px;
                border-radius: 5px;
                background-color: red;
                align-self: center;
              }
            }
          }
        }
        .intro {
          position: relative;
          display: -webkit-box;
          font-size: 12px;
          width: 100%;
          height: 100%;
          padding: 5px 0px;
          line-height: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          text-indent: 2rem;
        }
      }
    }
  }
}
</style>