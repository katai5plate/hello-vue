# hello-vue

## メモ

### Vue の始め方

```
npm -g i @vue/cli
```

```
vue create <project-name>
cd <project-name>
npm run serve
```

### Router の導入

- ./src/router.js

```js
import Vue from 'vue';
import Router from 'vue-router';

import TopPage from '../components/pages/TopPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: TopPage
    }
  ]
});
```

- ./src/main.js

```diff
import Vue from 'vue';
import App from './App.vue';
+ import router from './router';

Vue.config.productionTip = false;

new Vue({
+ router,
  render: h => h(App)
}).$mount('#app');
```

- ./src/App.vue

```diff
<template>
  <div id="app">
-   <AnyPage />
+   <RouterView />
  </div>
</template>
```

- ./src/AnyPage.vue

```jsx
<RouterLink to="/">GO!</RouterLink>
```

## デフォ

### Project setup

```
npm install
```

#### Compiles and hot-reloads for development

```
npm run serve
```

#### Compiles and minifies for production

```
npm run build
```

#### Run your tests

```
npm run test
```

#### Lints and fixes files

```
npm run lint
```

#### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
