<script setup lang="ts">
const { t, tm, rt } = useI18n();

const githubUrl = 'https://github.com/opensya';
const githubDscussionUrl = 'https://github.com/orgs/opensya/discussions';
const documentationUrl = '/docs';
const persistenceUrl = 'https://persistence.opensya.com';

function translateList(key: string): string[] {
  const value = tm(key);

  return Array.isArray(value) ? value.map((item) => rt(item)) : [];
}

const principles = [
  'openSource',
  'modular',
  'selfHosted',
  'extensible',
] as const;
const useCases = [
  'internalPlatform',
  'careerPortal',
  'multisite',
  'specializedSolution',
  'commercialProduct',
] as const;
const audiences = [
  'companies',
  'technicalTeams',
  'integrators',
  'publishers',
  'community',
] as const;
const philosophy = [
  'ownership',
  'composition',
  'interoperability',
  'conventions',
  'community',
] as const;
const contributors = [
  'companies',
  'developers',
  'designPartners',
  'partners',
] as const;

const principleIcons = {
  openSource: 'i-tabler-brand-open-source',
  modular: 'i-tabler-packages',
  selfHosted: 'i-tabler-server',
  extensible: 'i-tabler-plug-connected',
} as const;

const audienceIcons = {
  companies: 'i-tabler-building',
  technicalTeams: 'i-tabler-code',
  integrators: 'i-tabler-tool',
  publishers: 'i-tabler-apps',
  community: 'i-tabler-users-group',
} as const;
</script>

