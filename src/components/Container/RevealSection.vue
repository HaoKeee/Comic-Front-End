<template>
  <div class="reveal-section">
    <div class="reveal-title" v-if="title">{{title}}</div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RevealSection',
  props: ['title'],
}
</script>
<style lang="less">
@reveal-height: 400px;
.reveal-section {
  align-items: center;
  margin: 2rem auto;
  background-color: #303030;
  border-radius: 1rem;
  width: 100%;
  flex-grow: 1;
  color: #fff;
  padding: 1rem 0.75rem;
  @media @min-640-screen {
    width: 640px;
  }
  @media @min-768-screen {
    width: 768px;
  }
  @media @min-1024-screen {
    width: 1024px;
  }
  @media @min-1280-screen {
    width: 1280px;
  }
  .reveal-title {
    border-left: 5px solid burlywood;
    padding: .5rem 2% .5rem 2%;
    font-size: 18px;
    // font-family: ;  //待设置字体
  }
}
</style>