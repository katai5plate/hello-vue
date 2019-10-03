import Vue from 'vue';
import Router from 'vue-router';

import TopPage from './components/pages/TopPage';
import NotFound from './components/pages/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TopPage
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
