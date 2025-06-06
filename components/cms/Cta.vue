<template>
  <nuxt-link :to="link">
    {{ text }}
  </nuxt-link>
</template>

<script lang="ts" setup>
defineProps<{
  variant: string
  text: string
  link: string
}>()
</script>
