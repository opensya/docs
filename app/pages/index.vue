<script setup lang="ts">
useSeoMeta({
  ogTitle: "Opensya",
  ogDescription: $t("home.hero.title"),
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

const localePath = useLocalePath();

const projects = ["authen", "workspace", "onerh"].map((key) => ({ key }));

const tools = [
  {
    key: "runable",
    url: "https://runablejs.com",
  },
  {
    key: "syt",
    url: "https://github.com/domutala/syt",
  },
  {
    key: "persistence",
    url: "https://persistence.opensya.com/",
  },
  {
    key: "epizod",
    url: "https://github.com/domutala/epizod",
  },
  {
    key: "vContent",
    url: "https://github.com/domutala/v-content",
  },
];

const toolItems = tools.map((tool) => ({
  ...tool,
  value: tool.key,
  label: $t(`home.tools.items.${tool.key}.name`),
}));
</script>

<template>
  <main id="top">
    <!-- Hero -->
    <section>
      <UContainer class="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <h1 class="max-w-6xl font-notch text-hero">
          {{ $t("home.hero.title") }}
        </h1>

        <div
          class="mt-10 grid max-w-5xl gap-6 text-lg font-light md:grid-cols-2 md:gap-16"
        >
          <p>
            {{ $t("home.hero.description") }}
          </p>

          <p>
            {{ $t("home.hero.highlight") }}
          </p>
        </div>

        <div class="mt-10 flex flex-wrap gap-3">
          <UButton to="#projets">
            {{ $t("home.hero.actions.projects") }}
          </UButton>

          <UButton
            to="https://github.com/opensya"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            color="neutral"
            :aria-label="`${$t('home.hero.actions.github')} (${$t('project.newTab')})`"
          >
            {{ $t("home.hero.actions.github") }}
            <UIcon name="i-simple-icons-github" class="size-4" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Projets -->
    <section id="projets" class="scroll-mt-24 bg-accented/20 py-24 sm:py-32">
      <UContainer>
        <div class="mb-12">
          <p class="section-eyebrow">{{ $t("home.projects.eyebrow") }}</p>
          <h2 class="mt-4 text-4xl font-notch">
            {{ $t("home.projects.title") }}
          </h2>
          <p class="mt-4 max-w-lg">
            {{ $t("home.projects.description") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <article
            v-for="{ key } in projects"
            :key="key"
            class="group bg-default p-5 md:p-8 flex flex-col"
          >
            <h3 class="font-notch text-2xl">
              {{ $t(`home.projects.items.${key}.name`) }}
            </h3>

            <p class="mt-5">
              {{ $t(`home.projects.items.${key}.description`) }}
            </p>

            <div class="mt-auto">
              <NuxtLink :to="localePath(`/${key}`)" class="arrow-link mt-5">
                {{ $t(`home.projects.items.${key}.action`) }}

                <UIcon
                  name="i-lucide-arrow-right"
                  class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </NuxtLink>
            </div>
          </article>
        </div>

        <!-- <UCarousel
          v-slot="{ item }"
          :items="projects"
          :arrows="true"
          :dots="true"
          :loop="true"
          align="start"
          :prev="{
            color: 'neutral',
            variant: 'outline',
            'aria-label': $t('carousel.previous'),
          }"
          :next="{
            color: 'neutral',
            variant: 'outline',
            'aria-label': $t('carousel.next'),
          }"
          :ui="{
            container: 'gap-3',
            item: 'basis-full md:basis-1/2',
          }"
        >
          <article class="group flex h-full flex-col bg-default p-5 md:p-8">
            <h3 class="font-notch text-2xl">
              {{ $t(`home.projects.items.${item.key}.name`) }}
            </h3>

            <p class="mt-5">
              {{ $t(`home.projects.items.${item.key}.description`) }}
            </p>

            <div class="mt-auto">
              <NuxtLink
                :to="localePath(`/${item.key}`)"
                class="arrow-link mt-5"
              >
                {{ $t(`home.projects.items.${item.key}.action`) }}

                <UIcon
                  name="i-lucide-arrow-right"
                  class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </NuxtLink>
            </div>
          </article>
        </UCarousel> -->
      </UContainer>
    </section>

    <!-- Mission -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <p class="section-eyebrow">{{ $t("home.mission.eyebrow") }}</p>

        <h2 class="mt-4 text-4xl font-notch">
          {{ $t("home.mission.title") }}
        </h2>

        <p class="mt-5 max-w-2xl text-lg font-light">
          {{ $t("home.mission.description") }}
        </p>

        <p class="mt-12 max-w-3xl font-notch text-2xl leading-snug">
          {{ $t("home.mission.highlight") }}
        </p>
      </UContainer>
    </section>

    <!-- Notre approche -->
    <section class="bg-accented/20 py-24 sm:py-32">
      <UContainer>
        <div class="max-w-2xl">
          <p class="section-eyebrow">{{ $t("home.approach.eyebrow") }}</p>

          <h2 class="mt-4 text-4xl font-notch">
            {{ $t("home.approach.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.approach.description") }}
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <article
            v-for="item in ['open', 'modular', 'sustainable']"
            :key="item"
            class="border-t border-default pt-5"
          >
            <h3 class="font-notch text-xl">
              {{ $t(`home.approach.items.${item}.title`) }}
            </h3>

            <p class="mt-4 text-muted">
              {{ $t(`home.approach.items.${item}.description`) }}
            </p>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- Outils développeurs -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-2xl">
          <p class="section-eyebrow">{{ $t("home.tools.eyebrow") }}</p>

          <h2 class="mt-4 text-4xl font-notch">
            {{ $t("home.tools.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.tools.description") }}
          </p>
        </div>

        <UAccordion
          :items="toolItems"
          type="single"
          default-value="runable"
          class="mt-14 border-t border-default"
          :ui="{
            item: 'border-b border-default',
            trigger: 'py-6 text-xl md:text-2xl font-notch',
            content: 'pb-6',
          }"
        >
          <template #content="{ item }">
            <p class="text-sm text-muted">
              {{ $t(`home.tools.items.${item.key}.category`) }}
            </p>

            <p class="mt-3 max-w-3xl text-muted">
              {{ $t(`home.tools.items.${item.key}.description`) }}
            </p>

            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="arrow-link group mt-5"
            >
              {{ $t(`home.tools.items.${item.key}.action`) }}
              <span class="sr-only">({{ $t("project.newTab") }})</span>
              <UIcon
                name="i-lucide-arrow-up-right"
                class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </a>
          </template>
        </UAccordion>
      </UContainer>
    </section>

    <!-- Open source -->
    <section class="bg-accented/20 py-24 sm:py-32">
      <UContainer>
        <div class="max-w-3xl">
          <p class="section-eyebrow">{{ $t("home.openSource.eyebrow") }}</p>

          <h2 class="mt-4 text-4xl font-notch">
            {{ $t("home.openSource.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.openSource.description") }}
          </p>

          <UButton
            to="https://github.com/opensya"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            color="neutral"
            class="mt-8"
            :aria-label="`${$t('home.openSource.action')} (${$t('project.newTab')})`"
          >
            {{ $t("home.openSource.action") }}
            <UIcon name="i-simple-icons-github" class="size-4" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Communauté -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-3xl">
          <p class="section-eyebrow">{{ $t("home.community.eyebrow") }}</p>

          <h2 class="mt-4 text-4xl font-notch">
            {{ $t("home.community.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.community.description") }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <UButton to="mailto:contact@opensya.com">
              {{ $t("home.community.actions.contact") }}
              <UIcon name="i-lucide-arrow-up-right" class="size-4" />
            </UButton>

            <UButton
              to="https://github.com/opensya"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="neutral"
              :aria-label="`${$t('home.community.actions.contribute')} (${$t('project.newTab')})`"
            >
              {{ $t("home.community.actions.contribute") }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </main>
</template>
