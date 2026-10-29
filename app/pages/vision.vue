<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("vision.meta.title"),
  description: () => t("vision.meta.description"),
  ogTitle: () => t("vision.meta.title"),
  ogDescription: () => t("vision.meta.description"),
  ogType: "website",
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

// Les listes du JSON ont toutes trois éléments (index 0 à 2).
const three = [0, 1, 2];
const paragraphs = [0, 1, 2];
</script>

<template>
  <main id="top">
    <!-- A. Hero -->
    <section>
      <UContainer class="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <p class="font-notch text-xl text-muted">
          {{ $t("vision.hero.eyebrow") }}
        </p>

        <h1
          class="mt-6 max-w-5xl font-notch leading-[1.02] text-[clamp(2.5rem,7.5vw,3.5rem)]"
        >
          {{ $t("vision.hero.title") }}
        </h1>

        <p class="mt-8 max-w-2xl text-lg font-light">
          {{ $t("vision.hero.description") }}
        </p>

        <div class="mt-10 flex flex-wrap gap-3">
          <UButton :to="localePath('/')">
            {{ $t("vision.hero.actions.projects") }}
          </UButton>

          <UButton
            to="https://github.com/opensya"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            color="neutral"
            :aria-label="`${$t('vision.hero.actions.openSource')} (${$t('project.newTab')})`"
          >
            {{ $t("vision.hero.actions.openSource") }}
            <UIcon name="i-simple-icons-github" class="size-4" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- B. Le constat -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p class="section-eyebrow">{{ $t("vision.context.eyebrow") }}</p>
            <h2 class="mt-3 text-4xl font-notch">
              {{ $t("vision.context.title") }}
            </h2>
          </div>

          <div class="max-w-2xl space-y-5 text-lg font-light">
            <p v-for="i in paragraphs" :key="i">
              {{ $t(`vision.context.paragraphs.${i}`) }}
            </p>
          </div>
        </div>

        <ul class="mt-16 grid gap-8 md:grid-cols-3">
          <li v-for="i in three" :key="i" class="border-t border-default pt-5">
            <h3 class="font-notch text-2xl">
              {{ $t(`vision.context.items.${i}.title`) }}
            </h3>
            <p class="mt-4 text-muted">
              {{ $t(`vision.context.items.${i}.description`) }}
            </p>
          </li>
        </ul>
      </UContainer>
    </section>

    <!-- C. L'open source comme fondation -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-3xl">
          <p class="section-eyebrow">{{ $t("vision.openSource.eyebrow") }}</p>
          <h2 class="mt-3 text-4xl font-notch">
            {{ $t("vision.openSource.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("vision.openSource.description") }}
          </p>
        </div>

        <dl class="mt-14 border-b border-default">
          <div
            v-for="i in three"
            :key="i"
            class="grid gap-2 border-t border-default py-6 md:grid-cols-[1fr_2fr] md:gap-16"
          >
            <dt class="font-notch text-2xl">
              {{ $t(`vision.openSource.items.${i}.title`) }}
            </dt>
            <dd class="text-muted">
              {{ $t(`vision.openSource.items.${i}.description`) }}
            </dd>
          </div>
        </dl>
      </UContainer>
    </section>

    <!-- D. Brique par brique -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="max-w-3xl">
          <p class="section-eyebrow">{{ $t("vision.approach.eyebrow") }}</p>
          <h2 class="mt-3 text-4xl font-notch">
            {{ $t("vision.approach.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("vision.approach.description") }}
          </p>
        </div>

        <ol class="mt-14 border-b border-default">
          <li
            v-for="i in three"
            :key="i"
            class="grid gap-3 border-t border-default py-8 md:grid-cols-[auto_1fr_2fr] md:items-baseline md:gap-12"
          >
            <p
              class="font-notch text-4xl leading-none text-primary"
              aria-hidden="true"
            >
              0{{ i + 1 }}
            </p>
            <h3 class="font-notch text-2xl">
              {{ $t(`vision.approach.steps.${i}.title`) }}
            </h3>
            <p class="text-muted">
              {{ $t(`vision.approach.steps.${i}.description`) }}
            </p>
          </li>
        </ol>

        <p class="mt-14 max-w-3xl font-notch text-2xl leading-snug">
          {{ $t("vision.approach.conclusion") }}
        </p>
      </UContainer>
    </section>

    <!-- E. Un écosystème technologique africain -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-3xl">
          <p class="section-eyebrow">{{ $t("vision.ecosystem.eyebrow") }}</p>
          <h2 class="mt-3 text-4xl font-notch">
            {{ $t("vision.ecosystem.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("vision.ecosystem.description") }}
          </p>
        </div>

        <ul class="mt-14 grid gap-8 md:grid-cols-3">
          <li v-for="i in three" :key="i" class="border-t border-default pt-5">
            <h3 class="font-notch text-2xl">
              {{ $t(`vision.ecosystem.items.${i}.title`) }}
            </h3>
            <p class="mt-4 text-muted">
              {{ $t(`vision.ecosystem.items.${i}.description`) }}
            </p>
          </li>
        </ul>

        <div class="mt-14 max-w-2xl space-y-4">
          <p class="text-lg font-light">
            {{ $t("vision.ecosystem.worldwide") }}
          </p>
          <p class="text-muted">{{ $t("vision.ecosystem.note") }}</p>
        </div>
      </UContainer>
    </section>

    <!-- F. La souveraineté des entreprises -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="max-w-3xl">
          <p class="section-eyebrow">{{ $t("vision.sovereignty.eyebrow") }}</p>
          <h2 class="mt-3 text-4xl font-notch">
            {{ $t("vision.sovereignty.title") }}
          </h2>
          <p class="mt-5 text-lg font-light">
            {{ $t("vision.sovereignty.description") }}
          </p>
        </div>

        <dl class="mt-14 border-b border-default">
          <div
            v-for="i in three"
            :key="i"
            class="grid gap-2 border-t border-default py-6 md:grid-cols-[1fr_2fr] md:gap-16"
          >
            <dt class="font-notch text-2xl">
              {{ $t(`vision.sovereignty.items.${i}.title`) }}
            </dt>
            <dd class="text-muted">
              {{ $t(`vision.sovereignty.items.${i}.description`) }}
            </dd>
          </div>
        </dl>

        <p class="mt-10 max-w-2xl text-lg font-light">
          {{ $t("vision.sovereignty.conclusion") }}
        </p>
      </UContainer>
    </section>

    <!-- G. Conclusion -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <p class="section-eyebrow">{{ $t("vision.conclusion.eyebrow") }}</p>

        <h2 class="mt-3 text-4xl font-notch">
          {{ $t("vision.conclusion.title") }}
        </h2>

        <blockquote
          class="mt-10 max-w-4xl font-notch leading-[1.15] text-[clamp(1.75rem,4vw,3rem)]"
        >
          {{ $t("vision.conclusion.statement") }}
        </blockquote>

        <p class="mt-8 max-w-2xl text-lg font-light">
          {{ $t("vision.conclusion.description") }}
        </p>

        <div class="mt-10 flex flex-wrap gap-3">
          <UButton :to="localePath('/')">
            {{ $t("vision.conclusion.actions.projects") }}
          </UButton>

          <UButton
            to="https://github.com/opensya"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            color="neutral"
            :aria-label="`${$t('vision.conclusion.actions.github')} (${$t('project.newTab')})`"
          >
            {{ $t("vision.conclusion.actions.github") }}
            <UIcon name="i-simple-icons-github" class="size-4" />
          </UButton>

          <UButton
            :to="$t('project.contactHref')"
            variant="outline"
            color="neutral"
          >
            {{ $t("vision.conclusion.actions.contact") }}
            <UIcon name="i-lucide-arrow-up-right" class="size-4" />
          </UButton>
        </div>
      </UContainer>
    </section>
  </main>
</template>
