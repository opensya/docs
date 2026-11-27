<script setup lang="ts">
const { title = "title", description } = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="h-full w-full bg-default text-default px-16 py-18 flex flex-col gap-5"
  >
    <AppLogo class="h-12 w-12" aria-hidden="true" />

    <h1 class="font-notch text-5xl mt-10 max-w-3xl font-bold">
      {{ title }}
    </h1>

    <p v-if="description" class="text-muted line-clamp-3 max-w-4xl">
      {{ description }}
    </p>
    <div class="mt-auto"></div>
    <p class="text-lg mt-14 text-right">opensya.com</p>
  </div>
</template>
