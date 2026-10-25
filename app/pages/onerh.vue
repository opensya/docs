<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t("onerh.meta.title"),
  description: () => t("onerh.meta.description"),
  ogTitle: () => t("onerh.meta.title"),
  ogDescription: () => t("onerh.meta.description"),
  ogType: "website",
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

const aims = ["processes", "information", "evolve"];
</script>

<template>
  <main id="top">
    <ProjectHero
      name="One RH"
      :category="$t('onerh.hero.category')"
      :title="$t('onerh.hero.title')"
      :intro="$t('onerh.hero.intro')"
    />

    <!-- Problème -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-3xl">
          <h2 class="text-4xl font-notch">{{ $t("onerh.problem.title") }}</h2>
          <div class="mt-8 space-y-5 text-lg font-light">
            <p>{{ $t("onerh.problem.p1") }}</p>
            <p>{{ $t("onerh.problem.p2") }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Approche : noyau et modules -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">{{ $t("onerh.approach.title") }}</h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("onerh.approach.intro") }}
          </p>
        </div>

        <!-- Représentation conceptuelle : des modules posés sur un socle -->
        <div class="mt-14 max-w-3xl">
          <div
            class="border border-b-0 border-dashed border-default p-6 md:p-8"
          >
            <h3 class="font-notch text-2xl">
              {{ $t("onerh.approach.modules.title") }}
            </h3>
            <p class="mt-3 text-muted">
              {{ $t("onerh.approach.modules.description") }}
            </p>
          </div>
          <div class="bg-default border border-default p-6 md:p-8">
            <h3 class="font-notch text-2xl">
              {{ $t("onerh.approach.core.title") }}
            </h3>
            <p class="mt-3 text-muted">
              {{ $t("onerh.approach.core.description") }}
            </p>
          </div>
        </div>

        <p class="mt-10 max-w-2xl text-lg font-light">
          {{ $t("onerh.approach.outro") }}
        </p>
      </UContainer>
    </section>

    <!-- Ce que One RH cherche à permettre -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <h2 class="max-w-2xl text-4xl font-notch">
          {{ $t("onerh.building.title") }}
        </h2>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <article
            v-for="item in aims"
            :key="item"
            class="border-t border-default pt-5"
          >
            <h3 class="font-notch text-xl">
              {{ $t(`onerh.building.items.${item}.title`) }}
            </h3>
            <p class="mt-4 text-muted">
              {{ $t(`onerh.building.items.${item}.description`) }}
            </p>
          </article>
        </div>
      </UContainer>
    </section>

    <ProjectState :description="$t('onerh.state.description')" />

    <ProjectClosing
      :title="$t('onerh.closing.title')"
      :description="$t('onerh.closing.description')"
    />
  </main>
</template>
