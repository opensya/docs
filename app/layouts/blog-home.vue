<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui";

const localePath = useLocalePath();
const route = useRoute();
const router = useRouter();

const categories = computed(() => {
  const items: TabsItem[] = [
    {
      value: "all",
      label: $t("blog.categories.all.title"),
      to: localePath({ name: "blog" }),
    },
    {
      value: "news",
      label: $t("blog.categories.news.title"),
      to: localePath({ name: "blog-category-code", params: { code: "news" } }),
    },
    {
      value: "inside",
      label: $t("blog.categories.inside.title"),
      to: localePath({
        name: "blog-category-code",
        params: { code: "inside" },
      }),
    },
    {
      value: "case-studies",
      label: $t("blog.categories.case-studies.title"),
      to: localePath({
        name: "blog-category-code",
        params: { code: "case-studies" },
      }),
    },
    {
      value: "ecosystem",
      label: $t("blog.categories.ecosystem.title"),
      to: localePath({
        name: "blog-category-code",
        params: { code: "ecosystem" },
      }),
    },
  ];

  return items;
});

const active = computed({
  get() {
    return (route.params.code as string) || "all";
  },
  set(tab) {
    router.push(
      localePath(
        tab === "all"
          ? {
              name: "blog",
            }
          : {
              name: "blog-category-code",
              params: { code: tab },
            },
      ),
    );
  },
});
</script>

<template>
  <div class="relative h- flex flex-col justify-center overflow-hidden">
    <UContainer class="relative mt-40 mb-20 flex flex-col items- text-">
      <h1 class="max-w-9xl font-notch text-hero-sm">
        {{
          active == "all"
            ? $t("blog.home.hero.title")
            : $t(`blog.categories.${active}.title`)
        }}
        <!-- {{ $t("home.mission.highlight") }} -->
      </h1>
      <p v-if="active == 'all'" class="max-w-150 mt-5">
        {{ $t("blog.home.hero.description") }}
      </p>
    </UContainer>
  </div>

  <div class="sticky top-0 z-50 bg-default border-b border-border">
    <UContainer class="">
      <UTabs
        v-model="active"
        color="neutral"
        variant="link"
        :content="false"
        :items="categories"
        class="w-full"
      />
    </UContainer>
  </div>

  <slot />
</template>
