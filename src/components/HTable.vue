<script setup lang="ts">
defineSlots<{
  default: () => any
}>();
</script>

<template>
  <table class="h-table">
    <slot />
  </table>
</template>

<style>
/* global style is justified as scoped will raise specificity  */
/* Make it easy to override */
:where(.h-table) {
  @apply w-full;
}
:where(.h-table th, .h-table td) {
  @apply border-b border-b-neutral-200;
  @apply h-12 px-4;
}
:where(.h-table th) {
  @apply font-semibold text-start;
}
</style>
