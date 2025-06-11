<template>
  <section v-style="layout" class="grid">
    <div v-for="({ type, area, payload }, i) in items" :key="type + i" v-style:ga="area">
      <component :is="`lazy-cms-${type}`" v-bind="{ ...payload }" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Section } from '~/types'

const { id } = defineProps<{ id: string }>()

const { data } = await useFetch<Section>(`/api/cms/section/${id}`)
const { layout, items } = data?.value || {}
</script>
