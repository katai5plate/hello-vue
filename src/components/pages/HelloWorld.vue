<script>
import Link from "../atoms/Link";
import List from "../molecules/List";

import LIST_ITEMS from "../../constants/listItems.json";

export default {
  name: "HelloWorld",
  props: {
    title: String
  },
  components: { Link, List },
  data: () => ({
    lists: LIST_ITEMS
  })
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <Link href="https://cli.vuejs.org" name="vue-cli documentation" />.
    </p>
    <List title="Installed CLI Plugins" :list="lists.cli" />
    <List title="Essential Links" :list="lists.link" />
    <List title="Ecosystem" :list="lists.eco" />
  </div>
</template>