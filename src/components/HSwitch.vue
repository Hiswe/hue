<script setup lang="ts">
defineProps<{
  label?: string
}>();

const modelValue = defineModel<boolean>();

// NOTE:
// • after:transition-all won't work on justify-self-start
</script>

<template>
  <label
    class="grid grid-cols-[2.5rem_1fr] gap-2
        before:content-[''] before:bg-gray-200 before:rounded-full before:col-start-1 before:row-start-1
        after:content-[''] after:bg-gray after:rounded-full after:col-start-1 after:row-start-1 after:size-5.5 after:self-center after:justify-self-start after:mx-.5
      has-[:checked]:after:bg-indigo-500 has-[:checked]:after:justify-self-end
    "
  >
    <input
      v-model="modelValue"
      type="checkbox"
      class="sr-only"
    >
    <span class="row-start-1">
      {{ label }}
    </span>
  </label>
</template>
