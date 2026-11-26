<script lang="ts" setup>
const { locales, setLocale, localeProperties } = useI18n();
</script>

<template>
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
    <slot :label="localeProperties.name">
      <UButton
        :label="localeProperties.name"
        icon="i-lucide-globe"
        color="neutral"
        variant="soft"
        size="lg"
        class="rounded-4xl border-default"
      />
    </slot>
  </UDropdownMenu>
</template>
