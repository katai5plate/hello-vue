<script>
export default {
  name: "Link",
  props: {
    name: String,
    href: String
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

<template>
  <a :href="href" target="_blank" rel="noopener">{{name}}</a>
</template>
