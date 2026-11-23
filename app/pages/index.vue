<script setup lang="ts">
import ScrollRevealText from "~/components/ScrollRevealText.vue";

useSeoMeta({
  ogTitle: "Opensya",
  ogDescription: $t("home.hero.title"),
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

const localePath = useLocalePath();

const projects = [
  {
    key: "persistence",
    url: "https://persistence.opensya.com/",
    target: "_blank",
  },
  {
    key: "authen",
    url: localePath({ name: "authen" }),
    target: "_self",
  },
] as const;

const tools = [
  {
    key: "runable",
    url: "https://runablejs.com",
  },

  // {
  //   key: "persistence",
  //   url: "https://persistence.opensya.com/",
  // },
  {
    key: "epizod",
    url: "https://github.com/domutala/epizod",
  },
  {
    key: "syt",
    url: "https://github.com/domutala/syt",
  },
  // {
  //   key: "vContent",
  //   url: "https://github.com/domutala/v-content",
  // },
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
    <section class="relative md:min-h- bg- text- border- border-default">
      <div
        class="py-40 mt-5 relative h-[calc(100vh-40px)] flex flex-col justify-center bg-primary-700 mx-5 rounded-[4.3rem] ring ring-default overflow-hidden"
      >
        <img
          src="/images/n1.gif"
          alt=""
          class="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-full w-full object-cover object-center"
        />

        <div
          class="absolute inset-0 backdrop-blur-xl bg-radial-[at_25%_25%] from-ink-50/80 to-ink-200/80"
        ></div>

        <UContainer
          class="relative py-30 flex flex-col items-center text-center"
        >
          <h1 class="max-w-9xl font-notch text-hero-sm">
            {{ $t("home.hero.title") }}
            <!-- {{ $t("home.mission.highlight") }} -->
          </h1>
          <p class="max-w-150 mt-5">
            {{ $t("home.hero.description") }}
          </p>

          <div class="mt-20 flex flex-wrap gap-3">
            <UButton
              to="mailto:mamadoutalladia@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              color="neutral"
              class="px-5 py-4"
              size="xl"
            >
              <UIcon name="i-lucide-message-circle-check" class="size-4" />
              {{ $t("home.hero.primaryAction") }}
            </UButton>

            <UButton
              to="#projets"
              size="xl"
              variant="ghost"
              color="neutral"
              class="px-5 py-4"
            >
              {{ $t("home.hero.secondaryAction") }}
            </UButton>
          </div>
        </UContainer>
      </div>
    </section>

    <!-- Projets -->
    <section
      id="projects"
      data-slot="projects"
      aria-labelledby="projects-title"
      class="scroll-mt-24 pt-30 pb-16 sm:pb-24 bg-white"
    >
      <UContainer>
        <header data-slot="header" class="mb-8 max-w-3xl space-y-4 sm:mb-12">
          <h2 id="projects-title" class="font-notch-title text-h2 text-fg">
            {{ $t("home.projects.title") }}
          </h2>

          <p class="text-pretty text-lg font-medium text-fg">
            {{ $t("home.projects.lead") }}
          </p>

          <p
            class="max-w-2xl text-pretty text-body text-ink-600 dark:text-fg-muted"
          >
            {{ $t("home.projects.description") }}
          </p>
        </header>

        <div data-slot="grid" class="grid gap-4 md:grid-cols-2 md:gap-6">
          <article
            v-for="project in projects"
            :key="project.key"
            data-slot="project"
            class="group flex h-full flex-col rounded-xl border border-border bg-surface shadow-xs ring-0"
          >
            <div class="flex-1 space-y-4 p-6 sm:p-8">
              <h3 class="font-display text-h3 text-fg">
                {{ $t(`home.projects.items.${project.key}.name`) }}
              </h3>

              <p class="text-pretty text-lg font-medium text-fg">
                {{ $t(`home.projects.items.${project.key}.tagline`) }}
              </p>

              <p class="text-pretty text-body text-ink-600 dark:text-fg-muted">
                {{ $t(`home.projects.items.${project.key}.description`) }}
              </p>
            </div>

            <div class="border-t border-default px-6 sm:px-8 py-4 mt-auto">
              <NuxtLink
                :to="project.url"
                :target="project.target"
                class="arrow-link"
              >
                {{ $t(`home.projects.items.${project.key}.action`) }}

                <UIcon
                  :name="
                    project.target === '_blank'
                      ? 'i-lucide-arrow-up-right'
                      : 'i-lucide-arrow-right'
                  "
                  class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </NuxtLink>
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <section
      id="architecture"
      data-slot="architecture"
      aria-labelledby="architecture-title"
      class="scroll-mt-24 py-24 sm:py-40"
    >
      <UContainer>
        <div class="text-center max-w-4xl space-y-4 mx-auto">
          <div data-slot="content" class="">
            <h2
              id="architecture-title"
              class="font-notch-title text-h2 text-fg"
            >
              {{ $t("home.architecture.title") }}
            </h2>

            <p
              class="text-pretty text-body text-ink-600 dark:text-fg-muted mt-2"
            >
              {{ $t("home.architecture.description") }}
            </p>
          </div>

          <div
            data-slot="example"
            class="rounded-xl p-8 mt-7 text-left border border-border bg-accented/30"
          >
            <p class="text-pretty text-lg font-light leading-relaxed text-fg">
              {{ $t("home.architecture.example") }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="durability relative">
      <div class="back"></div>
      <div class="fond"></div>

      <!-- <svg
        data-v-9e6b499c=""
        viewBox="0 0 1280 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="
          position: absolute;
          bottom: 0px;
          width: 100lvw;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          pointer-events: none;
        "
      >
        <rect
          data-v-9e6b499c=""
          width="1280"
          height="384"
          fill="url(#paint0_radial_4211_5930)"
        ></rect>
        <defs data-v-9e6b499c="">
          <radialGradient
            data-v-9e6b499c=""
            id="paint0_radial_4211_5930"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(640 384) rotate(-90) scale(275.5 918.333)"
          >
            <stop
              data-v-9e6b499c=""
              stop-color="rgba(var(--v-theme-on-background))"
              stop-opacity=".07"
            ></stop>
            <stop data-v-9e6b499c="" offset="1" stop-opacity="0"></stop>
          </radialGradient>
        </defs>
      </svg> -->

      <div
        class="py-16 sm:py-24 lg:py-28 relative overflow-hidden border-default"
      >
        <!-- <div class="absolute inset-0">
          <UContainer
            class="relative h-full bg-[url('https://stackoverflow.co/img/product/data-licensing/data-licensing-hero.svg')] bg-no-repeat bg-size-[auto_100%]"
          />
        </div>
        <div
          class="absolute inset-0 bg-default/10 lg:hiddend backdrop-blur-2xl"
        /> -->

        <UContainer class="relative">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <h1
                class="font-notch leading-[1.1] text-[clamp(2rem,6.4vw,3.2rem)] max-w-xl"
              >
                {{ $t("home.durability.title") }}
              </h1>
              <div class="mt-3 gap-10 lg:grid-cols-12">
                <p class="text-xl text-muted leading-snug max-w-2xl">
                  {{ $t("home.durability.description") }}
                </p>
              </div>
            </div>

            <div class="flex lg:justify-center items-center">
              <div>
                <UButton
                  href="#contact"
                  color="neutral"
                  class="py-3 px-4 group"
                  size="xl"
                >
                  {{ $t("home.durability.action") }}

                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </UButton>
              </div>
            </div>
          </div>
        </UContainer>
      </div>
    </section>

    <!-- Outils développeurs -->
    <section class="py-24">
      <UContainer>
        <div class="max-w-2xl">
          <!-- <p class="section-eyebrow">{{ $t("home.tools.eyebrow") }}</p> -->

          <h2 class="mt-4 text-4xl font-notch">
            {{ $t("home.developerTools.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.developerTools.description") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
          <article
            v-for="{ key, label, url } in toolItems"
            :key="key"
            class="group bg-default p-5 md:p-8 flex flex-col border border-default rounded-lg"
          >
            <h3 class="font-notch text-2xl">
              {{ label }}
              <!-- {{ $t(`home.projects.items.${key}.name`) }} -->
            </h3>
            <p class="text-sm text-muted">
              {{ $t(`home.developerTools.items.${key}.category`) }}
            </p>

            <div class="mt-5"></div>

            <i18n-t
              v-if="key === 'runable'"
              keypath="home.developerTools.items.runable.description"
              scope="global"
              tag="p"
            >
              <template #vueLink>
                <a
                  href="https://vuejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline underline-offset-2 mr-1"
                >
                  Vue.js
                </a>
              </template>
            </i18n-t>

            <p v-else>
              {{ $t(`home.developerTools.items.${key}.description`) }}
            </p>

            <!-- <p class="mt-5">
              {{ $t(`home.developerTools.items.${key}.description`) }}
            </p> -->

            <div class="mt-auto">
              <a
                :href="url"
                class="arrow-link mt-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t(`home.developerTools.items.${key}.action`) }}

                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        </div>
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

    <ScrollRevealText
      class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
      :text="$t('home.contribute.highlight')"
      :ui="{
        text: 'text-hero-sm font-light font-notch max-w-400 text-center',
      }"
    >
      <template #after="{ isFullyRevealed }">
        <div :class="{ 'opacity-0': !isFullyRevealed }" class="mt-6">
          <div class="max-w-3xl mx-auto text-center">
            <p class="section-eyebrow">{{ $t("home.contribute.eyebrow") }}</p>

            <h2 class="mt-4 text-4xl font-notch">
              {{ $t("home.contribute.title") }}
            </h2>

            <p class="mt-5 text-lg font-light">
              {{ $t("home.contribute.description") }}
            </p>

            <div class="mt-8 flex justify-center gap-3">
              <UButton
                to="mailto:contact@opensya.com"
                size="xl"
                color="neutral"
              >
                {{ $t("home.contribute.action") }}
              </UButton>
            </div>
          </div>
        </div>
      </template>
    </ScrollRevealText>

    <!-- Hero -->
    <section class="py-0 hidden">
      <UContainer class="py-0">
        <!-- <h1 class="max-w-6xl font-notch text-">
          {{ $t("home.hero.title") }}
        </h1> -->

        <div
          class="mt- grid max-w-5xl gap-6 text-lg font-light md:grid-cols-2 md:gap-16"
        >
          <p>
            {{ $t("home.hero.description") }}
          </p>

          <p>
            {{ $t("home.hero.highlight") }}
          </p>
        </div>

        <div class="mt-10 flex flex-wrap gap-3">
          <!-- 
          <UButton to="#projets">
            {{ $t("home.hero.actions.projects") }}
          </UButton> 
         -->

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

    <!-- Mission -->
    <section class="py-24 sm:py-32 border-t border-default hidden">
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

    <!-- Open source -->
    <section class="bg-accented/20 py-24 sm:py-32 hidden">
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
  </main>
</template>

<style scoped lang="scss">
.back {
  background: rgba(0, 0, 0, 0.03);
  background: rgba(255, 149, 0, 0.205);
  -webkit-mask: url(/images/grid.svg) center / cover no-repeat;
  mask: url(/images/grid.svg) center / cover no-repeat;
  overflow: hidden;
  position: absolute;
  inset: 0;
}

.durability {
  .fond {
    background: linear-gradient(
      to top left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 70%
    );

    // background: linear-gradient(
    //   to top right,
    //   rgba(255, 255, 255, 0) 0%,
    //   rgba(255, 255, 255, 1) 60%
    // );

    content: "";
    inset: 0;
    position: absolute;
  }
}
</style>
