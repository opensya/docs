<script lang="ts" setup>
const contacts = [
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: "i-logos-linkedin-icon",
    url: "https://www.linkedin.com/in/domutala",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: "i-logos-whatsapp-icon",
    url: "https://wa.me/+212602715352",
  },
  {
    key: "x",
    label: "X",
    icon: "i-logos-x",
    url: "https://x.com/domutala",
  },

  {
    key: "mail",
    label: "E-mail",
    icon: "i-logos-google-gmail",
    url: "mailto:mamadoutalladia@gmail.com",
  },
];

const root = ref<HTMLElement | null>(null);
const open = ref(false);
let lastPointer = "mouse";

// Souris : ouverture au survol. Tactile : ouverture au toucher.
const onPointerEnter = (e: PointerEvent) => {
  if (e.pointerType === "mouse") open.value = true;
};
const onPointerLeave = (e: PointerEvent) => {
  if (e.pointerType === "mouse") open.value = false;
};
const onPointerDown = (e: PointerEvent) => {
  lastPointer = e.pointerType;
};
const onTriggerClick = () => {
  // Au clavier ou au toucher, le bouton bascule ; à la souris, le survol suffit.
  if (lastPointer !== "mouse") open.value = !open.value;
};

// Clavier : le focus ouvre, la sortie du focus ferme, Échap ferme.
const onFocusOut = (e: FocusEvent) => {
  if (!root.value?.contains(e.relatedTarget as Node | null)) open.value = false;
};

const onDocPointerDown = (e: PointerEvent) => {
  if (!root.value?.contains(e.target as Node)) open.value = false;
};

onMounted(() => document.addEventListener("pointerdown", onDocPointerDown));
onUnmounted(() =>
  document.removeEventListener("pointerdown", onDocPointerDown),
);
</script>

<template>
  <div
    ref="root"
    class="fixed bottom-4 right-4 sm:bottom-10 sm:right-10 z-200"
    @pointerenter="onPointerEnter"
    @pointerleave="onPointerLeave"
    @focusin="open = true"
    @focusout="onFocusOut"
    @keydown.esc="open = false"
  >
    <div
      class="flex items-center rounded-full bg-default ring ring-default shadow-2xl transition-shadow duration-300 h-full"
      :class="{ 'shadow-[0_20px_50px_-12px_rgb(0_0_0/0.35)]': open }"
    >
      <!-- Contacts : le panneau se déplie vers la gauche -->
      <div
        class="grid transition-[grid-template-columns] duration-500 ease-out motion-reduce:transition-none"
        :class="open ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'"
      >
        <div class="min-w-0 overflow-hidden">
          <ul class="flex items-center gap-1 pr-3 pl-5" :inert="!open">
            <li v-for="(contact, i) in contacts" :key="contact.key">
              <a
                :href="contact.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${contact.label} (${$t('project.newTab')})`"
                class="flex size-11 items-center justify-center rounded-full ring-default transition duration-300 ease-out hover:bg-accented/40 hover:text-primary hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary motion-reduce:transition-none"
                :class="
                  open
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-6 scale-75'
                "
                :style="{
                  transitionDelay: open ? `${150 + i * 80}ms` : '0ms',
                }"
              >
                <UIcon :name="contact.icon" class="size-6" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bulle principale -->
      <button
        type="button"
        class="flex items-center gap-3 rounded-full text-left focus-visible:outline-2 focus-visible:outline-primary"
        :aria-expanded="open"
        :aria-label="$t('contactBubble.label')"
        @pointerdown="onPointerDown"
        @click="onTriggerClick"
      >
        <!-- <UIcon
          name="i-lucide-message-circle-check"
          class="size-7 transition-transform duration-500 motion-reduce:transition-none"
          :class="{ 'scale-110 -rotate-6': open }"
          aria-hidden="true"
        /> -->

        <span
          class="max-sm:hidden leading-[1.1] text-right mr-3"
          :class="{ 'ml-7': !open }"
        >
          <span class="block">{{ $t("contactBubble.line1") }}</span>
          <span class="block font-bold font-notch">{{
            $t("contactBubble.line2")
          }}</span>
        </span>

        <div class="relative m-1">
          <img
            src="/images/domutala.jpeg"
            alt=""
            width="64"
            height="64"
            class="w-14 sm:w-16 rounded-full transition-transform duration-500 motion-reduce:transition-none"
            :class="{ 'scale-105': open }"
          />

          <div
            class="flex items-center justify-center bg-info size-8 rounded-full absolute top-1/2 -left-3.5 border border-default"
          >
            <UIcon
              name="i-lucide-message-circle-check"
              class="size-4 text-white"
              :class="{ 'scale-110 -rotate-6': open }"
              aria-hidden="true"
            />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
