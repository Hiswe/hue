<script setup lang="ts">
defineProps<{
  label?: string
}>();
</script>

<template>
  <label class="inline-flex gap-1 rounded border border-neutral-300 ps-1 pe-2 py-1 bg-transparent has-[:checked]:bg-indigo-50 transition-colors">
    <input type="checkbox" class="peer hidden">
    <i class="flex items-center w-0 peer-checked:w-6 transition-width overflow-clip text-indigo-500">
      <IconoirCheck />
    </i>
    <span v-text="label" />
  </label>
</template>
