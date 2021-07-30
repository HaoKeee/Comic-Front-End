<template>
  <div class="shelf-page">
    <reveal-section title="个人收藏">
      <shelf-banner></shelf-banner>
      <page-selector></page-selector>
      <container>
        <component
          :is="itemStyle"
          v-for="item in shelfItems"
          :key="item"
          :data="item"
        ></component>
      </container>
      <page-selector></page-selector>
    </reveal-section>
  </div>
</template>
<script>
import axios from "axios";
import ShelfBanner from './components/ShelfBanner.vue'
import GridItem from "/src/components/Item/GridItem.vue";
import RevealSection from "/src/components/Container/RevealSection.vue";
import PageSelector from "/src/components/common/PageSelector.vue";
import Container from "/src/components/Container/Container.vue";
export default {
  name: "ShelfPage",
  data() {
    return {
      shelfItems: [],
      itemStyle: "grid-item",
    };
  },
  components: {
    RevealSection: RevealSection,
    PageSelector: PageSelector,
    Container: Container,
    GridItem: GridItem,
    ShelfBanner: ShelfBanner
  },
  created() {
    this.GetShelfData();
  },
  methods: {
    GetShelfData() {
      axios
        .get("/src/assets/data/ShelfData.json")
        .then(
          (response) => (
            (this.shelfItems = response.data), console.log(this.shelfItems)
          )
        );
    },
  },
};
</script>
<style lang="less">
.shelf-page {
  .func-banner {
    display: flex;
    flex-wrap: wrap;
    padding: 2px 0;
    width: 100%;
    line-height: 34px;
    .func-banner__section {
      display: flex;
      width: 50%;
      padding: 0 15px;
      margin-bottom: 5px;
      @media @max-480-screen {
        width: 100%;
      }
      i {
        font-size: 14px;
        line-height: 30px;
      }
      input {
        border: none;
        color: #fff;
        height: 30px;
        padding-left: 5px;
        background-color: rgb(48, 48, 48);
      }
    }
  }
}
</style>
