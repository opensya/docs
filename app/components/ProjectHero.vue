<script setup lang="ts">
const localePath = useLocalePath();

defineProps<{
  name: string;
  category: string;
  title: string;
  intro: string;
  tagline?: string;
}>();
</script>

<template>
  <section class="relative overflow-hidden">
    <UContainer class="pt-36 pb-20 sm:pt-44 sm:pb-28">
      <NuxtLink
        :to="localePath('/')"
        class="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
      >
        <UIcon name="i-lucide-arrow-left" class="size-4" aria-hidden="true" />
        {{ $t("project.back") }}
      </NuxtLink>

      <p class="mt-10 font-notch text-xl text-muted">
        {{ name }}
        <span class="sr-only">—</span>
        <span class="font-sans text-base font-light ml-2">{{ category }}</span>
      </p>

      <h1
        class="mt-6 max-w-4xl font-notch leading-[1.05] text-[clamp(2.2rem,6vw,4.5rem)]"
      >
        {{ title }}
      </h1>

      <p class="mt-8 max-w-2xl text-lg font-light">
        {{ intro }}
      </p>

      <p v-if="tagline" lang="en" class="mt-6 max-w-2xl font-notch text-muted">
        {{ tagline }}
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <UButton
          to="https://github.com/opensya"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${$t('project.github')} (${$t('project.newTab')})`"
        >
          {{ $t("project.github") }}
          <UIcon name="i-simple-icons-github" class="size-4" />
        </UButton>

        <!-- <p class="flex items-center gap-2 text-sm text-muted">
          <span class="size-2 rounded-full bg-primary" aria-hidden="true" />
          {{ $t("project.status") }}
        </p> -->
      </div>
    </UContainer>
  </section>
</template>
