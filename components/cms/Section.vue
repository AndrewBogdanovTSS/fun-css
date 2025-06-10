<template>
  <section
    class="grid"
    :style="{
      'grid-template-columns': data?.layout.cols,
      'grid-template-rows': data?.layout.rows,
    }"
  >
    <div
      v-for="({ type, area, payload }, i) in data?.items as any"
      :key="type + i"
      class="flex center"
      :class="{ 'ga-$ga': area.sm, 'md:ga-$ga-md': area.md, 'lg:ga-$ga-lg': area.lg }"
      :style="{ '--ga': area.sm, '--ga-md': area.md, '--ga-lg': area.lg }"
    >
      <component :is="`lazy-cms-${type}`" v-bind="{ ...payload }" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const { id } = defineProps<{ id: string }>()

const { data } = await useFetch(`/api/cms/section/${id}`)
</script>
