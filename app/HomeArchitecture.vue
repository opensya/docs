<template>
  <section
    id="architecture"
    data-slot="architecture"
    aria-labelledby="architecture-title"
    class="scroll-mt-24 border-y border-border bg-surface-muted py-16 sm:py-24"
  >
    <UContainer>
      <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div data-slot="content" class="max-w-2xl space-y-4">
          <h2 id="architecture-title" class="font-notch-title text-h2 text-fg">
            {{ $t("home_2.architecture.title") }}
          </h2>

          <p class="text-pretty text-body text-ink-600 dark:text-fg-muted">
            {{ $t("home_2.architecture.description") }}
          </p>
        </div>

        <div
          data-slot="example"
          class="rounded-xl border border-border bg-surface p-6 shadow-xs sm:p-8"
        >
          <p
            class="border-s-2 border-brand-500 ps-4 text-pretty text-lg leading-relaxed text-fg sm:ps-5"
          >
            {{ $t("home_2.architecture.example") }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
