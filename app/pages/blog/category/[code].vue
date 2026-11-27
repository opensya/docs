<script lang="ts" setup>
definePageMeta({
  layout: "blog-home",
  i18n: {
    paths: {
      en: "/blog/category/[code]",
      fr: "/blog/categorie/[code]",
      pt: "/blogue/categoria/[code]",
    },
  },
});

const route = useRoute();

const category = computed(() => {
  return route.params.code as string;
});

const title = $t(`blog.${route.params.code}.seo.title`);
const description = $t(`blog.${route.params.code}.seo.description`);

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<template>
  <section class="py-12">
    <AppBlogList :key="category" :category />
  </section>
</template>
