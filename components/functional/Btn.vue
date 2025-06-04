<template>
  <button
    type="button"
    class="c-white rounded ring-gray-400 ring-offset-2 duration"
    :class="[classesVariant, classesSize, classesDisabled]"
    :disabled
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const { variant = 'one', size = 'md', disabled = false } = defineProps<{
  variant?: 'one' | 'two' | 'three'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()

const classesVariant = computed(() => ({
  one: 'bg-green-600 hover:bg-green-400',
  two: 'bg-orange-600 hover:bg-orange-400',
  three: 'bg-blue-600 hover:bg-blue-400',
}[variant]))

const classesSize = computed(() => ({
  sm: 'py-2.5 px-5',
  md: 'py-4 px-6',
  lg: 'py-6 px-8',
}[size]))

const classesDisabled = computed(() =>
  disabled
    ? 'pointer-events-none'
    : 'hover:shadow-sm active:shadow-sm focus:ring-2',
)
</script>
