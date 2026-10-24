<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";

const emit = defineEmits<{ sent: [] }>();

const { lang, t } = useLang();
const {
  public: { contactEmail },
} = useRuntimeConfig();

const copy = {
  fr: {
    name: "Nom",
    email: "E-mail",
    plan: "Forfait envisagé",
    planUnsure: "Je ne sais pas encore",
    tools: "Outils concernés",
    toolsPlaceholder: "Ex. Google Sheets, HubSpot, API Stripe",
    message: "La tâche qui vous fait perdre du temps",
    messagePlaceholder:
      "Ce qui se passe aujourd’hui, et le résultat que vous voulez obtenir.",
    submit: "Envoyer ma demande",
    sending: "Envoi…",
    required: "Champ requis",
    invalidEmail: "Adresse e-mail invalide",
    tooShort: "Quelques mots de plus, s’il vous plaît (20 caractères min.)",
    successTitle: "Demande envoyée",
    successText:
      "Je reviens vers vous avec le périmètre et le forfait adapté avant tout engagement.",
    again: "Envoyer une autre demande",
    errorTitle: "L’envoi a échoué",
    errorText: "Réessayez, ou écrivez directement à",
  },
  en: {
    name: "Name",
    email: "Email",
    plan: "Package in mind",
    planUnsure: "Not sure yet",
    tools: "Tools involved",
    toolsPlaceholder: "e.g. Google Sheets, HubSpot, Stripe API",
    message: "The task that is eating your time",
    messagePlaceholder: "What happens today, and the outcome you want.",
    submit: "Send my request",
    sending: "Sending…",
    required: "Required",
    invalidEmail: "Invalid email address",
    tooShort: "A few more words, please (20 characters min.)",
    successTitle: "Request sent",
    successText:
      "I’ll reply with the scope and the right package before any commitment.",
    again: "Send another request",
    errorTitle: "Sending failed",
    errorText: "Try again, or write directly to",
  },
} as const;

const field = { base: "rounded-none" };
const toast = useToast();
const c = computed(() => copy[lang.value]);

const initial = () => ({
  name: "",
  email: "",
  plan: "unsure",
  tools: "",
  message: "",
  website: "",
});

const state = reactive(initial());
const status = ref<"idle" | "sending" | "sent" | "error">("idle");

const planItems = computed(() => [
  { label: c.value.planUnsure, value: "unsure" },
  ...t.value.plans.items.map((p) => ({
    label: `${p.name} — ${p.price}`,
    value: p.id,
  })),
]);

function validate(s: typeof state): FormError[] {
  const errors: FormError[] = [];
  if (!s.name.trim()) errors.push({ name: "name", message: c.value.required });
  if (!s.email.trim())
    errors.push({ name: "email", message: c.value.required });
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email))
    errors.push({ name: "email", message: c.value.invalidEmail });
  if (!s.tools.trim())
    errors.push({ name: "tools", message: c.value.required });
  if (s.message.trim().length < 20)
    errors.push({ name: "message", message: c.value.tooShort });
  return errors;
}

async function onSubmit(event: FormSubmitEvent<typeof state>) {
  if (status.value === "sending") return;
  status.value = "sending";
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: { ...event.data, lang: lang.value },
    });
    status.value = "sent";
    emit("sent");

    toast.add({
      id: "copy",
      title: c.value.successTitle,
      description: c.value.successText,
      icon: "i-lucide-circle-check",
      duration: 0,
    });
  } catch {
    status.value = "error";
  }
}

function reset() {
  Object.assign(state, initial());
  status.value = "idle";
}
</script>

<template>
  <div
    v-if="status === 'sent'"
    class="border border-default bg-elevated p-8"
    role="status"
  >
    <UIcon name="i-lucide-check" class="size-8 text-primary" />
    <h3 class="font-notch mt-4 text-2xl">{{ c.successTitle }}</h3>
    <p class="mt-2 text-muted">{{ c.successText }}</p>
    <UButton
      color="neutral"
      variant="outline"
      class="mt-6 rounded-none"
      @click="reset"
    >
      {{ c.again }}
    </UButton>
  </div>

  <UForm
    v-else
    :state="state"
    :validate="validate"
    class="grid gap-5"
    @submit="onSubmit"
  >
    <div class="grid gap-5 sm:grid-cols-2">
      <UFormField name="name" :label="c.name" required>
        <UInput
          v-model="state.name"
          autocomplete="name"
          size="lg"
          class="w-full"
          :ui="field"
        />
      </UFormField>
      <UFormField name="email" :label="c.email" required>
        <UInput
          v-model="state.email"
          type="email"
          autocomplete="email"
          size="lg"
          class="w-full"
          :ui="field"
        />
      </UFormField>
    </div>

    <div class="grid gap-5 sm:grid-cols-2">
      <UFormField name="plan" :label="c.plan">
        <USelect
          v-model="state.plan"
          :items="planItems"
          size="lg"
          class="w-full"
          :ui="field"
        />
      </UFormField>
      <UFormField name="tools" :label="c.tools" required>
        <UInput
          v-model="state.tools"
          :placeholder="c.toolsPlaceholder"
          size="lg"
          class="w-full"
          :ui="field"
        />
      </UFormField>
    </div>

    <UFormField name="message" :label="c.message" required>
      <UTextarea
        v-model="state.message"
        :rows="6"
        :placeholder="c.messagePlaceholder"
        size="lg"
        class="w-full"
        :ui="field"
      />
    </UFormField>

    <input
      v-model="state.website"
      type="text"
      name="website"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
      class="absolute -left-[9999px] size-0 opacity-0"
    />

    <UAlert
      v-if="status === 'error'"
      color="error"
      variant="subtle"
      icon="i-lucide-triangle-alert"
      class="rounded-none"
      :title="c.errorTitle"
    >
      <template #description>
        {{ c.errorText }}
        <a :href="`mailto:${contactEmail}`" class="underline">
          {{ contactEmail }}
        </a>
      </template>
    </UAlert>

    <div>
      <UButton
        type="submit"
        size="lg"
        class="rounded-none"
        trailing-icon="i-lucide-arrow-right"
        :loading="status === 'sending'"
      >
        {{ status === "sending" ? c.sending : c.submit }}
      </UButton>
    </div>
  </UForm>
</template>
