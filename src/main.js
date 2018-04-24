import Vue from 'vue';
import Router from 'vue-router';
import timeline from 'vue-route-timeline';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
  id: 'UA-83598448-1',
  router,
  autoTracking: {
    pageviewTemplate(route) {
      return {
        page: `/kazoo${route.path}`,
        title: document.title,
        location: window.location.href,
      };
    },
  },
});
Vue.use(timeline.plugin, { store, router });
Vue.use(Router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
