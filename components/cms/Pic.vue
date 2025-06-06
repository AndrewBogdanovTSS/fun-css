<template>
  <picture>
    <source v-if="src.lg" :srcset="src.lg">
    <source v-if="src.md" :srcset="src.md">
    <img :src="src.sm">
  </picture>
</template>

<script lang="ts" setup>
import type { Responsive } from '~/types'

defineProps<{
  src: Responsive
}>()
</script>
