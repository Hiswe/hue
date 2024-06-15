<script setup lang="ts">
defineProps<{
  popovertarget: string
}>();

defineSlots<{
  default: () => any
}>();

// Doc about popover
// • https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using
// • https://frontendmasters.com/blog/menus-toasts-and-more/
// • https://www.oidaisdes.org/popover-api-accessibility.en/
// Doc about anchors
// • https://developer.chrome.com/blog/anchor-positioning-api
// • fallback library https://github.com/oddbird/css-anchor-positioning css-anchor-positioning
// Transition behavior (allow-discrete)
// https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior
</script>

<template>
  <div class="h-menu relative">
    <button :popovertarget class="border rounded" :style="`anchor-name: --${popovertarget};`">
      Toggle the popover
    </button>
    <div
      :id="popovertarget"
      popover
      class="border rounded absolute -translate-x-1/2 m-0 mt-1 p-3"
      :style="`position-anchor: --${popovertarget};`"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* anchor positioning fallback */
@supports (top: anchor(top)) {
  .h-menu {
    display: contents;
  }
  [popover] {
    top: anchor(bottom);
    left: anchor(center);
  }
}
/* https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior */
[popover]:popover-open {
  opacity: 1;
}
@supports (transition-behavior: allow-discrete) {
  /* Final state of the exit animation */
  [popover] {
    opacity: 0;
  }
}

[popover] {
  transition-property: opacity, overlay, display;
  transition-duration: 0.3s;
  transition-behavior: allow-discrete;
  /* Using the shorthand transition property, we could write:
    transition:
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;

    or even:
    transition: all 0.7s allow-discrete;
  */
}

/* Needs to be included after the previous [popover]:popover-open
   rule to take effect, as the specificity is the same */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
  }
}
</style>
