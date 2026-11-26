<script setup lang="ts">
import { withLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const route = useRoute();
const { locale } = useI18n();
console.log(locale);

const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? withLeadingSlash(String(route.params.slug.join("/")))
    : withLeadingSlash(String(route.params.slug)),
);

const { data: page } = await useAsyncData(
  "page-" + slug.value,
  async () => {
    // Build collection name based on current locale
    const collection = ("content_" + locale.value) as keyof Collections;
    const content = await queryCollection(collection).path(slug.value).first();

    // Optional: fallback to default locale if content is missing
    if (!content && locale.value !== "en") {
      return await queryCollection("content_en").path(slug.value).first();
    }

    return content;
  },
  {
    watch: [locale], // Refetch when locale changes
  },
);
</script>

<template>
  <template v-if="page">
    <UContainer class="max-w-5xl py-45 space-y-5">
      <h1 class="font-notch text-center">
        {{ page.meta.subtitle }}
      </h1>

      <p class="text-muted text-center">
        {{ page.description }}
      </p>

      <p class="text-center">
        Mamadou DIA - <span class="text-muted">12 novembre 2026</span>
      </p>

      <ContentRenderer :value="page" class="mt-20 *:md:px-20" />
    </UContainer>
  </template>
  <div v-else>
    <h1>Page not found</h1>
    <p>This page doesn't exist in {{ locale }} language.</p>
  </div>
</template>
