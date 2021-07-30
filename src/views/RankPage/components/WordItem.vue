<template>
  <div class="word-item" @click="GoToSearch($event)">
    {{ content }}
  </div>
</template>
<script>
export default {
  name: 'WordItem',
  props: {
    content: {
      type: String,
      default() {
        return ''
      }
    }
  },
  methods: {
    GoToSearch(event) {
      const value = event.target.innerText
      if (value !== undefined && value !== '') {
        this.$emit('keywordBubble',event.target.innerText)
      }
      else {
        console.log(event);
      }
    }
  }
}
</script>
<style lang="less">
  .word-item {
    font: specialfont;
    color: #fff;
    cursor: pointer;
    margin: 3px 10px;
    padding: 2px 5px;
    max-width: 100%;
    min-width: 10%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-wrap: wrap;

    @media @max-1024-screen {
      min-width: 16.666667%;
    }
    @media @max-768-screen {
      min-width: 25%;
    }
    @media @max-480-screen {
      min-width: 50%;
    }
    @media @max-268-screen {
      min-width: 100%;
    }
  }
</style>