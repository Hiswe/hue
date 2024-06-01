<script setup lang="ts" generic="TModel">
import { useRadioGroup } from '~/composables/group';

defineProps<{
  label?: string
}>();

defineSlots<{
  default: () => any
}>();

const modelValue = defineModel<TModel>({ required: true });
useRadioGroup(modelValue);
</script>

<template>
  <fieldset class="flex gap-2 flex-wrap">
    <legend v-text="label" />
    <slot />
  </fieldset>
</template>
