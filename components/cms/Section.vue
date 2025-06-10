<template>
  <section
    class="grid"
    :class="{
      'cols-$cols': layout?.cols.sm,
      'md:cols-$cols-md': layout?.cols.md,
      'lg:cols-$cols-lg': layout?.cols.lg,
      'rows-$rows': layout?.rows.sm,
      'md:rows-$rows-md': layout?.rows.md,
      'lg:rows-$rows-lg': layout?.rows.lg,
    }"
    :style="{
      '--cols': layout?.cols.sm,
      '--cols-md': layout?.cols.md,
      '--cols-lg': layout?.cols.lg,
      '--rows': layout?.rows.sm,
      '--rows-md': layout?.rows.md,
      '--rows-lg': layout?.rows.lg,
    }"
  >
    <div
      v-for="({ type, area, payload }, i) in items"
      :key="type + i"
      :class="{ 'ga-$ga': area.sm, 'md:ga-$ga-md': area.md, 'lg:ga-$ga-lg': area.lg }"
      :style="{ '--ga': area.sm, '--ga-md': area.md, '--ga-lg': area.lg }"
    >
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
