<script setup lang="ts">
import { computed, normalizeClass, onMounted, onUnmounted, ref, watch } from 'vue'
import { omit, mergeClasses } from '@nuxt/ui/utils'
import { tv } from '@nuxt/ui/utils/tv'

defineOptions({ inheritAttrs: false })

const styles = tv({
  slots: {
    text: 'reveal-text m-0 w-full',
  },
  variants: {
    align: {
      left: { text: 'mr-auto' },
      center: { text: 'mx-auto' },
      right: { text: 'ml-auto' },
    },
  },
})

const props = withDefaults(defineProps<{
  text: string
  mutedOpacity?: number
  fontSize?: string
  align?: 'left' | 'center' | 'right'
  maxWidth?: string
  ui?: {
    text?: string
  }
}>(), {
  mutedOpacity: 0.35,
})

const classes = computed(() => styles({ align: props.align }))

type RevealSlotProps = {
  isFullyRevealed: boolean
}

defineSlots<{
  before?: (props: RevealSlotProps) => unknown
  after?: (props: RevealSlotProps) => unknown
}>()

const section = ref<HTMLElement | null>(null)
const panel = ref<HTMLElement | null>(null)
const revealedWords = ref(0)

let frameId: number | undefined
let resizeObserver: ResizeObserver | undefined

const tokens = computed(() => {
  let wordCount = 0

  return (props.text.match(/\s+|\S+/gu) ?? []).map((value) => ({
    value,
    wordNumber: /^\s/u.test(value) ? null : ++wordCount,
  }))
})

const wordCount = computed(() => tokens.value.reduce(
  (count, token) => token.wordNumber ?? count,
  0,
))

const isFullyRevealed = computed(() => revealedWords.value >= wordCount.value)

function updateReveal() {
  frameId = undefined

  const track = section.value
  const stickyPanel = panel.value
  if (!track || !stickyPanel) return

  const trackRect = track.getBoundingClientRect()
  const distance = trackRect.height - stickyPanel.getBoundingClientRect().height

  // Le défilement révèle les mots pendant que le panneau reste à top: 0.
  const progress = distance > 0
    ? Math.min(1, Math.max(0, -trackRect.top / distance))
    : 1

  revealedWords.value = Math.floor(progress * wordCount.value)
}

function scheduleUpdate() {
  if (frameId === undefined) {
    frameId = window.requestAnimationFrame(updateReveal)
  }
}

onMounted(() => {
  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', scheduleUpdate)
  resizeObserver = new ResizeObserver(scheduleUpdate)
  if (section.value) resizeObserver.observe(section.value)
  scheduleUpdate()
})

watch(() => props.text, scheduleUpdate, { flush: 'post' })

onUnmounted(() => {
  window.removeEventListener('scroll', scheduleUpdate)
  window.removeEventListener('resize', scheduleUpdate)
  resizeObserver?.disconnect()

  if (frameId !== undefined) window.cancelAnimationFrame(frameId)
})
</script>

<template>
  <section
    v-show="wordCount > 0"
    ref="section"
    v-bind="omit($attrs, ['class'])"
    data-slot="root"
    :class="mergeClasses('reveal-track', normalizeClass($attrs.class))"
  >
    <div ref="panel" data-slot="panel" class="reveal-panel">
      <div data-slot="content">
        <div v-if="$slots.before" data-slot="before" class="reveal-slot">
          <slot name="before" :isFullyRevealed="isFullyRevealed" />
        </div>
        <p
          data-slot="text"
          :class="classes.text({ class: ui?.text })"
          :data-align="align"
          :style="{
            '--word-opacity': mutedOpacity,
            fontSize,
            textAlign: align,
            maxWidth,
          }"
        >
          <template v-for="(token, index) in tokens" :key="index"><span
            v-if="token.wordNumber !== null"
            data-slot="word"
            class="word"
            :class="{ 'is-revealed': token.wordNumber <= revealedWords }"
          >{{ token.value }}</span><template v-else>{{ token.value }}</template></template>
        </p>
        <div v-if="$slots.after" data-slot="after" class="reveal-slot">
          <slot name="after" :isFullyRevealed="isFullyRevealed" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal-track::after {
  content: '';
  display: block;
  height: 50vh;
  height: 50svh;
}

.reveal-panel {
  position: sticky;
  top: 0;
  display: grid;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
}

.reveal-slot {
  display: contents;
}

.reveal-text {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.word {
  opacity: var(--word-opacity);
}

.word.is-revealed {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-track::after {
    content: none;
  }

  .reveal-panel {
    position: static;
  }

  .word {
    opacity: 1;
  }
}
</style>
