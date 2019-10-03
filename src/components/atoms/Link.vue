<script>
export default {
  props: {
    name: String,
    href: String,
    to: String
  }
};
</script>

<style scoped>
RouterLink,
a {
  color: #42b983;
}
</style>

<template>
  <RouterLink v-if="to" :to="to">{{name}}</RouterLink>
  <a v-else :href="href" target="_blank" rel="noopener">{{name}}</a>
</template>
