<script lang="ts" setup>
definePageMeta({
  layout: "blog-home",
  i18n: {
    paths: {
      en: "/blog",
      fr: "/blog",
      pt: "/blogue",
    },
  },
});

const title = $t("blog.home.seo.title");
const description = $t("blog.home.seo.description");

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<template>
  <section class="py-12">
    <AppBlogList />
  </section>
</template>
