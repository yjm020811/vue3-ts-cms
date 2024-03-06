// @ts-ignore
import { createRouter, createWebHashHistory } from 'vue-router'
import {localCache} from "@/utils/cache";
import {LOGIN_TOKEN} from "@/global/constants";

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系: path => component
  routes: [
    // 路由重定向
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

// 导航守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path === '/main'){
//   //   只有登录成功才能登陆到main中
//     const token =localCache.getCache(LOGIN_TOKEN)
//     if(!token) return '/login'
//   }
// })

export default router
