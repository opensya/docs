<script lang="ts" setup>
const localePath = useLocalePath();
const { t } = useI18n();

const year = new Date().getFullYear();

const projects = ["authen", "workspace", "tarico"];

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 336.000000 500.000000"
              preserveAspectRatio="xMidYMid meet"
              class="h-7 fill-current"
              aria-hidden="true"
            >
              <g
                transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M1011 4462 c-853 -1771 -943 -1965 -965 -2059 -68 -300 66 -628 323
-788 37 -23 500 -245 699 -335 l62 -29 59 122 c32 67 164 343 293 612 485
1011 1008 2111 1008 2120 0 2 -120 86 -267 186 -148 100 -424 290 -615 421
-190 131 -350 238 -355 238 -4 0 -114 -219 -242 -488z"
                />
                <path
                  d="M2189 3031 c-40 -75 -389 -767 -776 -1538 l-705 -1403 32 0 c28 0
824 102 1535 196 110 14 205 31 212 38 13 12 641 1260 746 1481 81 171 103
265 94 400 -8 120 -28 191 -83 303 -54 111 -142 210 -242 274 -37 23 -219 119
-405 213 l-337 172 -71 -136z"
                />
              </g>
            </svg>

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
                  class="hover:text-primary"
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
                  class="inline-flex items-center gap-1 hover:text-primary"
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
                  :to="localePath('/leadership')"
                  class="hover:text-primary"
                >
                  {{ $t("footer.leadership") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/investors')"
                  class="hover:text-primary"
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
                  class="hover:text-primary flex items-center gap-2"
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
                  class="inline-flex items-center gap-2 hover:text-primary"
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
