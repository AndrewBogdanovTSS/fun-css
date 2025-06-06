<template>
  <picture>
    <source v-if="src.lg" :srcset="src.lg" :width="width.lg" :height="height.lg">
    <source v-if="src.md" :srcset="src.md" :width="width.md" :height="height.md">
    <img :src="src.sm" :width="width.sm" :height="height.sm" :alt>
  </picture>
</template>

<script lang="ts" setup>
import type { Responsive } from '~/types'

defineProps<{
  alt: string
  height: Responsive
  src: Responsive
  width: Responsive
}>()
</script>
