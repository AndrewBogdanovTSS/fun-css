<template>
  <div
    class="h-full flex center text-center duration"
    :class="{ 'bg-$bg': color.sm, 'md:bg-$bg-md': color.md, 'lg:bg-$bg-lg': color.lg }"
    :style="{ '--bg': color.sm, '--bg-md': color.md, '--bg-lg': color.lg }"
  >
    <h2 class="m-0 c-white">
      Module 2
    </h2>
  </div>
</template>

<script lang="ts" setup>
import type { Responsive } from '~/types'

defineProps<{
  color: Responsive
}>()
</script>
