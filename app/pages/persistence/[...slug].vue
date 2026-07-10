<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <AppDocPage :key="route.path" navigation-name="persistence" />
</template>
