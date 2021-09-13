import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/auth/Login';
import Signup from '@/views/auth/Signup';
import Posts from '@/views/posts/Posts';
import PostCreate from '@/views/posts/PostCreate';
import PostEdit from '@/views/posts/PostEdit';
import Book from '@/views/book/Book.vue';
import NotFound from '@/views/NotFound.vue';
import store from '@/store/auth';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/signup',
      component: Signup,
    },
    {
      path: '/posts',
      component: Posts,
      meta: { auth: true },
    },
    {
      path: '/posts/postcreate',
      component: PostCreate,
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: PostEdit,
      meta: { auth: true },
    },
    {
      path: '/book',
      component: Book,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('로그인이 필요합니다');
    next('/login');
    return;
  }
  next();
});

export default router;
