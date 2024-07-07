<script setup lang="ts" generic="TValue">
import { chipGroupKey, deepEqual } from '~/composables/group';

const props = defineProps<{
  label?: string
  value?: TValue
}>();

const group = inject(chipGroupKey);
const modelValue = computed(() => {
  // Having a group assume that we have an array of values
  if (group) return group.groupValue.value.findIndex(item => deepEqual(item, props.value)) > -1;
  return false;
});
function onChange() {
  group?.toggle(props.value);
}
</script>

<template>
  <label
    class="inline-flex gap-1 rounded border border-neutral-300 ps-1 pe-2 py-1 bg-transparent transition-colors
        has-[:checked]:bg-indigo-50 has-[:checked]:border-indigo-200"
  >
    <input type="checkbox" class="peer hidden" :checked="modelValue" @change="onChange">
    <i class="flex items-center transition-[width] w-0 peer-checked:w-6 overflow-clip text-indigo-500">
      <IconoirCheck />
    </i>
    <span v-text="label" />
  </label>
</template>
