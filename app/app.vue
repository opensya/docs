<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core';

const { seo } = useAppConfig();

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.svg' }],
  htmlAttrs: {
    lang: 'en',
  },
});

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image',
});

const { t } = useMagicKeys();
const colorMode = useColorMode();

watch(
  () => t?.value,
  (v) => {
    if (v) {
      colorMode.preference =
        colorMode.preference === 'light' ? 'dark' : 'light';
    }
  },
);
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- <AppFooter /> -->
  </UApp>

  <!-- <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />
  </UApp> -->
</template>
