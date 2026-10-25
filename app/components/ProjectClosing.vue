<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();

const localePath = useLocalePath();
</script>

<template>
  <section class="py-24 sm:py-32">
    <UContainer>
      <div class="max-w-3xl">
        <h2 class="text-4xl font-notch">{{ title }}</h2>

        <p class="mt-5 text-lg font-light">{{ description }}</p>

        <div class="mt-8 flex flex-wrap gap-3">
          <UButton :to="$t('project.contactHref')">
            {{ $t("project.contact") }}
            <UIcon name="i-lucide-arrow-up-right" class="size-4" />
          </UButton>

          <UButton
            to="https://github.com/opensya"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            color="neutral"
            :aria-label="`${$t('project.github')} (${$t('project.newTab')})`"
          >
            {{ $t("project.github") }}
            <UIcon name="i-simple-icons-github" class="size-4" />
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
