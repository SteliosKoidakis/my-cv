import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './styles/index.scss';
import VueMq from 'vue-mq';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import App from './App.vue';

library.add(faAngleDoubleDown, faAngleDoubleUp);
Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 680,
    desktop: Infinity,
  },
});

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
