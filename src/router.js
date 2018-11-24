import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home.vue';
import Experience from './views/experience/Experience.vue';
import Projects from './views/projects/Projects.vue';
import Skills from './views/skills/Skills.vue';
import Education from './views/education/Education.vue';

Vue.use(Router);

const routesItems = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
  },
];
export default new Router({
  routes: routesItems,
});

export { routesItems };
