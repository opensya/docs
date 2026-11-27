<script lang="ts" setup>
import type { Collections } from "@nuxt/content";

const props = defineProps<{ category?: string }>();

const { locale } = useI18n();
const { data: posts, status } = await useAsyncData(
  "page-blog",
  async () => {
    const collection = ("content_blog_" + locale.value) as keyof Collections;
    const category = props.category;
    const query = queryCollection(collection);
    const posts = await query.order("date", "DESC").all();

    if (!category) return posts;

    return posts.filter(
      (post) =>
        ("category" in post && post.category === category) ||
        ("categories" in post &&
          Array.isArray(post.categories) &&
          post.categories.includes(category)),
    );
  },
  {
    watch: [locale, () => props.category],
  },
);

if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "blogs posts not found",
    fatal: true,
  });
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>

<template>
  <UContainer>
    <div
      class="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-14"
    >
      <template v-if="status === 'pending'">
        <div v-for="i in 6" :key="i" class="flex flex-col gap-2">
          <USkeleton
            class="aspect-video w-full bg-accented dark:bg-surface mb-2 rounded-sm"
          />

          <USkeleton
            class="h-6 rounded-sm mb-2 w-10/12 bg-accented dark:bg-surface"
          />
          <USkeleton
            v-for="i in 4"
            :key="i"
            class="h-2.5 bg-accented dark:bg-surface"
            :style="{ width: `${getRandomInt(60, 100)}%` }"
          />
        </div>
      </template>

      <template v-else-if="posts?.length">
        <article
          v-for="(post, index) in posts"
          :key="index"
          class="relative border-border rounded-3xl overflow-hidden hover:shadow-2xl"
        >
          <NuxtLink
            :to="
              $localePath({
                name: 'blog-slugs',
                params: {
                  slugs: post.path.split('/').filter(Boolean).join('/'),
                },
              })
            "
            class="absolute inset-0"
          ></NuxtLink>

          <div class="relative pointer-events-none">
            <div
              data-slot="header"
              class="relative overflow-hidden aspect-video w-full pointer-events-none rounded-2xl bg-surface mb-3"
            >
              <div
                class="absolute inset-0 rounded-[inherit] border-b border-border -linear-to-t to-30% from-default to-transparent flex items-center justify-center p-6"
              >
                <h2 class="text-2xl text-center line-clamp-4">
                  {{ post.title }}
                </h2>
              </div>

              <NuxtImg
                v-if="post.cover"
                :src="post.cover"
                :placeholder="[30, 20]"
                :alt="post.title + ' Cover'"
                class="relative object-cover object-top w-full h-full transform transition-transform ease-out motion-reduce:transition-none group-hover/blog-post:scale-110"
                width="960"
                height="540"
              />
            </div>

            <div class="px-5 pb-3 pt-2">
              <h2 v-if="post.cover" class="text-2xl">
                {{ post.title }}
              </h2>

              <p class="mt-2 line-clamp-4">
                {{ post.description }}
              </p>
            </div>
          </div>
        </article>
      </template>
    </div>
  </UContainer>
</template>
