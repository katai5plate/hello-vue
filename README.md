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

### Vuex でステート管理

- main.js

```diff
+ import { store } from '~/containers/store';
new Vue({
+ store,
  el: '#app',
  router,
  render: h => h(App)
});
```

- store.js

```js
export const ACTION_TYPES = {
  ADD: 'ADD'
};
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCount: state => state.count,
    getCountPlus: state => plus => state.count + plus
  },
  // 非同期処理を含む処理はここでやる。dispatchで追加処理できる。
  actions: {
    [ACTION_TYPES.ADD]({ state, commit, dispatch }, value) {
      setTimeout(() => {
        commit(ACTION_TYPES.ADD, Number(value));
      }, 1000);
    }
  },
  // reducer
  mutations: {
    [ACTION_TYPES.ADD](state, value) {
      state.count += value;
    }
  }
});
```

- ネストしてモジュール化したり、その上にグローバルを持ったりできる

```diff
export default new Vuex.Store({
+ state: {
+   globalValue: 'hoge'
+ },
+ modules: {
+   main: {
+     namespaced: true,
      state: {
        count: 0
      },
      getters: {
        getCount: state => state.count,
        getCountPlus: state => plus => state.count + plus,
      },
      actions: {
        [ACTION_TYPES.ADD]({ state, commit, dispatch}, value) {
          setTimeout(() => {
            commit(ACTION_TYPES.ADD, Number(value));
          }, 1000);
        }
      },
      mutations: {
        [ACTION_TYPES.ADD](state, value) {
          state.count += value;
        },
      }
+   }
+ }
});
```

- page.vue

```vue
<script>
import { mapActions, mapGetters } from 'vuex';
import { ACTION_TYPES, store } from './store.js';
export default {
  // On load this component
  created() {
    console.log(this);
    this[at.TODOS.LOAD](this.text);
  },
  data() {
    return {
      value: ''
    };
  },
  computed: {
    form: {
      get() {
        return this.value;
      },
      set(value) {
        this.value = value;
      }
    }
  },
  methods: {
    ...mapActions(ACTION_TYPES),
    ...mapGetters(['getCount']),
    // ...mapActions('main', ACTION_TYPES),
    // ...mapGetters('main', ['getCount']),
    onPressEnter() {
      this[ACTION_TYPES.ADD](this.value);
    }
  }
};
</script>

<template>
  <div>
    <input
      class="input"
      type="number"
      v-model="message"
      @keyup.enter="onPressEnter"
    />
    <p>{{ this.getCount() }}</p>
  </div>
</template>
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
