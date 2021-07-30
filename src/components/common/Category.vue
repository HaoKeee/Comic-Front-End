<template>
    <div class="comic-category">
        <template v-for="(category,index) in categorys" :key="category.name">
            <router-link :to="category.link">
                {{category.name}}
            </router-link>
            <el-divider v-if="index!=categorys.length-1" direction="vertical"></el-divider>
        </template>
        <!-- <router-link v-for="category in categorys" :key="category.name" :to="category.link">
            {{category.name}}
            <el-divider direction="vertical"></el-divider>
        </router-link> -->
        

    </div>
</template>
<script>
export default {
    name: 'Category',
    data() {
        return {
            categorys: [
                {
                    name: '首页',
                    link: '/'
                },{
                    name: '最近更新',
                    link: '/items?orderBy=update'
                },{
                    name: '完结',
                    link: '/items?status=0&orderBy=update'
                },{
                    name: '排行榜',
                    link: '/rank'
                },{
                    name: '收藏',
                    link: '/shelf'
                },{
                    name: '历史',
                    link: '/hisory'
                }
            ]
        }
    }
}
</script>
<style lang="less">
.comic-category{
    display: flex;
    width: 100%;
    padding: 5px 4%;
    // height: 40px;
    font-size: 14px;
    border-radius: 5px;
    margin: 0 auto;
    align-items: center;
    flex-wrap: wrap;
    // flex-flow: row nowrap;
    justify-content: center;
    align-content: flex-start;
    z-index: 999;
    @media (max-width: 400px) {
        width: 100%;
        padding: 10px 0;
    }
    a {
        display: block;
        color: #fff;
        text-decoration: none;
        height: 100%;
        padding: 2px 10px;
        @media (max-width: 400px) {
            padding: 2px 5px;
        }
    }
    .el-divider--vertical {
        margin: 0;
    }
}
</style>