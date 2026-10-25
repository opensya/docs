<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("investors.meta.title"),
  description: () => t("investors.meta.description"),
  ogTitle: () => t("investors.meta.title"),
  ogDescription: () => t("investors.meta.description"),
  ogType: "website",
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

const beliefs = ["ownership", "foundations", "durability"];
const projects = ["authen", "workspace", "tarico"];
const facts = ["stage", "open", "claims"];
</script>

<template>
  <main id="top">
    <!-- Hero -->
    <section>
      <UContainer class="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <p class="font-notch text-xl text-muted">
          {{ $t("investors.hero.eyebrow") }}
        </p>

        <h1
          class="mt-6 max-w-4xl font-notch leading-[1.05] text-[clamp(2.2rem,6vw,4.5rem)]"
        >
          {{ $t("investors.hero.title") }}
        </h1>

        <p class="mt-8 max-w-2xl text-lg font-light">
          {{ $t("investors.hero.intro") }}
        </p>

        <div class="mt-10 flex flex-wrap gap-3">
          <UButton :to="$t('investors.contactHref')">
            {{ $t("investors.actions.contact") }}
            <UIcon name="i-lucide-message-square-text" class="size-4" />
          </UButton>

          <!-- <UButton :to="localePath('/')" variant="outline" color="neutral">
            {{ $t("investors.actions.projects") }}
          </UButton> -->
        </div>
      </UContainer>
    </section>

    <!-- Le constat -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="grid gap-10 md:grid-cols-2 md:gap-16">
          <h2 class="text-4xl font-notch">
            {{ $t("investors.thesis.title") }}
          </h2>
          <div class="space-y-5 text-lg font-light">
            <p>{{ $t("investors.thesis.p1") }}</p>
            <p>{{ $t("investors.thesis.p2") }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Convictions -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("investors.beliefs.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("investors.beliefs.intro") }}
          </p>
        </div>

        <div class="mt-14 grid gap-8 md:grid-cols-3">
          <article
            v-for="item in beliefs"
            :key="item"
            class="border-t border-default pt-5"
          >
            <h3 class="font-notch text-xl">
              {{ $t(`investors.beliefs.items.${item}.title`) }}
            </h3>
            <p class="mt-4 text-muted">
              {{ $t(`investors.beliefs.items.${item}.description`) }}
            </p>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- Les projets -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("investors.projects.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("investors.projects.intro") }}
          </p>
        </div>

        <ul class="mt-12 border-b border-default">
          <li
            v-for="item in projects"
            :key="item"
            class="grid gap-3 border-t border-default py-8 md:grid-cols-[1fr_2fr_auto] md:items-baseline md:gap-12"
          >
            <div>
              <h3 class="font-notch text-2xl">
                {{ $t(`home.projects.items.${item}.name`) }}
              </h3>
              <p class="mt-1 text-sm text-muted">
                {{ $t(`home.projects.items.${item}.category`) }}
              </p>
            </div>

            <p>{{ $t(`investors.projects.items.${item}`) }}</p>

            <NuxtLink
              :to="localePath(`/${item}`)"
              class="flex items-center gap-1 w-max text-primary"
            >
              {{ $t(`home.projects.items.${item}.action`) }}
              <UIcon name="i-lucide-arrow-right" class="size-4" />
            </NuxtLink>
          </li>
        </ul>
      </UContainer>
    </section>

    <!-- Transparence -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("investors.transparency.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("investors.transparency.intro") }}
          </p>
        </div>

        <dl class="mt-12 border-b border-default">
          <div
            v-for="item in facts"
            :key="item"
            class="grid gap-2 border-t border-default py-6 md:grid-cols-[1fr_2fr] md:gap-16"
          >
            <dt class="font-notch text-xl">
              {{ $t(`investors.transparency.items.${item}.title`) }}
            </dt>
            <dd class="text-muted">
              {{ $t(`investors.transparency.items.${item}.description`) }}
            </dd>
          </div>
        </dl>
      </UContainer>
    </section>

    <!-- Ouverture -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="max-w-3xl">
          <h2 class="text-4xl font-notch">
            {{ $t("investors.closing.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("investors.closing.description") }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <UButton :to="$t('investors.contactHref')">
              {{ $t("investors.actions.contact") }}
              <UIcon name="i-lucide-message-square-text" class="size-4" />
            </UButton>

            <UButton
              to="https://github.com/opensya"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="neutral"
              :aria-label="`${$t('investors.actions.github')} (${$t('project.newTab')})`"
            >
              {{ $t("investors.actions.github") }}
              <UIcon name="i-simple-icons-github" class="size-4" />
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </main>
</template>
