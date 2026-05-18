<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
import { findPageHeadline } from '@nuxt/content/utils';

definePageMeta({
  layout: 'docs',
});

const route = useRoute();
const { toc } = useAppConfig();
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('docs').path(route.path).first(),
);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('docs', route.path, {
    fields: ['description'],
  });
});

const title = page.value.seo?.title || page.value.title;
const description = page.value.seo?.description || page.value.description;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});

const headline = computed(() =>
  findPageHeadline(navigation?.value, page.value?.path),
);

defineOgImage('Docs.takumi', { title, description, headline: headline.value });
</script>

<template>
  <UPage v-if="page">
    <div class="max-w-4xl mx-auto">
      <div
        class="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style="
          background: radial-gradient(
            ellipse at center,
            color-mix(in oklch, var(--ui-primary) 6%, transparent) 0%,
            transparent 70%
          );
        "
      />

      <UPageHeader
        :title="page.title"
        :description="page.description"
        :headline="headline"
      >
        <template #links>
          <UButton
            v-for="(link, index) in page.links"
            :key="index"
            v-bind="link"
          />

          <PageHeaderLinks />
        </template>
      </UPageHeader>

      <UPageBody>
        <ContentRenderer v-if="page" :value="page" />

        <USeparator class="h-px" :ui="{ container: 'gap-2' }">
          <ULink :to="toc.bottom.issue" target="_blank">
            <small> Report an issue</small>
          </ULink>

          or

          <ULink
            :to="`${toc.bottom.edit}/${page?.stem}.${page?.extension}`"
            target="_blank"
          >
            <small>Edit this page on Github</small>
          </ULink>
        </USeparator>

        <!-- <USeparator v-if="surround?.length" /> -->

        <UContentSurround :surround="surround" />
      </UPageBody>
    </div>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc
        highlight
        highlight-color="neutral"
        highlight-variant="circuit"
        color="neutral"
        :title="toc?.title"
        :links="page.body?.toc?.links"
      />
    </template>
  </UPage>
</template>
