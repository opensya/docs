<script lang="ts" setup>
import type { NavigationMenuChildItem } from "@nuxt/ui";

const localePath = useLocalePath();
const { t } = useI18n();

const year = new Date().getFullYear();

const projects = computed(() => {
  const projects: NavigationMenuChildItem[] = [
    {
      key: "persistence",
      to: "https://persistence.opensya.com/",
      target: "_blank",
      label: $t(`home.projects.items.persistence.name`),
    },
    {
      key: "authen",
      to: localePath({ name: "authen" }),
      target: "_self",
      label: $t(`home.projects.items.authen.name`),
    },
  ];

  return projects;
});

const tools = computed(() => {
  return [
    {
      key: "runable",
      url: "https://runablejs.com",
    },
    {
      key: "epizod",
      url: "https://github.com/domutala/epizod",
    },
    {
      key: "syt",
      url: "https://github.com/domutala/syt",
    },
    {
      key: "vContent",
      url: "https://github.com/domutala/v-content",
    },
  ].map((tool) => {
    return {
      ...tool,
      value: tool.key,
      label: $t(`home.developerTools.items.${tool.key}.name`),
    };
  });
});

const email = computed(() => t("project.contactHref").replace("mailto:", ""));
</script>

<template>
  <footer class="border-t border-default">
    <UContainer class="pt-20 pb-10 sm:pt-28">
      <!-- Marque + mission -->
      <div class="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-20">
        <div class="max-w-sm">
          <NuxtLink
            :to="localePath('/')"
            class="flex items-end gap-1.5 w-max select-none"
            :aria-label="$t('footer.homeLabel')"
          >
            <AppLogo class="h-7" aria-hidden="true" />

            <span class="font-notch font-semibold leading-[1.1] text-2xl">
              Opensya
            </span>
          </NuxtLink>

          <!-- <p class="mt-6 font-notch text-2xl leading-snug">
            {{ $t("footer.mission") }}
          </p> -->

          <!-- <p class="mt-5 text-sm text-muted">
            {{ $t("footer.status") }}
          </p> -->
        </div>

        <!-- Colonnes de navigation -->
        <nav
          :aria-label="$t('footer.navLabel')"
          class="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4"
        >
          <!-- Projets -->
          <div>
            <h2 class="text-sm text-muted">{{ $t("footer.projects") }}</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="project in projects" :key="project.key">
                <NuxtLink
                  :to="project.to"
                  class="inline-flex items-center gap-1 transition-colors hover:text-primary"
                >
                  {{ project.label }}

                  <UIcon
                    v-if="project.target === '_blank'"
                    name="i-lucide-arrow-up-right"
                    class="size-3.5 text-muted"
                    aria-hidden="true"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Outils -->
          <div>
            <h2 class="text-sm text-muted">{{ $t("footer.tools") }}</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="tool in tools" :key="tool.key">
                <a
                  :href="tool.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 transition-colors hover:text-primary"
                >
                  {{ tool.label }}
                  <span class="sr-only">({{ $t("project.newTab") }})</span>
                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="size-3.5 text-muted"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>

          <!-- Opensya -->
          <div>
            <h2 class="text-sm text-muted">{{ $t("footer.company") }}</h2>
            <ul class="mt-5 space-y-3">
              <li>
                <NuxtLink
                  :to="localePath({ name: 'vision' })"
                  class="transition-colors hover:text-primary"
                >
                  {{ $t("footer.vision") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/leadership')"
                  class="transition-colors hover:text-primary"
                >
                  {{ $t("footer.leadership") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/investors')"
                  class="transition-colors hover:text-primary"
                >
                  {{ $t("footer.investors") }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h2 class="text-sm text-muted">{{ $t("footer.contact") }}</h2>
            <ul class="mt-5 space-y-3">
              <li>
                <a
                  :href="$t('project.contactHref')"
                  class="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <UIcon
                    name="i-lucide-mail"
                    class="size-4"
                    aria-hidden="true"
                  />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opensya"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <UIcon
                    name="i-simple-icons-github"
                    class="size-4"
                    aria-hidden="true"
                  />
                  GitHub
                  <span class="sr-only">({{ $t("project.newTab") }})</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- Barre du bas -->
      <div
        class="mt-16 flex flex-col gap-4 border-t border-default pt-6 text-sm text-muted sm:mt-20 sm:flex-row sm:items-center sm:justify-"
      >
        <p>© {{ year }} Opensya. {{ $t("footer.rights") }}</p>

        <div class="mx-auto"></div>
        <UColorModeButton v-if="!$colorMode.forced" />
        <AppLanguage />
      </div>
    </UContainer>
  </footer>
</template>
