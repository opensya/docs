<script setup lang="ts">
const { t, tm, rt } = useI18n();

useSeoMeta({
  title: () => t("workspace.meta.title"),
  description: () => t("workspace.meta.description"),
  ogTitle: () => t("workspace.meta.title"),
  ogDescription: () => t("workspace.meta.description"),
  ogType: "website",
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

const principles = ["open", "modular", "coherent", "control"];
const domains = computed(() =>
  (tm("workspace.building.items") as any[]).map((item) => rt(item)),
);
</script>

<template>
  <main id="top">
    <ProjectHero
      name="Workspace"
      :category="$t('workspace.hero.category')"
      :title="$t('workspace.hero.title')"
      :intro="$t('workspace.hero.intro')"
    />

    <!-- Problème -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <h2 class="max-w-2xl text-4xl font-notch">
          {{ $t("workspace.problem.title") }}
        </h2>
        <div
          class="mt-10 grid gap-6 text-lg font-light md:grid-cols-2 md:gap-16"
        >
          <p>{{ $t("workspace.problem.p1") }}</p>
          <p>{{ $t("workspace.problem.p2") }}</p>
        </div>
      </UContainer>
    </section>

    <!-- Approche -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-3xl">
          <h2 class="text-4xl font-notch">
            {{ $t("workspace.approach.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("workspace.approach.intro") }}
          </p>
        </div>

        <div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in principles"
            :key="item"
            class="border-t border-default pt-5"
          >
            <h3 class="font-notch text-xl">
              {{ $t(`workspace.approach.items.${item}.title`) }}
            </h3>
            <p class="mt-4 text-muted">
              {{ $t(`workspace.approach.items.${item}.description`) }}
            </p>
          </article>
        </div>

        <p class="mt-12 max-w-2xl text-muted">
          {{ $t("workspace.approach.origin") }}
        </p>
      </UContainer>
    </section>

    <!-- Périmètre envisagé : composition typographique -->
    <section class="pb-24 sm:pb-32">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("workspace.building.title") }}
          </h2>
          <p class="mt-5 text-muted">
            {{ $t("workspace.building.intro") }}
          </p>
        </div>

        <ul
          class="mt-12 font-notch text-[clamp(1.5rem,4vw,2.75rem)] leading-tight"
        >
          <li
            v-for="domain in domains"
            :key="domain"
            class="border-t border-default py-3 last:border-b flex items-center gap-2"
          >
            <UIcon name="i-lucide-arrow-right" class="size-5" /> {{ domain }}
          </li>
        </ul>

        <p class="mt-10 max-w-2xl text-lg font-light">
          {{ $t("workspace.building.outro") }}
        </p>
      </UContainer>
    </section>

    <ProjectState :description="$t('workspace.state.description')" />

    <ProjectClosing
      :title="$t('workspace.closing.title')"
      :description="$t('workspace.closing.description')"
    />
  </main>
</template>
