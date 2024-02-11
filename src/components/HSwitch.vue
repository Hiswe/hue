<script setup lang="ts">
defineProps<{
  label?: string
}>();

const modelValue = defineModel<boolean>();

// NOTE:
// • after:transition-all won't work on justify-self-start
</script>

<template>
  <label class="flex gap-2">
    <input
      v-model="modelValue"
      type="checkbox"
      class="sr-only peer"
    >
    <i
      class="block flex-none h-8 w-13 relative bg-gray-200 rounded-full border border-2 border-indigo-500 transition-colors
      peer-checked:bg-indigo-500
      after:content-[''] after:block after:bg-white after:shadow-md after:rounded-full after:size-6 after:absolute after:top-[2px] after:left-[2px] after:transition-transform
      peer-checked:after:translate-x-5"
    />
    <span v-text="label" />
  </label>
</template>
