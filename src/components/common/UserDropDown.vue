<template>
    <el-dropdown>
        <el-avatar src="/src/assets/images/UserIcon.jpg" alt="UserIcon"></el-avatar>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item><i class="iconfont">&#xe60a;</i>我的账号</el-dropdown-item>
                <el-dropdown-item><i class="iconfont">&#xe68a;</i>我的收藏</el-dropdown-item>
                <el-dropdown-item><i class="iconfont">&#xe603;</i>偏好设置</el-dropdown-item>
                <el-dropdown-item><i class="iconfont">&#xe65f;</i>登出账号</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>

</script>
<style lang="less">
li.el-dropdown-menu__item {
    height: 40px;
    line-height: 40px;
}
</style>