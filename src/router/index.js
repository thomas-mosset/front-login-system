import { createRouter, createWebHistory } from 'vue-router';
import SigninView from '../views/SigninView.vue';

const routes = [
  {
    path: '/',
    name: 'SigninView',
    component: SigninView,
  },
  {
    path: '/login',
    name: 'LoginView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
