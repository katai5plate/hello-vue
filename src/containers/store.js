import Vuex from 'vuex';
import Vue from 'vue';

import * as at from './actionTypes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ip: 'anonymous'
  },
  modules: {
    todos: {
      namespaced: true,
      state: {
        list: []
      },
      getters: {
        getTodos: state => state.list || []
      },
      actions: {
        [at.TODOS.LOAD]({ commit }) {
          let data = localStorage.getItem('todos');
          const onError = () => {
            console.log('data is missing or broken');
            localStorage.setItem('todos', []);
          };
          try {
            data = JSON.parse(data);
          } catch {
            return onError();
          }
          if (data) {
            return commit(at.TODOS.LOAD, data);
          }
          onError();
        },
        [at.TODOS.SAVE]({ state }) {
          localStorage.setItem('todos', JSON.stringify(state.list));
        },
        [at.TODOS.REGISTER]({ commit, dispatch }, value) {
          commit(at.TODOS.REGISTER, value);
          dispatch(at.TODOS.SAVE);
        },
        [at.TODOS.DONE]({ commit }, value) {
          commit(at.TODOS.DONE, value);
        }
      },
      mutations: {
        [at.TODOS.LOAD](state, value) {
          state.list = value;
        },
        [at.TODOS.REGISTER](state, value) {
          console.log(this);
          const list = state.list;
          state.list = [
            ...list,
            {
              id: list.length,
              name: value,
              date: new Date().toJSON(),
              ip: this.state.ip
            }
          ];
        },
        [at.TODOS.DONE](state, value) {
          state.list = state.list.filter((_, i) => !(i === value));
        }
      }
    }
  }
});
