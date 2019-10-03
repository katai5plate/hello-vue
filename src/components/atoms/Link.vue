<script>
export default {
  props: {
    name: String,
    href: String,
    to: String
  }
};
</script>

<template>
  <RouterLink v-if="to" class="button" :to="to">{{name}}</RouterLink>
  <a v-else class="button is-link is-outlined" :href="href" target="_blank" rel="noopener">{{name}}</a>
</template>
