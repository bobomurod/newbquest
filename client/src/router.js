import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Signout from './views/Signout.vue';
import Login from './views/Login.vue';
import CreatePage from './views/CreatePage.vue';
import SimplePage from './views/SimplePage.vue';
import Dashboard from './views/Dashboard.vue';
import Example from './views/Example.vue';
import UsersList from './views/UsersList.vue';
import ShopGenerator from './views/ShopGenerator.vue';

Vue.use(Router);

function loggedInRedirectDashboard(to, from, next) {
  if (localStorage.token) {
    next('/dashboard');
  } else {
    next();
  }
}

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
      path: '/users',
      name: 'userslist',
      component: UsersList,
    },
    {
      path: '/simplepage',
      name: 'simplepage',
      component: SimplePage,
    },
    {
      path: '/example',
      name: 'example',
      component: Example,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopGenerator,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (localStorage.token) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.token) {
          next('/dashboard');
        } else {
          next();
        }
      },
    },
  ],
});
