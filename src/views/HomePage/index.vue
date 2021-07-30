<template>
  <page-nav></page-nav>
  <div class="nav-height-offset"></div>
  <carousel></carousel>
  <reveal-section title="这是一个大栏目的标题">
    <container v-for="section in homeSections" :key="section.title" :title="section.title">
      <grid-item v-for="item in section.items" :key="item" :data="item" :disableInfo="disableInfo"></grid-item>
    </container>
  </reveal-section>
  <!-- <special-reveal-section>这是一块展示栏</special-reveal-section> -->
  <page-footer></page-footer>
</template>

<script>
import PageNav from '/src/components/common/PageNav.vue'
import GridItem from "../../components/Item/GridItem.vue";
import Carousel from "./components/Carousel.vue";
import PageFooter from '/src/components/common/PageFooter.vue'
import RevealSection from "../../components/Container/RevealSection.vue";
import SpecialRevealSection from "./components/SpecialRevealSection.vue";
import Container from "../../components/Container/Container.vue";
export default {
  name: "HomePage",
  data() {
    return {
      homeSections: [],
      disableInfo: true,
    };
  },
  components: {
    PageNav: PageNav,
    Container: Container,
    GridItem: GridItem,
    Carousel: Carousel,
    PageFooter: PageFooter,
    RevealSection: RevealSection,
    SpecialRevealSection: SpecialRevealSection,
  },
  created() {
    this.GetItemsData();
  },
  methods: {
    GetItemsData() {
      const data = {
        sectionSize: 18
      }
      if (window.innerWidth >= 1280) {
        data.sectionSize = 18
      } else if (window.innerWidth >= 1024) {
        data.sectionSize = 15
      } else if (window.innerWidth >= 768) {
        data.sectionSize = 12
      } else if (window.innerWidth >= 480) {
        data.sectionSize = 9
      } else if (window.innerWidth >= 268) {
        data.sectionSize = 10
      } else {
        data.sectionSize = 8
      }
      this.$http.get(this.$api.HomePage.HomePage,
      data,false).then((result) => {
        this.homeSections = result.data.data
        console.log(this.homeSections);
      }).catch((err) => {
        console.log(err);
      })
    },
  },
};
</script>
<style lang="less">
.nav-height-offset {
  height: 100px;
}
</style>
