<template>
  <div class="func-banner">
    <div class="func-banner__section">
      <i class="iconfont">&#xe672;</i>
      <el-select v-model="currentSort">
        <el-option
          v-for="sort in sorts"
          :key="sort.value"
          :label="sort.label"
          :value="sort.value"
        ></el-option>
      </el-select>
      <el-button type="danger" size="small" round>管理分类</el-button>
    </div>
    <div class="func-banner__section">
      <i class="iconfont">&#xe63f;</i>
      <el-select v-model="currentOrder">
        <el-option
          v-for="order in orders"
          :key="order.value"
          :label="order.label"
          :value="order.value"
        ></el-option>
      </el-select>
      <el-button type="info" size="small" round>多选操作</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShelfBanner",
  data() {
    return {
      currentSort: "默认收藏",
      currentOrder: "最近收藏",
      sorts: [
        {
          value: 1,
          label: "默认收藏",
        },
        {
          value: 2,
          label: "收藏夹1",
        },
        {
          value: 3,
          label: "收藏夹2",
        },
        {
          value: 4,
          label: "收藏夹3",
        },
        {
          value: 5,
          label: "收藏夹4",
        },
        {
          value: 6,
          label: "收藏夹5",
        },
        {
          value: 7,
          label: "收藏夹6",
        },
        {
          value: 8,
          label: "收藏夹7",
        },
        {
          value: 9,
          label: "收藏夹8",
        },
      ],
      orders: [
        {
          value: 1,
          label: "最近收藏",
        },
        {
          value: 2,
          label: "最近更新",
        },
        {
          value: 3,
          label: "最高热度",
        },
        {
          value: 4,
          label: "最常阅读",
        },
      ],
    }
  }
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
</style>