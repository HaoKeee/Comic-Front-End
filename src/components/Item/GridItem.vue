<template>
  <div class="grid">
    <router-link :to="'/detail?id='+this.data.id">
      <div class="grid-content" @mouseenter="switchInfo" @mouseleave="switchInfo">
        <div class="tag" v-if="!disableInfo">{{this.data.status}}/{{this.data.category}}</div>
        <span class="fold" v-if="!disableInfo"></span>
        <el-image :src="this.data.imgSrc" fit="fit" :alt="this.data.title"></el-image>
        <button class="add-shelf"><i class="iconfont">&#xe629;</i></button>
        <transition enter-active-class="item-aside-on" leave-active-class="item-aside-off" v-if="!disableInfo">
          <ul class="meta" v-show="showAside">
            <li>
              <i class="iconfont">&#xe689;</i>
              <span>{{timeDelta}}</span>
            </li>
            <li>
              <i class="iconfont">&#xe68a;</i>
              <span>{{peopleViewed}} 次 观看</span>
            </li>
            <li>
              <i class="iconfont">&#xe68a;</i>
              <span>{{peopleStared}} 次 收藏</span>
            </li>
            <li class="hot-row">
              <i class="iconfont">&#xe654;</i>
              <div class="hot-bar-back"><i class="hot-bar" :style="{'width': rate}"></i></div>
            </li>
          </ul>
        </transition>
        <div class="item-title">{{this.data.title}} 更新至 {{this.data.chapterNum}}话</div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'GridItem',
  data() {
    return {
      showAside: false,
    }
  },
  props: ['data', 'disableInfo'],
  computed: {
    rate() {
      if (this.data.hot <= 1) {
        const rate = this.data.hot * 75
        return rate.toString() + 'px'
      } else {
        return '75px'
      }
    },
    peopleStared() {
      if (this.data.favoritedNum <= 999) {
        return this.data.favoritedNum
      } else {
        return '999+'
      }
    },
    peopleViewed() {
      if (this.data.peopleViewed <= 999) {
        return this.data.peopleViewed
      } else {
        return '999+'
      }
    },
    timeDelta() {
      const milliSeconds = Date.now() - this.data.updated_time
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
  },
  methods: {
    switchInfo() {
      this.showAside = this.showAside ? false : true
    },
  },
}
</script>
<style lang="less">
@1280-item-width: 16.666667%;
@1024-item-width: 20%;
@768-item-width: 25%;
@480-item-width: 33.333333%;
@268-item-width: 50%;
@min-item-width: 100%;
@item-margin: 16px;
@item-height: 200px;

.grid {
  font-size: 14px;
  width: @min-item-width;
  margin: 0 0 @item-margin 0;
  // height: @item-height;
  @media @min-268-screen {
    width: @268-item-width;
  }
  @media @min-480-screen {
    width: @480-item-width;
  }
  @media @min-768-screen {
    width: @768-item-width;
  }
  @media @min-1024-screen {
    width: @1024-item-width;
  }
  @media @min-1280-screen {
    width: @1280-item-width;
  }
  a {
    color: #fff !important;
      .grid-content {
        display: block;
        position: relative;
        margin: 0 @item-margin;
        .tag {
          position: absolute;
          text-align: left;
          padding: 2px 10%;
          top: 10px;
          color: #fff;
          white-space: nowrap;
          left: -10px;
          height: 20px;
          border-radius: 2px;
          background: linear-gradient(45deg, #18779a 1%, #1ec9e5 64%, #3fd3e2 97%);
          z-index: 1;
        }
        .fold {
          position: absolute;
          top: 10px;
          left: -10px;
          display: block;
          border-top: 24px solid transparent;
          border-bottom: 15px solid transparent;
          border-right: 10px solid #c3c3c3;
          width: 0px;
          height: 0px;
        }
        img {
        }
        .add-shelf {
          position: absolute;
          border: 0px;
          padding: 0px;
          bottom: 20%;
          opacity: 0.7;
          right: 15px;
          width: 25px;
          height: 25px;
          background: #fff;
          border-radius: 50%;
          z-index: 2;
          i {
            font-size: 17px;
          }
        }
        .add-shelf:hover {
          background: #c3c3c3;
        }
        .item-title {
          position: absolute;
          display: inline-block;
          font-size: 16px;
          padding: 5px 5%;
          background-color: rgba(100, 101, 102, 0.5);
          border: 1% solid #000;
          border-radius: 3px;
          white-space: nowrap;
          left: 0%;
          right: 0%;
          bottom: 0%;
          letter-spacing: 1px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        ul {
          position: absolute;
          display: block;
          list-style: none;
          top: 40px;
          left: 0px;
          width: 100px;
          max-width: 80%;
          padding: 0;
          @media @max-268-screen {
            top: 15px;
            width: 80px;
          }
          li {
            display: list-item;
            left: -100%;
            float: left;
            border-radius: 2px;
            margin-bottom: 10px;
            max-width: 100%;
            padding: 1px 10px 1px 5px;
            background: rgba(100, 101, 102, 0.4);
            white-space: nowrap;
            clear: both;
            @media @max-268-screen {
              font-size: 12px;
              i {
                font-size: 12px;
              }
            }
            @media @max-268-screen {
              margin-bottom: 3px;
            }
            i {
              margin-right: 5px;
            }

            .hot-bar-back {
              display: block;
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
          li:nth-last-child(1) {
            * {
              display: inline-block;
            }
          }
        }
        .item-aside-on {
          animation: 0.25s show-item-aside;
        }
        .item-aside-off {
          animation: 0.25s hide-item-aside;
        }
        @keyframes show-item-aside {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes hide-item-aside {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      }
  }
}
</style>