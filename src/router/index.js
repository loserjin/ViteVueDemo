import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/watchDemo',
    name: 'Watch',
    component: ()=>import('../components/Watch.vue'), //路由懒加载
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
