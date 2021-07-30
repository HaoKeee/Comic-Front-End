<template>
  <page-nav ref="search"></page-nav>
  <div class="page-content">
    <div class="nav-height-offset"></div>
    <div class="top-keywords">
      <container class="top-keywords__container">
        <word-item v-for="keyword in topKeywords" :key="keyword" :content="keyword" @keywordBubble="handlerKeyword"></word-item>
      </container>
    </div>
    <div class="reveal-container">
      <reveal-section>
        <container v-for="section in rankSections" :key="section.title" :title="section.title">
          <rank-list v-for="list in section.lists" :key="list.listTitle" :listTitle="list.title" :items="list.items"></rank-list>
        </container>
      </reveal-section>
    </div>
  </div>
  <page-footer></page-footer>
</template>
<script>
  import WordItem from './components/WordItem.vue'
  import TopRow from './components/TopRow.vue'
  import PageNav from '/src/components/common/PageNav.vue'
  import PageFooter from '/src/components/common/PageFooter.vue'
  import Container from '/src/components/Container/Container.vue'
  import RankList from './components/RankList.vue'
  import RevealSection from '/src/components/Container/RevealSection.vue';
  export default {
    name: 'RanksContainer',
    data() {
      return {
        search: '',
        rankSections: [],
        topKeywords: []
      }
    },
    components: {
      'TopRow': TopRow,
      'WordItem': WordItem,
      'PageNav': PageNav,
      'PageFooter': PageFooter,
      'Container': Container,
      'RankList': RankList,
      'RevealSection': RevealSection,
    },
    created() {
      this.GetItemsData();
      this.GetKeywordsData()
    },
    methods: {
      GetKeywordsData() {
        const data = {
          num: 20,
        }
        if (window.innerWidth >= 1024) {
          data.num = 20
        } else if (window.innerWidth >= 768) {
          data.num = 12
        } else if (window.innerWidth >= 480) {
          data.num = 8
        } else if (window.innerWidth >= 240) {
          data.num = 6
        } else {
          data.num = 4
        }
        this.$http.get(this.$api.Common.TopKeywords, data, false).then((result) => {
          this.topKeywords = result.data.data
          console.log(this.rankSections);
        }).catch((err) => {
          console.log(err);
        })
      },
      GetItemsData() {
        this.$http.get(this.$api.PageData.rankpage, undefined, false).then((result) => {
          this.rankSections = result.data
          console.log(this.rankSections);
        }).catch((err) => {
          console.log(err);
        })
      },
      handlerKeyword(value) {
        this.$refs.search.search = value;
      }
    },
  }
</script>
<style lang="less">
  @reveal-height: 400px;

  .page-content {
    width: 100%;
    min-height: 100vh;
    .nav-height-offset {
      height: 100px;
    }

    .reveal-container {
      width: 100%;
      align-items: center;
    }

    .top-keywords {
      width: 90%;
      margin: 0 auto;

      .top-keywords__container {
        padding: 5px 5%;
      }
    }
  }
</style>