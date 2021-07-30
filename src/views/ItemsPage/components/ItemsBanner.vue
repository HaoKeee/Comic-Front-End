<template>
  <div class="func-banner">
    <div class="func-banner__section">
      <i class="iconfont">&#xe672;</i>
      <el-select v-model="currentCategory" multiple collapse-tags placeholder="漫画种类" @visible-change="changeItems" @remove-tag="changeItems2">
        <el-option
          v-for="category in categorys"
          :key="category.value"
          :label="category.label"
          :value="category.value"
        ></el-option>
      </el-select>
    </div>
    <div class="func-banner__section">
      <i class="iconfont">&#xe7dd;</i>
      <el-select v-model="currentArea" @visible-change="changeItems">
        <el-option
          v-for="area in areas"
          :key="area.value"
          :label="area.label"
          :value="area.value"
        ></el-option>
      </el-select>
    </div>
    <div class="func-banner__section">
      <i class="iconfont">&#xe74b;</i>
      <el-select v-model="currentStatus" @visible-change="changeItems">
        <el-option
          v-for="status in statuss"
          :key="status.value"
          :label="status.label"
          :value="status.value"
        ></el-option>
      </el-select>
    </div>
    <div class="func-banner__section">
      <i class="iconfont">&#xe63f;</i>
      <el-select v-model="currentOrder" @visible-change="changeItems">
        <el-option
          v-for="order in orders"
          :key="order.value"
          :label="order.label"
          :value="order.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemsBanner",
  data() {
    return {
      categorys: [
        {
          value: 1,
          label: "恋爱",
        },{
          value: 2,
          label: "古风",
        },{
          value: 3,
          label: "校园",
        },{
          value: 4,
          label: "奇幻",
        },{
          value: 5,
          label: "大女主",
        },{
          value: 6,
          label: "治愈",
        },{
          value: 7,
          label: "穿越",
        },{
          value: 8,
          label: "励志",
        },{
          value: 9,
          label: "爆笑",
        },{
          value: 10,
          label: "萌系",
        },{
          value: 11,
          label: "玄幻",
        },{
          value: 12,
          label: "日常",
        },{
          value: 13,
          label: "都市",
        },{
          value: 14,
          label: "彩虹",
        },{
          value: 15,
          label: "灵异",
        },{
          value: 16,
          label: "悬疑",
        },{
          value: 17,
          label: "少年",
        }
      ],
      areas: [
        {
          value: 0,
          label: "全部",
        },{
          value: 1,
          label: "国产漫画",
        },{
          value: 2,
          label: "日本漫画",
        },{
          value: 3,
          label: "欧美漫画",
        },{
          value: 4,
          label: "其他漫画",
        }
      ],
      statuss: [
        {
          value: 0,
          label: "全部",
        },{
          value: 1,
          label: "连载",
        },{
          value: 2,
          label: "完结",
        },
      ],
      orders: [
        {
          value: 0,
          label: "热度",
        },{
          value: 1,
          label: "最近更新",
        },{
          value: 2,
          label: "收藏数",
        },{
          value: 3,
          label: "评论数",
        },{
          value: 4,
          label: "新上架",
        }
      ],
    }
  },
  props: {
    currentCategory: {
      type: Array,
      default() {
        return []
      }
    },
    currentArea: {
      type: Number,
      default() {
        return 0
      }
    },
    currentStatus: { //0为完结，1为连载，2位全部
      type: Number,
      default() {
        return 0
      }
    },
    currentOrder: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {
    changeItems: function(event) {
      if (!event) {
        this.$emit('sortChanged',this.currentCategory, this.currentArea, this.currentStatus, this.currentOrder)
      }
    },
    changeItems2: function(event) {
      this.$emit('sortChanged',this.currentCategory, this.currentArea, this.currentStatus, this.currentOrder)
    }
  },
}
</script>
<style lang="less">
.func-banner {
  display: flex;
  flex-wrap: wrap;
  padding: 2px 0;
  width: 100%;
  line-height: 34px;
  .func-banner__section {
    display: flex;
    width: 25%;
    padding: 0 15px;
    margin-bottom: 5px;
    @media @max-480-screen {
      width: 50%;
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
</style>