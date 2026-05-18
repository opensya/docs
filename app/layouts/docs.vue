<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside :ui="{ root: 'w-scroll-permanent' }">
          <UContentNavigation
            highlight
            color="neutral"
            variant="link"
            :navigation="navigation"
          />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
