<script setup lang="ts" generic="TModel">
import { chipGroupKey, deepEqual } from '~/composables/group';

defineProps<{
  label?: string
}>();

defineSlots<{
  default: () => any
}>();

const modelValue = defineModel<Array<TModel>>({ required: true });

provide(chipGroupKey, {
  groupValue: modelValue,
  toggle,
});
function toggle(value: TModel) {
  const itemIndex = modelValue.value.findIndex(item => deepEqual(item, value));
  if (itemIndex < 0) return modelValue.value = [...modelValue.value, value];
  modelValue.value.splice(itemIndex, 1);
}
</script>

<template>
  <fieldset class="flex gap-2 flex-wrap">
    <legend v-text="label" />
    <slot />
  </fieldset>
</template>
