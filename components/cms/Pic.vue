<template>
  <picture class="inline-flex shrink-0 v-mid">
    <source v-if="src.lg" :srcset="src.lg" :width="width?.lg" :height="height?.lg" :media="`(min-width:${bps['lg']}px)`">
    <source v-if="src.md" :srcset="src.md" :width="width?.md" :height="height?.md" :media="`(min-width:${bps['md']}px)`">
    <img
      class="w-full"
      :src="src.sm"
      :width="width?.sm"
      :height="height?.sm"
      :alt
      fetchpriority="high"
    >
  </picture>
</template>

<script lang="ts" setup>
import type { Responsive } from '~/types'
import bps from '~/design-system/breakpoints.json'

defineProps<{
  alt?: string
  height?: Responsive
  src: Responsive
  width?: Responsive
}>()
</script>
