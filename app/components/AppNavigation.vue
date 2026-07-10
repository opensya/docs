<script setup lang="ts">
import type { NuxtApp } from '#app';
import type { PageAnchor } from '@nuxt/ui';

const { navigationName } = defineProps<{
  navigationName: keyof NuxtApp['$navigation'];
}>();

const { $navigation } = useNuxtApp();
const navigation = $navigation[navigationName];

const links = ref<PageAnchor[]>([
  {
    label: 'Documentation',
    icon: 'i-tabler-book',
    to: '/docs',
    disabled: true,
  },
  {
    label: 'Persistence',
    icon: 'i-tabler-table-column',
    to: '/persistence',
  },
  {
    label: 'Github',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/opensya/core',
    target: '_blank',
  },
]);
</script>

<template>
  <div class="flex flex-col">
    <slot name="top" />

    <div class="py-5">
      <UContentNavigation
        highlight
        color="neutral"
        variant="link"
        type="single"
        :navigation="navigation?.at(0)?.children"
        :ui="{ list: 'mx-0' }"
      >
        <template #link-trailing="{ link }">
          <u-icon
            v-if="link?.children?.length"
            name="i-tabler-chevron-right-filled"
            class="transition-all opacity-50 group-data-[state=open]:rotate-90"
            :class="{ 'rotate-90': link.open }"
          />
        </template>
      </UContentNavigation>
    </div>

    <div
      class="mt-auto sticky bottom-0 bg-default z-10 border-t border-t-default p-5"
    >
      <UPageAnchors :links="links" />
    </div>
  </div>
</template>