<template>
  <div class="bg-default text-highlighted">
    <header
      class="sticky top-0 z-50 border-b border-default bg-default/85 backdrop-blur-xl"
    >
      <UContainer class="flex h-16 items-center justify-between gap-6">
        <NuxtLink to="/" class="text-lg font-semibold tracking-tight">
          <AppLogo class="w-auto h-6 shrink-0" />
          <!-- {{ t('landing.navigation.brand') }} -->
        </NuxtLink>

        <nav class="hidden items-center gap-6 text-sm text-muted lg:flex">
          <a href="#vision" class="transition-colors hover:text-highlighted">
            {{ t('landing.navigation.items.vision') }}
          </a>
          <a
            href="#architecture"
            class="transition-colors hover:text-highlighted"
          >
            {{ t('landing.navigation.items.architecture') }}
          </a>
          <a href="#ecosystem" class="transition-colors hover:text-highlighted">
            {{ t('landing.navigation.items.ecosystem') }}
          </a>
          <a href="#status" class="transition-colors hover:text-highlighted">
            {{ t('landing.navigation.items.roadmap') }}
          </a>
          <!-- <NuxtLink
            :to="documentationUrl"
            class="transition-colors hover:text-highlighted"
          >
            {{ t('landing.navigation.items.documentation') }}
          </NuxtLink> -->
        </nav>

        <UButton
          :label="t('landing.navigation.action')"
          :to="githubUrl"
          target="_blank"
          trailing-icon="i-tabler-arrow-up-right"
          color="neutral"
          variant="soft"
        />
      </UContainer>
    </header>

    <main>
      <section
        class="relative overflow-hidden border-b border-default py-24 sm:py-32"
      >
        <div
          class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--ui-color-primary-100),transparent_35%)] opacity-60 dark:opacity-10"
        />

        <UContainer class="relative">
          <div class="max-w-4xl">
            <UBadge color="primary" variant="soft" size="lg" class="mb-8">
              {{ t('landing.hero.eyebrow') }}
            </UBadge>

            <h1
              class="text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              {{ t('landing.hero.title') }}
            </h1>

            <p class="mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {{ t('landing.hero.description') }}
            </p>

            <p class="mt-4 max-w-3xl text-lg font-medium text-toned">
              {{ t('landing.hero.summary') }}
            </p>

            <div class="mt-10 flex flex-wrap gap-2">
              <UButton
                :label="t('landing.hero.actions.primary')"
                to="#vision"
                size="xl"
                trailing-icon="i-tabler-arrow-down"
              />
              <UButton
                :label="t('landing.hero.actions.secondary')"
                :to="githubUrl"
                target="_blank"
                size="xl"
                variant="soft"
                trailing-icon="i-simple-icons-github"
              />
            </div>

            <div
              class="mt-12 flex flex-col gap-3 border-l-2 border-primary pl-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <p class="text-sm text-muted">
                {{ t('landing.hero.status') }}
              </p>
              <p class="text-sm font-medium text-secondary">
                {{ t('landing.hero.tagline') }}
              </p>
            </div>
          </div>
        </UContainer>
      </section>

      <section
        id="vision"
        class="scroll-mt-24 border-b border-default py-20 sm:py-28"
      >
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-secondary"
            >
              {{ t('landing.problem.eyebrow') }}
            </p>
            <h2
              class="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {{ t('landing.problem.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.problem.subtitle') }}
            </p>
          </div>

          <div class="space-y-8">
            <p class="text-lg leading-8 text-toned">
              {{ t('landing.problem.description') }}
            </p>
            <div>
              <p class="mb-4 font-medium">
                {{ t('landing.problem.introduction') }}
              </p>
              <ul class="grid gap-3 sm:grid-cols-2">
                <li
                  v-for="item in translateList('landing.problem.items')"
                  :key="item"
                  class="flex gap-3 rounded-lg border border-default bg-elevated/50 p-4 text-sm leading-6 text-muted"
                >
                  <UIcon
                    name="i-tabler-minus"
                    class="mt-1 size-4 shrink-0 text-secondary"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <p class="text-muted">{{ t('landing.problem.conclusion') }}</p>
            <blockquote
              class="rounded-xl border-l-4 border-primary bg-primary/5 p-6 text-xl font-medium leading-8"
            >
              {{ t('landing.problem.quote') }}
            </blockquote>
          </div>
        </UContainer>
      </section>

      <section class="border-b border-default py-20 sm:py-28">
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-secondary"
            >
              {{ t('landing.positioning.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.positioning.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.positioning.subtitle') }}
            </p>
          </div>

          <div class="space-y-7 text-base leading-7 text-toned">
            <p class="text-xl font-medium text-highlighted">
              {{ t('landing.positioning.description') }}
            </p>
            <p>{{ t('landing.positioning.definition') }}</p>
            <div class="rounded-xl border border-default p-6">
              <p class="mb-4 font-medium text-highlighted">
                {{ t('landing.positioning.introduction') }}
              </p>
              <ul class="space-y-3">
                <li
                  v-for="item in translateList('landing.positioning.items')"
                  :key="item"
                  class="flex gap-3"
                >
                  <UIcon
                    name="i-tabler-check"
                    class="mt-1 size-5 shrink-0 text-secondary"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <p class="font-medium text-highlighted">
              {{ t('landing.positioning.conclusion') }}
            </p>
          </div>
        </UContainer>
      </section>

      <section class="border-b border-default bg-elevated/30 py-20 sm:py-28">
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-secondary"
            >
              {{ t('landing.principles.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.principles.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.principles.subtitle') }}
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <article
              v-for="item in principles"
              :key="item"
              class="rounded-xl border border-default bg-default p-6"
            >
              <div
                class="mb-5 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-secondary"
              >
                <UIcon :name="principleIcons[item]" class="size-5" />
              </div>
              <h3 class="text-lg font-semibold">
                {{ t(`landing.principles.items.${item}.title`) }}
              </h3>
              <p class="mt-3 leading-7 text-muted">
                {{ t(`landing.principles.items.${item}.description`) }}
              </p>
            </article>
          </div>
        </UContainer>
      </section>

      <section class="border-b border-default py-20 sm:py-28">
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-secondary"
            >
              {{ t('landing.useCases.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.useCases.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.useCases.subtitle') }}
            </p>
          </div>

          <div>
            <div class="divide-y divide-default border-y border-default">
              <article
                v-for="(item, index) in useCases"
                :key="item"
                class="grid gap-4 py-6 sm:grid-cols-[3rem_1fr]"
              >
                <span class="font-mono text-sm text-secondary">
                  0{{ index + 1 }}
                </span>
                <div>
                  <h3 class="text-lg font-semibold">
                    {{ t(`landing.useCases.items.${item}.title`) }}
                  </h3>
                  <p class="mt-2 leading-7 text-muted">
                    {{ t(`landing.useCases.items.${item}.description`) }}
                  </p>
                </div>
              </article>
            </div>
            <p class="mt-6 font-medium">
              {{ t('landing.useCases.conclusion') }}
            </p>
          </div>
        </UContainer>
      </section>

      <section
        id="ecosystem"
        class="scroll-mt-24 border-b border-default py-20 sm:py-28"
      >
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-secondary"
            >
              {{ t('landing.model.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.model.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.model.description') }}
            </p>
          </div>

          <div class="space-y-5">
            <article
              v-for="part in ['core', 'modules']"
              :key="part"
              class="rounded-xl border border-default p-6 sm:p-8"
            >
              <h3 class="text-xl font-semibold">
                {{ t(`landing.model.${part}.title`) }}
              </h3>
              <p class="mt-3 leading-7 text-muted">
                {{ t(`landing.model.${part}.description`) }}
              </p>
              <ul class="mt-5 grid gap-2 sm:grid-cols-2">
                <li
                  v-for="item in translateList(`landing.model.${part}.items`)"
                  :key="item"
                  class="flex gap-2 text-sm text-toned"
                >
                  <UIcon
                    name="i-tabler-point-filled"
                    class="mt-1 size-4 shrink-0 text-secondary"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
              <p
                class="mt-5 border-t border-default pt-5 text-sm leading-6 text-muted"
              >
                {{ t(`landing.model.${part}.conclusion`) }}
              </p>
            </article>

            <article class="rounded-xl bg-black p-6 text-white sm:p-8">
              <h3 class="text-xl font-semibold">
                {{ t('landing.model.extensions.title') }}
              </h3>
              <p class="mt-3 leading-7 text-white/80">
                {{ t('landing.model.extensions.description') }}
              </p>
            </article>
          </div>
        </UContainer>
      </section>

      <section
        id="architecture"
        class="scroll-mt-24 border-b border-default bg-elevated/30 py-20 sm:py-28"
      >
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-secondary"
            >
              {{ t('landing.architecture.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.architecture.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.architecture.subtitle') }}
            </p>
          </div>

          <div>
            <p class="text-lg leading-8 text-toned">
              {{ t('landing.architecture.description') }}
            </p>
            <div class="mt-8 grid gap-3 sm:grid-cols-2">
              <div
                v-for="item in translateList('landing.architecture.items')"
                :key="item"
                class="flex gap-3 rounded-lg bg-default p-4 shadow-sm ring-1 ring-default"
              >
                <UIcon
                  name="i-tabler-check"
                  class="mt-1 size-5 shrink-0 text-secondary"
                />
                <span class="text-sm leading-6 text-toned">{{ item }}</span>
              </div>
            </div>
            <p class="mt-8 font-medium leading-7">
              {{ t('landing.architecture.conclusion') }}
            </p>
          </div>
        </UContainer>
      </section>

      <section class="border-b border-default py-20 sm:py-28">
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-secondary"
            >
              {{ t('landing.persistence.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.persistence.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.persistence.subtitle') }}
            </p>
          </div>

          <div class="space-y-7">
            <p class="text-lg leading-8 text-toned">
              {{ t('landing.persistence.description') }}
            </p>
            <p class="text-xl font-medium">
              {{ t('landing.persistence.definition') }}
            </p>
            <ul class="grid gap-3 sm:grid-cols-2">
              <li
                v-for="item in translateList('landing.persistence.items')"
                :key="item"
                class="flex gap-3 rounded-lg border border-default p-4 text-sm text-muted"
              >
                <UIcon
                  name="i-tabler-database"
                  class="mt-1 size-4 shrink-0 text-secondary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
            <p class="leading-7 text-muted">
              {{ t('landing.persistence.adapterDescription') }}
            </p>
            <p class="font-medium leading-7">
              {{ t('landing.persistence.conclusion') }}
            </p>
            <UButton
              :label="t('landing.persistence.action')"
              :to="persistenceUrl"
              target="_blank"
              color="neutral"
              variant="outline"
              trailing-icon="i-tabler-arrow-up-right"
            />
          </div>
        </UContainer>
      </section>

      <section class="border-b border-default py-20 sm:py-28">
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-secondary"
            >
              {{ t('landing.audiences.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.audiences.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.audiences.subtitle') }}
            </p>
          </div>

          <div class="space-y-3">
            <article
              v-for="item in audiences"
              :key="item"
              class="flex gap-5 rounded-xl border border-default p-5"
            >
              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary"
              >
                <UIcon :name="audienceIcons[item]" class="size-5" />
              </div>
              <div>
                <h3 class="font-semibold">
                  {{ t(`landing.audiences.items.${item}.title`) }}
                </h3>
                <p class="mt-2 leading-7 text-muted">
                  {{ t(`landing.audiences.items.${item}.description`) }}
                </p>
              </div>
            </article>
          </div>
        </UContainer>
      </section>

      <section class="border-b border-default bg-elevated/30 py-20 sm:py-28">
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-secondary"
            >
              {{ t('landing.philosophy.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.philosophy.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.philosophy.subtitle') }}
            </p>
          </div>

          <div class="divide-y divide-default border-y border-default">
            <article v-for="item in philosophy" :key="item" class="py-6">
              <h3 class="text-lg font-semibold">
                {{ t(`landing.philosophy.items.${item}.title`) }}
              </h3>
              <p class="mt-2 leading-7 text-muted">
                {{ t(`landing.philosophy.items.${item}.description`) }}
              </p>
            </article>
          </div>
        </UContainer>
      </section>

      <section class="border-b border-default py-20 sm:py-28">
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {{ t('landing.ambition.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.ambition.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.ambition.subtitle') }}
            </p>
          </div>

          <div>
            <p class="text-lg leading-8 text-toned">
              {{ t('landing.ambition.description') }}
            </p>
            <div class="mt-7 grid gap-3 sm:grid-cols-2">
              <div
                v-for="item in translateList('landing.ambition.items')"
                :key="item"
                class="flex gap-3 rounded-lg border border-default p-4 text-sm text-muted"
              >
                <UIcon
                  name="i-tabler-world"
                  class="mt-1 size-4 shrink-0 text-primary"
                />
                <span>{{ item }}</span>
              </div>
            </div>
            <p class="mt-8 text-lg font-medium leading-8">
              {{ t('landing.ambition.conclusion') }}
            </p>
          </div>
        </UContainer>
      </section>

      <section
        id="status"
        class="scroll-mt-24 border-b border-default py-20 sm:py-28"
      >
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {{ t('landing.status.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.status.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.status.description') }}
            </p>
          </div>

          <div>
            <div class="rounded-xl border border-warning/30 bg-warning/5 p-5">
              <div class="flex gap-3">
                <UIcon
                  name="i-tabler-progress"
                  class="mt-0.5 size-5 shrink-0 text-warning"
                />
                <p class="font-medium">{{ t('landing.status.warning') }}</p>
              </div>
            </div>
            <p class="mb-5 mt-8 font-medium">
              {{ t('landing.status.introduction') }}
            </p>
            <ul class="grid gap-3 sm:grid-cols-2">
              <li
                v-for="item in translateList('landing.status.items')"
                :key="item"
                class="flex gap-3 text-sm leading-6 text-muted"
              >
                <UIcon
                  name="i-tabler-loader-2"
                  class="mt-1 size-4 shrink-0 text-primary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
            <p class="mt-8 leading-7 text-toned">
              {{ t('landing.status.conclusion') }}
            </p>
          </div>
        </UContainer>
      </section>

      <section class="border-b border-default bg-elevated/30 py-20 sm:py-28">
        <UContainer
          class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div class="lg:sticky lg:top-28 lg:self-start">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {{ t('landing.contribution.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t('landing.contribution.title') }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-muted">
              {{ t('landing.contribution.subtitle') }}
            </p>
          </div>

          <div>
            <div class="grid gap-4 sm:grid-cols-2">
              <article
                v-for="item in contributors"
                :key="item"
                class="rounded-xl border border-default bg-default p-6"
              >
                <h3 class="font-semibold">
                  {{ t(`landing.contribution.items.${item}.title`) }}
                </h3>
                <p class="mt-3 leading-7 text-muted">
                  {{ t(`landing.contribution.items.${item}.description`) }}
                </p>
              </article>
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
              <UButton
                :label="t('landing.contribution.actions.discussion')"
                :to="githubDscussionUrl"
                target="_blank"
                trailing-icon="i-tabler-messages"
                variant="soft"
              />
              <UButton
                :label="t('landing.contribution.actions.github')"
                :to="githubUrl"
                target="_blank"
                variant="soft"
                trailing-icon="i-simple-icons-github"
              />
              <!-- <UButton
                :label="t('landing.contribution.actions.documentation')"
                :to="documentationUrl"
                color="neutral"
                variant="ghost"
                trailing-icon="i-tabler-arrow-right"
              /> -->
            </div>
          </div>
        </UContainer>
      </section>

      <section class="py-24 sm:py-36">
        <UContainer>
          <div
            class="rounded-2xl bg-black px-6 py-14 text-white sm:px-12 sm:py-20"
          >
            <div class="max-w-4xl">
              <p
                class="text-sm font-semibold uppercase tracking-widest text-secondary"
              >
                {{ t('landing.closing.eyebrow') }}
              </p>
              <h2
                class="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
              >
                {{ t('landing.closing.title') }}
              </h2>
              <p class="mt-6 text-xl font-medium">
                {{ t('landing.closing.lead') }}
              </p>
              <p class="mt-2 text-lg leading-8 opacity-70">
                {{ t('landing.closing.description') }}
              </p>
              <p class="mt-7 max-w-3xl text-lg leading-8 opacity-80">
                {{ t('landing.closing.conclusion') }}
              </p>
              <p class="mt-5 font-medium text-secondary">
                {{ t('landing.closing.tagline') }}
              </p>
              <div class="mt-9 flex flex-wrap gap-3">
                <UButton
                  :label="t('landing.closing.actions.primary')"
                  :to="githubUrl"
                  target="_blank"
                  size="xl"
                />
                <UButton
                  :label="t('landing.closing.actions.secondary')"
                  :to="githubUrl"
                  target="_blank"
                  size="xl"
                  color="neutral"
                  variant="outline"
                  trailing-icon="i-simple-icons-github"
                />
              </div>
              <p class="mt-10 border-t border-white/10 pt-6 text-sm opacity-60">
                {{ t('landing.closing.notice') }}
              </p>
            </div>
          </div>
        </UContainer>
      </section>
    </main>

    <footer class="border-t border-default py-12">
      <UContainer
        class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p class="text-lg font-semibold">{{ t('landing.footer.brand') }}</p>
          <p class="mt-2 max-w-xl text-sm leading-6 text-muted">
            {{ t('landing.footer.description') }}
          </p>
        </div>
        <p class="text-sm font-medium text-secondary">
          {{ t('landing.footer.tagline') }}
        </p>
      </UContainer>
    </footer>
  </div>
</template>
