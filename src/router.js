import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home.vue';
import About from './views/about/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
