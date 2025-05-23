<template>
  <functional-toggle v-model="model" class="i-flex" role="switch" :disabled>
    <span
      aria-hidden="true"
      class="c-gray-1 text-sm pr-2 flex items-center"
      :class="{ 'c-gray-2': disabled }"
    >
      {{ labelOff }}
    </span>
    <span
      class="rounded-full flex w-12 peer-focus-visible:outline-auto 🐌transition-colors"
      :class="[
        model ? 'bg-green-600' : 'bg-gray-600',
        { 'c-gray-7': disabled, '|bg-gray-600': disabled && model },
      ]"
    >
      <span
        class="b-gray-200 rounded-full b-solid bg-white h-6 w-6 transform 🐌duration-500"
        :class="{ 'translate-x-full': model }"
      />
    </span>
    <span
      aria-hidden="true"
      class="c-gray-1 text-sm pl-2 flex items-center"
      :class="{ 'c-gray-200': disabled }"
    >
      {{ labelOn }}
    </span>
  </functional-toggle>
</template>

<script lang="ts" setup>
defineProps<{
  disabled?: boolean
  labelOff?: string
  labelOn?: string
}>()

const model = defineModel<boolean | string[]>()
</script>
