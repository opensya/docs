<script setup lang="ts">
useSeoMeta({
  ogTitle: "Opensya",
  ogDescription:
    "Nous construisons des infrastructures open source pour les entreprises.",
  twitterCard: "summary",
});
definePageMeta({ colorMode: "light" });

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
    key: "epizod",
    url: "https://github.com/domutala/epizod",
  },
];
</script>

<template>
  <main id="top">
    <section>
      <div class="relative overflow-hidden min-h-screen">
        <UContainer
          class="py-16 sm:py-24 lg:py-28 relative min-h-screen flex flex-col justify-center"
        >
          <h1 class="font-notch leading-[1.1] text-[clamp(2rem,6.4vw,3.2rem)]">
            <span class="block relative z-1">
              Nous construisons des infrastructures open source pour les
              entreprises.
            </span>
          </h1>

          <p class="mt-5 text-lg font-light">
            Chez Opensya, nous construisons des infrastructures open source pour
            les entreprises. Des fondations technologiques solides, conçues pour
            répondre aux besoins réels des organisations, accompagner leur
            croissance et leur donner les moyens de bâtir leurs propres
            solutions. Nous croyons que les outils essentiels au fonctionnement
            des entreprises ne devraient pas être des boîtes noires, mais des
            infrastructures que chacun peut comprendre, adapter et faire évoluer
            librement.
          </p>

          <p class="mt-5 text-lg font-light">
            Nous voulons donner aux entreprises la liberté de construire sans
            limites. Des technologies ouvertes, modulaires et durables, qui leur
            permettent de garder le contrôle de leurs outils, de leurs données
            et de leur avenir numérique. Parce que l’innovation ne devrait pas
            dépendre de solutions imposées, nous créons les fondations sur
            lesquelles les entreprises peuvent inventer, connecter et faire
            grandir leurs propres idées. Opensya ne construit pas simplement des
            logiciels : nous construisons ce qui permet aux autres de
            construire.
          </p>
        </UContainer>
      </div>
    </section>

    <section class="py-32 bg-accented/20">
      <UContainer>
        <div class="mb-8">
          <h2 class="text-4xl font-notch">{{ $t("home.projects.title") }}</h2>
          <p class="max-w-lg">
            {{ $t("home.projects.description") }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div
            v-for="item in ['authen', 'workspace', 'tarico']"
            :key="item"
            class="bg-default p-5 md:p-8"
          >
            <h3 class="font-notch text-2xl">
              {{ $t(`home.projects.items.${item}.name`) }}
            </h3>

            <p class="mt-5">
              {{ $t(`home.projects.items.${item}.description`) }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="bg-accented/20">
      <div class="relative bg-pink- overflow-hidden">
        <UContainer class="pb-16 sm:pb-24 lg:pb-28 relative">
          <h2 class="text-4xl font-notch">{{ $t("home.mission.title") }}</h2>

          <p class="mt-5 text-lg font-light max-w-2xl">
            {{ $t("home.mission.description") }}
          </p>
        </UContainer>
      </div>
    </section>

    <!-- Our approach -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("home.approach.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.approach.description") }}
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article
            v-for="item in ['open', 'modular', 'sustainable']"
            :key="item"
            class="border-t border-default pt-5"
          >
            <h3 class="font-notch text-xl">
              {{ $t(`home.approach.items.${item}.title`) }}
            </h3>

            <p class="mt-4 text-muted">
              {{ $t(`home.approach.items.${item}.description`) }}
            </p>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- Developer tools -->
    <section class="py-24 sm:py-32 bg-accented/20">
      <UContainer>
        <div class="max-w-2xl">
          <h2 class="text-4xl font-notch">
            {{ $t("home.tools.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.tools.description") }}
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3">
          <article
            v-for="tool in tools"
            :key="tool.key"
            class="bg-default p-6 md:p-8 flex flex-col"
          >
            <h3 class="font-notch text-2xl">
              {{ $t(`home.tools.items.${tool.key}.name`) }}
            </h3>

            <p class="mt-4 text-muted">
              {{ $t(`home.tools.items.${tool.key}.description`) }}
            </p>

            <div class="mt-auto">
              <a
                :href="tool.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-5 flex items-center gap-1 w-max text-primary"
              >
                {{ $t(`home.tools.items.${tool.key}.action`) }}

                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </a>
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- Open source -->
    <section class="pb-24 sm:pb-32 bg-accented/20">
      <UContainer>
        <div class="max-w-3xl">
          <h2 class="text-4xl font-notch">
            {{ $t("home.openSource.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.openSource.description") }}
          </p>

          <UButton
            to="https://github.com/opensya"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            color="neutral"
            class="mt-8"
          >
            {{ $t("home.openSource.action") }}
            <UIcon name="i-simple-icons-github" class="size-4" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Community -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="max-w-3xl">
          <h2 class="text-4xl font-notch">
            {{ $t("home.community.title") }}
          </h2>

          <p class="mt-5 text-lg font-light">
            {{ $t("home.community.description") }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <UButton to="mailto:contact@opensya.com">
              {{ $t("home.community.actions.contact") }}
              <UIcon name="i-lucide-arrow-up-right" class="size-4" />
            </UButton>

            <UButton
              to="https://github.com/opensya"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="neutral"
            >
              {{ $t("home.community.actions.contribute") }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </main>
</template>
