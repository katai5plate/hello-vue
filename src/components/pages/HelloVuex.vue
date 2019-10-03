<script>
import { mapActions, mapGetters } from 'vuex';
import * as at from '~/containers/actionTypes';
import Link from '~/components/atoms/Link';
export default {
  components: {
    Link
  },
  data() {
    return {
      text: '',
      buttonIsDisabled: true
    };
  },
  created() {
    console.log(this);
    this[at.TODOS.LOAD](this.text);
  },
  computed: {
    message: {
      get() {
        return this.text;
      },
      set(value) {
        this.text = value;
      }
    }
  },
  methods: {
    ...mapActions('todos', at.TODOS),
    ...mapGetters('todos', ['getTodos']),
    updateForm(clear) {
      clear && (this.text = '');
      this.buttonIsDisabled = this.text === '';
    },
    onSubmit() {
      this[at.TODOS.REGISTER](this.text);
      this.updateForm(true);
    },
    remove(index) {
      this[at.TODOS.DONE](index);
    }
  }
};
</script>

<template>
  <div class="box">
    <div class="box">
      <div class="box">
        <p class="title is-1">Hello, Vuex!</p>
        <Link name="Home" to="/" />
      </div>
      <p class="subtitle is-1">Todos</p>
      <input
        class="input"
        v-model="message"
        @keyup="updateForm()"
        placeholder="Drink a glass of milk! 😀"
      />
      <button
        class="button is-fullwidth is-info"
        type="submit"
        @click="onSubmit"
        :disabled="buttonIsDisabled"
      >ADD</button>
    </div>
    <div class="card" v-for="(item, index) in this.getTodos()" :key="index">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title">{{item.name}}</p>
            <p class="subtitle">by {{item.ip}}</p>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">{{item.date}}</p>
        <a class="card-footer-item" @click="remove(index)">DONE</a>
      </footer>
    </div>
    <p v-if="this.getTodos().length===0" class="title is-5">📒 Let's add a task! ⬆️</p>
  </div>
</template>
