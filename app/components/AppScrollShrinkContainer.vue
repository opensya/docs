<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  scrollDistance?: number
}>(), {
  scrollDistance: 320,
})

const scrollY = ref(0)
let frameId: number | undefined

const progress = computed(() => {
  const distance = Number.isFinite(props.scrollDistance)
    ? Math.max(1, props.scrollDistance)
    : 320

  return Math.min(1, scrollY.value / distance)
})

function updateScrollPosition() {
  frameId = undefined
  scrollY.value = Math.max(0, window.scrollY)
}

function onScroll() {
  frameId ??= window.requestAnimationFrame(updateScrollPosition)
}

onMounted(() => {
  updateScrollPosition()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)

  if (frameId !== undefined) {
    window.cancelAnimationFrame(frameId)
  }
})
</script>

<template>
  <div
    data-slot="container"
    class="scroll-shrink-container"
    :style="{ '--scroll-shrink-progress': progress }"
  >
    <slot />
  </div>
</template>

<style scoped>
.scroll-shrink-container {
  box-sizing: border-box;
  margin-inline: auto;
  width: calc(
    100% - max(0px, 100% - var(--ui-container, 100%)) * var(--scroll-shrink-progress)
  );
}
</style>
