<script>
import ListItem from "../atoms/ListItem";
export default {
  name: "List",
  props: {
    title: String,
    list: Array
  },
  components: {
    ListItem
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>

<template>
  <div>
    <h3>{{title}}</h3>
    <ul>
      <ListItem v-for="(item, index) in list" :key="index" :name="item.name" :href="item.href" />
    </ul>
  </div>
</template>