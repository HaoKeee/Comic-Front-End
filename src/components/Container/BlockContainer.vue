<template>
  <div class="items-container">
    <slot></slot>
  </div>
</template>
<style lang="less">
.items-container {
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  border-style: hidden;
  border-radius: 0.25rem;
  padding: 15px 0;
  box-sizing: border-box;
  background-color: rgba(66, 66, 66, 0.95);
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
  border-style: hsla(0, 0%, 100%, 0.1) hsla(0, 0%, 100%, 0.07)
    hsla(0, 0%, 100%, 0.04);
  clear: both;
}
</style>