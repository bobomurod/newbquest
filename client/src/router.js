import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Signout from './views/Signout.vue';
import Signin from './views/Signin.vue';
import CreatePage from './views/CreatePage.vue';
import SimplePage from './views/SimplePage.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/signout',
      name: 'signout',
      component: Signout,
    },
    {
      path: '/create',
      name: 'createpage',
      component: CreatePage,
    },
    {
      path: '/simplepage',
      name: 'simplepage',
      component: SimplePage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
  ],
});
