import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlogDetail from '../views/BlogDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/detail/:slug", component: BlogDetail },
  ],
});

export default router