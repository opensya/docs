<script lang="ts" setup>
import AppHeader from "./components/Header.vue";
</script>

<template>
  <UApp>
    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
    <!-- <ContactBubble /> -->
  </UApp>
</template>
