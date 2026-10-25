<script setup lang="ts">
defineProps<{ description: string }>();
</script>

<template>
  <section class="py-20 sm:py-24 bg-accented/20">
    <UContainer>
      <div class="max-w-3xl">
        <h2 class="text-4xl font-notch">{{ $t("project.stateTitle") }}</h2>

        <p class="mt-4 flex items-center gap-2 text-muted">
          <span class="size-2 rounded-full bg-primary" aria-hidden="true" />
          {{ $t("project.status") }}
        </p>

        <p class="mt-6 text-lg font-light">{{ description }}</p>
        <p class="mt-4 text-muted">{{ $t("project.stateCommon") }}</p>
      </div>
    </UContainer>
  </section>
</template>
