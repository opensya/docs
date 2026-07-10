<script setup lang="ts">
import type { NuxtApp } from '#app';
import { findPageHeadline, findPageBreadcrumb } from '@nuxt/content/utils';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import _ from 'lodash';

const { navigationName } = defineProps<{
  navigationName: keyof NuxtApp['$navigation'];
}>();

const { $navigation } = useNuxtApp();
const navigation = $navigation[navigationName];
const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndSmaller = breakpoints.smallerOrEqual('lg');
const isOpen = ref(false);

const siteConfig = useSiteConfig();
const route = useRoute();
const { toc } = useAppConfig();

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection(navigationName).path(route.path).first(),
);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings(navigationName, route.path, {
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
  findPageHeadline(navigation?.value, page.value?.path, { indexAsChild: true }),
);

const breadcrumb = computed(() => {
  const breadcrumb = findPageBreadcrumb(
    navigation?.value?.at(0)?.children,
    page.value?.path,
    {
      current: true,
    },
  );

  const clone = _.cloneDeep(breadcrumb).map((bread) => {
    _.unset(bread, 'icon');
    return bread;
  });

  return clone;
});

defineOgImage('Docs.takumi', {
  title,
  description,
  headline: headline.value,
  siteUrl: siteConfig.url,
});
</script>

<template>
  <div v-if="page" class="w-full">
    <UHeader
      v-model:open="isOpen"
      mode="modal"
      :ui="{
        center: 'flex-1',
        container: 'max-w-full',
        body: 'min-h-[calc(100vh-var(--ui-header-height))] sm:p-0 p-0',
      }"
    >
      <!-- <template #title>
        <AppFavicon class="text-primary size-6.5" :arrow-stroke-width="1.8" />
      </template> -->

      <template #left>
        <template v-if="lgAndSmaller">
          <NuxtLink to="/">
            <AppFavicon
              class="text-primary size-6.5"
              :arrow-stroke-width="1.8"
            />
          </NuxtLink>

          <USeparator
            orientation="vertical"
            class="h-7"
            color="neutral"
            size="sm"
          />

          <NuxtLink :to="navigation?.at(0)?.path" class="text-lg font-semibold">
            {{ navigation?.at(0)?.title }}
          </NuxtLink>
        </template>

        <UBreadcrumb v-else :items="breadcrumb" label-key="title" />
      </template>

      <template #right>
        <!-- <AlgoliaDocSearch v-if="!isOpen" /> -->
        <UColorModeButton class="rounded-full" icon />
      </template>

      <template #body>
        <AppNavigation :navigation-name class="min-h-full" />
      </template>
    </UHeader>

    <UContainer>
      <div class="flex justify-center mx-auto">
        <div class="max-w-193 flex flex-col gap-10 xl:mr-16 pb-16">
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

          <!-- <UPageBody> -->
          <ContentRenderer :value="page" />

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

          <UContentSurround :surround="surround" />
          <!-- </UPageBody> -->
        </div>

        <UContentToc
          highlight
          highlight-color="neutral"
          highlight-variant="circuit"
          color="neutral"
          :title="toc?.title"
          :links="page.body?.toc?.links"
          :ui="{ container: 'lg:-0' }"
          class="not-xl:hidden"
        >
          <template #leading>
            <u-icon name="i-lucide-text" class="size-5.5 ml-1.5" />
          </template>
        </UContentToc>
      </div>
    </UContainer>
  </div>
</template>
