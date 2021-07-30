<template>
  <div>
    <page-nav></page-nav>
    <div class="nav-height-offset"></div>
    <reveal-section>
      <container>
        <div class="comic-banner">
          <div class="cover-container">
            <img :src="imgSrc" :alt="title">
          </div>
          <div class="info-container">
            <div class="comic-title"><b>{{ title }}</b></div>
            <ul class="comic-infos">
              <li>{{status}}</li>
              <li>{{timeDelta}}</li>
              <li>{{peopleViewed}} 次 观看</li>
              <li class="hot-li">
                <i class="iconfont">&#xe654;</i>
                <div class="hot-bar-back">
                  <i class="hot-bar" :style="{'width': rate}"></i>
                </div>
              </li>
              <li class="tag-li">
                <template v-for="category in categorys" :key="category.id">
                  <el-button type="danger" size="mini" @click="this.$router.push('/items?category=[' + category.id + ']')">{{category.name}}</el-button>
                </template>
              </li>
            </ul>
            <div class="comic-intro">{{ intro }}</div>
              <div class="user-actions">
                <el-button icon="el-icon-star-on" type="danger">收藏</el-button>
                <el-button icon="el-icon-caret-right" type="danger" @click="this.$router.push('/')">开始阅读</el-button>
              </div>
            </div>
          </div>
          <div class="chapter-container">
            <div class="change-bar">
              <span class="change-order" @click="chapters.reverse()">
                <i class="el-icon-sort"></i>
                切换排序
              </span>
              <span class="change-order" @click="showAllChapters = !showAllChapters">
                <i class="el-icon-caret-bottom"></i>
                {{showAllChapters ? '缩略' : '展开全部'}}
              </span>
            </div>
            <ul v-if="showAllChapters">
              <li v-for="chapter in chapters" :key="chapter.id">
                <span>
                  <router-link :to="'/reading?comic='+id+'&chapter='+chapter.id">
                    {{chapter.name}}
                  </router-link>
                </span>
              </li>
            </ul>
            <ul v-else>
              <li v-for="chapter in chapters.slice(0,12)" :key="chapter.id">
                <span>
                  <router-link :to="'/reading?comic='+id+'&chapter='+chapter.id">
                    {{chapter.name}}
                  </router-link>
                </span>
              </li>
              <li>
                <span class="ellipsis" @click="showAllChapters = !showAllChapters">. . . . .</span>
              </li>
              <li v-for="chapter in chapters.slice(-11,)" :key="chapter.id">
                <span>
                  <router-link :to="'/reading?comic='+id+'&chapter='+chapter.id">
                    {{chapter.name}}
                  </router-link>
                </span>
              </li>
            </ul>
          </div>
      </container>
      <container>
        <div class="comments-box">
          <comment></comment>
          <comment></comment>
          <comment></comment>
        </div>
      </container>
      <container :title="相似推荐" v-if="similarRecommends.length > 0">
        <grid-item v-for="item in similarRecommends" :key="item" :data="item" :disableInfo="disableInfo"></grid-item>
      </container>
    </reveal-section>
  </div>
</template>
<script>
  import Comment from './components/Comment.vue'
  import PageNav from '../../components/common/PageNav.vue';
  import RevealSection from '../../components/Container/RevealSection.vue'
  import Container from '../../components/Container/Container.vue'
  import GridItem from '../../components/Item/GridItem.vue';

  export default {
    data() {
      return {
        id: undefined,
        title: undefined,
        imgSrc: undefined,
        status: undefined,
        hot: undefined,
        updatedTime: undefined,
        peopleViewedNum: undefined,
        chapters: [],
        intro: undefined,
        categorys: [],
        showAllChapters: false,
        disableInfo: true,
        similarRecommends: [],
      }
    },
    components: {
      'Comment': Comment,
      'RevealSection': RevealSection,
      'Container': Container,
      'PageNav': PageNav,
      'GridItem': GridItem,
    },
    computed: {
      rate() {
        if (this.hot <= 1) {
          const rate = this.hot * 100
          return rate.toString() + 'px'
        } else {
          return '100px'
        }
      },
      peopleViewed() {
        if (this.peopleViewedNum <= 999) {
          return this.peopleViewedNum
        } else {
          return '999+'
        }
      },
      timeDelta() {
        const milliSeconds = Date.now() - this.updatedTime
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
      },
    },
    created() {
      this.SetQueryData();
      this.GetDetailInfo();
    },
    methods: {
      SetQueryData() {
        console.log(this.$route.query.category)
        const data = this.$route.query
        try {
          this.id = Number(data.id)
          if (this.id >= 0) {
            this.$router.push('/')
          }
        }
        catch (err) {
          this.$router.push('/')
        }
      },
      GetDetailInfo() {
        const data = {
          id: this.id,
          size: 6,
        }
        if (window.innerWidth >= 1280) {
          data.pageSize = 6
        } else if (window.innerWidth >= 1024) {
          data.pageSize = 5
        } else if (window.innerWidth >= 768) {
          data.pageSize = 4
        } else if (window.innerWidth >= 480) {
          data.pageSize = 3
        } else if (window.innerWidth >= 268) {
          data.pageSize = 4
        } else {
          data.pageSize = 1
        }
        this.$http.get(this.$api.ComicDetail.detail, data, false).then((result) => {
          console.log(result.data);
          this.title = result.data.data.title
          this.imgSrc = result.data.data.imgSrc
          this.status = result.data.data.status
          this.hot = result.data.data.hot
          this.updatedTime = result.data.data.updatedTime
          this.peopleViewedNum = result.data.data.peopleViewedNum
          this.chapters = result.data.data.chapters.reverse()
          this.intro = result.data.data.intro
          this.categorys = result.data.data.categorys
          this.similarRecommends = result.data.data.similarRecommends
          if (this.chapters.length <= 24) {
            this.showAllChapters = true
          }
        }).catch((err) => {
          console.log(err)
        });
      },
    }
  }
