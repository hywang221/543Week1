import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/GameList.vue'), 
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/pages/GameList.vue'), 
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/pages/GameDetail.vue'), 
  },
  {
    path: '/checkList',
    name: 'CheckList',
    component: () => import('@/pages/CheckList.vue'), 
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "root",
//     component: () => import("@/App.vue"),
//     meta: { requiresAuth: true }, // 需要登录验证
//   },
// ];

// const router = new VueRouter({
//   routes,
// });

// export default router;