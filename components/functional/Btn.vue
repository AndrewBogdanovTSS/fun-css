<template>
  <button
    type="button"
    class="duration ring-gray-4 c-white rounded ring-offset-2"
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
  one: 'bg-green-6 hover:bg-green-4',
  two: 'bg-orange-6 hover:bg-orange-4',
  three: 'bg-blue-6 hover:bg-blue-4',
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
