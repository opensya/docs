<script setup lang="ts">
import type { NuxtApp } from '#app';

const { navigationName } = defineProps<{
  navigationName: keyof NuxtApp['$navigation'];
}>();

const { $navigation } = useNuxtApp();
const navigation = $navigation[navigationName];
</script>

<template>
  <div :key="navigationName" class="flex">
    <div>
      <AppNavigation
        :navigation-name
        class="hidden lg:flex h-screen sticky top-0 overflow-y-auto border-e border-default w-70 bg-default"
      >
        <template #top>
          <div
            class="border-b border-default sticky top-0 z-10 h-(--ui-header-height) flex items-center px-3 gap-2"
          >
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

            <NuxtLink
              :to="navigation?.at(0)?.path"
              class="text-lg font-semibold"
            >
              {{ navigation?.at(0)?.title }}
            </NuxtLink>
          </div>
        </template>
      </AppNavigation>
    </div>

    <slot />
  </div>
</template>
