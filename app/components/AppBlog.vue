<script setup lang="ts">
import { withLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const { locale, localeCodes } = useI18n();
const props = defineProps<{ slug?: string | string[]; isBlog?: boolean }>();

const _slug = computed(() =>
  Array.isArray(props.slug)
    ? withLeadingSlash(String(props.slug.join("/")))
    : withLeadingSlash(String(props.slug)),
);

const { data: page } = await useAsyncData(
  "page-" + _slug.value,
  async () => {
    // Build collection name based on current locale
    const collection = ["content"];

    if (props.isBlog) collection.push("blog");

    collection.push(locale.value);

    let content = await queryCollection(
      collection.join("_") as keyof Collections,
    )
      .path(_slug.value)
      .first();

    if (!content) {
      for (const code of localeCodes.value) {
        if (code === locale.value) continue;

        const collection = ["content"];
        if (props.isBlog) collection.push("blog");
        collection.push(code);

        content = await queryCollection(
          collection.join("_") as keyof Collections,
        )
          .path(_slug.value)
          .first();

        if (content) break;
      }
    }

    return content;
  },

  { watch: [locale] },
);

if (!page.value) {
  throw createError({ status: 404, statusText: "Page not found", fatal: true });
}

const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});

defineOgImage("BlogPost.takumi", {
  title: page.value?.title,
  description: page.value?.description,
});
</script>

<template>
  <template v-if="page">
    <UPage class="py-24 lg:py-45">
      <div class="flex">
        <div class="w-70 mt-12 md:mt-24 lg:mt-45 max-lg:hidden"></div>

        <UContainer class="max-w-5xl space-y-5">
          <h1 class="font-notch text-center">
            {{ page.title }}
          </h1>

          <p v-if="page.subtitle" class="text-muted text-center">
            {{ page.subtitle }}
          </p>

          <p class="text-center">
            <span v-if="page.author">
              {{ page.author }}
            </span>

            <span v-if="page.author" class="text-muted"> - </span>

            <span class="text-muted">12 novembre 2026</span>
          </p>
        </UContainer>

        <div class="w-70 max-xl:hidden"></div>
      </div>

      <div class="flex mt-20">
        <UContentToc
          :links="page.body.toc?.links"
          :ui="{ title: 'hidden' }"
          class="w-70 max-lg:hidden"
          color="neutral"
          highlight-color="neutral"
          highlight
        >
        </UContentToc>

        <UContainer class="max-w-5xl">
          <ContentRenderer :value="page" class="*:md:mx-20" />
        </UContainer>

        <div class="w-70 max-xl:hidden"></div>
      </div>
    </UPage>
  </template>
</template>
