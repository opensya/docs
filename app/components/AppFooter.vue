<script setup lang="ts">
const { lang, t } = useLang();
const {
  public: { contactEmail },
} = useRuntimeConfig();

const copy = {
  fr: {
    nav: "Navigation",
    about: "À propos",
    contact: "Contact",
    follow: "Suivre",
    privacy: "Confidentialité",
    rights: "Tous droits réservés",
    top: "Haut de page",
  },
  en: {
    nav: "Navigation",
    about: "About",
    contact: "Contact",
    follow: "Follow",
    privacy: "Privacy",
    rights: "All rights reserved",
    top: "Back to top",
  },
} as const;

const c = computed(() => copy[lang.value]);

const links = computed(() => [
  { label: t.value.nav.promise, to: "#promesse" },
  { label: t.value.nav.plans, to: "#forfaits" },
  { label: t.value.nav.rules, to: "#delai" },
  { label: t.value.nav.examples, to: "#exemples" },
  { label: c.value.about, to: "#about" },
]);

const socials = [
  {
    label: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    to: "https://www.linkedin.com/in/domutala",
  },
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    to: "https://github.com/domutala",
  },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-elevated text-default m-5">
    <UContainer class="py-16 sm:py-24">
      <div class="grid gap-12 md:grid-cols-12">
        <div class="md:col-span-5">
          <a href="#top" class="leading-[1.1] flex gap-2 select-none">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 381.000000 356.000000"
              preserveAspectRatio="xMidYMid meet"
              class="size-6 fill-primary"
            >
              <g
                transform="translate(0.000000,356.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M1459 3415 c-344 -54 -641 -206 -883 -452 -411 -419 -559 -1054 -379
-1627 53 -171 175 -394 290 -532 251 -301 573 -490 956 -561 129 -23 399 -23
527 1 588 110 1051 538 1358 1256 191 447 320 1088 334 1665 l3 120 -446 3
-446 2 -7 -142 c-38 -789 -221 -1385 -526 -1711 -208 -223 -471 -304 -724
-223 -256 81 -435 334 -436 614 0 183 77 373 196 483 49 45 151 106 217 129
95 34 267 39 378 11 101 -26 210 -76 293 -135 63 -45 179 -160 210 -208 10
-16 24 -28 31 -28 14 0 75 190 110 345 36 158 65 378 72 543 7 165 11 157
-110 242 -238 169 -679 257 -1018 205z"
                />
                <path
                  d="M3635 1888 c-50 -205 -166 -510 -267 -698 -147 -277 -361 -537 -570
-694 l-78 -58 0 -56 c0 -32 4 -63 8 -70 7 -10 108 -12 473 -10 l464 3 3 819
c1 463 -2 824 -7 829 -5 5 -16 -23 -26 -65z"
                />
              </g>
            </svg>

            <div>
              <div class="font-notch font-bold leading-none text-xl sm:text-xl">
                Automation<span class="mark ml-1">Sprint</span>
              </div>
              <div class="text-sm leading-none text-muted">by OpenSya</div>
            </div>
          </a>
        </div>

        <div class="md:col-span-3 hidden">
          <p
            class="mb-4 font-mono text-xs uppercase tracking-widest text-muted"
          >
            {{ c.contact }}
          </p>
          <a
            :href="`mailto:${contactEmail}`"
            class="break-all hover:text-primary hover:underline"
          >
            {{ contactEmail }}
          </a>
          <div class="mt-5 flex items-center gap-4">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.to"
              :aria-label="s.label"
              target="_blank"
              rel="noopener"
              class="hover:text-primary"
            >
              <UIcon :name="s.icon" class="size-6" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col gap-4 border-t border-default pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} OpenSya</p>
        <div class="flex items-center gap-6">
          <a href="/privacy-policy" class="hover:text-default hover:underline">
            {{ c.privacy }}
          </a>
          <a
            href="#top"
            class="inline-flex items-center gap-1.5 hover:text-default"
          >
            <UIcon name="i-lucide-arrow-up" />
            {{ c.top }}
          </a>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
