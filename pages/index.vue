<template>
  <div
    class="h-screen f-col center duration"
    :class="active ? 'bg-brand-1' : 'bg-brand-2'"
  >
    <div>
      <functional-switch v-model="active" />
      <template v-if="active">
        <h2>Functional buttons</h2>
        <div class="flex gap-4">
          <functional-btn variant="one">
            Variant One
          </functional-btn>
          <functional-btn variant="two">
            Variant Two
          </functional-btn>
          <functional-btn variant="three">
            Variant Three
          </functional-btn>
        </div>
      </template>
      <template v-else>
        <h2>Traditional buttons</h2>
        <div class="flex gap-4">
          <traditional-btn variant="one">
            Variant One
          </traditional-btn>
          <traditional-btn variant="two">
            Variant Two
          </traditional-btn>
          <traditional-btn variant="three">
            Variant Three
          </traditional-btn>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const active = ref(false)
</script>
