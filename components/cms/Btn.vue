<template>
  <nuxt-link class="inline-flex cursor-pointer rounded bg-black px-4 py-2 c-white duration hover:bg-gray-800" :to>
    {{ text }}
  </nuxt-link>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
  text: string
}>()
</script>
