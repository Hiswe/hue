<script setup lang="ts">
import { type RouteLocationRaw, RouterLink } from 'vue-router';

// NOTE: for simplicity we will assume that Vue-Router is already installed
// We should make it optional
// Vuetify can serve us as a good example
// • https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/router.tsx

const props = withDefaults(
  defineProps<{
    tag?: string
    href?: string
    to?: RouteLocationRaw
    disabled?: boolean
    loading?: boolean
    icon?: boolean
    variant?: `flat` | `text` | `outlined`
    size?: `x-small` | `small` | `default`
    text?: string
  }>(),
  {
    variant: `outlined`,
    size: `default`,
  },
);

const emit = defineEmits<{
  click: []
}>();

defineSlots<{
  default: () => any
}>();

const linkComponent = computed(() => {
  if (props.tag) return props.tag;
  if (props.disabled) return `span`;
  return props.to ? RouterLink : props.href ? `a` : `button`;
});

const classes = computed(() => {
  const _classes: Array<string> = [];

  // Color
  if (props.loading) _classes.push(`text-transparent`);
  else if (props.disabled) _classes.push(`text-neutral-500`);
  else if (props.variant === `flat`) _classes.push(`text-white`);
  else _classes.push(`text-indigo-500`);

  // Background & borders
  if (props.disabled || props.loading) {
    _classes.push(` border-neutral-300`);
    if (props.variant === `flat`) _classes.push(` bg-neutral-300`);
  }
  else if (props.variant === `text`) {
    _classes.push(` bg-transparent`);
  }
  else {
    _classes.push(`!active:bg-pink`, `active:border-pink`, `!active:text-white`, `border-indigo-500`, `hover:decoration-underline`);
    if (props.variant === `flat`) _classes.push(`bg-indigo-500`);
  };
  if (props.icon) _classes.push(`bg-white`); // additional white background is mandatory for icon buttons

  // Size
  if (!props.icon) _classes.push(`px-6`, `text-sm`, `h-10`);
  else if (props.size === `x-small`) _classes.push(`size-6`);
  else if (props.size === `small`) _classes.push(`size-8`);
  else _classes.push(`size-10`);

  return _classes;
});
</script>

<template>
  <component
    :is="linkComponent"
    class="font-semibold decoration-none text-nowrap rounded-full inline-grid place-items-center border-solid border-2"
    :class="classes"
    @click="emit(`click`)"
  >
    <span
      class="col-start-1 row-start-1 opacity-0 last:opacity-100 inline-flex items-center justify-center gap-1"
      :class="{ 'has-[svg]:-m-s-4': !icon }"
    >
      <slot>
        {{ text }}
      </slot>
    </span>
    <HSpinner v-if="loading" class="row-start-1 col-start-1" />
  </component>
</template>
