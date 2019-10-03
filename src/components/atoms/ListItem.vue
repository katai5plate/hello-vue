<script>
import Link from "~/components/atoms/Link";
export default {
  props: {
    name: String,
    href: String
  },
  components: {
    Link
  }
};
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

<template>
  <li>
    <Link :href="href" :name="name" />
  </li>
</template>
