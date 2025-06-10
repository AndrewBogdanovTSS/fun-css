<template>
  <div
    class="h-full w-full"
    :class="{ 'bg-$bg': color?.sm, 'md:bg-$bg-md': color?.md, 'lg:bg-$bg-lg': color?.lg }"
    :style="{ '--bg': color?.sm, '--bg-md': color?.md, '--bg-lg': color?.lg }"
  />
</template>

<script lang="ts" setup>
import type { Responsive } from '~/types'

defineProps<{
  color: Responsive
}>()
</script>
