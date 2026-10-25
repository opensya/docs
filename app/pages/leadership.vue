<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("leadership.meta.title"),
  description: () => t("leadership.meta.description"),
  ogTitle: () => t("leadership.meta.title"),
  ogDescription: () => t("leadership.meta.description"),
  ogType: "profile",
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

const dimensions = ["products", "tools", "practice"];
const projects = ["authen", "workspace", "tarico"];
const tools = [
  { key: "runable", url: "https://runablejs.com" },
  { key: "syt", url: "https://github.com/domutala/syt" },
  { key: "epizod", url: "https://github.com/domutala/epizod" },
];
</script>

<template>
  <main id="top">
    <!-- 1. Hero : une vision portée par une personne -->
    <section>
      <UContainer class="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div class="grid items-end gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <p class="font-notch text-xl text-muted">
              <img
                src="/images/domutala.jpeg"
                :alt="$t('leadership.hero.photoAlt')"
                width="400"
                height="400"
                class="size-24 object-cover rounded-full"
              />

              {{ $t("leadership.hero.name") }}
              <span class="sr-only">,</span>
              <span class="block font-sans text-base font-light">
                {{ $t("leadership.hero.role") }}
              </span>
            </p>

            <h1
              class="mt-6 max-w-4xl font-notch leading-[1.05] text-[clamp(2.2rem,6vw,4.5rem)]"
            >
              {{ $t("leadership.hero.title") }}
            </h1>

            <p class="mt-8 max-w-2xl text-lg font-light">
              {{ $t("leadership.hero.intro") }}
            </p>
          </div>

          <!-- <img
            src="/images/domutala.jpeg"
            :alt="$t('leadership.hero.photoAlt')"
            width="400"
            height="400"
            class="size-40 object-cover md:size-56"
          /> -->
        </div>
      </UContainer>
    </section>

    <!-- 2. Une approche de l'ingénierie -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <h2 class="text-4xl font-notch">
            {{ $t("leadership.approach.title") }}
          </h2>

          <div class="max-w-2xl space-y-5 text-lg font-light">
            <p class="text-muted">{{ $t("leadership.approach.background") }}</p>
            <p>{{ $t("leadership.approach.p1") }}</p>
            <p>{{ $t("leadership.approach.p2") }}</p>
            <p>{{ $t("leadership.approach.p3") }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 3. Du code aux produits -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("leadership.work.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("leadership.work.intro") }}
          </p>
        </div>

        <dl class="mt-14 border-b border-default">
          <div
            v-for="item in dimensions"
            :key="item"
            class="grid gap-2 border-t border-default py-6 md:grid-cols-[1fr_2fr] md:gap-16"
          >
            <dt class="font-notch text-2xl">
              {{ $t(`leadership.work.items.${item}.title`) }}
            </dt>
            <dd class="text-muted">
              {{ $t(`leadership.work.items.${item}.description`) }}
            </dd>
          </div>
        </dl>

        <p class="mt-10 max-w-2xl text-lg font-light">
          {{ $t("leadership.work.outro") }}
        </p>
      </UContainer>
    </section>

    <!-- 4. Une vision de l'open source -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <h2 class="text-4xl font-notch">
            {{ $t("leadership.openSource.title") }}
          </h2>

          <div class="max-w-2xl space-y-5 text-lg font-light">
            <p>{{ $t("leadership.openSource.p1") }}</p>
            <p>{{ $t("leadership.openSource.p2") }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 5. Les projets comme expression de cette vision -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("leadership.projects.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("leadership.projects.intro") }}
          </p>
        </div>

        <ul class="mt-12 border-b border-default">
          <li
            v-for="item in projects"
            :key="item"
            class="grid gap-3 border-t border-default py-8 md:grid-cols-[1fr_2fr_auto] md:items-baseline md:gap-12"
          >
            <h3 class="font-notch text-2xl">
              {{ $t(`home.projects.items.${item}.name`) }}
            </h3>

            <p>{{ $t(`leadership.projects.items.${item}`) }}</p>

            <NuxtLink
              :to="localePath(`/${item}`)"
              class="flex items-center gap-1 w-max text-primary"
            >
              {{ $t(`home.projects.items.${item}.action`) }}
              <UIcon name="i-lucide-arrow-right" class="size-4" />
            </NuxtLink>
          </li>
        </ul>

        <p class="mt-8 max-w-2xl text-muted">
          {{ $t("leadership.projects.status") }}
        </p>

        <div class="mt-16 max-w-2xl">
          <p class="text-lg font-light">
            {{ $t("leadership.projects.tools") }}
          </p>

          <ul class="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <li v-for="tool in tools" :key="tool.key">
              <a
                :href="tool.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-primary"
              >
                {{ $t(`home.tools.items.${tool.key}.name`) }}
                <span class="sr-only">({{ $t("project.newTab") }})</span>
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </a>
            </li>
          </ul>
        </div>
      </UContainer>
    </section>

    <!-- 6. Conclusion : poursuivre la construction -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="max-w-3xl">
          <h2 class="text-4xl font-notch">
            {{ $t("leadership.closing.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("leadership.closing.description") }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <UButton :to="localePath('/')">
              {{ $t("leadership.closing.projects") }}
            </UButton>

            <UButton
              to="https://github.com/opensya"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="neutral"
              :aria-label="`${$t('leadership.closing.repos')} (${$t('project.newTab')})`"
            >
              {{ $t("leadership.closing.repos") }}
              <UIcon name="i-simple-icons-github" class="size-4" />
            </UButton>

            <UButton
              :to="$t('project.contactHref')"
              variant="outline"
              color="neutral"
            >
              {{ $t("leadership.closing.contact") }}
              <UIcon name="i-lucide-arrow-up-right" class="size-4" />
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </main>
</template>
