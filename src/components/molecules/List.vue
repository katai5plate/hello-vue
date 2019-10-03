<script>
import ListItem from '~/components/atoms/ListItem';
export default {
  props: {
    title: String,
    list: Array
  },
  components: {
    ListItem
  }
};
</script>

<template>
  <div>
    <p class="subtitle is-3">{{title}}</p>
    <ul>
      <ListItem v-for="(item, index) in list" :key="index" :name="item.name" :href="item.href" />
    </ul>
  </div>
</template>