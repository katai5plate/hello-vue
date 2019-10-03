<script>
import Link from "../atoms/Link";
import List from "../molecules/List";

import LIST_ITEMS from "../../constants/listItems.json";

export default {
  components: { Link, List },
  data: () => ({
    lists: LIST_ITEMS
  })
};
</script>

<template>
  <div class="hello">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <h1>Welcome to Your Vue.js App</h1>
    <Link name="Go to Hello-Vuex" to="/vuex" />
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