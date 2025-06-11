<template>
  <div v-style:bg="color" class="h-full flex center text-center duration">
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
