<script setup lang="ts">
defineProps<{
  label?: string
  disabled?: boolean
  loading?: boolean
}>();

const modelValue = defineModel<boolean>();
</script>

<template>
  <label
    class="flex gap-2 items-center group/switch"
    :class="{
      'pointer-events-none': disabled,
    }"
  >
    <input
      v-model="modelValue"
      type="checkbox"
      class="sr-only"
    >
    <i
      class="block flex-none h-8 w-12 relative bg-gray-200 rounded-full border transition-colors"
      :class="{
        'border-indigo-500 group-has-[:checked]/switch:bg-indigo-500': !disabled,
        'border-neutral-300': disabled,
      }"
    >
      <i
        class="bg-white shadow-md rounded-full aspect-square absolute top-[2px] bottom-[2px] left-[2px] transition-transform flex items-center justify-center
        group-has-[:checked]/switch:translate-x-4"
      >
        <HSpinner v-if="loading" size="x-small" />
      </i>
    </i>
    <span class="empty:hidden" v-text="label" />
  </label>
</template>
