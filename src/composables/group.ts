import type { InjectionKey, Ref } from 'vue';

interface RadioGroup {
  groupValue: Ref<unknown>
  // NOTE: check if we can do some generic magic here
  toggle: (value: any) => void
}
export const radioGroupKey = Symbol(`RADIO_GROUP_INJECTION_KEY`) as InjectionKey<RadioGroup>;
export function useRadioGroup<TModel>(modelValue: Ref<TModel>) {
  provide(radioGroupKey, {
    groupValue: modelValue,
    toggle,
  });
  function toggle(value: TModel) {
    modelValue.value = value;
  }
}

interface ChipGroup {
  groupValue: Ref<Array<unknown>>
  // NOTE: check if we can do some generic magic here
  toggle: (value: any) => void
}
export const chipGroupKey = Symbol(`CHIP_GROUP_INJECTION_KEY`) as InjectionKey<ChipGroup>;

// copied from Vuetify
// https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts#L37C1-L62C2
export function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;

  if (
    a instanceof Date
    && b instanceof Date
    && a.getTime() !== b.getTime()
  ) {
    // If the values are Date, compare them as timestamps
    return false;
  }

  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false;
  }

  const props = Object.keys(a);

  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false;
  }

  return props.every(p => deepEqual(a[p], b[p]));
}
