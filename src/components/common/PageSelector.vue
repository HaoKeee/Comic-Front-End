<template>
    <div class="page-selector">
        <div class="order-func">
            
        </div>
        <el-button-group>
            <el-button round type="info" size="mini" icon="el-icon-arrow-left" :disabled="pageNum === 1">上一页</el-button>
            <el-button round type="info" size="mini" :disabled="pageNum === totalPage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <span class="goto-page">
            <el-button round type="info" size="mini" :disabled="gotoPage === pageNum">前往</el-button>
            <el-input-number v-model="gotoPage" @change="handleGotoPageChange" :min="1" :max="totalPage" size="mini"></el-input-number>
            页/{{totalPage}}页
        </span>
    </div>
</template>

<script>
export default {
    name: 'PageSelector',
    data() {
        return {
            pageNum: 1,
            totalPage: 50,
            gotoPage: 1,
        }
    },
    methods: {
        handleGotoPageChange() {
            console.log(this.gotoPage);
        }
    },
}
</script>

<style lang="less">
.page-selector {
    padding: 10px 16px;
    text-align: right;
    font-size: 12px;
    @media @max-480-screen {
        text-align: center;
    }
    .el-button--mini.is--round {
        padding: 5px;
    }
    button {
        padding: 5px 7px !important;
        i {
            font-size: 12px;
        }
        
    }
    .goto-page {
        display: inline-block;

        button {
            margin: 0px 3px 0px 10px;
        }
        .el-input-number {
            width: 90px;
        }
    }
}
</style>