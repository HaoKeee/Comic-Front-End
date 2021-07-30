import { createRouter,createWebHistory } from 'vue-router'

const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/src/views/HomePage/index.vue'),
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/rank',
    name: 'RankPage',
    component: () => import('/src/views/RankPage/index.vue'),
    meta: {
      title: '排行榜',
      keepAlive: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('/src/views/LoginPage/index.vue'),
    meta: {
      title: '登陆',
      keepAlive: false
    }
  },
  {
    path: '/items',
    name: 'ItemsPage',
    component: () => import('/src/views/ItemsPage/index.vue'),
    meta: {
      title: '漫画展示',
      keepAlive: false
    }
  },
  {
    path: '/detail',
    name: 'DetailPage',
    component: () => import('/src/views/DetailPage/index.vue'),
    meta: {
      title: '详情页',
      keepAlive: false
    }
  },
  {
    path: '/reading',
    name: 'ReadingPage',
    component: () => import('/src/views/ReadingPage/index.vue'),
    meta: {
      title: '阅读页',
      keepAlive: false
    }
  },
  {
    path: '/shelf',
    name: 'ShelfPage',
    component: () => import('/src/views/ShelfPage/index.vue'),
    meta: {
      title: '书架',
      keepAlive: false
    }
  },
  {
    path: '/user',
    name: 'UserPage',
    component: () => import('/src/views/UserPage/index.vue'),
    meta: {
      title: '用户详情',
      keepAlive: false
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})
export default router