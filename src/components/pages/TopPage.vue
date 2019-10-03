<script>
import Link from '~/components/atoms/Link';
import List from '~/components/molecules/List';

import LIST_ITEMS from '~/constants/listItems.json';

export default {
  components: { Link, List },
  data: () => ({
    lists: LIST_ITEMS
  })
};
</script>

<template>
  <div class="box">
    <div class="box">
      <img alt="Vue logo" src="../../assets/logo.png" />
      <p class="title is-1">Welcome to Your Vue.js App</p>
      <Link name="Go to Hello-Vuex" to="/vuex" />
      <p>
        For a guide and recipes on how to configure / customize this project,
        <br />check out
        <Link href="https://cli.vuejs.org" name="the vue-cli documentation" />.
      </p>
    </div>
    <List class="box" title="Installed CLI Plugins" :list="lists.installedCliPlugins" />
    <List class="box" title="Essential Links" :list="lists.essentialLinks" />
    <List class="box" title="Ecosystem" :list="lists.ecosystem" />
  </div>
</template>