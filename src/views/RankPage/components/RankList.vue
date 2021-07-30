<template>
  <div class="card-rank">
    <div class="card-rank-content">
      <div v-if="listTitle" class="card-rank-title">{{listTitle}}</div>
      <ul>
        <top-row v-for="(TopItem,index) in items.slice(0,3)" :key="TopItem" :imgSrc="TopItem.imgSrc" :title="TopItem.title" :index="index" @click="GoToDetail(TopItem.id)"></top-row>
        <li v-for="(TopItem,index) in items.slice(3,)" :key="TopItem" class="rank-li" @click="GoToDetail(TopItem.id)">
          <span>{{index+4}}</span>
          <p>{{TopItem.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import TopRow from './TopRow.vue'
export default {
  name: 'RankList',
  props: {
    listTitle: {
      type: String,
      default() {
        return undefined
      }
    },
    items: {
      type: Array,
      default() {
        return []
      },
    }
  },
  created() {
    console.log(this.items)
  },
  components: {
    TopRow: TopRow,
  },
  methods: {
    GoToDetail(id) {
      this.$router.push('/detail?id=' + id)
    }
  }
}
</script>
<style lang="less">
@768-item-width: 100%;
@item-margin: 16px;
@item-height: 205px;
@content-padding: 15px;
@title-height: 25px;
@desc-divider-margin: 4.5px;
@desc-divider-height: 1px;
@desc-height: @item-height - @content-padding*2 - @title-height - @desc-divider-margin*2 - @desc-divider-height;

@li-height: 20px;
.card-rank {
  font-size: 14px;
  width: 50%;
  margin: 0;
  justify-content: space-between;
  @media @max-768-screen {
    width: @768-item-width;
  }
  .card-rank-content {
    border-radius: 5px;
    background-color: rgb(41, 37, 37);
    padding: @content-padding 2%;
    ul {
      width: 100%;
      border-radius: 10px;
      list-style: none;
      padding-left: 0;
      li {
        margin-bottom: 5px;
      }
      li.rank-li {
        cursor: pointer;
        border-radius: 2px;
        padding: 0 5px;
        color: white;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: @li-height;
        line-height: @li-height;
        span {
          height: 16px;
          line-height: 16px;
          width: 16px;
          align-self: center;
          text-align: center;
          margin-right: 10px;
        }
        p {
          display: inline;
          margin: 0;
        }
      }
      li.rank-li:hover {
        background-color: rgb(63, 57, 51);
      }
    }
  }
}
</style>