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
    block?: boolean
    disabled?: boolean
    loading?: boolean
    icon?: boolean
    variant?: `flat` | `outlined`
  }>(),
  {
    variant: `flat`,
  },
);

defineSlots<{
  default: () => any
}>();

const linkComponent = computed(() => {
  if (props.tag) return props.tag;
  if (props.disabled) return `span`;
  return props.to ? RouterLink : props.href ? `a` : `button`;
});

const isFlat = computed(() => props.variant === `flat`);
const isOutlined = computed(() => !isFlat.value);

// NOTE: about icons
// • `first-child` will ignore text-nodes π__π
// • `pseudo-elements` are ignored for selector π__π
// ⇒ just handle icon before
// We could support reverse by
// • using 'flex-row-reverse' class
// • a `trailing` props
//   https://ui.nuxt.com/components/button#icon
</script>

<template>
  <component
    :is="linkComponent"
    class="rounded-full whitespace-nowrap h-10 items-center justify-center gap-2
      [&_svg]:text-lg"
    :class="{
      'inline-flex': !block,
      'flex': block,
      'w-10': icon,
      'ps-4 pe-4 has-[svg]:ps-2': !icon,
      'bg-indigo-500 text-white': isFlat && !disabled,
      'border-solid border-2': isOutlined,
      'border-indigo-500 text-indigo-500': isOutlined && !disabled,
      'active:bg-pink active:text-white active:border-pink': !disabled,
      'text-slate-400 border-slate-100': disabled,
      'bg-slate-100': isFlat && disabled,
    }"
  >
    <slot />
  </component>
</template>
