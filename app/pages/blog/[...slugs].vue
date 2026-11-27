<script setup lang="ts">
definePageMeta({
  i18n: {
    paths: {
      en: "/blog/[...slugs]",
      fr: "/blog/[...slugs]",
      pt: "/blogue/[...slugs]",
    },
  },
});
</script>

<template>
  <AppBlog :slug="$route.params.slugs" is-blog />
</template>
