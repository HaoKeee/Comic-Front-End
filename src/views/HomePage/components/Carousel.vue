<template>
    <el-carousel>
        <el-carousel-item v-for="item of items" :key="item">
            <router-link :to="'/detail?id='+item.id">
                <img :src="item.imgSrc" :alt="item.title" />
            </router-link>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            items: [],
        }
    },
    created() {
        this.GetCarouselData()
    },
    methods: {
        GetCarouselData() {
            this.$http.get(this.$api.HomePage.Carousel,undefined,false).then((result) => {
                this.items = result.data.data
                console.log(this.items);
            }).catch((err) => {
                console.log(err);
            })
        },
    },

};
</script>
<style lang="less">
@carousel-width: 1024px;
@carousel-height: 300px;
.el-carousel {
    width: 100%;
    height: fit-content;
    margin: 0 auto;
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
    img {
        width: 100%;
        height: 100%;
    }
}
</style>