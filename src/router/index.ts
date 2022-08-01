import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main/goods/home'
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        name: 'home',
        path: 'goods/home',
        component: () => import('@/views/main/goods/goods-main')
      },
      {
        name: 'manage',
        path: 'goods/manage',
        component: () => import('@/views/main/goods/goods-manage')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  console.log(to)
})

export default router
