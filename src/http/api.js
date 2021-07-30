import Goods from './api/goods.js';

export default {
    // 首页
    Index: {
        index: '/index/index'
    },
    // 个人中心
    HomePage: {
        Carousel: '/src/assets/data/CarouselData.json',
        HomePage: '/src/assets/data/HomePage.json'
    },
    // 当然也可以用文件方式进行管理
    Goods: Goods,
    Common: {
        TopKeywords: '/src/assets/data/TopKeywords.json'
    },
    ItemsData: {
        items: '/src/assets/data/ItemsData.json'
    },
    PageData: {
        homepage: '',
        rankpage: '/src/assets/data/RankItemsData.json',
    },
    ComicDetail: {
        detail: '/src/assets/data/DetailInfo.json',
    },
    Reading: {
        reading: '/src/assets/data/Reading.json',
    }

}