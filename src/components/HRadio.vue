<script setup lang="ts" generic="TValue">
import { deepEqual, radioGroupKey } from '~/composables/group';

const props = defineProps<{
  label?: string
  value?: TValue
}>();

const group = inject(radioGroupKey);
const modelValue = computed(() => deepEqual(group?.groupValue.value, props.value));
function onUpdate() {
  group?.toggle(props.value);
}
</script>

<template>
  <label
    class="inline-flex items-center gap-1 rounded border border-neutral-300 ps-1 pe-2 py-1 bg-transparent transition-colors
    has-[:checked]:bg-indigo-50 has-[:checked]:border-indigo-200 "
  >
    <input
      type="radio"
      class="peer hidden"
      :value
      :checked="modelValue"
      @change="onUpdate"
    >
    <!-- NOTE: this could be better achieved with some pure CSS -->
    <IconoirCircle class="peer-checked:hidden" />
    <IconoirCheckCircleSolid class="hidden peer-checked:block text-indigo-500" />
    <span v-text="label" />
  </label>
</template>
