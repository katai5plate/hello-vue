import Vue from 'vue';

import App from '~/App.vue';
import router from '~/router';
import store from '~/containers/store';

Vue.config.productionTip = false;

new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
});
