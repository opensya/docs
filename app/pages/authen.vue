<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t("authen.meta.title"),
  description: () => t("authen.meta.description"),
  ogTitle: () => t("authen.meta.title"),
  ogDescription: () => t("authen.meta.description"),
  ogType: "website",
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

const concepts = ["identity", "profile", "credentials", "sessions"];
const envisaged = ["shared", "login", "methods"];
</script>

<template>
  <main id="top">
    <ProjectHero
      name="Authen"
      :category="$t('authen.hero.category')"
      :title="$t('authen.hero.title')"
      :intro="$t('authen.hero.intro')"
      :tagline="$t('authen.hero.tagline')"
    />

    <!-- Problème -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="grid gap-10 md:grid-cols-2 md:gap-16">
          <h2 class="text-4xl font-notch">{{ $t("authen.problem.title") }}</h2>
          <div class="space-y-5 text-lg font-light">
            <p>{{ $t("authen.problem.p1") }}</p>
            <p>{{ $t("authen.problem.p2") }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Approche : la séparation conceptuelle -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">{{ $t("authen.approach.title") }}</h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("authen.approach.intro") }}
          </p>
        </div>

        <dl class="mt-14 border border-default">
          <div
            v-for="item in concepts"
            :key="item"
            class="grid gap-2 not-first:border-t border-default p-6 md:grid-cols-[1fr_2fr] md:gap-16"
          >
            <dt class="font-notch text-2xl">
              {{ $t(`authen.approach.items.${item}.title`) }}
            </dt>
            <dd class="text-muted">
              {{ $t(`authen.approach.items.${item}.description`) }}
            </dd>
          </div>
        </dl>

        <p class="mt-10 max-w-3xl text-lg font-light">
          {{ $t("authen.approach.principles") }}
        </p>
      </UContainer>
    </section>

    <!-- Ce que nous cherchons à construire -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">{{ $t("authen.building.title") }}</h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("authen.building.intro") }}
          </p>
        </div>

        <ul class="mt-12 grid gap-8 md:grid-cols-3">
          <li
            v-for="item in envisaged"
            :key="item"
            class="border-t border-default pt-5"
          >
            <p class="text-sm text-muted">{{ $t("project.envisaged") }}</p>
            <p class="mt-3">{{ $t(`authen.building.items.${item}`) }}</p>
          </li>
        </ul>

        <!-- Schéma conceptuel : une identité, un socle, plusieurs applications. -->
        <div class="mt-14 max-w-4xl">
          <div
            class="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-6"
          >
            <div class="border border-default p-6 md:p-8">
              <p class="font-notch text-xl md:text-2xl">
                {{ $t("authen.building.diagram.identity") }}
              </p>
            </div>

            <UIcon
              name="i-lucide-move-right"
              class="mx-auto size-6 rotate-90 text-muted md:rotate-0"
              aria-hidden="true"
            />

            <div class="border border-default bg-accented/20 p-6 md:p-8">
              <p class="font-notch text-xl md:text-2xl">Authen</p>
            </div>

            <UIcon
              name="i-lucide-move-right"
              class="mx-auto size-6 rotate-90 text-muted md:rotate-0"
              aria-hidden="true"
            />

            <div class="flex flex-col gap-3">
              <div class="border border-default p-4 md:p-5">
                <p class="font-notch text-lg md:text-xl">
                  {{ $t("home.projects.items.workspace.name") }}
                </p>
              </div>
              <div class="border border-dashed border-default p-4 md:p-5">
                <p class="font-notch text-lg text-muted md:text-xl">
                  {{ $t("authen.building.diagram.otherApps") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <ProjectState :description="$t('authen.state.description')" />

    <ProjectClosing
      :title="$t('authen.closing.title')"
      :description="$t('authen.closing.description')"
    />
  </main>
</template>
