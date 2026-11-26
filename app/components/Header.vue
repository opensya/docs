<script lang="ts" setup>
import type { NavigationMenuChildItem, NavigationMenuItem } from "@nuxt/ui";

const localePath = useLocalePath();
const route = useRoute();

const scrollY = ref(0);
const isHidden = ref(false);
const isMenuOpen = ref(false);

let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }

  scrollY.value = currentScrollY;
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const projects = computed(() => {
  const projects: NavigationMenuChildItem[] = [
    {
      key: "persistence",
      to: "https://persistence.opensya.com/",
      target: "_blank",
      label: $t(`home.projects.items.persistence.name`),
      description: $t(`home.projects.items.persistence.description`),
    },
    {
      key: "authen",
      to: localePath({ name: "authen" }),
      target: "_self",
      label: $t(`home.projects.items.authen.name`),
      description: $t(`home.projects.items.authen.description`),
    },
  ];

  return projects;
});

const items = computed(() => {
  const items: NavigationMenuItem[] = [
    {
      label: $t("project.title"),
      slot: "projects" as const,
      children: projects.value,
    },

    {
      label: $t("vision.title"),
      to: localePath({ name: "vision" }),
    },

    {
      label: $t("leadership.title"),
      to: localePath({ name: "leadership" }),
    },

    {
      label: $t("investors.hero.eyebrow"),
      to: localePath({ name: "investors" }),
    },
    // {
    //   label: "GitHub",
    //   icon: "i-simple-icons-github",
    //   to: "https://github.com/opensya",
    //   target: "_blank",
    // },
  ];

  return items;
});

const tools = computed(() => {
  return [
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

const mobileItems = computed(() => [
  ...projects.value,
  { label: $t("vision.title"), to: localePath({ name: "vision" }) },
  { label: $t("leadership.title"), to: localePath({ name: "leadership" }) },
  {
    label: $t("investors.hero.eyebrow"),
    to: localePath({ name: "investors" }),
  },
]);

const isHome = computed(() => {
  return route.path === localePath({ name: "index" });
});
</script>

<template>
  <header
    class="header flex items-center py-0 border-b border-transparent"
    :class="{
      'header--hidden': isHidden,
      'header-bar--scrolled border-border!': scrollY > 50,
      'is-home': isHome,
    }"
  >
    <div
      class="header-bar flex h-full w-full max-w-(--ui-container) mx-auto items-center gap-6 px-4 sm:px-6 lg:px-8"
    >
      <NuxtLink
        :to="localePath('/')"
        class="flex items-end gap-1.5 leading-[1.1] select-none hover:text-primary"
        :aria-label="$t('footer.homeLabel')"
      >
        <AppLogo aria-hidden="true" class="text- h-8" />

        <span class="font-notch font-semibold leading-[1.1] text-2xl">
          Opensya
        </span>
      </NuxtLink>

      <UNavigationMenu
        :items
        arrow
        class="w-full ml-10 justify-start max-lg:hidden"
        trailing-icon=""
        content-orientation="vertical"
        variant="link"
        :ui="{
          viewport: 'sm:w-(--reka-navigation-menu-viewport-width)',
          content: 'sm:w-auto',
          childList: 'sm:w-96',
          childLinkDescription: 'text-balance line-clamp-2',
        }"
      >
        <template #item-trailing> <div></div> </template>

        <template #projects-content="{ item }">
          <div class="grid gap-5 p-6 lg:w-200 grid-cols-12">
            <div class="col-span-6">
              <ul class="list-none">
                <li
                  v-for="(child, i) in item.children"
                  :key="i"
                  class="not-first:mt-3"
                >
                  <NuxtLink :to="child.to" :target="child.target" class="group">
                    <div class="flex items-center gap-2">
                      <p
                        class="font-medium text-highlighted group-hover:text-primary font-notch"
                      >
                        {{ child.label }}
                      </p>

                      <UIcon
                        v-if="child.target === '_blank'"
                        name="i-lucide-arrow-up-right"
                        class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                      />
                    </div>

                    <p class="text-muted text-sm line-clamp-2">
                      {{ child.description }}
                    </p>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="col-span-4">
              <h2 class="text-xl font-notch">
                {{ $t("home.developerTools.subtitle") }}
              </h2>
              <div class="flex flex-col gap-2 mt-3">
                <a
                  v-for="{ key, label, url } in tools"
                  :key="key"
                  :href="url"
                  class="arrow-link flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ label }}

                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </template>
      </UNavigationMenu>

      <div
        class="ml-auto w-full max-md:hidden flex items-center justify-end gap-2"
      >
        <!-- <UButton
          href="https://github.com/opensya"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          size="xl"
        >
          GitHub
        </UButton> -->

        <AppLanguage v-slot="{ label }">
          <UButton
            :label
            icon="i-lucide-globe"
            color="neutral"
            variant="ghost"
            size="lg"
            class="rounded-4xl border-default"
          />
        </AppLanguage>

        <UButton
          to="mailto:mamadoutalladia@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          variant="solid"
          size="xl"
          class="rounded-4xl text-nowrap"
        >
          Contactez-nous
        </UButton>
      </div>

      <UDrawer
        v-model:open="isMenuOpen"
        :ui="{
          content: 'h-auto max-h-3/4',
          body: 'p-0',
        }"
      >
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="ghost"
          class="ml-auto lg:hidden"
          :aria-label="$t('header.menu')"
          :aria-expanded="isMenuOpen"
        />

        <template #body>
          <nav :aria-label="$t('header.menu')">
            <ul class="divide-y divide-default">
              <li v-for="item in mobileItems" :key="item.to">
                <NuxtLink
                  :to="item.to"
                  class="flex items-center justify-between px-6 py-4 font-notch text-xl"
                  active-class="text-primary"
                  @click="isMenuOpen = false"
                >
                  {{ item.label }}
                  <UIcon
                    :name="
                      item.target === '_blank'
                        ? 'i-lucide-arrow-up-right'
                        : 'i-lucide-arrow-right'
                    "
                    class="size-4"
                  />
                </NuxtLink>
              </li>
              <li>
                <a
                  href="https://github.com/opensya"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-between px-6 py-4 font-notch text-xl"
                >
                  GitHub
                  <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                </a>
              </li>
            </ul>
          </nav>
        </template>
      </UDrawer>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 64px;
  transition: transform 0.3s var(--ease-out-expo);
  z-index: 1000;

  &.is-homed {
    top: 40px;
  }
}

.header-bar {
  border-bottom: 1px solid transparent;
  transition:
    background-color 0.3s var(--ease-out-expo),
    border-color 0.3s var(--ease-out-expo);
}

.header-bar--scrolled {
  top: 0 !important;
  background-color: var(--color-bg);
  /* border-bottom-color: var(--ui-border); */
}

/* Masque le header quand on scrolle vers le bas */
.header--hidden {
  transform: translateY(-100%);
}

@media (prefers-reduced-motion: reduce) {
  .header,
  .header-bar {
    transition: none;
  }
}
</style>
