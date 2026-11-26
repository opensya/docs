<script lang="ts">
type AccordionEntry = {
  value: string
  label: string
  content?: string
  icon?: string
  disabled?: boolean
}
</script>

<script setup lang="ts" generic="T extends AccordionEntry">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'reka-ui'
import { computed } from 'vue'
import { tv } from '@nuxt/ui/utils/tv'

type AccordionSlots = 'root' | 'item' | 'header' | 'trigger'
  | 'leadingIcon' | 'label' | 'trailingIcon' | 'content' | 'body'

type SlotProps = { item: T; index: number; open: boolean }

const props = withDefaults(defineProps<{
  items: readonly T[]
  orientation?: 'vertical' | 'horizontal'
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  collapsible?: boolean
  disabled?: boolean
  heading?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  trailingIcon?: string
  ui?: Partial<Record<AccordionSlots, string>>
}>(), {
  orientation: 'vertical',
  type: 'single',
  collapsible: true,
  heading: 'h3',
  trailingIcon: 'i-lucide-chevron-down',
})

const model = defineModel<string | string[]>()

defineSlots<{
  leading?(props: SlotProps): unknown
  default?(props: SlotProps): unknown
  trailing?(props: SlotProps): unknown
  body?(props: SlotProps): unknown
}>()

const accordion = tv({
  slots: {
    root: 'w-full',
    item: 'min-w-0',
    header: 'min-w-0',
    trigger: 'flex min-w-0 cursor-pointer items-center gap-2 rounded-sm text-sm font-medium text-highlighted hover:bg-elevated focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50',
    leadingIcon: 'size-5 shrink-0 text-muted',
    label: 'min-w-0 wrap-break-word',
    trailingIcon: 'size-5 shrink-0 text-muted motion-safe:transition-transform',
    content: 'min-w-0',
    body: 'text-sm wrap-break-word text-muted',
  },
  variants: {
    orientation: {
      vertical: {
        root: 'divide-y divide-default',
        trigger: 'group/trigger w-full px-3 py-3 text-start',
        trailingIcon: 'ms-auto group-data-[state=open]/trigger:rotate-180',
        body: 'px-3 pt-1 pb-4',
      },
      horizontal: {
        root: 'flex items-stretch divide-x divide-default overflow-x-auto rounded-md border border-default',
        item: 'flex shrink-0 items-stretch data-[state=open]:grow',
        header: 'flex shrink-0',
        trigger: 'group/trigger flex-col px-3 py-4',
        label: '[writing-mode:vertical-rl]',
        trailingIcon: '-rotate-90 group-data-[state=open]/trigger:rotate-90 rtl:rotate-90 rtl:group-data-[state=open]/trigger:-rotate-90',
        content: 'flex-1',
        body: 'w-[clamp(12rem,45vw,26rem)] px-4 py-4',
      },
    },
  },
})

const styles = computed(() => accordion({ orientation: props.orientation }))
</script>

<template>
  <AccordionRoot
    v-model="model"
    :orientation="orientation"
    :type="type"
    :default-value="defaultValue"
    :collapsible="collapsible"
    :disabled="disabled"
    :class="styles.root({ class: ui?.root })"
    data-slot="root"
  >
    <AccordionItem
      v-for="(item, index) in items"
      :key="item.value"
      v-slot="{ open }"
      :value="item.value"
      :disabled="item.disabled"
      :class="styles.item({ class: ui?.item })"
      data-slot="item"
    >
      <AccordionHeader
        :as="heading"
        :class="styles.header({ class: ui?.header })"
        data-slot="header"
      >
        <AccordionTrigger
          :class="styles.trigger({ class: ui?.trigger })"
          data-slot="trigger"
        >
          <slot name="leading" :item="item" :index="index" :open="open">
            <UIcon
              v-if="item.icon"
              :name="item.icon"
              :class="styles.leadingIcon({ class: ui?.leadingIcon })"
              aria-hidden="true"
              data-slot="leadingIcon"
            />
          </slot>

          <span :class="styles.label({ class: ui?.label })" data-slot="label">
            <slot :item="item" :index="index" :open="open">
              {{ item.label }}
            </slot>
          </span>

          <slot name="trailing" :item="item" :index="index" :open="open">
            <UIcon
              :name="trailingIcon"
              :class="styles.trailingIcon({ class: ui?.trailingIcon })"
              aria-hidden="true"
              data-slot="trailingIcon"
            />
          </slot>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent
        :class="styles.content({ class: ui?.content })"
        data-slot="content"
      >
        <div :class="styles.body({ class: ui?.body })" data-slot="body">
          <slot name="body" :item="item" :index="index" :open="open">
            {{ item.content }}
          </slot>
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
