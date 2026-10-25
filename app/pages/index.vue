<script setup lang="ts">
useSeoMeta({
  ogTitle: "Opensya",
  ogDescription: $t("home.hero.title"),
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

const localePath = useLocalePath();

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
</script>

<template>
  <main id="top">
    <section class="py-32 bg-accented/20">
      <UContainer>
        <div class="mb-8">
          <h2 class="text-4xl font-notch">{{ $t("home.projects.title") }}</h2>
          <p class="max-w-lg">
            {{ $t("home.projects.description") }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <article
            v-for="item in ['authen', 'workspace', 'tarico']"
            :key="item"
            class="bg-default p-5 md:p-8 flex flex-col"
          >
            <h3 class="font-notch text-2xl">
              {{ $t(`home.projects.items.${item}.name`) }}
            </h3>

            <p class="mt-5">
              {{ $t(`home.projects.items.${item}.description`) }}
            </p>

            <div class="mt-auto">
              <NuxtLink
                :to="localePath(`/${item}`)"
                class="mt-5 flex items-center gap-1 w-max text-primary"
              >
                {{ $t(`home.projects.items.${item}.action`) }}

                <UIcon name="i-lucide-arrow-right" class="size-4" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <section>
      <div class="relative overflow-hidden">
        <UContainer
          class="py-16 sm:py-24 lg:py-28 relative flex flex-col justify-center"
        >
          <h1 class="font-notch leading-[1.1] text-[clamp(2rem,6.4vw,3.2rem)]">
            <span class="block relative z-1">
              {{ $t("home.hero.title") }}
            </span>
          </h1>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.hero.description") }}
          </p>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.hero.highlight") }}
          </p>
        </UContainer>
      </div>
    </section>

    <section>
      <UContainer class="relative">
        <h2 class="text-4xl font-notch">{{ $t("home.mission.title") }}</h2>

        <p class="mt-5 text-lg font-light max-w-2xl">
          {{ $t("home.mission.description") }}
        </p>
      </UContainer>
    </section>

    <!-- Our approach -->
    <section class="py-24">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("home.approach.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.approach.description") }}
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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

    <!-- Developer tools -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("home.tools.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.tools.description") }}
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3">
          <article
            v-for="tool in tools"
            :key="tool.key"
            class="bg-default p-6 md:p-8 flex flex-col"
          >
            <h3 class="font-notch text-2xl">
              {{ $t(`home.tools.items.${tool.key}.name`) }}
            </h3>

            <p class="mt-4 text-muted">
              {{ $t(`home.tools.items.${tool.key}.description`) }}
            </p>

            <div class="mt-auto">
              <a
                :href="tool.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-5 flex items-center gap-1 w-max text-primary"
              >
                {{ $t(`home.tools.items.${tool.key}.action`) }}

                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </a>
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- Open source -->
    <section class="pb-24 sm:pb-32 bg-accented/20">
      <UContainer>
        <div class="max-w-3xl">
          <h2 class="text-4xl font-notch">
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
          >
            {{ $t("home.openSource.action") }}
            <UIcon name="i-simple-icons-github" class="size-4" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Community -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-3xl">
          <h2 class="text-4xl font-notch">
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
            >
              {{ $t("home.community.actions.contribute") }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </main>
</template>
