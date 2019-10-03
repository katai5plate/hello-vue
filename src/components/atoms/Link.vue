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
  <div>
    <div v-if="to">
      <RouterLink :to="to">{{name}}</RouterLink>
    </div>
    <div v-else>
      <a :href="href" target="_blank" rel="noopener">{{name}}</a>
    </div>
  </div>
</template>
