<template>
  <functional-toggle
    v-model="model"
    class="i-flex"
    role="switch"
    :disabled
  >
    <span
      aria-hidden="true"
      class="flex items-center pr-2 text-sm c-gray-1"
      :class="{ 'c-gray-2': disabled }"
    >
      {{ labelOff }}
    </span>
    <span
      class="w-12 flex rounded-full duration peer-focus-visible:outline-auto"
      :class="[
        model ? 'bg-green-6' : 'bg-gray-6',
        { 'c-gray-7': disabled, '|bg-gray-6': disabled && model },
      ]"
    >
      <span
        class="h-6 w-6 transform b-gray-2 rounded-full b-solid bg-white duration"
        :class="{ 'translate-x-full': model }"
      />
    </span>
    <span
      aria-hidden="true"
      class="flex items-center pl-2 text-sm c-gray-1"
      :class="{ 'c-gray-2': disabled }"
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
