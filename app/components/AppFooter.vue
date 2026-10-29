<script lang="ts" setup>
const localePath = useLocalePath();
const { t } = useI18n();

const year = new Date().getFullYear();

const projects = ["authen", "workspace", "onerh"];

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

const { locales, setLocale, localeProperties } = useI18n();

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

          <p class="mt-6 font-notch text-2xl leading-snug">
            {{ $t("footer.mission") }}
          </p>

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
              <li v-for="item in projects" :key="item">
                <NuxtLink
                  :to="localePath(`/${item}`)"
                  class="transition-colors hover:text-primary"
                >
                  {{ $t(`home.projects.items.${item}.name`) }}
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
                  {{ $t(`home.tools.items.${tool.key}.name`) }}
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
        class="mt-16 flex flex-col gap-4 border-t border-default pt-6 text-sm text-muted sm:mt-20 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} Opensya. {{ $t("footer.rights") }}</p>

        <UDropdownMenu
          :items="
            locales.map((locale) => ({
              value: locale.code,
              label: locale.name,
              onSelect() {
                setLocale(locale.code);
              },
            }))
          "
          :content="{
            align: 'start',
            side: 'bottom',
            sideOffset: 8,
          }"
          :ui="{
            content: 'w-48',
          }"
        >
          <UButton
            :label="localeProperties.name"
            icon="i-tabler-language"
            color="neutral"
            variant="ghost"
            size="lg"
            class="rounded-none border-default"
          />
        </UDropdownMenu>

        <!-- <a
          href="#top"
          class="inline-flex items-center gap-1 w-max hover:text-default"
        >
          {{ $t("footer.backToTop") }}
          <UIcon name="i-lucide-arrow-up" class="size-4" aria-hidden="true" />
        </a> -->
      </div>
    </UContainer>
  </footer>
</template>