</script>
<style lang="less">
  .nav-height-offset {
    height: 100px;
  }

  .comic-banner {
    width: 100%;
    display: flex;

    @media @max-768-screen {
      width: 100%;
      flex-direction: column;
    }

    .cover-container {
      width: 20%;
      margin-left: 25px;

      @media @max-768-screen {
        margin: 0;
        display: flex;
        width: 100%;
      }

      img {
        width: 100%;
        border-radius: 1rem;
        box-shadow: 2px 0px 0px 3px rgb(114, 108, 108);

        @media @max-768-screen {
          width: 200px;
          margin: 0 auto;
        }
      }
    }

    .info-container {
      width: 80%;
      padding: 15px 15px 0px 25px;

      @media @max-768-screen {
        display: block;
        width: 100%;
      }

      .comic-title {
        width: 100%;
        font-size: 20px;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin-bottom: 10px;

        li {
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 5px;
          text-overflow: ellipsis;
        }

        .hot-li {
          height: 20px;

          .hot-bar-back {
            display: inline-block;
            width: 100px;
            margin-left: 15px;
            height: 12px;
            border-radius: 5px;
            background-color: white;
            align-self: center;

            .hot-bar {
              display: block;
              width: 100px;
              height: 12px;
              border-radius: 5px;
              background-color: red;
              align-self: center;
            }
          }
        }

        .tag-li {
          overflow: none;
          text-overflow: clip;
          button {
            padding: 5px 7px;
          }
        }
      }

      .comic-intro {
        max-height: 100px;
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        text-indent: 2rem;
      }

      .user-actions {
        line-height: 50px;
        padding: 5px 10px;

        button {
          @media @max-480-screen {
            padding: 1px 3px;
          }
          @media @max-268-screen {
            margin: 0;
          }
        }
        @media @max-268-screen {
          text-align: center;
          padding: 0;
        }
      }
    }
  }

  @640-chapter-width: 25%;
  @1024-chapter-width: 16.666667%;

  .chapter-container {
    padding: 15px 0;
    width: 100%;

    .change-bar {
      display: flex;
      flex-wrap: wrap;
      .change-order {
        display: block;
        padding: 0px 25px;
      }

      .change-order:hover {
        cursor: pointer;
      }
    }

    ul {
      display: flex;
      padding: 0 15px;
      width: 100%;
      flex-wrap: wrap;

      li {
        display: block;
        padding: 5px;
        width: 50%;

        @media @min-640-screen {
          width: @640-chapter-width;
          padding: 5px 10px;
        }

        @media @min-1024-screen {
          width: @1024-chapter-width;
          padding: 5px 10px;
        }

        span {
          display: block;
          height: 35px;
          line-height: 25px;
          text-align: center;
          color: #fff;
          justify-content: center;
          padding: 5px 15px;
          margin: 0;
          border-radius: 5px;
          background-color: rgb(172, 156, 156);
          overflow: hidden;
          text-overflow: ellipsis;

          a {
            color: #fff;
            text-decoration: none;
          }

          @media @max-768-screen {
            padding: 5px 5px;
          }
        }

        span:hover {
          cursor: pointer;
          background-color: rgb(110, 86, 86);
        }

        .ellipsis {
          background-color: rgb(39, 30, 30);
        }
      }
    }
  }
  .comments-box {
    width: 100%;
  }
</style>