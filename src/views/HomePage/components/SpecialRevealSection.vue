<template>
  <div class="special-reveal-section">
    <div class="special-reveal-title">这是一个栏目的标题</div>
    <div class="special-items-container">
      <div class="first-line">
        <div class="first-grid">
          <div class="special-reveal-grid-item"></div>
        </div>
        <div class="first-line-grids">
        </div>
      </div>
      <div class="second-line"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SpecialRevealSection',
  data() {
    return {

    }
  },
}
</script>
<style lang="less">
@1280-item-width: 16.666667%;
@1024-item-width: 20%;
@768-item-width: 25%;
@480-item-width: 33.333333%;
@min-item-width: 50%;
@item-margin: 16px;
@item-height: 200px;

.special-reveal-section {
  align-items: center;
  margin: 2rem auto;
  background-color: #303030;
  border-radius: 1rem;
  width: 100%;
  flex-grow: 1;
  color: #fff;
  padding: 0 0.75rem;
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
  .special-reveal-title {
    padding: 1rem 2% 0 2%;
    font-size: 20px;
    // font-family: ;  //待设置字体
  }
  .special-items-container {
    margin: 1rem 0.5rem;
    border-style: hidden;
    border-radius: 0.25rem;
    padding: 15px 0;
    background-color: rgba(66, 66, 66, 0.95);
    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
    border-style: hsla(0, 0%, 100%, 0.1) hsla(0, 0%, 100%, 0.07)
      hsla(0, 0%, 100%, 0.04);
    clear: both;
    .first-line {
      display: inline-block;
      width: 100%;
      height: 50px;
      background-color: #fff;
      .first-grid {
        font-size: 16px;
        width: @min-item-width*2;
        margin: 0 0 @item-margin 0;
        height: @item-height*2;
        @media @min-480-screen {
          width: @480-item-width*2;
        }
        @media @min-768-screen {
          width: @768-item-width*2;
        }
        @media @min-1024-screen {
          width: @1024-item-width*2;
        }
        @media @min-1280-screen {
          width: @1280-item-width*2;
        }
      }
      .first-line-grids {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
      }
    }
    .second-line {
      display: flex;
      width: 100%;
      height: 100px;
      background-color: aquamarine;
    }
  }
}
</style>