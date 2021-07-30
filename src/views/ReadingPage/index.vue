<template>
  <page-nav></page-nav>
  <div class="reading-page">
    <div class="nav-height-offset"></div>
    <chapter-switcher :comic="comic" :currentChap="currentChap" :totalChap="totalChap"></chapter-switcher>
    <reveal-section>
      <chapter-selector></chapter-selector>
      <div class="comic-items-container">
        <template v-for="img in imgList" :key="img">
          <div class="comic-item">
            <img :src="img" :alt="img" />
          </div>
        </template>
      </div>
      <chapter-selector></chapter-selector>
    </reveal-section>
  </div>
  <page-footer></page-footer>
</template>
<script>
  import PageNav from '../../components/common/PageNav.vue';
  import PageFooter from '../../components/common/PageFooter.vue';
  import ChapterSelector from './components/ChapterSelector.vue'
  import ChapterSwitcher from './components/ChapterSwitcher.vue'
  import RevealSection from '../../components/Container/RevealSection.vue'
  import ComicItem from './components/ComicItem.vue'
  export default {
    name: 'ReadingPage',
    data() {
      return {
        currentChap: 0,
        totalChap: 0,
        comic: undefined,
        imgList: [],
        nearChapters: [],
      }
    },
    components: {
      'PageNav': PageNav,
      'PageFooter': PageFooter,
      'ChapterSelector': ChapterSelector,
      'ChapterSwitcher': ChapterSwitcher,
      'RevealSection': RevealSection,
      'ComicItem': ComicItem,
    },
    created() {
      this.SetQueryData()
      this.GetimgListData()
    },
    methods: {
      SetQueryData() {
        console.log(this.$route.query.category)
        const data = this.$route.query
        try {
          console.log(data);
          console.log('get query data');
          this.currentChap = parseInt(data.chap)
          this.comic = JSON.parse(data.comic)
        }
        catch (err) {
          console.log(err);
          this.$router.push('/')
        }
      },
      GetimgListData() {
        const data = {
          comic: this.comic,
          chap: this.currentChap
        }
        this.$http.get(this.$api.Reading.reading, data, false).then(
          (result) => {
            this.imgList = result.data.data.imgList
            this.totalChap = result.data.data.totalChaps
            console.log(result.data);
          }).catch((err) => {
            console.log(err);
          })
      }
    }
  }
</script>
<style lang="less">
  .reading-page {
    width: 100%;
    min-height: 100vh;

    .nav-height-offset {
      height: 100px;
    }

    .comic-items-container {
      margin: 0.5rem 0.5rem 1rem 0.5rem;
      border-style: hidden;
      border-radius: 0.25rem;
      padding: 25px 0 15px 0;
      background-color: rgba(66, 66, 66, 0.95);
      box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
      border-style: hsla(0, 0%, 100%, 0.1) hsla(0, 0%, 100%, 0.07) hsla(0, 0%, 100%, 0.04);
      clear: both;

      .comic-item {
        width: 100%;
        padding: 0 5%;
        text-align: center;

        img {
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
        }
      }
    }
  }
</style>