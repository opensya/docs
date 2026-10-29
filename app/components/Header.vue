<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const localePath = useLocalePath();

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

const items = computed(() => {
  const items: NavigationMenuItem[] = [
    {
      label: $t("project.title"),
      children: ["authen", "workspace", "onerh"].map((item) => {
        return {
          label: $t(`home.projects.items.${item}.name`),
          // description: $t(`home.projects.items.${item}.description`),
          to: localePath({ name: item }),
        };
      }),
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
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      to: "https://github.com/opensya",
      target: "_blank",
    },
  ];

  return items;
});

const mobileItems = computed(() => [
  ...["authen", "workspace", "onerh"].map((item) => ({
    label: $t(`home.projects.items.${item}.name`),
    to: localePath({ name: item }),
  })),
  { label: $t("vision.title"), to: localePath({ name: "vision" }) },
  { label: $t("leadership.title"), to: localePath({ name: "leadership" }) },
  { label: $t("investors.hero.eyebrow"), to: localePath({ name: "investors" }) },
]);
</script>

<template>
  <header
    class="header flex items-center px-3"
    :class="{
      'header--hidden': isHidden,
    }"
  >
    <div
      class="header-bar flex h-16 w-full items-center gap-6 px-4 sm:px-6 lg:px-8"
      :class="{ 'header-bar--scrolled': scrollY > 50 }"
    >
      <NuxtLink
        :to="localePath('/')"
        class="flex items-end gap-1.5 leading-[1.1] select-none hover:text-primary"
        :aria-label="$t('footer.homeLabel')"
      >
        <AppLogo aria-hidden="true" />

        <span class="font-notch font-semibold leading-[1.1] text-2xl">
          Opensya
        </span>
      </NuxtLink>

      <UNavigationMenu
        :items
        class="w-full justify-end max-md:hidden"
        trailing-icon=""
        content-orientation="vertical"
        variant="link"
      >
        <template #item-trailing> <div></div> </template>
      </UNavigationMenu>

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
          class="ml-auto md:hidden"
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
                  <UIcon name="i-lucide-arrow-right" class="size-4" />
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

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: transform 0.3s var(--ease-out-expo);
  z-index: 1000;
}

.header-bar {
  border-bottom: 1px solid transparent;
  transition:
    background-color 0.3s var(--ease-out-expo),
    border-color 0.3s var(--ease-out-expo);
}

.header-bar--scrolled {
  background-color: var(--ui-bg);
  border-bottom-color: var(--ui-border);
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
