<template>
  <button
    type="button"
    class="btn"
    :class="['variant-' + variant, 'size-' + size, { disabled }]"
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
</script>

<style>
.btn {
  border: none;
  border-radius: 0.25rem;
  color: white;
  transition: all 0.25s;
  cursor: pointer;
}

.variant-one {
  background-color: #16a34a;
}

.variant-one:hover {
  background-color: #4ade80; /* Equivalent to hover:bg-green-700 */
}

.variant-two {
  background-color: #ea580c; /* Equivalent to bg-secondary-600 */
}

.variant-two:hover {
  background-color: #fb923c; /* Equivalent to hover:bg-secondary-700 */
}

.variant-three {
  background-color: #2563eb; /* Equivalent to bg-accent-600 */
}

.variant-three:hover {
  background-color: #60a5fa; /* Equivalent to hover:bg-accent-700 */
}

.size-sm {
  padding: 0.625rem 1.25rem; /* Equivalent to py-2.5 px-5 */
}

.size-md {
  padding: 1rem 1.5rem; /* Equivalent to py-4 px-6 */
}

.size-lg {
  padding: 1.5rem 2rem; /* Equivalent to py-6 px-8 */
}

.disabled {
  pointer-events: none;
}

.btn:hover:not(.disabled), .btn:active:not(.disabled), .btn:focus:not(.disabled) {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Equivalent to hover:shadow-sm active:shadow-sm */
}

.btn:active:not(.disabled), .btn:focus:not(.disabled) {
  outline: 2px solid rgba(0, 0, 0, 0.2);
  outline-offset: 2px;
}
</style>
