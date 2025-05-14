<template>
  <label
    :id
    :class="[$props.class, { 'cursor-pointer': ($attrs.disabled !== '' && !$attrs.disabled) }]"
  >
    <input
      v-model="model"
      class="peer sr-only"
      type="checkbox"
      :value
      v-bind="$attrs"
      @change="$emit('change', ($event.target as HTMLInputElement)?.checked)"
    >
    <slot />
  </label>
</template>

<script lang="ts" setup>
defineOptions({ inheritAttrs: false })

defineProps<{
  value?: string
  id?: string
  class?: string
  dataTestId?: string
}>()

defineEmits<{ change: [value: boolean] }>()

const model = defineModel<boolean | string[]>()
</script>
