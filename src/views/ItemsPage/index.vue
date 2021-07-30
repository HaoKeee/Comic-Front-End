<template>
  <div class="items-page">
    <page-nav></page-nav>
    <div class="page-content">
      <div class="nav-height-offset"></div>
      <reveal-section>
        <items-banner :currentCategory="currentCategory" :currentArea="currentArea" :currentStatus="currentStatus" :currentOrder="currentOrder" @sortChanged="changeItems">
        </items-banner>
        <page-selector v-if="!disableInfo"></page-selector>
        <container>
          <component :is="itemStyle" v-for="item of items" :key="item" :data="item" :disableInfo="disableInfo"></component>
        </container>
        <page-selector v-if="!disableInfo"></page-selector>
      </reveal-section>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import CardItem from '/src/components/Item/CardItem.vue'
  import GridItem from '/src/components/Item/GridItem.vue'
  import PageSelector from '/src/components/common/PageSelector.vue'
  import RevealSection from "/src/components/Container/RevealSection.vue";
  import ItemsBanner from './components/ItemsBanner.vue'
  import Container from "/src/components/Container/Container.vue";
  import PageNav from '/src/components/common/PageNav.vue'
  import PageFooter from '/src/components/common/PageFooter.vue'
  export default {
    name: 'ItemsPage',
    data() {
      return {
        page: 1,
        currentCategory: [],
        currentArea: 0,
        currentStatus: 0,
        currentOrder: 0,
        disableInfo: false,
        itemStyle: 'grid-item',
        msg: 'Hao-Ke!',
        items: [],
      }
    },
    components: {
      RevealSection: RevealSection,
      CardItem: CardItem,
      GridItem: GridItem,
      Container: Container,
      PageSelector: PageSelector,
      PageNav: PageNav,
      PageFooter: PageFooter,
      ItemsBanner: ItemsBanner,
    },
    created() {
      this.SetQueryData()
      this.GetItemsData()
    },
    methods: {
      SetQueryData() {
        console.log(this.$route.query.category)
        const data = this.$route.query
        try {
          if (Object.keys(data).length > 0) {
            console.log(data);
            console.log('get query data');
            this.page = parseInt(data.page)
            this.currentCategory = JSON.parse(data.category)
            this.currentArea = parseInt(data.area)
            this.currentStatus = parseInt(data.status)
            this.currentOrder = parseInt(data.order)
            console.log(this.currentCategory);
          }
        }
        catch (err) {
          this.$router.push('/')
        }
      },
      GetItemsData() {
        const data = {
          page: this.page,
          pageSize: 18,
          category: this.currentCategory,
          area: this.currentArea,
          status: this.currentStatus,
          order: this.currentOrder,
        }
        if (window.innerWidth >= 1280) {
          data.pageSize = 18
        } else if (window.innerWidth >= 1024) {
          data.pageSize = 15
        } else if (window.innerWidth >= 768) {
          data.pageSize = 12
        } else if (window.innerWidth >= 480) {
          data.pageSize = 9
        } else if (window.innerWidth >= 268) {
          data.pageSize = 10
        } else {
          data.pageSize = 8
        }
        this.$http.get(this.$api.ItemsData.items, data, false).then((result) => {
          this.items = result.data.data
          console.log(data)
        }).catch((err) => {
          console.log(err)
        });
      },
      changeItems(c, a, s, o) {
        if (this.currentCategory !== c || this.currentArea !== a || this.currentStatus !== s || this.currentOrder !== o) {
          const queryParams = {
            category: JSON.stringify(c),
            area: a,
            status: s,
            order: o,
            page: this.page,
          }
          // this.GetItemsData()
          // this.items = this.$http.get()
          this.$router.push({ path: '/items', query: queryParams })
        }
        this.currentCategory = c
        this.currentArea = a
        this.currentStatus = s
        this.currentOrder = o
      }
    },
  }
</script>
<style lang="less">
  .page-content {
    width: 100%;
    min-height: 100vh;

    .items-page {
      display: flex;
      width: 100%;
      min-height: 100vh;
      align-items: center;
      flex-direction: column;

      .nav-height-offset {
        height: 100px;
      }
    }
  }
</style>