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
      <!-- <div
        style="--scroll-width: 4px"
        class="hidden lg:flex flex-col h-screen sticky top-0 overflow-y-auto border-e border-default w-70 bg-default"
      >
        <div
          class="border-b border-default sticky top-0 z-10 h-(--ui-header-height) flex items-center px-3"
        >
          <NuxtLink :to="'/'">
            <AppFavicon
              class="text-primary size-6.5"
              :arrow-stroke-width="1.8"
            />
          </NuxtLink>
        </div>

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
                name="i-lucide-chevron-right"
                class="transition-all group-data-[state=open]:rotate-45"
                :class="{ 'rotate-45': link.open }"
              />
            </template>
          </UContentNavigation>
        </div>

        <div
          class="mt-auto sticky bottom-0 bg-default z-10 border-t border-t-default p-5"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          fugit rem maxime dolores, ex eos. Placeat laudantium repellendus sunt
          expedita ad vitae tempore velit? Labore dolores temporibus earum cum
          optio?
        </div>
      </div> -->
    </div>

    <slot />
  </div>
</template>
