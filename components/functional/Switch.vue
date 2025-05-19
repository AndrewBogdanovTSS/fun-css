<template>
  <functional-toggle
    v-model="model"
    class="i-flex"
    role="switch"
    :disabled
  >
    <span
      aria-hidden="true"
      class="c-gray-1 text-sm pr-2 flex items-center"
      :class="{ 'c-gray-2': disabled }"
    >
      {{ labelOff }}
    </span>
    <span
      class="duration rounded-full flex w-12 peer-focus-visible:outline-auto"
      :class="[
        model ? 'bg-green-6' : 'bg-gray-6',
        { 'c-gray-7': disabled, '|bg-gray-6': disabled && model },
      ]"
    >
      <span
        class="duration b-gray-2 rounded-full b-solid bg-white h-6 w-6 transform"
        :class="{ 'translate-x-full': model }"
      />
    </span>
    <span
      aria-hidden="true"
      class="c-gray-1 text-sm pl-2 flex items-center"
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
