<template>
  <div class="comic-item">
    <img :src="data.imgSrc" :alt="data.imgSrc" />
  </div>
</template>
<script>
export default {
  name: 'ComicItem',
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
  }
}
</script>
<style lang="less">
@min-1024-img-width: 720px;
@min-640-img-width: 100%;
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
</style>