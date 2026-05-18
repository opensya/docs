<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');
</script>

<template>
  <UContainer class="max-w-full">
    <UPage>
      <template #left>
        <UPageAside
          :ui="{ root: 'w-scroll' }"
          style="--scroll-width: 4px"
          class="max-w-65 border-e border-default"
        >
          <UContentNavigation
            highlight
            color="neutral"
            variant="link"
            :navigation="navigation"
          >
            <template #link-trailing="{ link }">
              <u-icon
                v-if="link?.children?.length"
                name="i-lucide-plus"
                class="transition-all group-data-[state=open]:rotate-45"
                :class="{ 'rotate-45': link.open }"
              />
            </template>
          </UContentNavigation>
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
