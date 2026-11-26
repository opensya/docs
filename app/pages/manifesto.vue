<script setup lang="ts">
definePageMeta({
  i18n: { paths: { en: "/manifesto", fr: "/manifeste", pt: "/manifesto" } },
});
</script>

<template>
  <AppBlog :slug="$t('home.hero.manisfestPathCode')" />
</template>
