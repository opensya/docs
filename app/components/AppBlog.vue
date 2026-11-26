<script setup lang="ts">
import { withLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const { locale } = useI18n();
const props = defineProps<{ slug?: string | string[] }>();

const _slug = computed(() =>
  Array.isArray(props.slug)
    ? withLeadingSlash(String(props.slug.join("/")))
    : withLeadingSlash(String(props.slug)),
);

const { data: page } = await useAsyncData(
  "page-" + _slug.value,
  async () => {
    // Build collection name based on current locale
    const collection = ("content_" + locale.value) as keyof Collections;
    const content = await queryCollection(collection).path(_slug.value).first();

    // Optional: fallback to default locale if content is missing
    if (!content && locale.value !== "en") {
      return await queryCollection("content_en").path(_slug.value).first();
    }

    return content;
  },
  {
    watch: [locale], // Refetch when locale changes
  },
);

if (!page.value) {
  throw createError({ status: 404, statusText: "Page not found", fatal: true });
}
</script>

<template>
  <template v-if="page">
    <UPage>
      <div class="flex">
        <UContentToc
          :links="page.body.toc?.links"
          :ui="{ title: 'hidden' }"
          class="w-70 mt-12 md:mt-24 lg:mt-45 max-lg:hidden"
          color="neutral"
          highlight-color="neutral"
          highlight
        >
        </UContentToc>

        <UContainer class="max-w-5xl py-12 md:py-24 lg:py-45 space-y-5">
          <h1 class="font-notch text-center">
            {{ page.meta.subtitle }}
          </h1>

          <p class="text-muted text-center">
            {{ page.description }}
          </p>

          <p class="text-center">
            {{ page.meta.author }} -
            <span class="text-muted">12 novembre 2026</span>
          </p>

          <ContentRenderer :value="page" class="mt-20 *:md:px-20" />
        </UContainer>

        <div class="w-70 max-xl:hidden"></div>
      </div>
    </UPage>
  </template>
</template>
