<template>
    <nav class="nav">
        <div class="nav-body">
            <div class="nav-body-logo" :style="showContent">
                <router-link to="/">
                    <el-image fit="contain" src="/src/assets/images/logo.png" alt="logo"></el-image>
                </router-link>
            </div>
            <div :class="searchBarClassName">
                <el-input v-model="search" placeholder="Search" size="small" type="text"><template #append><el-button size="small" icon="el-icon-search"></el-button></template></el-input>
            </div>
            <div class="search-trigger" :style="smallScreenSearchBtn">
                <el-button @click="handleSmallScreenSearch" size="small" icon="el-icon-search"></el-button>
            </div>
            <div v-if="loged" class="nav-body-user" :style="showContent">
                <user-drop-down></user-drop-down>
            </div>
            <div v-else class="nav-body-login" :style="showContent">
                <router-link to="/login">
                    <span>登录/注册</span>
                </router-link>  
            </div>
        </div>
        <div class="comic-category">
            <template v-for="(category,index) in categorys" :key="category.name">
                <router-link :to="category.link">
                    {{category.name}}
                </router-link>
                <el-divider v-if="index!=categorys.length-1" direction="vertical"></el-divider>
            </template>
        </div>
    </nav>
</template>
<script>
import { ref } from 'vue';
import UserDropDown from './UserDropDown.vue';

export default {
    name: 'PageNav',
    data() {
        return {
            loged: false,
            showContent: {
                'display': 'block',
            },
            search: '',
            searchBarClassName: 'nav-body-search',
            smallScreenSearchBtn: {
                'display': '',
            },
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
    },
    components: {
        UserDropDown: UserDropDown,
    },
    methods: {
        handleSmallScreenSearch() {
            this.showContent.display = 'none';
            this.searchBarClassName = 'nav-body-search-2';
            this.smallScreenSearchBtn.display = 'none';
        },
    },
};
</script>
<style lang="less">
.nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #212121;
    z-index: 999;
    .nav-body {
        display: flex;
        width: 100%;
        align-items: center;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-content: flex-start;
        padding: 15px 0px;
        height: 50px;
        border-bottom: 1px solid #313131;
        .nav-body-logo {
            float: left;
            margin-left: 25px;
            width: 25px;
            height: 40px;
        }
        .nav-body-search {
            flex: 0 1 720px;
            margin: 15px auto;
            @media @max-1024-screen {
                flex-basis: 50%;
            }
            @media @max-480-screen {
                display: none;
            }
        }
        .nav-body-search-2 {
            flex: 0 1 90%;
            margin: 0 auto;
        }
        .search-trigger {
            display: none;
            width: 30%;
            button {
                width: 100%;
            }
            @media @max-480-screen {
                display: block;
            }
        }
        .nav-body-user {
            margin-right: 25px;
            white-space: nowrap;
        }
        .nav-body-login {
            color: #fff;
            margin-right: 25px;
            white-space: nowrap;
            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
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
}
</style>