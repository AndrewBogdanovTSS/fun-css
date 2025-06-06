<template>
  <p
    :class="{ 'c-$c': color?.sm, 'md:c-$c-md': color?.md, 'lg:c-$c-lg': color?.lg }"
    :style="{ '--c': color?.sm, '--c-md': color?.md, '--c-lg': color?.lg }"
  >
    {{ text }}
  </p>
</template>

<script lang="ts" setup>
import type { Responsive } from '~/types'

defineProps<{
  text: string
  color?: Responsive
}>()
</script>
