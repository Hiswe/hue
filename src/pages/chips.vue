<script setup lang="ts">
import { useRadioGroup } from '~/composables/group';

const chipValue = ref<Array<string>>([`first`]);
const chipObjectValue = ref<Array<Thing>>([]);

const THINGS = [
  { id: `first`, label: `First` },
  { id: `second`, label: `Second` },
] as const;
type Thing = typeof THINGS[number];

const radioValue = ref<string | null>(null);
const radioObjectValue = ref<Thing | null>(null);

const CustomRadio = defineComponent({
  setup() {
    useRadioGroup(radioValue);
  },
  render() {
    return h(`div`, { }, this.$slots?.default?.());
  },
});
</script>

<template>
  <section class="grid grid-cols-4 gap-8 items-start">
    <HChipGroup v-model="chipValue" label="Chips">
      <HChip label="First" value="first" />
      <HChip label="Second" value="second" />
    </HChipGroup>
    <pre v-text="chipValue" />
    <HChipGroup v-model="chipObjectValue" label="Chips Object">
      <HChip v-for="thing of THINGS" :key="thing.id" :value="thing" :label="thing.label" />
    </HChipGroup>
    <pre v-text="chipObjectValue" />
    <HRadioGroup v-model="radioValue" label="Radios">
      <HRadio label="First" value="first" />
      <HRadio label="Second" value="second" />
    </HRadioGroup>
    <pre v-text="radioValue" />
    <HRadioGroup v-model="radioObjectValue" label="Radios Object">
      <HRadio v-for="thing of THINGS" :key="thing.id" :value="thing" :label="thing.label" />
    </HRadioGroup>
    <pre v-text="radioObjectValue" />
    <CustomRadio class="grid grid-cols-2 gap-2 col-span-2">
      <div class="bg-pink-200 py-8 px-12 rounded-6 text-center">
        <HRadio class="bg-white" label="First" value="first" />
      </div>
      <div class="bg-pink-200 py-8 px-12 rounded-6 text-center">
        <HRadio class="bg-white" label="Second" value="second" />
      </div>
    </CustomRadio>
  </section>
</template>
